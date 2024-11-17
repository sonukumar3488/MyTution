const quizArr = [
  {
    id: 1,
    question: "राज्य की आय के प्रमुख स्रोत कौन से हैं?",
    options: {
      A: "कर, ब्याज और कर्ज",
      B: "निर्यात और आयात",
      C: "राज्य संपत्ति",
      D: "सभी",
    },
    answer: "A",
  },
  {
    id: 2,
    question: "मुद्रा का क्या मुख्य कार्य है?",
    options: {
      A: "समानता लाना",
      B: "विनिमय की सुविधा प्रदान करना",
      C: "संपत्ति का मूल्य बढ़ाना",
      D: "किसी के पास पैसे रखना",
    },
    answer: "B",
  },
  {
    id: 3,
    question: "नकद मुद्रा के विनिमय दर को नियंत्रित करता है?",
    options: {
      A: "राज्य सरकार",
      B: "केन्द्रीय बैंक",
      C: "अर्थशास्त्रियों",
      D: "व्यापार संघ",
    },
    answer: "B",
  },
  {
    id: 4,
    question: "मुद्रा का क्रियात्मक कार्य क्या है?",
    options: {
      A: "मूल्य मापना",
      B: "संपत्ति का आदान-प्रदान",
      C: "समानता को बढ़ावा देना",
      D: "सभी",
    },
    answer: "A",
  },
  {
    id: 5,
    question: "मुद्रा प्रणाली को नियंत्रित करने वाला प्रमुख संस्थान क्या है?",
    options: {
      A: "भारतीय रिजर्व बैंक",
      B: "वाणिज्यिक बैंक",
      C: "राज्य सरकार",
      D: "बैंक ऑफ इंडिया",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "मुद्रा की आपूर्ति में वृद्धि से क्या होता है?",
    options: {
      A: "मूल्य वृद्धि होती है",
      B: "मूल्य में गिरावट होती है",
      C: "मूल्य स्थिर रहता है",
      D: "मूल्य में परिवर्तन नहीं होता",
    },
    answer: "A",
  },
  {
    id: 7,
    question: "राज्य के खजाने में होने वाली आय का प्रमुख स्रोत क्या है?",
    options: {
      A: "कराधान",
      B: "व्यापार",
      C: "उधारी",
      D: "सभी",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "राज्य सरकारों को किस प्रकार के करों से आय होती है?",
    options: {
      A: "सीधा कर",
      B: "प्रत्यक्ष कर",
      C: "간접 कर",
      D: "सभी",
    },
    answer: "D",
  },
  {
    id: 9,
    question: "देश के लिए मुद्रा नीति कौन बनाता है?",
    options: {
      A: "भारतीय रिजर्व बैंक",
      B: "वित्त मंत्रालय",
      C: "केन्द्रीय बैंक",
      D: "सभी",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "वित्तीय नीति किसे कहा जाता है?",
    options: {
      A: "मुद्रा नीति",
      B: "राजकोषीय नीति",
      C: "उधारी नीति",
      D: "सभी",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "राज्य की आय में से अधिकांश आय किस स्रोत से आती है?",
    options: {
      A: "नकद मुद्रा",
      B: "कर वसूली",
      C: "विदेशी व्यापार",
      D: "उधारी",
    },
    answer: "B",
  },
  {
    id: 12,
    question: "मुद्रा का प्रमुख कार्य क्या है?",
    options: {
      A: "सामान्य मूल्य मापना",
      B: "समानता लाना",
      C: "आर्थिक असमानता में वृद्धि",
      D: "इनमें से कोई नहीं",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "राज्य के विभिन्न आय और खर्चों का हिसाब-किताब रखने वाली संस्था कौन सी है?",
    options: {
      A: "राजकोषीय विभाग",
      B: "वित्त मंत्रालय",
      C: "भारतीय रिजर्व बैंक",
      D: "सभी",
    },
    answer: "B",
  },
  {
    id: 14,
    question: "मुद्रा के माध्यम से वस्तुओं और सेवाओं का विनिमय किसका संकेत करता है?",
    options: {
      A: "विनिमय प्रक्रिया",
      B: "भंडारण प्रक्रिया",
      C: "मूल्य निर्धारण प्रक्रिया",
      D: "सभी",
    },
    answer: "A",
  },
  {
    id: 15,
    question: "अर्थशास्त्रियों के अनुसार मुद्रास्फीति का प्रमुख कारण क्या है?",
    options: {
      A: "मुद्रा आपूर्ति में वृद्धि",
      B: "मूल्य में कमी",
      C: "बेरोज़गारी",
      D: "निर्यात में कमी",
    },
    answer: "A",
  },
  {
    id: 16,
    question: "मुद्रास्फीति क्या है?",
    options: {
      A: "मूल्य स्थिरता",
      B: "मूल्य में वृद्धि",
      C: "मूल्य में गिरावट",
      D: "समानता",
    },
    answer: "B",
  },
  {
    id: 17,
    question: "किसे 'राज्य के खजाने' का मुख्य स्रोत माना जाता है?",
    options: {
      A: "कराधान",
      B: "संपत्ति से आय",
      C: "ब्याज वसूली",
      D: "सभी",
    },
    answer: "A",
  },
  {
    id: 18,
    question: "मुद्रा की आपूर्ति में वृद्धि से किस प्रकार का प्रभाव पड़ता है?",
    options: {
      A: "मूल्य स्थिर रहता है",
      B: "मूल्य में वृद्धि होती है",
      C: "मूल्य में कमी होती है",
      D: "सामान्य मुद्रास्फीति नहीं होती",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "प्रत्येक मुद्रा का मूल्य किससे निर्धारित होता है?",
    options: {
      A: "उत्पादन लागत",
      B: "आर्थिक स्थिति",
      C: "राज्य की नीति",
      D: "विनिमय दर",
    },
    answer: "C",
  },
  {
    id: 20,
    question: "मुद्रा का संकट किस कारण से उत्पन्न हो सकता है?",
    options: {
      A: "मुद्रा आपूर्ति में कमी",
      B: "मुद्रा की बढ़ती मांग",
      C: "आर्थिक अस्थिरता",
      D: "इनमें से सभी",
    },
    answer: "D",
  },
];
