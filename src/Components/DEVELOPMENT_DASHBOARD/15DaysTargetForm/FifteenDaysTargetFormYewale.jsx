import React, { useState } from "react";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png"; // Placeholder for logo
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Image imports (same as provided)
import ApplyingPuttiAndFinishingShopPaintingAndShutte from "../../../../public/Images/15DaysTargetFormYewale/ApplyingPuttiAndFinishingShopPaintingAndShutte.png";
import ApplyingPuttiAndFinishingShopPaintingAndShutte1 from "../../../../public/Images/15DaysTargetFormYewale/ApplyingPuttiAndFinishingShopPaintingAndShutte1.png";
import BoardACPFramingAndSilicon from "../../../../public/Images/15DaysTargetFormYewale/BoardACPFramingAndSilicon.png";
import BoardLetterInstallationAndCleanUp from "../../../../public/Images/15DaysTargetFormYewale/BoardLetterInstallationAndCleanUp.png";
import BoardMSFramingBoardAluminiumFraming from "../../../../public/Images/15DaysTargetFormYewale/BoardMSFramingBoardAluminiumFraming.png";
import Demolitionwork1 from "../../../../public/Images/15DaysTargetFormYewale/Demolitionwork1.png";
import Demolitionwork2 from "../../../../public/Images/15DaysTargetFormYewale/Demolitionwork2.png";
import DuctingWork1 from "../../../../public/Images/15DaysTargetFormYewale/DuctingWork1.png";
import DuctingWork2 from "../../../../public/Images/15DaysTargetFormYewale/DuctingWork2.png";
import ElectricalWork1 from "../../../../public/Images/15DaysTargetFormYewale/ElectricalWork1.png";
import ElectricalWork2 from "../../../../public/Images/15DaysTargetFormYewale/ElectricalWork2.png";
import ElectricalWork3 from "../../../../public/Images/15DaysTargetFormYewale/ElectricalWork3.png";
import ElectricalWork4 from "../../../../public/Images/15DaysTargetFormYewale/ElectricalWork4.png";
import FixationOfPopSheet from "../../../../public/Images/15DaysTargetFormYewale/FixationOfPopSheet.png";
import InstallationOfGranite from "../../../../public/Images/15DaysTargetFormYewale/InstallationOfGranite.png";
import PlumbingWork1 from "../../../../public/Images/15DaysTargetFormYewale/PlumbingWork1.png";
import PlumbingWork2 from "../../../../public/Images/15DaysTargetFormYewale/PlumbingWork2.png";
import PlumbingWork3 from "../../../../public/Images/15DaysTargetFormYewale/PlumbingWork3.png";
import PlumbingWork4 from "../../../../public/Images/15DaysTargetFormYewale/PlumbingWork4.png";
import PlumbingWork5 from "../../../../public/Images/15DaysTargetFormYewale/PlumbingWork5.png";
import PopFramingWork1 from "../../../../public/Images/15DaysTargetFormYewale/PopFramingWork1.png";
import PopFramingWork2 from "../../../../public/Images/15DaysTargetFormYewale/PopFramingWork2.png";
import PopFramingWork3 from "../../../../public/Images/15DaysTargetFormYewale/PopFramingWork3.png";
import ShutterServicingWatertankstorageplanning1 from "../../../../public/Images/15DaysTargetFormYewale/ShutterServicingWatertankstorageplanning1.png";
import ShutterServicingWatertankstorageplanning2 from "../../../../public/Images/15DaysTargetFormYewale/ShutterServicingWatertankstorageplanning2.png";
import TileFixationAndAcidWash1 from "../../../../public/Images/15DaysTargetFormYewale/TileFixationAndAcidWash1.png";
import WallRubbingAndWallTilesWork1 from "../../../../public/Images/15DaysTargetFormYewale/WallRubbingAndWallTilesWork1.png";
import WallRubbingAndWallTilesWork2 from "../../../../public/Images/15DaysTargetFormYewale/WallRubbingAndWallTilesWork2.png";
import WallRubbingAndWallTilesWork3 from "../../../../public/Images/15DaysTargetFormYewale/WallRubbingAndWallTilesWork3.png";
import YNKTeamSideSSMaterial1 from "../../../../public/Images/15DaysTargetFormYewale/YNKTeamSideSSMaterial1.png";
import YNKTeamSideSSMaterial2 from "../../../../public/Images/15DaysTargetFormYewale/YNKTeamSideSSMaterial2.png";
import YNKTeamSideSSMaterial3 from "../../../../public/Images/15DaysTargetFormYewale/YNKTeamSideSSMaterial3.png";
import YNKTeamSideSSMaterial4 from "../../../../public/Images/15DaysTargetFormYewale/YNKTeamSideSSMaterial4.png";
import YNKTeamSideSSMaterial5 from "../../../../public/Images/15DaysTargetFormYewale/YNKTeamSideSSMaterial5.png";

