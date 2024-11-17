const quizArr = [
  {
    id: 1,
    question: "नागरी लिपि किसे कहते हैं?",
    options: {
      A: "एक प्रकार की चित्र लिपि",
      B: "संस्कृत और हिंदी जैसी भाषाओं की लिपि",
      C: "किसी भी विदेशी भाषा की लिपि",
      D: "एक प्रकार की विदेशी लिपि",
    },
    answer: "B",
  },
  {
    id: 2,
    question: "नागरी लिपि का प्रमुख रूप कहां से उत्पन्न हुआ?",
    options: {
      A: "उत्तर भारत",
      B: "दक्षिण भारत",
      C: "पश्चिम भारत",
      D: "पूर्व भारत",
    },
    answer: "A",
  },
  {
    id: 3,
    question: "नागरी लिपि का विकास किस भाषा से हुआ था?",
    options: {
      A: "संस्कृत",
      B: "हिंदी",
      C: "पारसी",
      D: "तमिल",
    },
    answer: "A",
  },
  {
    id: 4,
    question: "नागरी लिपि में कितने वर्ण होते हैं?",
    options: {
      A: "40",
      B: "48",
      C: "56",
      D: "52",
    },
    answer: "D",
  },
  {
    id: 5,
    question: "नागरी लिपि के किस रूप में हिंदी लिखी जाती है?",
    options: {
      A: "देवनागरी",
      B: "कुली",
      C: "अल्फाबेट",
      D: "हिरागाना",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "नागरी लिपि का प्रमुख प्रयोग किस क्षेत्र में होता है?",
    options: {
      A: "धर्मिक साहित्य",
      B: "काव्य साहित्य",
      C: "राजनीतिक भाषण",
      D: "विज्ञान और गणित",
    },
    answer: "A",
  },
  {
    id: 7,
    question: "नागरी लिपि का पहला उल्लेख कहाँ हुआ था?",
    options: {
      A: "अर्जुन वर्तिका",
      B: "कौटिल्य के अर्थशास्त्र में",
      C: "रामायण में",
      D: "उपनिषदों में",
    },
    answer: "B",
  },
  {
    id: 8,
    question: "नागरी लिपि के कौन से स्वर सबसे अधिक प्रचलित हैं?",
    options: {
      A: "अ, आ, इ, ई",
      B: "ऊ, ऋ, ऐ, औ",
      C: "अ, इ, उ, ऋ",
      D: "आ, ई, उ, ऐ",
    },
    answer: "A",
  },
  {
    id: 9,
    question: "नागरी लिपि की शुरुआत कब से मानी जाती है?",
    options: {
      A: "6वीं शताब्दी",
      B: "10वीं शताब्दी",
      C: "5वीं शताब्दी",
      D: "12वीं शताब्दी",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "नागरी लिपि का आधुनिक रूप कब से प्रचलित हुआ?",
    options: {
      A: "8वीं शताब्दी",
      B: "12वीं शताब्दी",
      C: "16वीं शताब्दी",
      D: "18वीं शताब्दी",
    },
    answer: "C",
  },
  {
    id: 11,
    question: "नागरी लिपि किस प्रकार की लिपि है?",
    options: {
      A: "व्यंजन लिपि",
      B: "स्वर लिपि",
      C: "मिश्रित लिपि",
      D: "बैकवर्ड लिपि",
    },
    answer: "C",
  },
  {
    id: 12,
    question: "नागरी लिपि में कुल कितने व्यंजन होते हैं?",
    options: {
      A: "33",
      B: "36",
      C: "39",
      D: "42",
    },
    answer: "B",
  },
  {
    id: 13,
    question: "नागरी लिपि का कौन सा विशेष रूप सबसे अधिक प्रसिद्ध है?",
    options: {
      A: "देवनागरी",
      B: "कुली लिपि",
      C: "लातीनी लिपि",
      D: "अरबी लिपि",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "नागरी लिपि की कोई अन्य भाषा में उपस्थिति कहां देखने को मिलती है?",
    options: {
      A: "तिब्बती",
      B: "उर्दू",
      C: "हिंदी",
      D: "बंगाली",
    },
    answer: "A",
  },
  {
    id: 15,
    question: "नागरी लिपि को आधुनिक रूप में किसने लोकप्रिय बनाया?",
    options: {
      A: "भारत सरकार",
      B: "अंग्रेजों ने",
      C: "हिंदी साहित्यकारों ने",
      D: "पं नेहरू ने",
    },
    answer: "C",
  },
  {
    id: 16,
    question: "नागरी लिपि का कौन सा सबसे बड़ा उदाहरण है?",
    options: {
      A: "रामायण",
      B: "गीता",
      C: "महाभारत",
      D: "हंसराज पाठशाला",
    },
    answer: "A",
  },
  {
    id: 17,
    question: "नागरी लिपि का सबसे पहला स्थायी उदाहरण किस भाषा में मिलता है?",
    options: {
      A: "संस्कृत",
      B: "हिंदी",
      C: "पारसी",
      D: "अंग्रेजी",
    },
    answer: "A",
  },
  {
    id: 18,
    question: "नागरी लिपि किसे सबसे अधिक प्रभावित करती है?",
    options: {
      A: "संगीत",
      B: "साहित्य",
      C: "चित्रकला",
      D: "कविता",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "नागरी लिपि के सबसे पुराने रूप का नाम क्या था?",
    options: {
      A: "वृद्ध नागरी",
      B: "देवनागरी",
      C: "कुली नागरी",
      D: "अक्षरी नागरी",
    },
    answer: "A",
  },
  {
    id: 20,
    question: "नागरी लिपि के किस रूप में हम हिंदी शब्दों का प्रयोग करते हैं?",
    options: {
      A: "देवनागरी",
      B: "कुली",
      C: "टिपिकल",
      D: "वर्गीकरण",
    },
    answer: "A",
  }
];
