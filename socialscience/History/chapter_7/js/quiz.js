const quizArr = [
  {
    id: 1,
    question: "शहरीकरण से क्या अभिप्रेत है?",
    options: {
      A: "ग्रामीण क्षेत्रों का विस्तार",
      B: "नगरों का बढ़ता हुआ विस्तार",
      C: "कृषि क्षेत्र का विकास",
      D: "औद्योगिक क्षेत्र का संकुचन",
    },
    answer: "B",
  },
  {
    id: 2,
    question: "शहरीकरण के प्रमुख कारण क्या हैं?",
    options: {
      A: "आवश्यकता से अधिक जनसंख्या",
      B: "ग्रामीण क्षेत्र में रोजगार के अवसरों का अभाव",
      C: "प्राकृतिक आपदाएँ",
      D: "पानी की कमी",
    },
    answer: "B",
  },
  {
    id: 3,
    question: "भारत में शहरीकरण का प्रतिशत कितना है?",
    options: {
      A: "24%",
      B: "30%",
      C: "35%",
      D: "40%",
    },
    answer: "A",
  },
  {
    id: 4,
    question: "भारत में शहरीकरण के प्रमुख कारणों में से कौन सा है?",
    options: {
      A: "प्राकृतिक संसाधनों की कमी",
      B: "औद्योगिकीकरण",
      C: "शहरी जीवन की कठिनाई",
      D: "ग्रामीण इलाकों का विकास",
    },
    answer: "B",
  },
  {
    id: 5,
    question: "भारत में शहरीकरण के मुख्य परिणाम क्या हो सकते हैं?",
    options: {
      A: "आर्थिक विकास",
      B: "प्राकृतिक संसाधनों का दोहन",
      C: "कृषि उत्पादन में कमी",
      D: "सभी उपरोक्त",
    },
    answer: "D",
  },
  {
    id: 6,
    question: "शहरी जीवन में निम्नलिखित में से कौन सी चुनौती सबसे बड़ी है?",
    options: {
      A: "स्वास्थ्य सेवाओं की कमी",
      B: "शहरी जीवन की लागत",
      C: "वायु प्रदूषण",
      D: "सभी उपरोक्त",
    },
    answer: "D",
  },
  {
    id: 7,
    question: "भारत में कौन सा शहर सबसे अधिक शहरीकरण का शिकार है?",
    options: {
      A: "मुंबई",
      B: "दिल्ली",
      C: "कोलकाता",
      D: "चेन्नई",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "शहरीकरण के कारण किसे अधिक प्रभावित किया गया है?",
    options: {
      A: "कृषि क्षेत्र",
      B: "औद्योगिक क्षेत्र",
      C: "प्राकृतिक संसाधन",
      D: "संस्कृति",
    },
    answer: "C",
  },
  {
    id: 9,
    question: "शहरी जीवन की निम्नलिखित समस्याओं में से कौन सी समस्या प्रमुख है?",
    options: {
      A: "निरंतर बिजली की कमी",
      B: "विकसित बुनियादी सुविधाओं की कमी",
      C: "पानी की कमी",
      D: "ध्वनि प्रदूषण",
    },
    answer: "B",
  },
  {
    id: 10,
    question: "भारत में शहरीकरण को कैसे नियंत्रित किया जा सकता है?",
    options: {
      A: "नवीन शहरी नीति लागू करके",
      B: "ग्रामीण विकास को बढ़ावा देकर",
      C: "औद्योगिकीकरण को कम करके",
      D: "सभी उपरोक्त उपायों द्वारा",
    },
    answer: "D",
  },
  {
    id: 11,
    question: "शहरीकरण का क्या सामाजिक प्रभाव पड़ता है?",
    options: {
      A: "संस्कृति में परिवर्तन",
      B: "आर्थिक असमानता में वृद्धि",
      C: "स्वास्थ्य पर नकारात्मक प्रभाव",
      D: "सभी उपरोक्त",
    },
    answer: "D",
  },
  {
    id: 12,
    question: "शहरीकरण में वृद्धि का सबसे बड़ा कारण क्या है?",
    options: {
      A: "ग्रामीण क्षेत्रों में स्वच्छता की कमी",
      B: "शहरी क्षेत्रों में रोजगार के अवसर",
      C: "कृषि में मंदी",
      D: "प्राकृतिक आपदाएँ",
    },
    answer: "B",
  },
  {
    id: 13,
    question: "शहरीकरण के कारण ग्रामीण क्षेत्रों में क्या समस्याएँ उत्पन्न होती हैं?",
    options: {
      A: "संसाधनों की कमी",
      B: "श्रम की कमी",
      C: "आवागमन में कठिनाई",
      D: "स्वास्थ्य सेवाओं की कमी",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "शहरी जीवन में पर्यावरणीय प्रभाव क्या होते हैं?",
    options: {
      A: "वायु प्रदूषण",
      B: "पानी की कमी",
      C: "शोर प्रदूषण",
      D: "सभी उपरोक्त",
    },
    answer: "D",
  },
  {
    id: 15,
    question: "शहरीकरण से प्रभावित क्षेत्रों में क्या विकासात्मक कदम उठाए जा सकते हैं?",
    options: {
      A: "स्वच्छता परियोजनाएँ",
      B: "पुनर्चक्रण प्रणाली",
      C: "स्वस्थ आवास योजना",
      D: "सभी उपरोक्त",
    },
    answer: "D",
  },
  {
    id: 16,
    question: "शहरी जीवन में आय की असमानता किस कारण बढ़ती है?",
    options: {
      A: "स्वास्थ्य सेवाओं की कमी",
      B: "रोजगार की असमानता",
      C: "शिक्षा की कमी",
      D: "सभी उपरोक्त",
    },
    answer: "B",
  },
  {
    id: 17,
    question: "शहरीकरण के कारण कौन सा सामाजिक परिवर्तन देखा जाता है?",
    options: {
      A: "संस्कृति में समरस्ता",
      B: "नौकरी की असमानताएँ",
      C: "प्राकृतिक संसाधनों का उपयोग",
      D: "सभी उपरोक्त",
    },
    answer: "B",
  },
  {
    id: 18,
    question: "शहरी जीवन में प्रदूषण को कम करने के लिए कौन सा उपाय लिया जा सकता है?",
    options: {
      A: "सार्वजनिक परिवहन का उपयोग बढ़ाना",
      B: "ग्रीन स्पेस को बढ़ाना",
      C: "विकसित जल प्रबंधन प्रणाली",
      D: "सभी उपरोक्त",
    },
    answer: "D",
  },
  {
    id: 19,
    question: "भारत में शहरीकरण में वृद्धि का मुख्य कारण क्या है?",
    options: {
      A: "प्राकृतिक आपदाएँ",
      B: "प्रौद्योगिकी में सुधार",
      C: "ग्रामीण क्षेत्र में रोजगार की कमी",
      D: "शहरी क्षेत्रों में स्वास्थ्य सेवाओं की उपलब्धता",
    },
    answer: "C",
  },
  {
    id: 20,
    question: "शहरी जीवन में प्रमुख सामाजिक संरचनाओं में से कौन सा सबसे अधिक प्रभावित होता है?",
    options: {
      A: "शिक्षा",
      B: "परिवार संरचना",
      C: "स्वास्थ्य",
      D: "धार्मिक विश्वास",
    },
    answer: "B",
  },
];