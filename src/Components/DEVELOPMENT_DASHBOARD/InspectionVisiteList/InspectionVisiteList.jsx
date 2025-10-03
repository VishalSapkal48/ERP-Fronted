import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

const InspectionVisiteList = () => {
  const [language, setLanguage] = useState('english');
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    siteName: '',
    vendorName: '',
    vendorMobile: '',
    vendorWork: '',
    engineerName: '',
    date: new Date('2025-09-25T17:09:00+05:30').toISOString().split('T')[0],
    // Colour
    rubbing: { done: false, pending: false, notApplicable: false, photo: null },
    puttyFilling: { done: false, pending: false, notApplicable: false, photo: null },
    noOfCoat: { done: false, pending: false, notApplicable: false, photo: null },
    // Shutter Logo
    properFinishing: { done: false, pending: false, notApplicable: false, photo: null },
    size: { done: false, pending: false, notApplicable: false, photo: null },
    colourCode: { done: false, pending: false, notApplicable: false, photo: null },
    // Plumbing
    nrv: { done: false, pending: false, notApplicable: false, photo: null },
    pipeSize: { done: false, pending: false, notApplicable: false, photo: null },
    inletWater: { done: false, pending: false, notApplicable: false, photo: null },
    pressure: { done: false, pending: false, notApplicable: false, photo: null },
    drainageOutlet: { done: false, pending: false, notApplicable: false, photo: null },
    material: { done: false, pending: false, notApplicable: false, photo: null },
    // Electrical
    wireMaterial: { done: false, pending: false, notApplicable: false, photo: null },
    switchShocket: { done: false, pending: false, notApplicable: false, photo: null },
    sixteenAPoint: { done: false, pending: false, notApplicable: false, photo: null },
    mcb: { done: false, pending: false, notApplicable: false, photo: null },
    partitionBoard: { done: false, pending: false, notApplicable: false, photo: null },
    cctv: { done: false, pending: false, notApplicable: false, photo: null },
    earthing: { done: false, pending: false, notApplicable: false, photo: null },
    exhaustPoint: { done: false, pending: false, notApplicable: false, photo: null },
    innovatorPoint: { done: false, pending: false, notApplicable: false, photo: null },
    lightBoardCeiling: { done: false, pending: false, notApplicable: false, photo: null },
    lightCanopy: { done: false, pending: false, notApplicable: false, photo: null },
    speakerPenDrive: { done: false, pending: false, notApplicable: false, photo: null },
    lightPointWire1SqMm: { done: false, pending: false, notApplicable: false, photo: null },
    halfPointWire1SqMm: { done: false, pending: false, notApplicable: false, photo: null },
    mainBoardWire2_5SqMm: { done: false, pending: false, notApplicable: false, photo: null },
    powerPointWire2_5SqMm: { done: false, pending: false, notApplicable: false, photo: null },
    cctvWire4Plus1: { done: false, pending: false, notApplicable: false, photo: null },
    fanPointWire1SqMm: { done: false, pending: false, notApplicable: false, photo: null },
    innovatorPointWire2_5SqMm: { done: false, pending: false, notApplicable: false, photo: null },
    // Fabrication Frame
    msPipeSize: { done: false, pending: false, notApplicable: false, photo: null },
    electrician: { done: false, pending: false, notApplicable: false, photo: null },
    serviceCounterLevel: { done: false, pending: false, notApplicable: false, photo: null },
    properFinishing: { done: false, pending: false, notApplicable: false, photo: null },
    // POP
    popBracketing: { done: false, pending: false, notApplicable: false, photo: null },
    popChannelPatti: { done: false, pending: false, notApplicable: false, photo: null },
    popSheet: { done: false, pending: false, notApplicable: false, photo: null },
    popSheetSize: { done: false, pending: false, notApplicable: false, photo: null },
    popColour: { done: false, pending: false, notApplicable: false, photo: null },
    // Tiles
    tilesSize: { done: false, pending: false, notApplicable: false, photo: null },
    tilesColour: { done: false, pending: false, notApplicable: false, photo: null },
    inOutPartition: { done: false, pending: false, notApplicable: false, photo: null },
    // ACP
    acpSheet: { done: false, pending: false, notApplicable: false, photo: null },
    letterWork: { done: false, pending: false, notApplicable: false, photo: null },
    shopFirmName: { done: false, pending: false, notApplicable: false, photo: null },
    iorsIdliName: { done: false, pending: false, notApplicable: false, photo: null },
    properFinishing: { done: false, pending: false, notApplicable: false, photo: null },
    siliconFinishing: { done: false, pending: false, notApplicable: false, photo: null },
    acpSheetFinishingWork: { done: false, pending: false, notApplicable: false, photo: null },
    ceilingLight: { done: false, pending: false, notApplicable: false, photo: null },
    canopyLight: { done: false, pending: false, notApplicable: false, photo: null },
    menuFrameWork: { done: false, pending: false, notApplicable: false, photo: null },
    latterLight: { done: false, pending: false, notApplicable: false, photo: null },
    vinylSticker: { done: false, pending: false, notApplicable: false, photo: null },
    lollypop: { done: false, pending: false, notApplicable: false, photo: null },
    // INTERNET & CCTV
    internetSpeed: { done: false, pending: false, notApplicable: false, photo: null },
    cctvInstallation: { done: false, pending: false, notApplicable: false, photo: null },
    cctvSnNoPassOffice: { done: false, pending: false, notApplicable: false, photo: null },
    // AWNING SHED
    awningCompany: { done: false, pending: false, notApplicable: false, photo: null },
    zaller: { done: false, pending: false, notApplicable: false, photo: null },
    material: { done: false, pending: false, notApplicable: false, photo: null },
    trainingDemo: { done: false, pending: false, notApplicable: false, photo: null },
    planeZaller: { done: false, pending: false, notApplicable: false, photo: null },
    ynkSideMaterial: { done: false, pending: false, notApplicable: false, photo: null },
    ownerSideMaterial: { done: false, pending: false, notApplicable: false, photo: null }
  });

  const content = {
    english: {
      siteName: "Site Name:",
      vendorName: "Vendor Name:",
      vendorMobile: "Vendor Mobile No.:",
      vendorWork: "Vendor Work:",
      engineerName: "Engineer Name:",
      date: "Date:",
      work: "WORK",
      checkingPoints: "CHECKING POINTS",
      done: "DONE",
      pending: "PENDING",
      notApplicable: "NOT APPLICABLE",
      // Section titles
      colour: "COLOUR",
      shutterLogo: "SHUTTER LOGO",
      plumbing: "PLUMBING",
      electrical: "ELECTRICAL",
      fabricationFrame: "FABRICATION FRAME",
      pop: "POP",
      tiles: "TILES",
      acp: "ACP",
      internetCctv: "INTERNET & CCTV",
      awningShed: "AWNING SHED",
      // Items
      rubbing: "RUBBING THE WALL",
      puttyFilling: "PUTTY FILLING +PRIMER",
      noOfCoat: "NO OF COAT-",
      properFinishing: "PROPER FINISHING",
      size: "SIZE",
      colourCode: "COLOUR & CODE",
      nrv: "NRV",
      pipeSize: "PIPE SIZE",
      inletWater: "INLET WATER",
      pressure: "PRESSURE",
      drainageOutlet: "DRAINAGE OUTLET",
      material: "MATERIAL",
      wireMaterial: "WIRE MATERIAL",
      switchShocket: "SWITCH/SHOCKET",
      sixteenAPoint: "16A POINT",
      mcb: "MCB",
      partitionBoard: "PARTITION BOARD",
      cctv: "CCTV",
      earthing: "EARTHING",
      exhaustPoint: "EXHAUST POINT",
      innovatorPoint: "INNOVATOR POINT",
      lightBoardCeiling: "LIGHT BOARD CEILING 22W WARM WHITE",
      lightCanopy: "LIGHT CANOPY/COP 6/9W WARM WHITE",
      speakerPenDrive: "SPEAKER + PEN DRIVE",
      lightPointWire1SqMm: "LIGHT POINT WIRE 1SQ MM",
      halfPointWire1SqMm: "HALF POINT WIRE -1SQ MM",
      mainBoardWire2_5SqMm: "MAIN BOARD WIRE 2.5SQ MM",
      powerPointWire2_5SqMm: "POWER POINT WIRE-2.5 SQ MM",
      cctvWire4Plus1: "CCTV WIRE -4+1 (ANY LOCAL BRAND)",
      fanPointWire1SqMm: "FAN POINT WIRE-1 SQ MM",
      innovatorPointWire2_5SqMm: "INNVOTAR POINT WIRE -2.5 SQ MM",
      msPipeSize: "MS PIPE SIZE, SPOT COLOUR",
      electrician: "ELECTRICIAN, PARTITION BOARD, SERVICE COUNTER, LEVEL, PROPER FINISH",
      serviceCounterLevel: "SERVICE COUNTER LEVEL",
      properFinishing: "PROPER FINISHING",
      popBracketing: "POP BRACKETING",
      popChannelPatti: "POP CHANNEL PATTI SIZE AND DIMENSION",
      popSheet: "POP SHEET",
      popSheetSize: "POP SHEET SIZE",
      popColour: "POP COLOUR",
      tilesSize: "TILES SIZE",
      tilesColour: "TILES COLOUR",
      inOutPartition: "IN/OUT OFF PARTITION",
      acpSheet: "ACP SHEET",
      letterWork: "LETTER WORK",
      shopFirmName: "SHOP FIRM NAME",
      iorsIdliName: "IORS IDLI NAME",
      siliconFinishing: "SILICON FINISHING",
      acpSheetFinishingWork: "ACP SHEET FINISH WORK",
      ceilingLight: "CELLING LIGHT",
      canopyLight: "CANOPY LIGHT",
      menuFrameWork: "MENU FRAME WORK",
      latterLight: "LATTER LIGHT",
      vinylSticker: "VINYL STICKER",
      lollypop: "LOLLYPOP",
      internetSpeed: "INTERNET (ABOVE 50 MBPS)",
      cctvInstallation: "CCTV (ONLY CP PLUS)",
      cctvSnNoPassOffice: "CCTV SN.NO & PASS OFFICE",
      awningCompany: "AWNING SHED COMPANY/ COLOUR CODE",
      zaller: "ZALLER 6\"",
      planeZaller: "PLANE ZALLER",
      ynkSideMaterial: "YNK SIDE ALL MATERIAL",
      ownerSideMaterial: "OWNER SIDE ALL MATERIAL",
      awningMaterial: "MATERIAL",
      trainingDemo: "TRAINING DEMO",
      // Navigation
      nextPage: "Next",
      prevPage: "Previous",
      printReport: "Print Report",
      exportData: "Export Data",
      takeScreenshot: "Take Screenshot"
    },
    marathi: {
      siteName: "साइट नाव:",
      vendorName: "विक्रेता नाव:",
      vendorMobile: "विक्रेता मोबाईल नंबर:",
      vendorWork: "विक्रेता काम:",
      engineerName: "अभियंता नाव:",
      date: "दिनांक:",
      work: "काम",
      checkingPoints: "तपासणी बिंदू",
      done: "पूर्ण",
      pending: "प्रलंबित",
      notApplicable: "लागू नाही",
      // Section titles
      colour: "रंग",
      shutterLogo: "शटर लोगो",
      plumbing: "प्लंबिंग",
      electrical: "इलेक्ट्रिकल",
      fabricationFrame: "फॅब्रिकेशन फ्रेम",
      pop: "पीओपी",
      tiles: "टाइल्स",
      acp: "एसीपी",
      internetCctv: "इंटरनेट आणि सीसीटीव्ही",
      awningShed: "ऑव्हिंग शेड",
      // Items
      rubbing: "लावणे भिंतीवर",
      puttyFilling: "पुटी भरणे + प्राइमर",
      noOfCoat: "कोटांची संख्या-",
      properFinishing: "योग्य फिनिशिंग",
      size: "आकार",
      colourCode: "रंग आणि कोड",
      nrv: "एनआरव्ही",
      pipeSize: "पाइप साइज",
      inletWater: "इनलेट वॉटर",
      pressure: "प्रेशर",
      drainageOutlet: "ड्रेनेज आउटलेट",
      material: "साहित्य",
      wireMaterial: "वायर मटेरियल",
      switchShocket: "स्विच/शॉकेत",
      sixteenAPoint: "16A पॉईंट",
      mcb: "एमसीबी",
      partitionBoard: "पार्टिशन बोर्ड",
      cctv: "सीसीटीव्ही",
      earthing: "अर्थिंग",
      exhaustPoint: "एक्झॉस्ट पॉईंट",
      innovatorPoint: "इनोव्हेटर पॉईंट",
      lightBoardCeiling: "लाइट बोर्ड सीलिंग 22W वॉर्म व्हाइट",
      lightCanopy: "लाइट कॅनोपी/सीओपी 6/9W वॉर्म व्हाइट",
      speakerPenDrive: "स्पीकर + पेन ड्राइव्ह",
      lightPointWire1SqMm: "लाइट पॉईंट वायर 1SQ MM",
      halfPointWire1SqMm: "हाफ पॉईंट वायर -1SQ MM",
      mainBoardWire2_5SqMm: "मेन बोर्ड वायर 2.5SQ MM",
      powerPointWire2_5SqMm: "पॉवर पॉईंट वायर-2.5 SQ MM",
      cctvWire4Plus1: "सीसीटीव्ही वायर -4+1 (कुठलीही स्थानिक ब्रँड)",
      fanPointWire1SqMm: "फॅन पॉईंट वायर-1 SQ MM",
      innovatorPointWire2_5SqMm: "इनोव्हेटर पॉईंट वायर -2.5 SQ MM",
      msPipeSize: "एमएस पाइप साइज, स्पॉट रंग",
      electrician: "इलेक्ट्रिशियन, पार्टिशन बोर्ड, सेवा काउंटर, स्तर, योग्य फिनिशिंग",
      serviceCounterLevel: "सेवा काउंटर स्तर",
      properFinishing: "योग्य फिनिशिंग",
      popBracketing: "पीओपी ब्रॅकेटिंग",
      popChannelPatti: "पीओपी चॅनेल पट्टी साइज आणि माप",
      popSheet: "पीओपी शीट",
      popSheetSize: "पीओपी शीट साइज",
      popColour: "पीओपी रंग",
      tilesSize: "टाइल्स साइज",
      tilesColour: "टाइल्स रंग",
      inOutPartition: "इन/आउट ऑफ पार्टिशन",
      acpSheet: "एसीपी शीट",
      letterWork: "लेटर वर्क",
      shopFirmName: "शॉप फर्म नाव",
      iorsIdliName: "आयओआरएस इडली नाव",
      siliconFinishing: "सिलिकॉन फिनिशिंग",
      acpSheetFinishingWork: "एसीपी शीट फिनिशिंग वर्क",
      ceilingLight: "सीलिंग लाइट",
      canopyLight: "कॅनोपी लाइट",
      menuFrameWork: "मेनू फ्रेम वर्क",
      latterLight: "लेटर लाइट",
      vinylSticker: "व्हिनिल स्टिकर",
      lollypop: "लॉलीपॉप",
      internetSpeed: "इंटरनेट (50 एमबीपीएस पेक्षा जास्त)",
      cctvInstallation: "सीसीटीव्ही (फक्त सीपी प्लस)",
      cctvSnNoPassOffice: "सीसीटीव्ही SN.NO आणि पास ऑफिस",
      awningCompany: "ऑव्हिंग शेड कंपनी/ रंग कोड",
      zaller: "झलर 6\"",
      planeZaller: "प्लेन झलर",
      ynkSideMaterial: "वायएनके साइड सर्व साहित्य",
      ownerSideMaterial: "मालक साइड सर्व साहित्य",
      awningMaterial: "साहित्य",
      trainingDemo: "प्रशिक्षण डेमो",
      // Navigation
      nextPage: "पुढील पान",
      prevPage: "मागील पान",
      printReport: "अहवाल प्रिंट करा",
      exportData: "डेटा एक्सपोर्ट करा",
      takeScreenshot: "स्क्रीनशॉट घ्या"
    }
  };

  // Define pages with their respective sections in the new order
  const pages = [
    {
      title: content[language].colour,
      sections: [
        { key: 'rubbing', label: content[language].rubbing },
        { key: 'puttyFilling', label: content[language].puttyFilling },
        { key: 'noOfCoat', label: content[language].noOfCoat }
      ]
    },
    {
      title: content[language].shutterLogo,
      sections: [
        { key: 'properFinishing', label: content[language].properFinishing },
        { key: 'size', label: content[language].size },
        { key: 'colourCode', label: content[language].colourCode }
      ]
    },
    {
      title: content[language].plumbing,
      sections: [
        { key: 'nrv', label: content[language].nrv },
        { key: 'pipeSize', label: content[language].pipeSize },
        { key: 'inletWater', label: content[language].inletWater },
        { key: 'pressure', label: content[language].pressure },
        { key: 'drainageOutlet', label: content[language].drainageOutlet },
        { key: 'material', label: content[language].material }
      ]
    },
    {
      title: content[language].electrical,
      sections: [
        { key: 'wireMaterial', label: content[language].wireMaterial },
        { key: 'switchShocket', label: content[language].switchShocket },
        { key: 'cctv', label: content[language].cctv },
        { key: 'exhaustPoint', label: content[language].exhaustPoint },
        { key: 'lightBoardCeiling', label: content[language].lightBoardCeiling },
        { key: 'lightCanopy', label: content[language].lightCanopy },
        { key: 'speakerPenDrive', label: content[language].speakerPenDrive },
        { key: 'lightPointWire1SqMm', label: content[language].lightPointWire1SqMm },
        { key: 'halfPointWire1SqMm', label: content[language].halfPointWire1SqMm },
        { key: 'mainBoardWire2_5SqMm', label: content[language].mainBoardWire2_5SqMm },
        { key: 'powerPointWire2_5SqMm', label: content[language].powerPointWire2_5SqMm },
        { key: 'cctvWire4Plus1', label: content[language].cctvWire4Plus1 },
        { key: 'fanPointWire1SqMm', label: content[language].fanPointWire1SqMm },
        { key: 'innovatorPointWire2_5SqMm', label: content[language].innovatorPointWire2_5SqMm }
      ]
    },
    {
      title: content[language].fabricationFrame,
      sections: [
        { key: 'msPipeSize', label: content[language].msPipeSize },
        { key: 'electrician', label: content[language].electrician },
        { key: 'serviceCounterLevel', label: content[language].serviceCounterLevel },
        { key: 'properFinishing', label: content[language].properFinishing }
      ]
    },
    {
      title: content[language].pop,
      sections: [
        { key: 'popBracketing', label: content[language].popBracketing },
        { key: 'popChannelPatti', label: content[language].popChannelPatti },
        { key: 'popSheet', label: content[language].popSheet },
        { key: 'popSheetSize', label: content[language].popSheetSize },
        { key: 'popColour', label: content[language].popColour }
      ]
    },
    {
      title: content[language].tiles,
      sections: [
        { key: 'tilesSize', label: content[language].tilesSize },
        { key: 'tilesColour', label: content[language].tilesColour },
        { key: 'inOutPartition', label: content[language].inOutPartition }
      ]
    },
    {
      title: content[language].acp,
      sections: [
        { key: 'acpSheet', label: content[language].acpSheet },
        { key: 'letterWork', label: content[language].letterWork },
        { key: 'shopFirmName', label: content[language].shopFirmName },
        { key: 'iorsIdliName', label: content[language].iorsIdliName },
        { key: 'properFinishing', label: content[language].properFinishing },
        { key: 'siliconFinishing', label: content[language].siliconFinishing },
        { key: 'acpSheetFinishingWork', label: content[language].acpSheetFinishingWork },
        { key: 'ceilingLight', label: content[language].ceilingLight },
        { key: 'canopyLight', label: content[language].canopyLight },
        { key: 'menuFrameWork', label: content[language].menuFrameWork },
        { key: 'latterLight', label: content[language].latterLight },
        { key: 'vinylSticker', label: content[language].vinylSticker },
        { key: 'lollypop', label: content[language].lollypop }
      ]
    },
    {
      title: content[language].internetCctv,
      sections: [
        { key: 'internetSpeed', label: content[language].internetSpeed },
        { key: 'cctvInstallation', label: content[language].cctvInstallation },
        { key: 'cctvSnNoPassOffice', label: content[language].cctvSnNoPassOffice }
      ]
    },
    {
      title: content[language].awningShed,
      sections: [
        { key: 'awningCompany', label: content[language].awningCompany },
        { key: 'zaller', label: content[language].zaller },
        { key: 'material', label: content[language].awningMaterial },
        { key: 'trainingDemo', label: content[language].trainingDemo },
        { key: 'planeZaller', label: content[language].planeZaller },
        { key: 'ynkSideMaterial', label: content[language].ynkSideMaterial },
        { key: 'ownerSideMaterial', label: content[language].ownerSideMaterial }
      ]
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (section, type) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        done: false,
        pending: false,
        notApplicable: false,
        [type]: true
      }
    }));
  };

  const handlePhotoUpload = (section, event) => {
    const file = event.target.files[0];
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        photo: file
      }
    }));
  };

  const tableRef = useRef(null);

  const handleScreenshot = () => {
    if (tableRef.current) {
      html2canvas(tableRef.current).then(canvas => {
        const link = document.createElement('a');
        link.download = `screenshot_${new Date().toISOString().replace(/[:.]/g, '-')}.png`;
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  const CheckboxRow = ({ label, checkingPoint, section }) => {
    const getImageSource = (sectionKey) => {
      switch (sectionKey) {
        case 'rubbing': return '/Images/Inspection Visit List NB/RubbingTheWall.png';
        case 'puttyFilling': return '/Images/fallback.png';
        case 'noOfCoat': return '/Images/fallback.png';
        case 'properFinishing': return '/Images/Inspection Visit List NB/ShutterLogo.png';
        case 'size': return '/Images/fallback.png';
        case 'colourCode': return '/Images/fallback.png';
        case 'nrv': return '/Images/Inspection Visit List NB/Plumbing.png';
        case 'pipeSize': return '/Images/Inspection Visit List NB/FabricationFrameMsPipeSize.png';
        case 'inletWater': return '/Images/Inspection Visit List NB/Plumbing.png';
        case 'pressure': return '/Images/Inspection Visit List NB/PlumbingMaterial.png';
        case 'drainageOutlet': return '/Images/Inspection Visit List NB/Plumbing.png';
        case 'material': return '/Images/Inspection Visit List NB/PlumbingMaterial.png';
        case 'wireMaterial': return '/Images/Inspection Visit List NB/WriteMaterial.png';
        case 'switchShocket': return '/Images/Inspection Visit List NB/SwitchShocket.png';
        case 'cctv': return '/Images/Inspection Visit List NB/CCTV.png';
        case 'exhaustPoint': return '/Images/Inspection Visit List NB/ExhaustPointQty.png';
        case 'lightBoardCeiling': return '/Images/Inspection Visit List NB/LightBoardChelling22WWarmwhite.png';
        case 'lightCanopy': return '/Images/Inspection Visit List NB/CanopyLight.png';
        case 'speakerPenDrive': return '/Images/Inspection Visit List NB/SpeakerPenDrive.png';
        case 'lightPointWire1SqMm': return '/Images/fallback.png';
        case 'halfPointWire1SqMm': return '/Images/fallback.png';
        case 'mainBoardWire2_5SqMm': return '/Images/fallback.png';
        case 'powerPointWire2_5SqMm': return '/Images/Inspection Visit List NB/PowerPointWire.png';
        case 'cctvWire4Plus1': return '/Images/Inspection Visit List NB/CCTVWire.png';
        case 'fanPointWire1SqMm': return '/Images/Inspection Visit List NB/FanPointWire.png';
        case 'innovatorPointWire2_5SqMm': return '/Images/Inspection Visit List NB/InnvotarPointWire.png';
        case 'msPipeSize': return '/Images/Inspection Visit List NB/FabricationFrameMsPipeSize.png';
        case 'electrician': return '/Images/Inspection Visit List NB/ElectricianPartitionBoardPoint.png';
        case 'serviceCounterLevel': return '/Images/fallback.png';
        case 'properFinishing': return '/Images/fallback.png';
        case 'popBracketing': return '/Images/fallback.png';
        case 'popChannelPatti': return '/Images/Inspection Visit List NB/PopChannelPattiSize.png';
        case 'popSheet': return '/Images/Inspection Visit List NB/PopSheet.png';
        case 'popSheetSize': return '/Images/fallback.png';
        case 'popColour': return '/Images/fallback.png';
        case 'tilesSize': return '/Images/Inspection Visit List NB/InOutPartitionImg.png';
        case 'tilesColour': return '/Images/Inspection Visit List NB/TilesColour.png';
        case 'inOutPartition': return '/Images/Inspection Visit List NB/InOutPartitionImg.png';
        case 'acpSheet': return '/Images/Inspection Visit List NB/ACPsheet.png';
        case 'letterWork': return '/Images/Inspection Visit List NB/LetterWorkFinishing.png';
        case 'shopFirmName': return '/Images/Inspection Visit List NB/ShopFirmName.png';
        case 'iorsIdliName': return '/Images/Inspection Visit List NB/IdliName.png';
        case 'siliconFinishing': return '/Images/fallback.png';
        case 'acpSheetFinishingWork': return '/Images/fallback.png';
        case 'ceilingLight': return '/Images/Inspection Visit List NB/CellingLight.png';
        case 'canopyLight': return '/Images/Inspection Visit List NB/CanopyLight.png';
        case 'menuFrameWork': return '/Images/Inspection Visit List NB/MenuFrameWork.png';
        case 'latterLight': return '/Images/Inspection Visit List NB/LatterLight.png';
        case 'vinylSticker': return '/Images/Inspection Visit List NB/VinylSticker.png';
        case 'lollypop': return '/Images/Inspection Visit List NB/LollyPop.png';
        case 'internetSpeed': return '/Images/Inspection Visit List NB/Internet.png';
        case 'cctvInstallation': return '/Images/Inspection Visit List NB/CCTVCPPlus.png';
        case 'cctvSnNoPassOffice': return '/Images/fallback.png';
        case 'awningCompany': return '/Images/Inspection Visit List NB/AwingShedCompanyColor.png';
        case 'zaller': return '/Images/fallback.png';
        case 'planeZaller': return '/Images/fallback.png';
        case 'ynkSideMaterial': return '/Images/fallback.png';
        case 'ownerSideMaterial': return '/Images/fallback.png';
        case 'trainingDemo': return '/Images/fallback.png';
        default: return '/Images/fallback.png';
      }
    };

    const shouldShowImage = getImageSource(section) !== '/Images/fallback.png';

    return (
      <tr className="border-b">
        <td className="px-4 py-3 font-medium text-left border-r bg-gray-50">{label}</td>
        <td className="px-4 py-3 text-left border-r">{checkingPoint}</td>
        <td className="px-4 py-3 text-center border-r">
          <input
            type="radio"
            name={section}
            checked={formData[section]?.done || false}
            onChange={() => handleCheckboxChange(section, 'done')}
            className="w-4 h-4 text-green-600"
          />
        </td>
        <td className="px-4 py-3 text-center border-r">
          <input
            type="radio"
            name={section}
            checked={formData[section]?.pending || false}
            onChange={() => handleCheckboxChange(section, 'pending')}
            className="w-4 h-4 text-yellow-600"
          />
        </td>
        <td className="px-4 py-3 text-center border-r">
          <input
            type="radio"
            name={section}
            checked={formData[section]?.notApplicable || false}
            onChange={() => handleCheckboxChange(section, 'notApplicable')}
            className="w-4 h-4 text-red-600"
          />
        </td>
        <td className="px-4 py-3 text-center">
          <div className="flex flex-col items-center">
            {shouldShowImage && (
              <img
                src={getImageSource(section)}
                alt={`${section} Reference`}
                style={{ height: '4rem', width: '4rem' }}
              />
            )}
            {/* Upload Input */}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handlePhotoUpload(section, e)}
              className="w-full text-sm text-gray-600"
            />
            {formData[section]?.photo && (
              <p className="text-xs text-gray-500 mt-1">Selected: {formData[section].photo.name}</p>
            )}
          </div>
        </td>
      </tr>
    );
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'english' ? 'marathi' : 'english');
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-blue-100 to-blue-200">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white flex justify-between items-center mb-4 px-4 py-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <img
                src="/Images/Inspection Visit List NB/YNKLogo.png"
                alt="YNK Logo"
                style={{ height: '2.5rem', width: '2.5rem' }}
                onError={(e) => {
                  e.target.src = '/Images/fallback.png';
                }}
              />
              <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>YNK</h1>
            </div>
            <button
              onClick={handleLanguageToggle}
              className="text-sm text-gray-600 underline hover:text-blue-600"
            >
              {language === "english" ? "मराठी" : "English"}
            </button>
          </div>
        </div>
      </div>

      {/* Title and Form */}
      <div className="bg-gradient-to-b from-blue-100 to-blue-200 p-6">
        <h2 className="text-2xl font-bold text-center mb-8">{pages[currentPage]?.title || 'Naadbramha Project Details'}</h2>
        
        {/* Form Fields - Only show on the first page or as needed */}
        {currentPage === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-black">{currentContent.siteName}</label>
              <input
                type="text"
                value={formData.siteName}
                onChange={(e) => handleInputChange('siteName', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter Site Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-black">{currentContent.vendorName}</label>
              <input
                type="text"
                value={formData.vendorName}
                onChange={(e) => handleInputChange('vendorName', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter Vendor Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-black">{currentContent.vendorMobile}</label>
              <input
                type="text"
                value={formData.vendorMobile}
                onChange={(e) => handleInputChange('vendorMobile', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter Mobile No."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-black">{currentContent.vendorWork}</label>
              <select
                value={formData.vendorWork}
                onChange={(e) => handleInputChange('vendorWork', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Work</option>
                <option value="DEMOLITION">DEMOLITION</option>
                <option value="CONSTRUCTION">CONSTRUCTION</option>
                <option value="RENOVATION">RENOVATION</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-black">{currentContent.engineerName}</label>
              <input
                type="text"
                value={formData.engineerName}
                onChange={(e) => handleInputChange('engineerName', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter Engineer Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-black">{currentContent.date}</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-blue-100 to-blue-200 min-h-screen">
        <div className="max-w-7xl mx-auto p-6">
          {/* Current Page Content */}
          {pages[currentPage] && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Electrical and Fabrication Frames */}
              <div className="p-4" ref={tableRef}>
                {currentPage === 3 && (
                  <div className="mb-4 p-4 border border-gray-300 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Electrical Sub-Section</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-blue-200 text-black">
                            <th className="px-4 py-4 text-left border font-semibold w-1/4">{currentContent.work}</th>
                            <th className="px-4 py-4 text-left border font-semibold w-1/3">{currentContent.checkingPoints}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.done}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.pending}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.notApplicable}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/6">PHOTOS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pages[currentPage].sections.map((section, index) => (
                            <CheckboxRow
                              key={section.key}
                              label={section.label}
                              checkingPoint={section.label}
                              section={section.key}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {currentPage === 4 && (
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Fabrication Sub-Section</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-blue-200 text-black">
                            <th className="px-4 py-4 text-left border font-semibold w-1/4">{currentContent.work}</th>
                            <th className="px-4 py-4 text-left border font-semibold w-1/3">{currentContent.checkingPoints}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.done}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.pending}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.notApplicable}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/6">PHOTOS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pages[currentPage].sections.map((section, index) => (
                            <CheckboxRow
                              key={section.key}
                              label={section.label}
                              checkingPoint={section.label}
                              section={section.key}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {currentPage === 1 && (
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Shutter Logo Sub-Section</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-blue-200 text-black">
                            <th className="px-4 py-4 text-left border font-semibold w-1/4">{currentContent.work}</th>
                            <th className="px-4 py-4 text-left border font-semibold w-1/3">{currentContent.checkingPoints}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.done}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.pending}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.notApplicable}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/6">PHOTOS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pages[currentPage].sections.map((section, index) => (
                            <CheckboxRow
                              key={section.key}
                              label={section.label}
                              checkingPoint={section.label}
                              section={section.key}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {currentPage === 5 && (
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">POP Sub-Section</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-blue-200 text-black">
                            <th className="px-4 py-4 text-left border font-semibold w-1/4">{currentContent.work}</th>
                            <th className="px-4 py-4 text-left border font-semibold w-1/3">{currentContent.checkingPoints}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.done}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.pending}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.notApplicable}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/6">PHOTOS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pages[currentPage].sections.map((section, index) => (
                            <CheckboxRow
                              key={section.key}
                              label={section.label}
                              checkingPoint={section.label}
                              section={section.key}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {currentPage === 7 && (
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">ACP Sub-Section</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-blue-200 text-black">
                            <th className="px-4 py-4 text-left border font-semibold w-1/4">{currentContent.work}</th>
                            <th className="px-4 py-4 text-left border font-semibold w-1/3">{currentContent.checkingPoints}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.done}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.pending}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.notApplicable}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/6">PHOTOS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pages[currentPage].sections.map((section, index) => (
                            <CheckboxRow
                              key={section.key}
                              label={section.label}
                              checkingPoint={section.label}
                              section={section.key}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {currentPage === 8 && (
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Internet & CCTV Sub-Section</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-blue-200 text-black">
                            <th className="px-4 py-4 text-left border font-semibold w-1/4">{currentContent.work}</th>
                            <th className="px-4 py-4 text-left border font-semibold w-1/3">{currentContent.checkingPoints}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.done}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.pending}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.notApplicable}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/6">PHOTOS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pages[currentPage].sections.map((section, index) => (
                            <CheckboxRow
                              key={section.key}
                              label={section.label}
                              checkingPoint={section.label}
                              section={section.key}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {currentPage === 9 && (
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Awning Shed Sub-Section</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-blue-200 text-black">
                            <th className="px-4 py-4 text-left border font-semibold w-1/4">{currentContent.work}</th>
                            <th className="px-4 py-4 text-left border font-semibold w-1/3">{currentContent.checkingPoints}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.done}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.pending}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.notApplicable}</th>
                            <th className="px-4 py-4 text-center border font-semibold w-1/6">PHOTOS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pages[currentPage].sections.map((section, index) => (
                            <CheckboxRow
                              key={section.key}
                              label={section.label}
                              checkingPoint={section.label}
                              section={section.key}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {currentPage !== 1 && currentPage !== 3 && currentPage !== 4 && currentPage !== 5 && currentPage !== 7 && currentPage !== 8 && currentPage !== 9 && (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-200 text-black">
                          <th className="px-4 py-4 text-left border font-semibold w-1/4">{currentContent.work}</th>
                          <th className="px-4 py-4 text-left border font-semibold w-1/3">{currentContent.checkingPoints}</th>
                          <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.done}</th>
                          <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.pending}</th>
                          <th className="px-4 py-4 text-center border font-semibold w-1/12">{currentContent.notApplicable}</th>
                          <th className="px-4 py-4 text-center border font-semibold w-1/6">PHOTOS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pages[currentPage].sections.map((section, index) => (
                          <CheckboxRow
                            key={section.key}
                            label={section.label}
                            checkingPoint={section.label}
                            section={section.key}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Move Next and Previous Buttons below Photos section */}
              <div className="flex justify-between items-center mt-6 p-4">
                <button
                  onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                  disabled={currentPage === 0}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    currentPage === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  ← {currentContent.prevPage}
                </button>
                <div className="text-center">
                  {/* <h3 className="text-xl font-bold text-blue-700">{pages[currentPage]?.title}</h3> */}
                  <p className="text-sm text-gray-600">Page {currentPage + 1} of {pages.length}</p>
                </div>
                <button
                  onClick={() => setCurrentPage(Math.min(pages.length - 1, currentPage + 1))}
                  disabled={currentPage === pages.length - 1}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    currentPage === pages.length - 1
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {currentContent.nextPage} →
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons - Only show on last page */}
          {currentPage === pages.length - 1 && (
            <div className="mt-8 flex justify-center gap-4">
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InspectionVisiteList;