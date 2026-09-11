
document.documentElement.dataset.moduleStarted = 'yes';
import * as THREE from '../vendor/three.module.js';
import { OBJLoader } from '../vendor/jsm/loaders/OBJLoader.js';
import { OrbitControls } from '../vendor/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from '../vendor/jsm/renderers/CSS2DRenderer.js';
const buildings = [{"name": "食堂", "type": "生活/办公楼", "height": 12, "color": "#e8dcc8", "roofColor": "#dcd0b8", "footprint": [[-8.070294000944267, -79.67513127152444], [19.39375647291738, -74.29059009768281], [26.876210753410014, -123.39744846057812], [-0.5878397316085037, -128.78198963441974], [-8.070294000944267, -79.67513127152444]]}, {"name": "文体活动中心", "type": "生活/办公楼", "height": 12, "color": "#e8dcc8", "roofColor": "#dcd0b8", "footprint": [[6.84844947157269, -165.82778997705674], [3.1862889337260145, -141.1998247789873], [31.328464108855368, -135.81528360514568], [34.990624646702045, -160.4432488032151], [6.84844947157269, -165.82778997705674]]}, {"name": "图书馆", "type": "生活/办公楼", "height": 15, "color": "#e8dcc8", "roofColor": "#dcd0b8", "footprint": [[29.678647814526595, -49.93195147038506], [76.68124402585984, -43.63470805349408], [79.85987583106223, -74.16238673685285], [32.85727959741524, -80.45963016007164], [29.678647814526595, -49.93195147038506]]}, {"name": "教职工宿舍", "type": "其他", "height": 10, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[-23.55414137444901, -54.54727246659132], [13.064592583261943, -48.00890105160789], [14.56383649244287, -58.81299182122149], [-22.05489746526808, -65.35136324253273], [-23.55414137444901, -54.54727246659132]]}, {"name": "教职工宿舍", "type": "其他", "height": 10, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[-32.708824869455185, -26.855346464042498], [3.570846732043486, -19.163144801589453], [5.2431232070490905, -29.311670494162456], [-31.036548416763313, -37.00387217559893], [-32.708824869455185, -26.855346464042498]]}, {"name": "教职工宿舍", "type": "其他", "height": 10, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[-29.65726370817208, 0.45196946867207544], [-5.9228990968612365, 4.298070306226407], [-4.207243592947471, -9.324818854670696], [-27.941608215415183, -13.170919692225027], [-29.65726370817208, 0.45196946867207544]]}, {"name": "教职工宿舍", "type": "其他", "height": 10, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[-39.49007189328909, 20.067083719950176], [-18.46820609820593, 25.836234982609483], [-16.378335435576503, 16.03770470486296], [-37.4002012195028, 10.268553442203654], [-39.49007189328909, 20.067083719950176]]}, {"name": "9号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[25.94896195197579, -13.393993545257956], [56.80363592101909, -8.778672549051691], [58.07472736140646, -19.71264647243089], [27.220053370049424, -24.327967468637155], [25.94896195197579, -13.393993545257956]]}, {"name": "10号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[5.944283203215751, 6.990340883655506], [49.344264207074346, 14.297932476274298], [50.683099825284906, 4.066775964379019], [7.283118832583177, -3.2408156092563445], [5.944283203215751, 6.990340883655506]]}, {"name": "教职工宿舍", "type": "其他", "height": 10, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[-5.583836740648951, 29.682335820163814], [50.36145125339747, 38.912977812576344], [51.98333060567833, 26.264672428416986], [-3.9619574106818214, 17.034030429676648], [-5.583836740648951, 29.682335820163814]]}, {"name": "树达办公楼", "type": "生活/办公楼", "height": 16, "color": "#e8dcc8", "roofColor": "#dcd0b8", "footprint": [[-98.5999418600554, -25.188702779580865], [-57.91245966126762, -16.470874205176926], [-55.31431541539653, -32.07350904596552], [-96.00179761418431, -40.79133759505822], [-98.5999418600554, -25.188702779580865]]}, {"name": "4号教学楼", "type": "教学楼", "height": 18, "color": "#f0ebe0", "roofColor": "#e4dcd0", "footprint": [[-152.84991810651098, -37.79536661561934], [-111.25826965052315, -29.077538066526643], [-108.09296460120017, -48.5085568024445], [-149.68461305718802, -57.2263853515372], [-152.84991810651098, -37.79536661561934]]}, {"name": "1号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[-166.4124121541788, 8.357843397065778], [-123.46451430681242, 19.63973918806886], [-119.25252004981891, -0.991712649734211], [-162.20041791949905, -12.273608421753863], [-166.4124121541788, 8.357843397065778]]}, {"name": "枇杷塘社区警务室", "type": "其他", "height": 6, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[-150.5895024133049, 65.7929492134096], [-128.43742879393244, 69.89545676629604], [-125.61158825012214, 50.26208718358674], [-147.76366188065148, 46.15957963070031], [-150.5895024133049, 65.7929492134096]]}, {"name": "教职工宿舍", "type": "其他", "height": 10, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[-48.4187138323629, 42.20353074476378], [-12.704146120695144, 49.382918982880426], [-11.136849691335225, 39.35083169051694], [-46.85141738068924, 32.171443477711534], [-48.4187138323629, 42.20353074476378]]}, {"name": "教职工宿舍", "type": "其他", "height": 10, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[-51.58329577161218, 67.84420299301672], [-15.416644948079695, 76.56203154210942], [-13.38872529313115, 65.73690695058502], [-49.55537613897737, 57.01907840149232], [-51.58329577161218, 67.84420299301672]]}, {"name": "教职工宿舍", "type": "其他", "height": 10, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[-55.1999608561968, 94.51050210259808], [-3.210400291790421, 106.30521133692099], [-1.3499042993530779, 95.75308853949963], [-53.339464886073195, 83.95837930517672], [-55.1999608561968, 94.51050210259808]]}, {"name": "教职工宿舍", "type": "其他", "height": 10, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[-58.364542795446084, 119.12554746421137], [4.927096156892629, 133.99713733946982], [7.082126754367002, 122.19598064321161], [-56.20951219797171, 107.32439074264192], [-58.364542795446084, 119.12554746421137]]}, {"name": "1号教学楼", "type": "教学楼", "height": 18, "color": "#f0ebe0", "roofColor": "#e4dcd0", "footprint": [[96.66648498943412, -30.82490239449072], [162.97201151783847, -17.14987720343771], [165.89427688717151, -35.38142077922231], [99.58875038108093, -49.05644597027532], [96.66648498943412, -30.82490239449072]]}, {"name": "教职工宿舍", "type": "其他", "height": 10, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[18.30540817908105, -174.41266690371123], [65.92483177604326, -166.89140304515178], [67.96965170931861, -183.54969882128927], [20.350228101199523, -191.07096268617653], [18.30540817908105, -174.41266690371123]]}, {"name": "3号教学楼", "type": "教学楼", "height": 18, "color": "#f0ebe0", "roofColor": "#e4dcd0", "footprint": [[88.83037731174588, 64.90027395553597], [152.12201626408458, 75.15654285357158], [154.54518187399177, 55.9157824004771], [91.25354292165306, 45.6595135150971], [88.83037731174588, 64.90027395553597]]}, {"name": "教职工宿舍", "type": "其他", "height": 10, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[-0.9834722497231999, 53.96025380395912], [38.799843669550775, 60.79776640264953], [40.26891094009741, 49.79943710748529], [0.48559503198030873, 42.96192451512269], [-0.9834722497231999, 53.96025380395912]]}, {"name": "11号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[92.406142946429, 118.27926585981558], [121.66700228484642, 125.05306155003254], [124.08675200769157, 111.60351541236068], [94.82589266927415, 104.82971974112715], [92.406142946429, 118.27926585981558]]}, {"name": "12号/5号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[128.61369323101985, 116.86536968659965], [193.71366472007244, 130.54039487765266], [196.21591088962091, 115.21312194567344], [131.11593940056832, 101.53809675462043], [128.61369323101985, 116.86536968659965]]}, {"name": "14号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[-87.04252022144419, -156.03685180501344], [-15.500364042456242, -139.114008112181], [-10.652583266591009, -165.48423384863582], [-82.19473944557896, -182.40707752248483], [-87.04252022144419, -156.03685180501344]]}, {"name": "16号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[-111.11594716665358, -122.19116445731544], [-106.03001190156738, -121.42194427968008], [-107.04719897020424, -116.03740310583845], [-81.27846025509028, -107.96059135456773], [-80.26127319761028, -115.26818294718652], [-72.80190145019493, -112.96052243959167], [-69.41127794385642, -131.0371963609103], [-107.38626131525965, -140.26783837230624], [-111.11594716665358, -122.19116445731544]]}, {"name": "15号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[-61.95190619644107, -112.57591235077399], [-56.52690857514257, -111.0374720208145], [-57.88315797767798, -103.72988044717914], [-32.45348162993318, -97.19150903219571], [-30.4191075149732, -105.65293084697288], [-20.586299329856192, -104.1144905170134], [-17.534738146259354, -118.72967370225098], [-58.90034504631484, -127.9603156946635], [-61.95190619644107, -112.57591235077399]]}, {"name": "18号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[-134.85031177796444, -81.42249559948851], [-127.0518777078074, -79.49944518071135], [-129.08625180045365, -71.8072435182583], [-106.36907425777966, -64.11504183682183], [-103.31751309649655, -73.34568384821779], [-92.80658019895498, -71.42263342944062], [-89.07689433640417, -87.57625692565426], [-130.78156355920135, -100.26838969211468], [-134.85031177796444, -81.42249559948851]]}, {"name": "17号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[-80.93939789887798, -67.1919224967408], [-76.19252496769033, -66.80731243323436], [-77.20971201401345, -59.499720840615566], [-54.15347212628404, -53.73056957795626], [-51.780035666268645, -61.80738134821041], [-43.303476872530176, -60.65355108175737], [-40.25191570009021, -76.42256451446457], [-77.54877437022573, -84.11476617691761], [-80.93939789887798, -67.1919224967408]]}, {"name": "2号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[37.89881685454202, -92.46579067517388], [77.31481521474451, -86.98509699494736], [80.11207961723605, -106.02329612565455], [76.55192492721295, -106.02329612565455], [79.85778285844448, -124.1961225723415], [87.9952792848138, -123.33074988832124], [92.06402751473375, -143.8112368236196], [42.47615859088824, -153.61879396191426], [39.67889421071043, -131.40756163959196], [73.75466052472142, -125.63841037693265], [70.70309936343831, -107.46558393024571], [40.696081257033555, -112.94627762945566], [37.89881685454202, -92.46579067517388]]}, {"name": "3号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[73.65105815142725, -166.73827124127257], [111.28697915546132, -160.58450991510682], [112.30416622409818, -169.81515192650278], [83.82292869275655, -174.04586283389136], [86.19636516392882, -188.27643593663907], [78.05886871524577, -189.0456560889632], [73.65105815142725, -166.73827124127257]]}, {"name": "树达教学楼", "type": "教学楼", "height": 16, "color": "#f0ebe0", "roofColor": "#e4dcd0", "footprint": [[113.10943931034011, -81.3307945867794], [172.61488199440961, -68.5665474342025], [174.90355286816117, -86.3066875325515], [168.4189853906723, -86.95571705822232], [171.85199170687807, -109.45540693766617], [178.14583661248403, -108.59003425364591], [181.96028806129868, -125.03211531963672], [123.21773566476072, -138.01270564321868], [120.16617450347762, -120.92159505788487], [131.22808370615581, -118.75816334150642], [126.65927573527571, -93.70914265678294], [134.0889223067129, -92.36429635233236], [137.52192861176178, -116.59473161880015], [165.93959195619476, -110.32077962168643], [162.506585639989, -87.82108974224258], [134.0889223067129, -92.36429635233236], [126.65074198096647, -93.66235538469056], [126.65927573527571, -93.70914265678294], [116.16100047162321, -95.60944393006395], [113.10943931034011, -81.3307945867794]]}, {"name": "2号教学楼", "type": "教学楼", "height": 18, "color": "#f0ebe0", "roofColor": "#e4dcd0", "footprint": [[74.29988115794845, 17.531506136278665], [169.15257399461424, 35.704332582965606], [169.9154642821458, 23.012199835488616], [153.64047140709343, 20.127624207322867], [154.6576584757303, 14.35847294466356], [76.58855204285686, -0.9297778738576312], [74.29988115794845, 17.531506136278665]]}, {"name": "13号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[64.12801061661916, 42.33885652964517], [75.82566173301157, 45.511889721260275], [76.84284880164843, 37.43507795100612], [164.82952901705957, 51.5694985220577], [165.59241930459115, 44.06960189135788], [66.16238473157914, 25.60831788754939], [64.12801061661916, 42.33885652964517]]}, {"name": "4号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[194.6921264790335, -116.05661338596775], [206.19845891209567, -112.94898755812056], [211.95162512304833, -146.51134656974165], [173.59718367950776, -157.6987995841617], [171.1315410176709, -142.1606704006311], [198.25361033134686, -136.56694389025716], [194.6921264790335, -116.05661338596775]]}, {"name": "19号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[85.89944889116245, 150.5776833469733], [133.84250071232347, 164.87276219556833], [134.66438158844554, 157.7252227712708], [124.52785063790058, 155.86064726570356], [125.62369182837709, 153.0637840105166], [87.81717095776105, 142.1870935877402], [85.89944889116245, 150.5776833469733]]}, {"name": "6号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[150.83564906342235, 151.2682668691943], [177.9577183770983, 156.62892142950767], [181.65618239216732, 144.50918067179572], [153.71223219121242, 138.68238223667248], [150.83564906342235, 151.2682668691943]]}, {"name": "8号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[170.14984995910515, 174.8085325724034], [183.09447394490547, 177.60539582759037], [182.0671228358068, 185.52984169935797], [237.95502322655975, 195.55193502675337], [239.18784455747817, 172.94395706683616], [213.09312637521464, 169.2148060683573], [211.86030503313933, 179.70304326423474], [191.10781259587523, 177.37232388385763], [191.5187530395147, 170.8463096301918], [170.9717308463841, 166.18487086310978], [170.14984995910515, 174.8085325724034]]}, {"name": "7号宿舍", "type": "学生宿舍", "height": 15, "color": "#ede4d4", "roofColor": "#e0d6c4", "footprint": [[184.1218250428473, 158.72656886615204], [218.02441168773146, 165.01951119506856], [219.8736436841091, 154.76434592394043], [186.17652726104467, 147.539115851732], [184.1218250428473, 158.72656886615204]]}, {"name": "教职工宿舍", "type": "其他", "height": 10, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[-141.852877287408, 130.7147748706413], [-127.46996172655577, 132.3462784324758], [-125.78958150524025, 113.28514770021656], [-140.17249704377875, 111.65364413205424], [-141.852877287408, 130.7147748706413]]}, {"name": "教职工宿舍", "type": "其他", "height": 10, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[-113.90892707529622, 138.63922076139232], [-77.32765506817717, 145.48154646275378], [-75.48599555037784, 132.81242230728566], [-112.06726755749689, 125.97009659959639], [-113.90892707529622, 138.63922076139232]]}, {"name": "教职工宿舍", "type": "其他", "height": 10, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[-42.07044941847887, 149.04113501303726], [19.29665689118603, 161.47163834973725], [21.110077640192458, 149.95229550431276], [-40.25702866947244, 137.52179216761277], [-42.07044941847887, 149.04113501303726]]}, {"name": "垃圾站", "type": "其他", "height": 4, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[-177.05271664343036, -11.921989911163848], [-166.33782505652061, -8.607189009565275], [-160.31350841068644, -33.66368396352556], [-171.02839997528247, -36.97848486512413], [-177.05271664343036, -11.921989911163848]]}, {"name": "教职工宿舍", "type": "其他", "height": 10, "color": "#e0d4c0", "roofColor": "#d4c8b0", "footprint": [[-150.34236287447158, 96.08079647314725], [-129.88666077124995, 100.50053099384712], [-126.99212670057722, 83.26284103227152], [-147.44782881495573, 78.84310651157165], [-150.34236287447158, 96.08079647314725]]}];
const roads = [[[-172.9321508722897, 24.75336615800103], [-9.286533997705336, 57.90137507551023]], [[-9.286533997705336, 57.90137507551023], [17.01365442869167, 139.66646373851503], [-67.73139716670168, 119.22519157276383], [-72.60180243183066, 142.9812646302264], [10.195087058626777, 164.52747042654806]], [[-67.73139716670168, 119.22519157276383], [-34.12560084470311, -51.487054351756]], [[8.30780501781402, 111.69783121393408], [-63.469792562328706, 95.53817686689058]], [[-1.2808053458603377, 82.48614835560403], [-57.71662634440301, 69.74488242805137]], [[-67.73139716670168, 119.22519157276383], [-154.8203312984748, 100.7175532606098], [-161.15185814160841, 27.239466827081174]], [[-125.59789971327932, 77.51394701823472], [-99.29771128688232, -50.658354128729286], [-36.956523906619545, -37.3991505618838]], [[-164.07410130040688, -17.510345211615572], [-109.03852181574567, -4.803608459857571]], [[-105.14219760447925, -20.825146103326944], [-42.3139696972852, -10.328276612709857]], [[-99.29771128688232, -50.658354128729286], [-152.3851286666076, -76.62429444772826]], [[-34.12560084470311, -51.487054351756], [-14.047580624921975, -79.28431985436418], [-84.66845695464886, -93.64845705178013], [-94.40926748351222, -50.55604545913681]], [[-84.66845695464886, -93.64845705178013], [-120.22241538297796, -103.59285972691424], [-127.04098275304284, -120.16686418586659], [-109.02048327610997, -147.79020495012801], [-5.767891675457848, -118.50946373981316], [-14.047580624921975, -79.28431985436418]], [[-74.92764642718011, -92.54352342120967], [-65.18683589831676, -135.635935013853]], [[-5.767891675457848, -118.50946373981316], [3.44529161612906, -171.36212240256143], [115.78930637454334, -151.4733170518977], [113.84114426960744, -141.89722558682192], [187.87130428366947, -124.95490991781125], [171.63662007029183, -57.9222696626762], [182.02681796746714, -54.97577998141864]], [[171.63662007029183, -57.9222696626762], [104.10033374074408, -74.12796291117473], [113.84114426960744, -141.89722558682192]], [[111.89298216327693, -120.53517539592491], [91.11258637032087, -124.95490991820674], [80.07300110483358, -35.08697463115041], [-34.12560084470311, -51.487054351756]], [[-1.7498073331559096, -140.42398074658863], [31.368948463305987, -129.37464444048857], [22.277525304149204, -68.97160596877626], [2.1465168795051217, -7.8319450769473065], [1.4971295097985442, 3.217391229152753]], [[-14.047580624921975, -79.28431985436418], [22.277525304149204, -68.97160596877626]], [[25.52446214710366, -85.91392163778693], [84.61871268441197, -80.75756469499296]], [[30.07017372668205, -43.189821255201934], [20.32936319781869, -14.46154686037005], [30.71956109499402, -3.41221055426999], [61.890154785125404, 2.4807688086406188], [66.4358663647038, -37.296841892291326]], [[-49.15508523666495, 26.789308681586164], [-6.94490628104627, 35.62877772614982]], [[61.890154785125404, 2.4807688086406188], [58.64321794217095, 48.15135887248317], [11.237940038661906, 40.04851224843165]], [[194.36517796957838, 86.45572473278634], [167.7402958590254, 90.87545925506817], [85.91748742243051, 75.40638842708177], [74.22851478723663, 51.834470974648355], [58.64321794217095, 48.15135887248317]], [[186.57252954704555, 87.92896957341512], [169.68845796535592, 19.423084477651287], [167.7402958590254, -10.04181233808822], [171.63662007029183, -57.9222696626762]], [[185.92314217873357, 138.75591658005163], [178.8103211600608, 160.1601690978427], [232.50653919635826, 170.1045717729768], [201.50843902379927, 124.02346817257737]], [[186.57252954704555, 87.92896957341512], [201.50843902379927, 124.02346817257737], [185.92314217873357, 138.75591658005163], [151.68825184359562, 134.67763724313286], [146.75696651294888, 153.9449174267243], [178.8103211600608, 160.1601690978427]], [[146.75696651294888, 153.9449174267243], [125.1141031209741, 145.55432766946865], [89.49926462573264, 135.60992499393905]], [[125.1141031209741, 145.55432766946865], [127.03182519315112, 83.09104836466346]], [[93.3347087714813, 76.56503410902019], [91.69094699552879, 101.7368033811826], [125.93598400964765, 109.50586797136594]], [[31.368948463305987, -129.37464444048857], [41.43280931850749, -164.7060105670262]], [[169.0426926783639, 1.0324457897995387], [86.31147890475049, -15.121177717883256], [97.16147415292592, -77.04340116288009], [104.10033374074408, -74.12796291117473]], [[70.03648603109272, 17.186069297086846], [75.8005460072089, -19.351888636345507], [86.31147890475049, -15.121177717883256]], [[73.7368659829956, 83.0824800120422], [81.40775427449293, 68.16587599914328]], [[-84.79109869998452, -221.2539258468273], [-278.87566682712554, 145.18646043196355], [-150.56062012474408, 221.2539258468273], [-189.24857390434258, -25.965336752369694]], [[278.87566682712554, 199.31138774660639], [202.78935772762043, 82.28451787691597], [184.7349792961184, -10.605560081859124], [192.4725700528749, -63.999069459999305], [225.35733076455736, -110.80981740763818], [265.9796822329963, -221.2539258468273]]];
const boundary = [[212.8327630695487, -108.79609720224181], [214.9432050551339, -150.09168134299927], [134.7464097033086, -171.63720349624128], [101.50694845544484, -193.78121237350143], [22.365374101990586, -202.75851326541243], [3.3713962540376414, -177.6220707490782], [-91.59849299688395, -192.58423893179298], [-180.23705629104998, -25.007955498001877], [-153.85653148797044, 143.16681464082393], [239.74089834950001, 206.6064076398581], [246.59983480544108, 176.0835845947051], [197.00444819439508, 97.08333669526581], [174.8448073736428, -7.053353701524259], [184.34179629204084, -66.30353963875933], [212.8327630695487, -108.79609720224181]];
const playgrounds = [[[-119.72032394710192, 79.3984087650503], [-64.90738428937631, 89.96590557019289], [-59.51754886466389, 53.99356756892956], [-114.33048852238949, 43.42607075745917], [-119.72032394710192, 79.3984087650503]], [[-108.83040216834209, 27.889510528954986], [-54.67040960869801, 37.96493937972599], [-48.83309731888067, -2.4098413526692752], [-102.99308987852476, -12.48527020344028], [-108.83040216834209, 27.889510528954986]]];
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xe8e4dc);
scene.fog = new THREE.Fog(0xe8e4dc, 400, 2500);
const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 10, 6000);
camera.position.set(250, 400, 350); camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = false;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.0;
container.appendChild(renderer.domElement);
const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(container.clientWidth, container.clientHeight);
labelRenderer.domElement.style.position = 'absolute'; labelRenderer.domElement.style.top = '0'; labelRenderer.domElement.style.pointerEvents = 'none';
container.appendChild(labelRenderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 20, 0); controls.enableDamping = true; controls.dampingFactor = 0.08; controls.maxPolarAngle = Math.PI / 2.1; controls.minDistance = 60; controls.maxDistance = 1500; controls.update();
scene.add(new THREE.AmbientLight(0xfff8f0, 3.5));
const sunLight = new THREE.DirectionalLight(0xfffff5, 7);
sunLight.position.set(300, 400, 200);
scene.add(sunLight);
scene.add(new THREE.HemisphereLight(0xffeedd, 0xa0b890, 1.5));
const groundGeom = new THREE.PlaneGeometry(1000, 900);
const ground = new THREE.Mesh(groundGeom, new THREE.MeshStandardMaterial({ color: 0xdcd8d0, roughness: 0.95, metalness: 0.02 }));
ground.rotation.x = -Math.PI / 2; ground.position.y = -0.5; ground.receiveShadow = true; scene.add(ground);
if (boundary.length > 0) {
  const shape = new THREE.Shape(); shape.moveTo(boundary[0][0], boundary[0][1]);
  for (let i = 1; i < boundary.length; i++) shape.lineTo(boundary[i][0], boundary[i][1]); shape.closePath();
  const bGeom = new THREE.ShapeGeometry(shape);
  const bMat = new THREE.MeshStandardMaterial({ color: 0xc8d4b8, roughness: 0.9, metalness: 0.02, side: THREE.DoubleSide });
  const bMesh = new THREE.Mesh(bGeom, bMat); bMesh.rotation.x = -Math.PI / 2; bMesh.position.y = -0.3; bMesh.receiveShadow = true; scene.add(bMesh);
}
function createRoadMesh(pts) {
  if (pts.length < 2) return null; const group = new THREE.Group();
  for (let i = 0; i < pts.length - 1; i++) {
    const ax = pts[i][0], ay = pts[i][1], bx = pts[i+1][0], by = pts[i+1][1];
    const dx = bx - ax, dy = by - ay, len = Math.sqrt(dx*dx + dy*dy);
    if (len < 0.1) continue;
    const nx = -dy / len * 4, ny = dx / len * 4;
    const shape = new THREE.Shape(); shape.moveTo(ax + nx, ay + ny); shape.lineTo(ax - nx, ay - ny); shape.lineTo(bx - nx, by - ny); shape.lineTo(bx + nx, by + ny); shape.closePath();
    const seg = new THREE.Mesh(new THREE.ShapeGeometry(shape), new THREE.MeshStandardMaterial({ color: 0xa09888, roughness: 0.75, metalness: 0.05 }));
    seg.rotation.x = -Math.PI / 2; seg.position.y = 0.05; seg.receiveShadow = true; group.add(seg);
  }
  return group;
}
roads.forEach(pts => { const g = createRoadMesh(pts); if (g) scene.add(g); });
playgrounds.forEach(pts => {
  const shape = new THREE.Shape(); shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]); shape.closePath();
  const pgGeom = new THREE.ShapeGeometry(shape);
  const pgMesh = new THREE.Mesh(pgGeom, new THREE.MeshStandardMaterial({ color: 0xd4a090, roughness: 0.55, metalness: 0.03 }));
  pgMesh.rotation.x = -Math.PI / 2; pgMesh.position.y = 0.03; pgMesh.receiveShadow = true; scene.add(pgMesh);
  const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
  const midY = (Math.min(...ys) + Math.max(...ys)) / 2;
  const lineGeom = new THREE.BufferGeometry();
  lineGeom.setAttribute('position', new THREE.Float32BufferAttribute([Math.min(...xs)+5, 0.05, midY, Math.max(...xs)-5, 0.05, midY], 3));
  scene.add(new THREE.Line(lineGeom, new THREE.LineBasicMaterial({ color: 0xffffff })));
  const div = document.createElement('div'); div.className = 'building-label'; div.textContent = '露天篮球场'; div.style.fontSize = '13px'; div.style.color = '#ffffff'; div.style.textShadow = '0 1px 3px rgba(0,0,0,0.6)';
  const label = new CSS2DObject(div); label.position.set((Math.min(...xs)+Math.max(...xs))/2, 0.5, -(Math.min(...ys)+Math.max(...ys))/2); scene.add(label);
});
const bareLand = [[28.78, 137.99], [43.76, 147.52], [75.17, 143.79], [81.02, 130.12], [76.63, 96.55], [56.91, 70.04], [29.88, 70.45], [16.73, 77.91], [16.0, 86.61], [28.78, 137.99]];
const bareShape = new THREE.Shape(); bareShape.moveTo(bareLand[0][0], bareLand[0][1]);
for (let i = 1; i < bareLand.length; i++) bareShape.lineTo(bareLand[i][0], bareLand[i][1]); bareShape.closePath();
const bareGeom = new THREE.ShapeGeometry(bareShape);
const bareMesh = new THREE.Mesh(bareGeom, new THREE.MeshStandardMaterial({ color: 0xc8b898, roughness: 0.85, metalness: 0.02 }));
bareMesh.rotation.x = -Math.PI / 2; bareMesh.position.y = 0.025; bareMesh.receiveShadow = true; scene.add(bareMesh);
const bareDiv = document.createElement('div'); bareDiv.className = 'building-label'; bareDiv.textContent = '裸地'; bareDiv.style.color = '#6b5e4a';
const bareLabel = new CSS2DObject(bareDiv);
bareLabel.position.set(bareLand.reduce((s,p)=>s+p[0],0)/bareLand.length, 0.5, -bareLand.reduce((s,p)=>s+p[1],0)/bareLand.length);
scene.add(bareLabel);
const buildingGroups = [];
const buildingTargets = new Map();
let activeBuildingHighlight = null;
function clearBuildingMeshHighlight() {
  if (!activeBuildingHighlight) return;
  activeBuildingHighlight.parts.forEach(({ mesh, color, emissive, emissiveIntensity }) => {
    mesh.material.color.copy(color);
    if (mesh.material.emissive) {
      mesh.material.emissive.copy(emissive);
      mesh.material.emissiveIntensity = emissiveIntensity;
    }
  });
  activeBuildingHighlight = null;
}
function tintBuilding(target) {
  clearBuildingMeshHighlight();
  if (!target?.parts?.length) return;
  const parts = target.parts.map(mesh => ({
    mesh,
    color: mesh.material.color.clone(),
    emissive: mesh.material.emissive ? mesh.material.emissive.clone() : new THREE.Color(0x000000),
    emissiveIntensity: mesh.material.emissiveIntensity ?? 0,
  }));
  target.parts.forEach((mesh, index) => {
    mesh.material.color.set(index === 0 ? 0x56b5c8 : 0x83cfda);
    if (mesh.material.emissive) {
      mesh.material.emissive.set(0x155b69);
      mesh.material.emissiveIntensity = index === 0 ? 0.18 : 0.1;
    }
  });
  activeBuildingHighlight = { parts };
}
const buildingHighlight = new THREE.Group();
const highlightRing = new THREE.Mesh(
  new THREE.RingGeometry(0.72, 1, 48),
  new THREE.MeshBasicMaterial({ color: 0x2c97b6, transparent: true, opacity: 0.78, side: THREE.DoubleSide, depthWrite: false }),
);
highlightRing.rotation.x = -Math.PI / 2;
const highlightCore = new THREE.Mesh(
  new THREE.CircleGeometry(0.32, 32),
  new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.96, side: THREE.DoubleSide, depthWrite: false }),
);
highlightCore.rotation.x = -Math.PI / 2;
buildingHighlight.add(highlightRing, highlightCore);
buildingHighlight.visible = false;
scene.add(buildingHighlight);
buildings.forEach(b => {
  const pts = b.footprint; if (pts.length < 4) return;
  const shape = new THREE.Shape(); shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length - 1; i++) shape.lineTo(pts[i][0], pts[i][1]); shape.closePath();
  const geom = new THREE.ExtrudeGeometry(shape, { steps: 1, depth: b.height, bevelEnabled: true, bevelThickness: 0.3, bevelSize: 0.3, bevelSegments: 1 });
  geom.rotateX(-Math.PI / 2);
  const wallMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(b.color), roughness: 0.6, metalness: 0.05 });
  const mesh = new THREE.Mesh(geom, wallMat); mesh.receiveShadow = true; mesh.userData = { name: b.name, type: b.type, height: b.height }; scene.add(mesh); buildingGroups.push(mesh);
  const roofShape = new THREE.Shape(); roofShape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length - 1; i++) roofShape.lineTo(pts[i][0], pts[i][1]); roofShape.closePath();
  const roofGeom2 = new THREE.ShapeGeometry(roofShape);
  const roofMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(b.roofColor), roughness: 0.5, metalness: 0.08, side: THREE.DoubleSide });
  const roofMesh = new THREE.Mesh(roofGeom2, roofMat); roofMesh.rotation.x = -Math.PI / 2; roofMesh.position.y = b.height; roofMesh.receiveShadow = true; scene.add(roofMesh);
  const div = document.createElement('div'); div.className = 'building-label'; div.textContent = b.name;
  const label = new CSS2DObject(div);
  const lx = pts.slice(0,-1).reduce((s,p)=>s+p[0],0)/(pts.length-1), ly = pts.slice(0,-1).reduce((s,p)=>s+p[1],0)/(pts.length-1);
  label.position.set(lx, b.height + 1, -ly); scene.add(label);
  const dx = Math.max(...pts.map(point => point[0])) - Math.min(...pts.map(point => point[0]));
  const dy = Math.max(...pts.map(point => point[1])) - Math.min(...pts.map(point => point[1]));
  const radius = Math.max(11, Math.min(40, Math.max(dx, dy) * 0.58));
  const existingTarget = buildingTargets.get(b.name);
  if (existingTarget) {
    existingTarget.parts.push(mesh, roofMesh);
  } else {
    buildingTargets.set(b.name, { x: lx, y: b.height + 0.55, z: -ly, radius, parts: [mesh, roofMesh] });
  }
});
function createGateInscriptionTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 256;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.font = '700 168px "STKaiti", "KaiTi", "Noto Serif SC", serif';
  context.lineJoin = 'round';
  context.lineWidth = 18;
  context.strokeStyle = 'rgba(78, 18, 13, 0.92)';
  context.shadowColor = 'rgba(54, 12, 9, 0.72)';
  context.shadowBlur = 8;
  context.shadowOffsetY = 7;
  context.strokeText('湖南师范大学', canvas.width / 2, canvas.height / 2 - 4);
  context.shadowColor = 'transparent';
  context.fillStyle = '#9d281f';
  context.fillText('湖南师范大学', canvas.width / 2, canvas.height / 2 - 4);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

