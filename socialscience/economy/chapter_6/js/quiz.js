const quizArr = [
  {
    id: 1,
    question: "वैश्वीकरण का क्या अर्थ है?",
    options: {
      A: "सभी देशों का एक साथ मिलकर व्यापार करना",
      B: "देशों के बीच सीमित व्यापार",
      C: "व्यापार को बढ़ाने के लिए दुनिया भर के देशों के बीच संपर्क का बढ़ना",
      D: "दुनिया भर के देशों का एक मंच पर आना",
    },
    answer: "C",
  },
  {
    id: 2,
    question: "वैश्वीकरण का मुख्य उद्देश्य क्या है?",
    options: {
      A: "उत्पादन की लागत को घटाना",
      B: "विकसित देशों का नियंत्रण बढ़ाना",
      C: "दुनिया भर में वस्तुओं और सेवाओं का व्यापार करना",
      D: "शक्ति का विकेंद्रीकरण",
    },
    answer: "C",
  },
  {
    id: 3,
    question: "वैश्वीकरण के कारण किस क्षेत्र में सबसे अधिक परिवर्तन हुआ?",
    options: {
      A: "कृषि",
      B: "विनिर्माण उद्योग",
      C: "सेवा क्षेत्र",
      D: "प्रौद्योगिकी क्षेत्र",
    },
    answer: "B",
  },
  {
    id: 4,
    question: "वैश्वीकरण के किस पहलू से लोकल बाजार प्रभावित होते हैं?",
    options: {
      A: "कम कीमतों पर विदेशी उत्पाद उपलब्ध होना",
      B: "आवश्यकता से अधिक वस्त्रों की बिक्री",
      C: "केवल स्थानीय उत्पादों की बिक्री",
      D: "सभी उपर्युक्त",
    },
    answer: "A",
  },
  {
    id: 5,
    question: "विश्व व्यापार संगठन (WTO) का मुख्य उद्देश्य क्या है?",
    options: {
      A: "सभी देशों के बीच व्यापार में वृद्धि करना",
      B: "सभी देशों की राजनीतिक स्थिरता बढ़ाना",
      C: "देशों की सीमा तय करना",
      D: "विकसित देशों को प्राथमिकता देना",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "भारत में वैश्वीकरण का क्या प्रभाव पड़ा?",
    options: {
      A: "रोजगार में वृद्धि",
      B: "कृषि का पतन",
      C: "मूल्य वृद्धि",
      D: "सभी उपर्युक्त",
    },
    answer: "D",
  },
  {
    id: 7,
    question: "भारत में वैश्वीकरण के कारण किस क्षेत्र में सबसे अधिक परिवर्तन हुआ?",
    options: {
      A: "कृषि",
      B: "विनिर्माण क्षेत्र",
      C: "सूचना प्रौद्योगिकी",
      D: "स्वास्थ्य सेवाएँ",
    },
    answer: "C",
  },
  {
    id: 8,
    question: "वैश्वीकरण का कौन सा प्रमुख सकारात्मक प्रभाव है?",
    options: {
      A: "विकसित देशों का नियंत्रण बढ़ना",
      B: "उत्पादन में कमी",
      C: "उपभोक्ताओं के लिए कम कीमतें और बेहतर विकल्प",
      D: "स्थानीय व्यापार में गिरावट",
    },
    answer: "C",
  },
  {
    id: 9,
    question: "वैश्वीकरण के कारण कौन सा क्षेत्र अधिक प्रभावित हुआ?",
    options: {
      A: "कृषि क्षेत्र",
      B: "सेवा क्षेत्र",
      C: "सूचना प्रौद्योगिकी",
      D: "विनिर्माण क्षेत्र",
    },
    answer: "D",
  },
  {
    id: 10,
    question: "वैश्वीकरण का कौन सा नकारात्मक प्रभाव हो सकता है?",
    options: {
      A: "दुनिया भर में रोजगार के अवसर बढ़ना",
      B: "स्थानीय उद्योगों का बंद होना",
      C: "उत्पादों का अधिक वितरण",
      D: "शेयर बाजार का विकास",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "वैश्वीकरण के द्वारा कौन से देशों को सबसे अधिक लाभ हुआ?",
    options: {
      A: "विकसित देश",
      B: "विकसित और विकासशील देश",
      C: "विकसित देश और गरीब देश",
      D: "गरीब देश",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "वैश्वीकरण का मुख्य कारण क्या था?",
    options: {
      A: "शक्ति का केंद्रीकरण",
      B: "आर्थिक विकास की बढ़ती दर",
      C: "सूचना प्रौद्योगिकी में प्रगति",
      D: "सभी उपर्युक्त",
    },
    answer: "C",
  },
  {
    id: 13,
    question: "WTO की स्थापना कब हुई थी?",
    options: {
      A: "1980",
      B: "1995",
      C: "2000",
      D: "2010",
    },
    answer: "B",
  },
  {
    id: 14,
    question: "वैश्वीकरण के कारण कौन सा क्षेत्र प्रभावित नहीं हुआ?",
    options: {
      A: "सूचना प्रौद्योगिकी",
      B: "कृषि",
      C: "विनिर्माण",
      D: "शेयर बाजार",
    },
    answer: "B",
  },
  {
    id: 15,
    question: "वैश्वीकरण के कारण उपभोक्ताओं को क्या लाभ हुआ?",
    options: {
      A: "मूल्य में वृद्धि",
      B: "बेहतर उत्पादों का चयन और कम कीमतें",
      C: "उत्पादों की कमी",
      D: "नौकरी की कमी",
    },
    answer: "B",
  },
  {
    id: 16,
    question: "भारत में वैश्वीकरण के बाद सबसे ज्यादा किस उद्योग ने प्रगति की?",
    options: {
      A: "कृषि",
      B: "सूचना प्रौद्योगिकी",
      C: "स्वास्थ्य सेवाएँ",
      D: "विनिर्माण",
    },
    answer: "B",
  },
  {
    id: 17,
    question: "वैश्वीकरण से क्या प्रभाव पड़ा?",
    options: {
      A: "गरीब देशों की स्थिति में सुधार हुआ",
      B: "कृषि क्षेत्र में सुधार हुआ",
      C: "विकसित देशों का नियंत्रण बढ़ा",
      D: "देशों की सामाजिक स्थिति में सुधार हुआ",
    },
    answer: "C",
  },
  {
    id: 18,
    question: "वैश्वीकरण से क्या होता है?",
    options: {
      A: "नौकरी के अवसर बढ़ते हैं",
      B: "उत्पादन और व्यापार में वृद्धि होती है",
      C: "बाजार में प्रतिस्पर्धा बढ़ती है",
      D: "सभी उपर्युक्त",
    },
    answer: "D",
  },
  {
    id: 19,
    question: "वैश्वीकरण के दौरान भारत में किसका अधिक विकास हुआ?",
    options: {
      A: "कृषि",
      B: "स्वास्थ्य",
      C: "सूचना प्रौद्योगिकी",
      D: "विनिर्माण",
    },
    answer: "C",
  },
  {
    id: 20,
    question: "निम्नलिखित में से कौन सा वैश्वीकरण का प्रभाव नहीं है?",
    options: {
      A: "भारत में सेवा क्षेत्र का विकास",
      B: "स्थानीय उद्योगों का बंद होना",
      C: "विदेशी उत्पादों का बढ़ना",
      D: "आर्थिक गतिविधियों में वृद्धि",
    },
    answer: "B",
  },
];
