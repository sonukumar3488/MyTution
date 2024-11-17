const quizArr = [
  {
    id: 1,
    question: "भारत में कृषि का प्रमुख योगदान क्या है?",
    options: {
      A: "औद्योगिक विकास",
      B: "रोजगार",
      C: "शहरीकरण",
      D: "शिक्षा",
    },
    answer: "B",
  },
  {
    id: 2,
    question: "भारत में कृषि के विकास के लिए कौन सा प्रमुख कदम उठाया गया था?",
    options: {
      A: "सिंचाई परियोजनाएँ",
      B: "औद्योगिकीकरण",
      C: "बैंकिंग क्षेत्र का विकास",
      D: "शहरीकरण",
    },
    answer: "A",
  },
  {
    id: 3,
    question: "भारत में कृषि से कितने प्रतिशत लोग जुडे़ हुए हैं?",
    options: {
      A: "60%",
      B: "45%",
      C: "55%",
      D: "70%",
    },
    answer: "A",
  },
  {
    id: 4,
    question: "भारत में किस क्षेत्र का सबसे बड़ा योगदान कृषि से है?",
    options: {
      A: "धान",
      B: "गेंहू",
      C: "चाय",
      D: "कपास",
    },
    answer: "A",
  },
  {
    id: 5,
    question: "भारत में कृषि की उत्पादकता को प्रभावित करने वाले कौन से कारक हैं?",
    options: {
      A: "सिंचाई",
      B: "मूल्य निर्धारण",
      C: "जमीन की उर्वरता",
      D: "सभी उपरोक्त",
    },
    answer: "D",
  },
  {
    id: 6,
    question: "कृषि क्षेत्र के अलावा, भारत में आजीविका के अन्य स्रोत कौन से हैं?",
    options: {
      A: "सेवा क्षेत्र",
      B: "औद्योगिक क्षेत्र",
      C: "वाणिज्यिक क्षेत्र",
      D: "सभी उपरोक्त",
    },
    answer: "D",
  },
  {
    id: 7,
    question: "कृषि क्षेत्र में कितने प्रतिशत श्रमिक कार्यरत हैं?",
    options: {
      A: "50%",
      B: "60%",
      C: "70%",
      D: "40%",
    },
    answer: "B",
  },
  {
    id: 8,
    question: "भारत में सबसे अधिक रोजगार किस क्षेत्र में उत्पन्न होता है?",
    options: {
      A: "सेवा क्षेत्र",
      B: "कृषि क्षेत्र",
      C: "औद्योगिक क्षेत्र",
      D: "बैंकिंग क्षेत्र",
    },
    answer: "B",
  },
  {
    id: 9,
    question: "भारत के ग्रामीण क्षेत्रों में प्रमुख आजीविका स्रोत क्या हैं?",
    options: {
      A: "कृषि",
      B: "शहरी उद्योग",
      C: "नौकरी",
      D: "व्यापार",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "भारत के अधिकांश श्रमिक किस प्रकार की कार्यशक्ति में लगे हुए हैं?",
    options: {
      A: "मानव संसाधन",
      B: "कृषि कार्य",
      C: "तकनीकी कार्य",
      D: "औद्योगिक कार्य",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "भारत में सबसे अधिक श्रमिक किस प्रकार के कार्यों में लगे हुए हैं?",
    options: {
      A: "कृषि कार्य",
      B: "औद्योगिक कार्य",
      C: "शहरी सेवा",
      D: "प्रौद्योगिकी क्षेत्र",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "भारतीय अर्थव्यवस्था में सबसे बड़ी भूमिका किस क्षेत्र की है?",
    options: {
      A: "औद्योगिकीकरण",
      B: "कृषि",
      C: "सेवा क्षेत्र",
      D: "व्यापार",
    },
    answer: "B",
  },
  {
    id: 13,
    question: "कृषि में श्रमिकों की कार्य स्थिति में सुधार के लिए किस उपाय को बढ़ावा दिया गया?",
    options: {
      A: "मूल्य निर्धारण नीति",
      B: "सिंचाई के साधन",
      C: "मिनरल उर्वरकों का उपयोग",
      D: "उच्च तकनीकी उपकरण",
    },
    answer: "B",
  },
  {
    id: 14,
    question: "भारत के प्रमुख कृषि उत्पाद क्या हैं?",
    options: {
      A: "चाय, गेंहू, मक्का",
      B: "धान, गेंहू, चीनी",
      C: "चाय, चीनी, तेल",
      D: "गेंहू, चाय, कपास",
    },
    answer: "B",
  },
  {
    id: 15,
    question: "भारत में रोजगार की कौन सी स्थिति है?",
    options: {
      A: "अत्यधिक बेरोजगारी",
      B: "मात्र कुछ बेरोजगारी",
      C: "स्थिर बेरोजगारी",
      D: "कम बेरोजगारी",
    },
    answer: "A",
  },
  {
    id: 16,
    question: "भारत में गरीबों के लिए कृषि से अतिरिक्त आय प्राप्त करने के कौन से तरीके हैं?",
    options: {
      A: "कृषि विस्तार कार्य",
      B: "सूक्ष्म वित्त पोषण",
      C: "ग्रामीण रोजगार योजना",
      D: "सभी उपरोक्त",
    },
    answer: "D",
  },
  {
    id: 17,
    question: "भारत में कृषि में उत्पादकता वृद्धि के लिए कौन सी योजना लागू की गई है?",
    options: {
      A: "मूल्य निर्धारण नीति",
      B: "हरित क्रांति",
      C: "उदारीकरण नीति",
      D: "स्वतंत्रता संग्राम",
    },
    answer: "B",
  },
  {
    id: 18,
    question: "कृषि में सिंचाई की मुख्य आवश्यकता क्यों है?",
    options: {
      A: "जलवायु परिवर्तन",
      B: "उपज की वृद्धि",
      C: "मौसम की अनिश्चितता",
      D: "मूल्य वृद्धि",
    },
    answer: "C",
  },
  {
    id: 19,
    question: "भारत में कृषि क्षेत्र के विकास के लिए कौन से प्रमुख निवेश की आवश्यकता है?",
    options: {
      A: "सिंचाई परियोजनाओं",
      B: "औद्योगिकीकरण",
      C: "प्रौद्योगिकी में सुधार",
      D: "सभी उपरोक्त",
    },
    answer: "D",
  },
  {
    id: 20,
    question: "भारत में कृषि क्षेत्र का योगदान अर्थव्यवस्था में कितना प्रतिशत है?",
    options: {
      A: "17%",
      B: "30%",
      C: "50%",
      D: "65%",
    },
    answer: "A",
  },
];
