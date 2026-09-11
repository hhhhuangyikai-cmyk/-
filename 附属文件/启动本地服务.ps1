param([switch]$NoBrowser)
$ErrorActionPreference = 'Stop'
$taskRoot = Split-Path -Parent $PSScriptRoot
$taskPort = 8765
$taskAddress = [System.Net.IPAddress]::Loopback
$taskListener = [System.Net.Sockets.TcpListener]::new($taskAddress, $taskPort)
$taskUrl = "http://127.0.0.1:$taskPort/%E6%A1%83%E8%8A%B1%E5%9D%AA%E6%A0%A1%E5%8C%BA%E4%B8%89%E7%BB%B4%E5%AF%BC%E8%A7%88-%E7%A6%BB%E7%BA%BF%E7%89%88.html"
$taskMime = @{
  '.html' = 'text/html; charset=utf-8'
  '.js' = 'text/javascript; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'
  '.css' = 'text/css; charset=utf-8'
  '.obj' = 'text/plain; charset=utf-8'
  '.mtl' = 'text/plain; charset=utf-8'
  '.png' = 'image/png'
  '.jpg' = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.svg' = 'image/svg+xml'
}

function Send-OfflineResponse {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [int]$Status,
    [string]$StatusText,
    [byte[]]$Body,
    [string]$ContentType
  )
  $taskHeader = "HTTP/1.1 $Status $StatusText`r`nContent-Type: $ContentType`r`nContent-Length: $($Body.Length)`r`nCache-Control: no-cache`r`nConnection: close`r`n`r`n"
  $taskHeaderBytes = [System.Text.Encoding]::ASCII.GetBytes($taskHeader)
  $Stream.Write($taskHeaderBytes, 0, $taskHeaderBytes.Length)
  if ($Body.Length -gt 0) { $Stream.Write($Body, 0, $Body.Length) }
}

try {
  $taskListener.Start()
} catch [System.Net.Sockets.SocketException] {
  try {
    $taskExisting = Invoke-WebRequest -UseBasicParsing -Uri $taskUrl -TimeoutSec 3
    if ($taskExisting.StatusCode -eq 200) {
      if (-not $NoBrowser) { Start-Process $taskUrl }
      exit 0
    }
  } catch {}
  throw
}

try {
  Write-Host "Offline campus guide started: $taskUrl" -ForegroundColor Green
  Write-Host 'Close this window to stop the offline server.' -ForegroundColor Yellow
  if (-not $NoBrowser) { Start-Process $taskUrl }
  while ($true) {
    $taskClient = $taskListener.AcceptTcpClient()
    $taskClient.ReceiveTimeout = 1500
    $taskClient.SendTimeout = 5000
    $taskReader = $null
    $taskStream = $null
    try {
      $taskStream = $taskClient.GetStream()
      $taskReader = [System.IO.StreamReader]::new($taskStream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
      $taskRequestLine = $taskReader.ReadLine()
      while (($taskLine = $taskReader.ReadLine()) -ne '') { if ($null -eq $taskLine) { break } }
      if (-not $taskRequestLine) { continue }
      $taskRequestPath = ($taskRequestLine -split ' ')[1].Split('?')[0]
      $taskDecodedPath = [System.Uri]::UnescapeDataString($taskRequestPath).TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
      if ([string]::IsNullOrWhiteSpace($taskDecodedPath)) { $taskDecodedPath = [System.Uri]::UnescapeDataString('%E6%A1%83%E8%8A%B1%E5%9D%AA%E6%A0%A1%E5%8C%BA%E4%B8%89%E7%BB%B4%E5%AF%BC%E8%A7%88-%E7%A6%BB%E7%BA%BF%E7%89%88.html') }
      $taskFullPath = [System.IO.Path]::GetFullPath((Join-Path $taskRoot $taskDecodedPath))
      $taskRootPath = [System.IO.Path]::GetFullPath($taskRoot) + [System.IO.Path]::DirectorySeparatorChar
      if (-not $taskFullPath.StartsWith($taskRootPath, [System.StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $taskFullPath -PathType Leaf)) {
        $taskBody = [System.Text.Encoding]::UTF8.GetBytes('File not found')
        Send-OfflineResponse -Stream $taskStream -Status 404 -StatusText 'Not Found' -Body $taskBody -ContentType 'text/plain; charset=utf-8'
        continue
      }
      $taskBody = [System.IO.File]::ReadAllBytes($taskFullPath)
      $taskExtension = [System.IO.Path]::GetExtension($taskFullPath).ToLowerInvariant()
      $taskContentType = if ($taskMime.ContainsKey($taskExtension)) { $taskMime[$taskExtension] } else { 'application/octet-stream' }
      Send-OfflineResponse -Stream $taskStream -Status 200 -StatusText 'OK' -Body $taskBody -ContentType $taskContentType
    } catch {
      if ($taskStream) {
        $taskBody = [System.Text.Encoding]::UTF8.GetBytes('Offline server error')
        Send-OfflineResponse -Stream $taskStream -Status 500 -StatusText 'Server Error' -Body $taskBody -ContentType 'text/plain; charset=utf-8'
      }
    } finally {
      if ($taskReader) { $taskReader.Dispose() }
      if ($taskStream) { $taskStream.Dispose() }
      $taskClient.Dispose()
    }
  }
} finally {
  $taskListener.Stop()
}