// 校门景观石：保留实景扫描轮廓，换用干净石材表面，并强化朝外一面的红色校名。
function addGateStone(position, rotationY) {
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load('./stone-optimized/stone-clean-surface.png', (cleanStoneTexture) => {
    cleanStoneTexture.colorSpace = THREE.SRGBColorSpace;
    cleanStoneTexture.wrapS = THREE.RepeatWrapping;
    cleanStoneTexture.wrapT = THREE.RepeatWrapping;
    cleanStoneTexture.repeat.set(1.6, 0.8);
    cleanStoneTexture.anisotropy = 4;
    const objectLoader = new OBJLoader();
    objectLoader.load('./stone-optimized/rock.obj', (stone) => {
      const originalBounds = new THREE.Box3().setFromObject(stone);
      const originalSize = originalBounds.getSize(new THREE.Vector3());
      const scale = 16 / Math.max(originalSize.x, originalSize.z);
      stone.traverse((node) => {
        if (!node.isMesh) return;
        node.material = new THREE.MeshStandardMaterial({
          map: cleanStoneTexture,
          color: 0xfff8eb,
          roughness: 0.94,
          metalness: 0,
        });
        node.castShadow = false;
        node.receiveShadow = true;
      });

      const inscription = new THREE.Mesh(
        new THREE.PlaneGeometry(originalSize.x * 0.88, originalSize.y * 0.34),
        new THREE.MeshBasicMaterial({
          map: createGateInscriptionTexture(),
          transparent: true,
          depthWrite: false,
          polygonOffset: true,
          polygonOffsetFactor: -2,
          side: THREE.FrontSide,
        }),
      );
      inscription.position.set(
        (originalBounds.min.x + originalBounds.max.x) / 2,
        originalBounds.min.y + originalSize.y * 0.48,
        originalBounds.max.z + 0.001,
      );
      inscription.renderOrder = 3;
      stone.add(inscription);

      stone.scale.setScalar(scale);
      stone.rotation.y = rotationY;
      stone.updateMatrixWorld(true);
      const bounds = new THREE.Box3().setFromObject(stone);
      const center = bounds.getCenter(new THREE.Vector3());
      stone.position.set(position.x - center.x, 0.05 - bounds.min.y, position.z - center.z);
      scene.add(stone);
    }, undefined, (error) => console.warn('校门景观石加载失败', error));
  }, undefined, (error) => console.warn('校门景观石表面贴图加载失败', error));
}
// Marker positions (same as before)
const bldTarget = buildings.find(b => b.name === '树达教学楼');
const ptsT = bldTarget.footprint.slice(0, -1);
const cxT = ptsT.reduce((s,p)=>s+p[0],0)/ptsT.length, cyT = ptsT.reduce((s,p)=>s+p[1],0)/ptsT.length;
const pos1 = new THREE.Vector3(cxT - 20, bldTarget.height + 6, -(cyT - 26));
const bld9 = buildings.find(b => b.name === '9号宿舍');
const pts9 = bld9.footprint.slice(0, -1);
const cx9 = pts9.reduce((s,p)=>s+p[0],0)/pts9.length, cy9 = pts9.reduce((s,p)=>s+p[1],0)/pts9.length;
let bestDist = Infinity, bestBld = null;
buildings.forEach(b => { if (b.name !== '教职工宿舍') return; const p = b.footprint.slice(0,-1); const by = p.reduce((s,pt)=>s+pt[1],0)/p.length; if (by >= cy9) return; const d = Math.sqrt((p.reduce((s,pt)=>s+pt[0],0)/p.length-cx9)**2+(by-cy9)**2); if (d < bestDist) { bestDist = d; bestBld = b; } });
const ptsB = bestBld.footprint.slice(0,-1);
const cxB = ptsB.reduce((s,p)=>s+p[0],0)/ptsB.length, cyB = ptsB.reduce((s,p)=>s+p[1],0)/ptsB.length;
const pos2 = new THREE.Vector3(cxB - 10, bestBld.height + 8, -(cyB));
const bld8 = buildings.find(b => b.name === '8号宿舍');
const pts8 = bld8.footprint.slice(0,-1);
const cx8 = pts8.reduce((s,p)=>s+p[0],0)/pts8.length, cy8 = pts8.reduce((s,p)=>s+p[1],0)/pts8.length;
const pos3 = new THREE.Vector3(cx8 + 30, bld8.height + 8, -(cy8));
const bld16 = buildings.find(b => b.name === '16号宿舍');
const pts16 = bld16.footprint.slice(0,-1);
const cx16 = pts16.reduce((s,p)=>s+p[0],0)/pts16.length, cy16 = pts16.reduce((s,p)=>s+p[1],0)/pts16.length;
const pos4 = new THREE.Vector3(cx16 + 10, bld16.height + 13, -(cy16));
const bldCanteen = buildings.find(b => b.name === '食堂');
const ptsC = bldCanteen.footprint.slice(0,-1);
const cxC = ptsC.reduce((s,p)=>s+p[0],0)/ptsC.length, cyC = ptsC.reduce((s,p)=>s+p[1],0)/ptsC.length;
const pos5 = new THREE.Vector3(cxC - 10, bldCanteen.height + 8, -(cyC + 16));
const pos7 = new THREE.Vector3(cxC - 5, bldCanteen.height + 8, -(cyC - 19));
const bldLib = buildings.find(b => b.name === '图书馆');
const ptsL = bldLib.footprint.slice(0,-1);
const cxL = ptsL.reduce((s,p)=>s+p[0],0)/ptsL.length, cyL = ptsL.reduce((s,p)=>s+p[1],0)/ptsL.length;
const pos6 = new THREE.Vector3(cxL - 16, bldLib.height + 13, -(cyL - 25));
const bld3 = buildings.find(b => b.name === '3号宿舍');
const pts3 = bld3.footprint.slice(0,-1);
const cx3 = pts3.reduce((s,p)=>s+p[0],0)/pts3.length, cy3 = pts3.reduce((s,p)=>s+p[1],0)/pts3.length;
let bestDist3 = Infinity, bestBld3 = null;
buildings.forEach(b => { if (b.name !== '教职工宿舍') return; const p = b.footprint.slice(0,-1); const bx = p.reduce((s,pt)=>s+pt[0],0)/p.length; if (bx >= cx3) return; const d = Math.sqrt((bx-cx3)**2+(p.reduce((s,pt)=>s+pt[1],0)/p.length-cy3)**2); if (d < bestDist3) { bestDist3 = d; bestBld3 = b; } });
const ptsW3 = bestBld3.footprint.slice(0,-1);
const cxW3 = ptsW3.reduce((s,p)=>s+p[0],0)/ptsW3.length, cyW3 = ptsW3.reduce((s,p)=>s+p[1],0)/ptsW3.length;
const pos8 = new THREE.Vector3(cxW3 - 15, bestBld3.height + 8, -(cyW3));
const pos9 = new THREE.Vector3(cxW3 + 15, bestBld3.height + 8, -(cyW3 + 6));
const pos10 = new THREE.Vector3(cx3 + 15, bld3.height + 8, -(cy3 + 10));
const bld5 = buildings.find(b => b.name === '12号/5号宿舍');
const pts5 = bld5.footprint.slice(0,-1);
const rightPts5 = pts5.filter(p => p[0] > (Math.min(...pts5.map(p=>p[0]))+Math.max(...pts5.map(p=>p[0])))/2);
const sePt5 = rightPts5.reduce((a,b) => a[1] < b[1] ? a : b);
const pos11 = new THREE.Vector3(sePt5[0] - 14, bld5.height + 8, -(sePt5[1] - 28));
const bld1teach = buildings.find(b => b.name === '1号教学楼');
const pts1t = bld1teach.footprint.slice(0,-1);
const pos12 = new THREE.Vector3(Math.max(...pts1t.map(p=>p[0])) + 3, bld1teach.height + 8, -(Math.min(...pts1t.map(p=>p[1])) - 6));
const bld4teach = buildings.find(b => b.name === '4号教学楼');
const pts4t = bld4teach.footprint.slice(0,-1);
const gateStoneStart = new THREE.Vector3(Math.min(...pts4t.map(p=>p[0])) + 14, 0, -(Math.min(...pts4t.map(p=>p[1])) - 17));
const gateBuildingCenter = new THREE.Vector3(
  pts4t.reduce((sum, point) => sum + point[0], 0) / pts4t.length,
  0,
  -(pts4t.reduce((sum, point) => sum + point[1], 0) / pts4t.length),
);
// 从原校门落点向4号教学楼平移少量距离，保持景观石仍位于入口区域。
const gateShift = gateBuildingCenter.clone().sub(gateStoneStart).normalize().multiplyScalar(5);
const pos13 = gateStoneStart.clone().add(gateShift);
pos13.y = bld4teach.height + 8;
// 4号教学楼与18号宿舍整体近似平行：景观石的长轴与楼体长轴垂直，正面朝向西侧。
const gateBuildingAxis = new THREE.Vector2(
  pts4t[1][0] - pts4t[0][0],
  -(pts4t[1][1] - pts4t[0][1]),
).normalize();
const gateStoneRotation = -Math.atan2(gateBuildingAxis.y, gateBuildingAxis.x) - Math.PI / 2;
addGateStone(new THREE.Vector3(pos13.x, 0, pos13.z), gateStoneRotation);
const bld1ss = buildings.find(b => b.name === '1号宿舍');
const pts1ss = bld1ss.footprint.slice(0,-1);
const pos14 = new THREE.Vector3(pts1ss.reduce((s,p)=>s+p[0],0)/pts1ss.length - 10, bld1ss.height + 8, -(Math.max(...pts1ss.map(p=>p[1])) + 12));
const markers = [
  { el: document.getElementById('building-marker'), pos: pos1, img: '菜鸟驿站.jpg', title: '树达教学楼 · 详情', hint:'菜鸟驿站 · 取件寄件' },
  { el: document.getElementById('building-marker2'), pos: pos2, img: '壹号打印店.jpg', title: '教职工宿舍 · 详情', hint:'壹号打印店 · 可寄取快递' },
  { el: document.getElementById('building-marker3'), pos: pos3, img: '旺旺超市.jpg', title: '8号宿舍 · 详情', hint:'旺旺超市 · 可寄取快递' },
  { el: document.getElementById('building-marker4'), pos: pos4, img: '体育馆入口.jpg', title: '16号宿舍 · 详情', hint:'体育馆入口 · 16号宿舍地下' },
  { el: document.getElementById('building-marker5'), pos: pos5, img: '蜜雪冰城.jpg', title: '食堂 · 详情', hint:'蜜雪冰城' },
  { el: document.getElementById('building-marker6'), pos: pos6, img: '禾丰宜.jpg', title: '图书馆 · 详情', hint:'禾心优选 · 图书馆旁' },
  { el: document.getElementById('building-marker7'), pos: pos7, img: '文创.jpg', title: '食堂 · 详情', hint:'文创店' },
  { el: document.getElementById('building-marker8'), pos: pos8, img: '拼多多驿站.jpg', title: '教职工宿舍 · 详情', hint:'拼多多驿站 · 教工宿舍区' },
  { el: document.getElementById('building-marker9'), pos: pos9, img: '印佳图文.jpg', title: '教职工宿舍 · 详情', hint:'圆通·拼多多驿站 · 教工1栋107' },
  { el: document.getElementById('building-marker10'), pos: pos10, img: '金科.jpg', title: '3号宿舍 · 详情', hint:'打印复印服务点' },
  { el: document.getElementById('building-marker11'), pos: pos11, img: '', title: '5号宿舍', hint:'校门' },
  { el: document.getElementById('building-marker12'), pos: pos12, img: '', title: '1号教学楼', hint:'校门' },
  { el: document.getElementById('building-marker13'), pos: pos13, img: '', title: '校门', hint:'校门' },
  { el: document.getElementById('building-marker14'), pos: pos14, img: '', title: '校门', hint:'校门' },
];
// 外层导览工具栏只控制 POI 的显示，不改变任何模型、图标或坐标。
let activeMarkerIds = null;
let selectedMarkerId = null;
window.addEventListener('message', (event) => {
  if (event.data?.type === 'campus-poi-filter') activeMarkerIds = event.data.ids;
  if (event.data?.type === 'campus-poi-select') { selectedMarkerId = event.data.id; markers.forEach(m => m.el.classList.toggle('selected', m.el.id === selectedMarkerId)); }
  if (event.data?.type === 'campus-poi-clear') { selectedMarkerId = null; markers.forEach(m => m.el.classList.remove('selected')); }
  if (event.data?.type === 'campus-building-select') {
    const target = buildingTargets.get(event.data.name);
    if (target) {
      selectedMarkerId = null;
      markers.forEach(m => m.el.classList.remove('selected'));
      tintBuilding(target);
      buildingHighlight.visible = false;
    }
  }
  if (event.data?.type === 'campus-building-clear') { buildingHighlight.visible = false; clearBuildingMeshHighlight(); }
  if (event.data?.type === 'campus-building-list-request') window.parent.postMessage({ type: 'campus-buildings', names: [...buildingTargets.keys()] }, '*');
});
window.parent.postMessage({ type: 'campus-buildings', names: [...buildingTargets.keys()] }, '*');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
// 保持每个 POI 的原始坐标和图标；点击时把信息交给外层导览系统展示卡片。
const poiTooltip = document.getElementById('poi-tooltip');
function movePoiTooltip(e){ poiTooltip.style.left=e.clientX+'px'; poiTooltip.style.top=(e.clientY-12)+'px'; }
markers.forEach(m => { m.el.addEventListener('click', (e) => { e.stopPropagation(); selectedMarkerId=m.el.id; markers.forEach(item => item.el.classList.toggle('selected', item.el.id === selectedMarkerId)); window.parent.postMessage({ type: 'campus-poi', id: m.el.id }, '*'); }); m.el.addEventListener('mouseenter', e => { poiTooltip.textContent=m.hint; movePoiTooltip(e); poiTooltip.style.display='block'; }); m.el.addEventListener('mousemove', movePoiTooltip); m.el.addEventListener('mouseleave', () => poiTooltip.style.display='none'); });
modalClose.addEventListener('click', () => modalOverlay.classList.remove('active'));
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) modalOverlay.classList.remove('active'); });
function updateMarkers() { if (buildingHighlight.visible) { const pulse = 1 + Math.sin(performance.now() / 320) * 0.1; highlightRing.scale.set(pulse, pulse, pulse); highlightRing.material.opacity = 0.55 + Math.sin(performance.now() / 320) * 0.2; } markers.forEach(m => { const vec = m.pos.clone(); vec.project(camera); const x = (vec.x * 0.5 + 0.5) * window.innerWidth; const y = (-vec.y * 0.5 + 0.5) * window.innerHeight; const allowed = !activeMarkerIds || activeMarkerIds.includes(m.el.id); m.el.style.display = allowed && vec.z <= 1 ? 'flex' : 'none'; m.el.style.left = Math.round(x) + 'px'; m.el.style.top = Math.round(y) + 'px'; }); }
const compassInner = document.getElementById('compass-inner');
let lastNavigationUpdate = 0;
function animate() { requestAnimationFrame(animate); controls.update(); const viewX = controls.target.x - camera.position.x; const viewZ = controls.target.z - camera.position.z; const yaw = Math.atan2(viewX, -viewZ) * (180 / Math.PI); const pitch = Math.atan2(camera.position.y - controls.target.y, Math.hypot(viewX, viewZ)) * (180 / Math.PI); compassInner.setAttribute('transform', 'rotate(' + yaw + ' 50 50)'); if (performance.now() - lastNavigationUpdate > 80) { window.parent.postMessage({ type: 'campus-view', yaw, pitch }, '*'); lastNavigationUpdate = performance.now(); } renderer.render(scene, camera); labelRenderer.render(scene, camera); updateMarkers(); }
animate();
window.addEventListener('resize', () => { camera.aspect = container.clientWidth / container.clientHeight; camera.updateProjectionMatrix(); renderer.setSize(container.clientWidth, container.clientHeight); labelRenderer.setSize(container.clientWidth, container.clientHeight); });
window.addEventListener('message', (event) => { if (event.data?.type === 'campus-reset-view') { camera.position.set(250, 400, 350); controls.target.set(0, 20, 0); controls.update(); } });
const tooltip = document.getElementById('tooltip');
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
window.addEventListener('mousemove', (e) => { mouse.x = (e.clientX / window.innerWidth) * 2 - 1; mouse.y = -(e.clientY / window.innerHeight) * 2 + 1; raycaster.setFromCamera(mouse, camera); const intersects = raycaster.intersectObjects(buildingGroups); if (intersects.length > 0) { const obj = intersects[0].object; if (obj.userData && obj.userData.name) { tooltip.style.display = 'block'; tooltip.style.left = (e.clientX + 15) + 'px'; tooltip.style.top = (e.clientY - 10) + 'px'; tooltip.innerHTML = '<strong>' + obj.userData.name + '</strong><br>' + obj.userData.type; return; } } tooltip.style.display = 'none'; });