// Task data with titles
const tasks = [
  {
    srNo: 1,
    title_en: "Demolition Work",
    title_mr: "तोडकाम",
    description_en: [
      "The flooring is broken and removed, which may include tiles, marble, concrete, partition, and glass.",
      "The old wall paint is scraped off for surface preparation.",
      "Internal or non-load-bearing walls are broken and dismantled as required.",
      "The old water tank is removed, if applicable.",
      "The old signboard or board is dismantled and taken out.",
      "The old POP or false ceiling is removed completely.",
      "Any existing rabbit or concrete steps are demolished.",
      "The site is thoroughly cleaned, and all debris is disposed of properly.",
    ],
    description_mr: [
      "मजला तोडला जातो आणि काढला जातो, ज्यामध्ये टाइल्स, मार्बल, काँक्रीट, विभाजन आणि काच यांचा समावेश असू शकतो.",
      "पृष्ठभाग तयार करण्यासाठी जुना भिंतीचा रंग खरडला जातो.",
      "आवश्यकतेनुसार अंतर्गत किंवा नॉन-लोड-बेअरिंग भिंती तोडल्या आणि काढल्या जातात.",
      "लागू असल्यास, जुना पाण्याचा टँक काढला जातो.",
      "जुना साइनबोर्ड किंवा बोर्ड काढला जातो.",
      "जुना पीओपी किंवा खोटा छत पूर्णपणे काढला जातो.",
      "विद्यमान रॅबिट किंवा काँक्रीट पायऱ्या तोडल्या जातात.",
      "साइट पूर्णपणे स्वच्छ केली जाते आणि सर्व कचरा योग्यरित्या विल्हेवाट केला जातो.",
    ],
    duration_en: "1 Day",
    duration_mr: "1 दिवस",
    photos: [Demolitionwork1, Demolitionwork2],
  },
  {
    srNo: 2,
    title_en: "Shutter Servicing, Water Tank Storage Planning",
    title_mr: "शटर सर्व्हिसिंग, पाण्याच्या टाकीचे स्टोरेज नियोजन",
    description_en: [
      "If the shutter spring is broken, get it repaired.",
      "Get the shutter greased.",
      "Get the shutter oiled.",
      "After that, the required materials are procured, such as MS frame sections, ACP or cement sheets, and hardware items like hinges, handles, and locks for shutters.",
      "Site marking and wall preparation are completed before installation begins.",
      "The frame is fixed using welding or anchor fastening methods.",
      "A base sheet, such as a cement board, is then installed.",
      "Shutters are fitted, if applicable, as per the design.",
      "Finishing work is carried out, including painting.",
      "The work area is cleaned thoroughly after completion.",
    ],
    description_mr: [
      "जर शटरचा स्प्रिंग तुटलेला असेल, तर तो दुरुस्त करा.",
      "शटरला ग्रीस लावा.",
      "शटरला तेल लावा.",
      "त्यानंतर, आवश्यक साहित्य खरेदी केले जाते, जसे की एमएस फ्रेम सेक्शन्स, एसीपी किंवा सिमेंट शीट्स आणि शटरसाठी हार्डवेअर आयटम्स जसे की हिंग्ज, हँडल्स आणि लॉक्स.",
      "स्थापनेपूर्वी साइट मार्किंग आणि भिंतीची तयारी पूर्ण केली जाते.",
      "फ्रेम वेल्डिंग किंवा अँकर फास्टनिंग पद्धतीने निश्चित केली जाते.",
      "त्यानंतर सिमेंट बोर्डासारखी बेस शीट बसवली जाते.",
      "लागू असल्यास, डिझाइननुसार शटर बसवले जातात.",
      "फिनिशिंगचे काम केले जाते, ज्यामध्ये पेंटिंगचा समावेश आहे.",
      "काम पूर्ण झाल्यानंतर कामाची जागा पूर्णपणे स्वच्छ केली जाते.",
    ],
    duration_en: "1 Day",
    duration_mr: "1 दिवस",
    photos: [ShutterServicingWatertankstorageplanning1, ShutterServicingWatertankstorageplanning2],
  },
  {
    srNo: 3,
    title_en: "Masonry Work",
    title_mr: "विटकाम",
    description_en: [
      "If any masonry work in shop then do it.",
      "If it's a metal sheet (tin) shop, start the work using direct ACP sheets without doing any brickwork.",
    ],
    description_mr: [
      "दुकानात काही विटकाम असेल तर ते करा.",
      "जर हे मेटल शीट (टिन) दुकान असेल, तर विटकाम न करता थेट एसीपी शीट्स वापरून काम सुरू करा.",
    ],
    duration_en: "1 Day",
    duration_mr: "1 दिवस",
    photos: [],
  },
  {
    srNo: 4,
    title_en: "Pop Framing Work",
    title_mr: "पीओपी फ्रेमिंग काम",
    description_en: [
      "Purchasing material.",
      "Completely verifying the material.",
      "Pop framing work (GYPSUM/PVC).",
      "Height of pop framing work 9 from flooring.",
      "POP framing sheet should be in white color.",
    ],
    description_mr: [
      "साहित्य खरेदी करणे.",
      "साहित्य पूर्णपणे तपासणे.",
      "पीओपी फ्रेमिंग काम (जिप्सम/पीव्हीसी).",
      "पीओपी फ्रेमिंग कामाची उंची मजल्यापासून 9 फूट.",
      "पीओपी फ्रेमिंग शीट पांढऱ्या रंगाची असावी.",
    ],
    duration_en: "1 Day",
    duration_mr: "1 दिवस",
    photos: [PopFramingWork1, PopFramingWork2, PopFramingWork3],
  },
  {
    srNo: 5,
    title_en: "Electrical Work",
    title_mr: "इलेक्ट्रिकल काम",
    description_en: [
      "Purchasing material.",
      "Completely verifying the material.",
      "POLYCAB 2.5.",
      "Site marking is done as per the layout, covering switches, lights, and electrical points.",
      "Wall chasing or cutting is performed using a cutter or chisel to create pipe routes.",
      "Conduit pipes and boxes (ISI marked) are laid with proper bends.",
      "Electrical wiring is installed according to the required load (1.0, 1.5, 2.5, 4.0 sqmm, etc.).",
      "Continuity and insulation testing are conducted to ensure safety and compliance.",
      "Boards, boxes, and pipes are fixed with proper alignment.",
      "Civil work is completed by concealing and plastering over the conduits.",
      "Switches and sockets are fixed after painting is completed.",
      "Final testing and load verification are carried out.",
      "Wire: Polycab + CCTV, Switch socket: Anchor + Legrand.",
      "Fridge point 16A + button X 2, work table point 16A + button X 4, main board 12 model X 2 (18 model X 1), milk machine 16A X 1, ALL shop MCB, CCTV point 5A X 4 (no button), Wall fan 5A X 1, Ceiling light, partition board point 5A + button X 4 (billing machine + menu frame), name board power point 16A X 5, Lollypop Out of Shutter 4 Power Point, Altra Modular Board - 1, TV Pipe + Menu Frame 5A X 2, Exhaust + Ducting 16A X 1, Inverter 1 point.",
      "Earthing is compulsory.",
    ],
    description_mr: [
      "साहित्य खरेदी करणे.",
      "साहित्य पूर्णपणे तपासणे.",
      "पॉलीकॅब 2.5.",
      "लेआउटनुसार साइट मार्किंग केले जाते, ज्यामध्ये स्विचेस, लाइट्स आणि इलेक्ट्रिकल पॉइंट्स यांचा समावेश आहे.",
      "पाइप रूट तयार करण्यासाठी कटर किंवा छिन्नी वापरून भिंतीचा खणणे किंवा कापणे केले जाते.",
      "कॉन्ड्युट पाइप्स आणि बॉक्सेस (ISI मार्क असलेले) योग्य वाकणांसह बसवले जातात.",
      "आवश्यक लोडनुसार इलेक्ट्रिकल वायरिंग स्थापित केली जाते (1.0, 1.5, 2.5, 4.0 स्क्वेअर मिमी, इ.).",
      "सुरक्षितता आणि अनुपालन सुनिश्चित करण्यासाठी सातत्य आणि इन्सुलेशन चाचणी केली जाते.",
      "बोर्ड, बॉक्सेस आणि पाइप्स योग्य संरेखनासह निश्चित केले जातात.",
      "कॉन्ड्युट्सवर लपवून आणि प्लास्टरिंग करून सिव्हिल काम पूर्ण केले जाते.",
      "पेंटिंग पूर्ण झाल्यानंतर स्विचेस आणि सॉकेट्स निश्चित केले जातात.",
      "अंतिम चाचणी आणि लोड सत्यापन केले जाते.",
      "वायर: पॉलीकॅब + CCTV, स्विच सॉकेट: अँकर + लेग्रँड.",
      "फ्रिज पॉइंट 16A + बटण X 2, वर्क टेबल पॉइंट 16A + बटण X 4, मेन बोर्ड 12 मॉडेल X 2 (18 मॉडेल X 1), मिल्क मशीन 16A X 1, सर्व दुकान MCB, CCTV पॉइंट 5A X 4 (बटण नाही), वॉल फॅन 5A X 1, सीलिंग लाइट, पार्टिशन बोर्ड पॉइंट 5A + बटण X 4 (बिलिंग मशीन + मेन्यू फ्रेम), नेम बोर्ड पॉवर पॉइंट 16A X 5, लॉलीपॉप आउट ऑफ शटर 4 पॉवर पॉइंट, अल्ट्रा मॉड्युलर बोर्ड - 1, टीव्ही पाइप + मेन्यू फ्रेम 5A X 2, एक्झॉस्ट + डक्टिंग 16A X 1, इन्व्हर्टर 1 पॉइंट.",
      "अर्थिंग अनिवार्य आहे.",
    ],
    duration_en: "1 Day",
    duration_mr: "1 दिवस",
    photos: [ElectricalWork1, ElectricalWork2, ElectricalWork3, ElectricalWork4],
  },
  {
    srNo: 6,
    title_en: "Plumbing Work",
    title_mr: "प्लंबिंग काम",
    description_en: [
      "Purchasing material.",
      "Completely verifying the material.",
      "Tap connection is mandatory only in steel body.",
      "Sink Inlet 3/4\".",
      "Drainage outlet line 3 inch.",
      "UPVC Pipes: Plasto, Paras, Supreme, Prince, Finolex.",
      "CPVC Pipes: Plasto, Paras, Supreme, Prince, Finolex.",
      "PVC Pipes: Plasto, Paras, Supreme, Prince, Finolex.",
      "Water Tank: Any Brand.",
      "Long Body Steel Tap: Any Brand.",
    ],
    description_mr: [
      "साहित्य खरेदी करणे.",
      "साहित्य पूर्णपणे तपासणे.",
      "नळ कनेक्शन फक्त स्टील बॉडीमध्ये अनिवार्य आहे.",
      "सिंक इनलेट 3/4\".",
      "ड्रेनेज आउटलेट लाइन 3 इंच.",
      "यूपीव्हीसी पाइप्स: प्लास्टो, पारस, सुप्रीम, प्रिन्स, फिनोलेक्स.",
      "सीपीव्हीसी पाइप्स: प्लास्टो, पारस, सुप्रीम, प्रिन्स, फिनोलेक्स.",
      "पीव्हीसी पाइप्स: प्लास्टो, पारस, सुप्रीम, प्रिन्स, फिनोलेक्स.",
      "पाण्याचा टँक: कोणताही ब्रँड.",
      "लॉंग बॉडी स्टील नळ: कोणताही ब्रँड.",
    ],
    duration_en: "1 Day",
    duration_mr: "1 दिवस",
    photos: [PlumbingWork1, PlumbingWork2, PlumbingWork3, PlumbingWork4, PlumbingWork5],
  },
  {
    srNo: 7,
    title_en: "Wall Rubbing and Wall Tiles Work",
    title_mr: "भिंत खरडणे आणि भिंतीच्या टाइल्सचे काम",
    description_en: [
      "Scraping the walls.",
      "Applying URP chemical plaster.",
      "Chiseling the wall to fix tiles.",
      "Purchasing material.",
      "Completely verifying the material.",
      "Tile size (24X12, 18X12).",
      "Wall Tile colour: MILKY PLANE WHITE (MATT FINISH).",
      "Floor Tiles: Plain Ivory.",
      "The layout is marked, including the tile pattern and levels for both walls and floors.",
      "Surface preparation is done, which may include leveling and waterproofing if required.",
      "Adhesive or cement mortar is prepared as per the specifications.",
      "Tile laying is carried out-floor tiles are laid first, followed by wall tiles, starting from the bottom and moving upward.",
      "Cutting and edge finishing are done neatly around corners, fixtures, and edges.",
      "The level and alignment are checked using spirit levels and spacers.",
      "Grouting and joint finishing are completed to ensure a uniform appearance.",
    ],
    description_mr: [
      "भिंती खरडणे.",
      "यूआरपी केमिकल प्लास्टर लावणे.",
      "टाइल्स बसवण्यासाठी भिंत खणणे.",
      "साहित्य खरेदी करणे.",
      "साहित्य पूर्णपणे तपासणे.",
      "टाइल्सचा आकार (24X12, 18X12).",
      "भिंतीच्या टाइल्सचा रंग: मिल्की प्लेन व्हाइट (मॅट फिनिश).",
      "मजल्याच्या टाइल्स: प्लेन आयव्हरी.",
      "टाइल्सचा नमुना आणि भिंती व मजल्यासाठी पातळी यासह लेआउट मार्क केले जाते.",
      "पृष्ठभागाची तयारी केली जाते, ज्यामध्ये आवश्यक असल्यास समतल करणे आणि वॉटरप्रूफिंग यांचा समावेश आहे.",
      "विशिष्टतेनुसार अॅडहेसिव्ह किंवा सिमेंट मोर्टार तयार केले जाते.",
      "टाइल्स बसवणे केले जाते - प्रथम मजल्याच्या टाइल्स बसवल्या जातात, त्यानंतर भिंतीच्या टाइल्स, खालून वरच्या दिशेने.",
      "कोपरे, फिक्स्चर आणि कडांभोवती कटिंग आणि कडा फिनिशिंग नीट केले जाते.",
      "स्पिरिट लेव्हल्स आणि स्पेसर्स वापरून पातळी आणि संरेखन तपासले जाते.",
      "एकसमान देखावा सुनिश्चित करण्यासाठी ग्राउटिंग आणि जॉइंट फिनिशिंग पूर्ण केले जाते.",
    ],
    duration_en: "3 Days",
    duration_mr: "3 दिवस",
    photos: [WallRubbingAndWallTilesWork1, WallRubbingAndWallTilesWork2, WallRubbingAndWallTilesWork3],
  },
  {
    srNo: 8,
    title_en: "Ducting Work",
    title_mr: "डक्टिंग काम",
    description_en: [
      "Purchasing material.",
      "Completely verifying the material.",
      "The requirements are collected, and the duct layout is planned as per the drawing.",
      "The site is measured, and the final route is determined.",
      "The material is finalized, typically using GI sheets.",
      "The duct sections are fabricated through cutting, bending, and beading.",
      "Pre-assembly and tagging are carried out at the workshop.",
      "The fabricated ducts are transported to the site, and marking is done for installation.",
      "The ducts are installed using supports, hangers, angles, and bolts.",
      "Joints are sealed with sealant, gaskets, rivets, or duct tape.",
      "If required, insulation wrapping is applied using materials such as nitrile or glass wool.",
      "A final leakage test and airflow check are conducted.",
    ],
    description_mr: [
      "साहित्य खरेदी करणे.",
      "साहित्य पूर्णपणे तपासणे.",
      "आवश्यकता गोळा केल्या जातात आणि ड्रॉइंगनुसार डक्ट लेआउट नियोजित केले जाते.",
      "साइट मोजली जाते आणि अंतिम मार्ग निश्चित केला जातो.",
      "सामग्री निश्चित केली जाते, सामान्यतः जीआय शीट्स वापरली जातात.",
      "डक्ट सेक्शन्स कटिंग, बेंडिंग आणि बीडिंगद्वारे तयार केले जातात.",
      "वर्कशॉपमध्ये प्री-असेंब्ली आणि टॅगिंग केले जाते.",
      "तयार केलेले डक्ट्स साइटवर वाहतूक केले जातात आणि स्थापनेसाठी मार्किंग केले जाते.",
      "डक्ट्स सपोर्ट्स, हँगर्स, अँगल्स आणि बोल्ट्स वापरून बसवले जातात.",
      "जोडणी सीलंट, गॅस्केट्स, रिव्हेट्स किंवा डक्ट टेपने सील केली जाते.",
      "आवश्यक असल्यास, नायट्राइल किंवा ग्लास वूल सारख्या सामग्रीचा वापर करून इन्सुलेशन रॅपिंग लावले जाते.",
      "अंतिम गळती चाचणी आणि हवेचा प्रवाह तपासणी केली जाते.",
    ],
    duration_en: "2 Days",
    duration_mr: "2 दिवस",
    photos: [DuctingWork1, DuctingWork2],
  },
  {
    srNo: 9,
    title_en: "Tile Fixation and Acid Wash",
    title_mr: "टाइल्स बसवणे आणि अॅसिड वॉश",
    description_en: [
      "Purchasing material.",
      "Completely verifying the material.",
      "Fixing flooring tiles (24x24 PLANE IVORY).",
      "Do acid wash.",
    ],
    description_mr: [
      "साहित्य खरेदी करणे.",
      "साहित्य पूर्णपणे तपासणे.",
      "मजल्याच्या टाइल्स बसवणे (24x24 प्लेन आयव्हरी).",
      "आसिड वॉश करणे.",
    ],
    duration_en: "1 Day",
    duration_mr: "1 दिवस",
    photos: [TileFixationAndAcidWash1],
  },
  {
    srNo: 10,
    title_en: "Installation of Granite",
    title_mr: "ग्रॅनाइटची स्थापना",
    description_en: [
      "Purchasing material.",
      "Completely verifying the material.",
      "Installation of granite (BLACK TELEPHONE).",
    ],
    description_mr: [
      "साहित्य खरेदी करणे.",
      "साहित्य पूर्णपणे तपासणे.",
      "ग्रॅनाइटची स्थापना (ब्लॅक टेलिफोन).",
    ],
    duration_en: "Half Day",
    duration_mr: "अर्धा दिवस",
    photos: [InstallationOfGranite],
  },
  {
    srNo: 11,
    title_en: "Fixation of Pop Sheet",
    title_mr: "पीओपी शीट बसवणे",
    description_en: [
      "Purchasing material.",
      "Completely verifying the material.",
      "Fixing pop sheet (GYPSUM/PVC) - White colour.",
      "Apply putty touch-up twice.",
      "Allow the putty to dry.",
      "Do rubbing.",
      "Do light surface cutting (or light sanding for smooth finish). 5*5\".",
    ],
    description_mr: [
      "साहित्य खरेदी करणे.",
      "साहित्य पूर्णपणे तपासणे.",
      "पीओपी शीट बसवणे (जिप्सम/पीव्हीसी) - पांढरा रंग.",
      "पोटी टच-अप दोनदा लावणे.",
      "पोटीला कोरडे होऊ देणे.",
      "खरडणे करणे.",
      "हलके पृष्ठभाग कटिंग (किंवा गुळगुळीत फिनिशसाठी हलके सँडिंग) करणे. 5*5\".",
    ],
    duration_en: "1 Day",
    duration_mr: "1 दिवस",
    photos: [FixationOfPopSheet],
  },
  {
    srNo: 12,
    title_en: "Applying Putty and Finishing/Shop Painting and Shutter",
    title_mr: "पोटी लावणे आणि फिनिशिंग/दुकान पेंटिंग आणि शटर",
    description_en: [
      "Purchasing material.",
      "Completely verifying the material.",
      "Apply putty touch-up twice.",
      "Allow the putty to dry.",
      "Do rubbing.",
      "Final finishing.",
      "Shop and shutter painting.",
    ],
    description_mr: [
      "साहित्य खरेदी करणे.",
      "साहित्य पूर्णपणे तपासणे.",
      "पोटी टच-अप दोनदा लावणे.",
      "पोटीला कोरडे होऊ देणे.",
      "खरडणे करणे.",
      "अंतिम फिनिशिंग.",
      "दुकान आणि शटर पेंटिंग.",
    ],
    duration_en: "2 Days",
    duration_mr: "2 दिवस",
    photos: [ApplyingPuttiAndFinishingShopPaintingAndShutte, ApplyingPuttiAndFinishingShopPaintingAndShutte1],
  },
  {
    srNo: 13,
    title_en: "Board MS Framing, Board Aluminium Framing",
    title_mr: "बोर्ड एमएस फ्रेमिंग, बोर्ड अल्युमिनियम फ्रेमिंग",
    description_en: [
      "Purchasing material.",
      "Completely verifying the material.",
      "ACP Sheet - Moon Bond-142 Satin White.",
      "Aluminium Framing.",
      "Partition Framing.",
      "Back Side Framing.",
      "Middle Partition Framing.",
      "Sink Partition Framing - 5\"*3\".",
      "Use of aluminium pipes for all types of framing.",
    ],
    description_mr: [
      "साहित्य खरेदी करणे.",
      "साहित्य पूर्णपणे तपासणे.",
      "एसीपी शीट - मून बाँड-142 सॅटिन व्हाइट.",
      "अल्युमिनियम फ्रेमिंग.",
      "पार्टिशन फ्रेमिंग.",
      "मागील बाजूची फ्रेमिंग.",
      "मधली पार्टिशन फ्रेमिंग.",
      "सिंक पार्टिशन फ्रेमिंग - 5\"*3\".",
      "सर्व प्रकारच्या फ्रेमिंगसाठी अल्युमिनियम पाइप्सचा वापर.",
    ],
    duration_en: "1 Day",
    duration_mr: "1 दिवस",
    photos: [BoardMSFramingBoardAluminiumFraming],
  },
  {
    srNo: 14,
    title_en: "Board ACP Framing and Silicon",
    title_mr: "बोर्ड एसीपी फ्रेमिंग आणि सिलिकॉन",
    description_en: [
      "Purchasing material.",
      "Completely verifying the material.",
      "Company Name - Moon and Timex Bond.",
      "Color: Satin White 142.",
    ],
    description_mr: [
      "साहित्य खरेदी करणे.",
      "साहित्य पूर्णपणे तपासणे.",
      "कंपनीचे नाव - मून आणि टायमेक्स बाँड.",
      "रंग: सॅटिन व्हाइट 142.",
    ],
    duration_en: "2 Days",
    duration_mr: "2 दिवस",
    photos: [BoardACPFramingAndSilicon],
  },
  {
    srNo: 15,
    title_en: "Board Letter Installation and Clean Up",
    title_mr: "बोर्ड लेटर स्थापना आणि साफसफाई",
    description_en: [
      "Purchasing material.",
      "Completely verifying the material.",
      "Carry out site measurement and level checking.",
      "Approve the design, including font, color, branding, and light type.",
      "Procure the required materials such as MS frame, ACP, acrylic, LED, etc.",
      "Complete the fabrication work at the workshop.",
      "Perform electrical and LED testing (if applicable).",
      "Prepare the site through wall cleaning and anchor marking.",
      "Transport and install the frame or board at the site.",
      "Check the level and alignment of the installation.",
      "Fix the final branding using vinyl, acrylic, or backlit materials.",
      "Complete the electrical connection (if the board includes LED or backlighting).",
      "Conduct testing, cleaning, and final handover, including photographs for documentation.",
    ],
    description_mr: [
      "साहित्य खरेदी करणे.",
      "साहित्य पूर्णपणे तपासणे.",
      "साइट मोजमाप आणि पातळी तपासणी करणे.",
      "फॉन्ट, रंग, ब्रँडिंग आणि लाइट प्रकारासह डिझाइन मंजूर करणे.",
      "एमएस फ्रेम, एसीपी,ऍक्रेलिक , एलईडी इत्यादी आवश्यक साहित्य खरेदी करणे.",
      "वर्कशॉपमध्ये फॅब्रिकेशन काम पूर्ण करणे.",
      "इलेक्ट्रिकल आणि एलईडी चाचणी करणे (लागू असल्यास).",
      "भिंत साफसफाई आणि अँकर मार्किंगद्वारे साइट तयार करणे.",
      "फ्रेम किंवा बोर्ड साइटवर वाहतूक करणे आणि स्थापित करणे.",
      "स्थापनेची पातळी आणि संरेखन तपासणे.",
      "विनाइल, ऍक्रेलिक  किंवा बॅकलिट सामग्री वापरून अंतिम ब्रँडिंग निश्चित करणे.",
      "इलेक्ट्रिकल कनेक्शन पूर्ण करणे (बोर्डमध्ये एलईडी किंवा बॅकलायटिंग असल्यास).",
      "चाचणी, साफसफाई आणि अंतिम हस्तांतरण करणे, ज्यामध्ये दस्तऐवजीकरणासाठी छायाचित्रांचा समावेश आहे.",
    ],
    duration_en: "1 Day",
    duration_mr: "1 दिवस",
    photos: [BoardLetterInstallationAndCleanUp],
  },
  {
    srNo: 16,
    title_en: "YNK Team Side SS Material Should Be Ordered Before All Shop Setup Done",
    title_mr: "YNK टीम साइड एसएस मटेरियल सर्व दुकान सेटअप पूर्ण होण्यापूर्वी ऑर्डर करावे",
    description_en: [
      "YNK Team Side SS Material should be ordered before all shop setup is done.",
      "Final electrical work should be done.",
      "Fire tank LED scrolling board, TV, menu frame should be installed.",
      "Final plumbing work should be done.",
      "Sink inlet-outlet should be installed.",
      "Sink partition should be done.",
      "Final gas pipeline work should be done.",
      "CCTV work should be done.",
      "Wi-Fi should be installed.",
      "CCTV details should be sent to YNK office; after that, YNK sends the mail to Yewale office.",
    ],
    description_mr: [
      "सर्व दुकान सेटअप पूर्ण होण्यापूर्वी YNK टीम साइड एसएस मटेरियल ऑर्डर करावे.",
      "अंतिम इलेक्ट्रिकल काम पूर्ण करावे.",
      "फायर टँक एलईडी स्क्रोलिंग बोर्ड, टीव्ही, मेन्यू फ्रेम स्थापित करावे.",
      "अंतिम प्लंबिंग काम पूर्ण करावे.",
      "सिंक इनलेट-आउटलेट स्थापित करावे.",
      "सिंक पार्टिशन करावे.",
      "अंतिम गॅस पाइपलाइन काम पूर्ण करावे.",
      "CCTV काम पूर्ण करावे.",
      "वाय-फाय स्थापित करावे.",
      "CCTV तपशील YNK कार्यालयाला पाठवावे; त्यानंतर YNK येवले कार्यालयाला मेल पाठवते.",
    ],
    duration_en: "1 Day",
    duration_mr: "1 दिवस",
    photos: [YNKTeamSideSSMaterial1, YNKTeamSideSSMaterial2, YNKTeamSideSSMaterial3, YNKTeamSideSSMaterial4, YNKTeamSideSSMaterial5],
  },
];

