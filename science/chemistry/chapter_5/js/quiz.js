const quizArr = [
  {
    id: 1,
    question: "आवर्त सारणी में कितने समूह (Groups) होते हैं?",
    options: {
      A: "18",
      B: "7",
      C: "12",
      D: "20",
    },
    answer: "A",
  },
  {
    id: 2,
    question: "आवर्त सारणी में कितने आवर्त (Periods) होते हैं?",
    options: {
      A: "7",
      B: "8",
      C: "10",
      D: "18",
    },
    answer: "A",
  },
  {
    id: 3,
    question: "आधुनिक आवर्त सारणी में तत्वों को किस आधार पर वर्गीकृत किया गया है?",
    options: {
      A: "परमाणु संख्या",
      B: "परमाणु द्रव्यमान",
      C: "परमाणु आयतन",
      D: "इलेक्ट्रॉन संख्या",
    },
    answer: "A",
  },
  {
    id: 4,
    question: "आवर्त नियम किसने दिया था?",
    options: {
      A: "मेनडलीव",
      B: "हेनरी मोसले",
      C: "न्यूटन",
      D: "बोहर",
    },
    answer: "B",
  },
  {
    id: 5,
    question: "मेनडलीव की आवर्त सारणी में तत्वों को किस आधार पर व्यवस्थित किया गया था?",
    options: {
      A: "परमाणु द्रव्यमान",
      B: "परमाणु संख्या",
      C: "इलेक्ट्रॉन विन्यास",
      D: "रासायनिक गुण",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "कौन-सा तत्व सबसे हल्का होता है?",
    options: {
      A: "हाइड्रोजन",
      B: "हीलियम",
      C: "लिथियम",
      D: "ऑक्सीजन",
    },
    answer: "A",
  },
  {
    id: 7,
    question: "धातुएँ, अधातुएँ और उपधातुएँ किसमें पाई जाती हैं?",
    options: {
      A: "आवर्त सारणी में",
      B: "परमाणु संरचना में",
      C: "अणु संरचना में",
      D: "कुल भार में",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "हलोजन तत्व किस समूह में पाए जाते हैं?",
    options: {
      A: "समूह 17",
      B: "समूह 16",
      C: "समूह 18",
      D: "समूह 1",
    },
    answer: "A",
  },
  {
    id: 9,
    question: "निष्क्रिय गैसें आवर्त सारणी के किस समूह में होती हैं?",
    options: {
      A: "समूह 18",
      B: "समूह 1",
      C: "समूह 2",
      D: "समूह 14",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "उपधातुओं को और क्या कहा जाता है?",
    options: {
      A: "मेटलॉइड्स",
      B: "आयनों",
      C: "धातुओं",
      D: "अधातुओं",
    },
    answer: "A",
  },
  {
    id: 11,
    question: "आवर्त सारणी में तत्वों के गुण किस प्रकार बदलते हैं?",
    options: {
      A: "क्रमबद्ध",
      B: "अव्यवस्थित",
      C: "बेतरतीब",
      D: "सामान्य",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "लैंथेनाइड्स और एक्टिनाइड्स को आवर्त सारणी में कहाँ रखा गया है?",
    options: {
      A: "नीचे अलग",
      B: "ऊपर दाईं ओर",
      C: "बीच में",
      D: "ऊपर बाईं ओर",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "समूह 1 के तत्वों को क्या कहा जाता है?",
    options: {
      A: "क्षारीय धातुएँ",
      B: "हलोजन",
      C: "निष्क्रिय गैसें",
      D: "उपधातुएँ",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "आवर्त सारणी के आवर्त में तत्वों के परमाणु आकार कैसे बदलते हैं?",
    options: {
      A: "बाएँ से दाएँ घटता है",
      B: "बाएँ से दाएँ बढ़ता है",
      C: "ऊपर से नीचे घटता है",
      D: "ऊपर से नीचे नहीं बदलता",
    },
    answer: "A",
  },
  {
    id: 15,
    question: "समूह 17 के तत्वों को और क्या कहा जाता है?",
    options: {
      A: "हलोजन",
      B: "क्षारीय धातुएँ",
      C: "निष्क्रिय गैसें",
      D: "लवण उत्पन्न करने वाले",
    },
    answer: "A",
  },
  {
    id: 16,
    question: "अधातुएँ किस प्रकार के आयन बनाती हैं?",
    options: {
      A: "ऋणायन",
      B: "धनायन",
      C: "न्यूट्रल आयन",
      D: "कोई आयन नहीं",
    },
    answer: "A",
  },
  {
    id: 17,
    question: "न्यूट्रल तत्व का परमाणु किस स्थिति में होता है?",
    options: {
      A: "प्रोटॉन और इलेक्ट्रॉन संख्या बराबर",
      B: "प्रोटॉन अधिक",
      C: "इलेक्ट्रॉन अधिक",
      D: "न्यूट्रॉन अधिक",
    },
    answer: "A",
  },
  {
    id: 18,
    question: "उदाहरण किसके अंतर्गत आते हैं?",
    options: {
      A: "निष्क्रिय गैसें",
      B: "धातुएँ",
      C: "हलोजन",
      D: "क्षारीय धातुएँ",
    },
    answer: "A",
  },
  {
    id: 19,
    question: "मेनडलीव की आवर्त सारणी में कितने आवर्त थे?",
    options: {
      A: "7",
      B: "5",
      C: "9",
      D: "12",
    },
    answer: "A",
  },
  {
    id: 20,
    question: "आवर्त सारणी में तत्वों का वर्गीकरण किस वैज्ञानिक ने पूर्ण किया?",
    options: {
      A: "हेनरी मोसले",
      B: "मेयर",
      C: "डाल्टन",
      D: "रदरफोर्ड",
    },
    answer: "A",
  }
];