// Validation messages
const validationMessages = {
  en: {
    submitSuccess: "Form submitted successfully!",
  },
  mr: {
    submitSuccess: "फॉर्म यशस्वीरित्या सबमिट केला!",
  },
};

// Inline styles grouped in one object
const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "1rem",
  },
  th: {
    backgroundColor: "#f1f5f9",
    padding: "0.75rem",
    textAlign: "left",
    fontWeight: 600,
    border: "1px solid #e2e8f0",
  },
  td: {
    padding: "0.75rem",
    border: "1px solid #e2e8f0",
    verticalAlign: "top",
  },
  imageContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "0.25rem",
  },
};

function FifteenDaysTargetFormYewale() {
  const [language, setLanguage] = useState("en");
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const totalTasks = tasks.length;
  const currentTask = tasks[currentTaskIndex];

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const handleNext = () => {
    if (currentTaskIndex < totalTasks - 1) {
      setCurrentTaskIndex((prev) => prev + 1);
    } else {
      toast.success(validationMessages[language].submitSuccess, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleBack = () => {
    if (currentTaskIndex > 0) {
      setCurrentTaskIndex((prev) => prev - 1);
    }
  };

  const renderTask = () => {
    const title =
      language === "mr" ? currentTask.title_mr : currentTask.title_en;
    const description =
      language === "mr"
        ? currentTask.description_mr
        : currentTask.description_en;
    const duration =
      language === "mr" ? currentTask.duration_mr : currentTask.duration_en;

    return (
      <div>
        <h3 className="text-lg text-center font-semibold mb-2">{title}</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>{language === "mr" ? "अनु. क्र." : "Sr. No"}</th>
              <th style={styles.th}>{language === "mr" ? "वर्णन" : "Description"}</th>
              <th style={styles.th}>{language === "mr" ? "कालावधी" : "Duration"}</th>
              <th style={styles.th}>{language === "mr" ? "फोटो" : "Photos"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>{currentTask.srNo}</td>
              <td style={styles.td}>
                <ul className="list-disc pl-5">
                  {description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </td>
              <td style={styles.td}>{duration}</td>
              <td style={styles.td}>
                {currentTask.photos.length > 0 ? (
                  <div style={styles.imageContainer}>
                    {currentTask.photos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`Task ${currentTask.srNo} Photo ${index + 1}`}
                        style={styles.image}
                      />
                    ))}
                  </div>
                ) : (
                  <span>
                    {language === "mr"
                      ? "फोटो उपलब्ध नाहीत"
                      : "No photos available"}
                  </span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-4xl bg-[#e3f2fd] p-6 rounded-xl shadow-md">
        <div className="bg-white flex justify-between items-center mb-4 px-3 py-2 rounded">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="YNK Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold">YNK</h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600"
          >
            {language === "mr" ? "English" : "मराठी"}
          </button>
        </div>

        <h2 className="text-lg text-center font-bold mb-4">
          {language === "mr"
            ? "15 दिवसांचे लक्ष्य फॉर्म - येवले"
            : "15 Days Target Form - Yewale"}
        </h2>

        {renderTask()}

        <div className="flex justify-between mt-4">
          <button
            onClick={handleBack}
            className="text-gray-500 underline disabled:text-gray-300 hover:text-blue-600"
            disabled={currentTaskIndex === 0}
          >
            {language === "mr" ? "मागे" : "Back"}
          </button>
          <button
            onClick={handleNext}
            className={`${
              currentTaskIndex < totalTasks - 1
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-green-600 hover:bg-green-700"
            } text-white px-4 py-2 rounded font-medium`}
          >
            {currentTaskIndex < totalTasks - 1
              ? language === "mr"
                ? "पुढे"
                : "Next"
              : language === "mr"
              ? "सबमिट करा"
              : "Submit"}
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default FifteenDaysTargetFormYewale;
