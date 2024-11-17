const quizArr = [
  {
    id: 1,
    question: "‘जनतंत्र का जन्म’ का लेखक कौन है?",
    options: {
      A: "रवीन्द्रनाथ ठाकुर",
      B: "विनायक दामोदर सावरकर",
      C: "सुभाष चंद्र बोस",
      D: "लाल बहादुर शास्त्री",
    },
    answer: "B",
  },
  {
    id: 2,
    question: "‘जनतंत्र का जन्म’ में किस प्रकार की घटनाओं का वर्णन किया गया है?",
    options: {
      A: "आध्यात्मिक घटनाएँ",
      B: "सामाजिक परिवर्तन",
      C: "भारतीय स्वतंत्रता संग्राम",
      D: "राजनीतिक पार्टी के झगड़े",
    },
    answer: "C",
  },
  {
    id: 3,
    question: "‘जनतंत्र का जन्म’ में स्वतंत्रता संग्राम की शुरुआत के समय किसका विशेष रूप से उल्लेख है?",
    options: {
      A: "महात्मा गांधी",
      B: "भगत सिंह",
      C: "सुभाष चंद्र बोस",
      D: "1847 के विद्रोह",
    },
    answer: "D",
  },
  {
    id: 4,
    question: "‘जनतंत्र का जन्म’ में किस सामाजिक और राजनीतिक बदलाव पर चर्चा की गई है?",
    options: {
      A: "सामाजिक असमानता",
      B: "स्वतंत्रता संग्राम की शुरुआत और जनतंत्र की स्थापना",
      C: "अंतर्राष्ट्रीय संघर्ष",
      D: "धार्मिक संघर्ष",
    },
    answer: "B",
  },
  {
    id: 5,
    question: "‘जनतंत्र का जन्म’ में किस व्यक्ति को भारतीय स्वतंत्रता संग्राम के प्रमुख नेता के रूप में प्रस्तुत किया गया है?",
    options: {
      A: "महात्मा गांधी",
      B: "सुभाष चंद्र बोस",
      C: "चंद्रशेखर आज़ाद",
      D: "भगत सिंह",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "‘जनतंत्र का जन्म’ में किसकी भूमिका प्रमुख रूप से दिखाई जाती है?",
    options: {
      A: "बritish सरकार",
      B: "स्वतंत्रता सेनानी",
      C: "धार्मिक नेता",
      D: "विदेशी शासक",
    },
    answer: "B",
  },
  {
    id: 7,
    question: "किस वर्ष में ‘जनतंत्र का जन्म’ की घटनाएँ घटित हुईं?",
    options: {
      A: "1947",
      B: "1857",
      C: "1900",
      D: "1930",
    },
    answer: "B",
  },
  {
    id: 8,
    question: "‘जनतंत्र का जन्म’ में भारतीय जनता की किस भावना को प्रमुखता दी गई है?",
    options: {
      A: "विरोध और विद्रोह",
      B: "देशभक्ति और स्वतंत्रता की इच्छा",
      C: "धार्मिक कट्टरता",
      D: "सामाजिक समरसता",
    },
    answer: "B",
  },
  {
    id: 9,
    question: "‘जनतंत्र का जन्म’ के लेखक ने स्वतंत्रता संग्राम के संदर्भ में किसका उल्लेख किया?",
    options: {
      A: "बritish शासकों की क्रूरता",
      B: "भारतीय सभ्यता और संस्कृति",
      C: "भारत की समृद्धि",
      D: "भारतीय महापुरुषों का योगदान",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "‘जनतंत्र का जन्म’ में भारतीय समाज की कौन सी समस्याओं को उजागर किया गया है?",
    options: {
      A: "अशिक्षा और बेरोजगारी",
      B: "सामाजिक असमानता और अस्पृश्यता",
      C: "प्राकृतिक आपदाएँ",
      D: "सांप्रदायिक हिंसा",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "‘जनतंत्र का जन्म’ में भारतीय नागरिकों की किस आदर्श भावना पर जोर दिया गया है?",
    options: {
      A: "किसी प्रकार की हिंसा का विरोध",
      B: "आध्यात्मिक शांति",
      C: "राष्ट्र के प्रति समर्पण और बलिदान",
      D: "अर्थशास्त्र की समझ",
    },
    answer: "C",
  },
  {
    id: 12,
    question: "‘जनतंत्र का जन्म’ में स्वतंत्रता प्राप्ति के लिए कौन सी रणनीतियाँ अपनाई गई थीं?",
    options: {
      A: "हिंसक क्रांति",
      B: "सांस्कृतिक आंदोलन",
      C: "सत्याग्रह और अहिंसा",
      D: "शांति समझौते",
    },
    answer: "C",
  },
  {
    id: 13,
    question: "‘जनतंत्र का जन्म’ में किस स्वतंत्रता सेनानी का योगदान विशेष रूप से उल्लेखित है?",
    options: {
      A: "विवेकानंद",
      B: "लाला लाजपत राय",
      C: "भगत सिंह",
      D: "रामप्रसाद बिस्मिल",
    },
    answer: "B",
  },
  {
    id: 14,
    question: "‘जनतंत्र का जन्म’ में स्वतंत्रता संग्राम को किस प्रकार से प्रस्तुत किया गया है?",
    options: {
      A: "एक सांस्कृतिक आंदोलन के रूप में",
      B: "एक सामाजिक परिवर्तन के रूप में",
      C: "एक संघर्ष और बलिदान के रूप में",
      D: "एक आर्थिक स्वतंत्रता के रूप में",
    },
    answer: "C",
  },
  {
    id: 15,
    question: "‘जनतंत्र का जन्म’ में भारत के किस भाग की विशेष चर्चा की गई है?",
    options: {
      A: "उत्तर भारत",
      B: "दक्षिण भारत",
      C: "पश्चिमी भारत",
      D: "पूरे भारत का",
    },
    answer: "D",
  },
  {
    id: 16,
    question: "‘जनतंत्र का जन्म’ में भारतीय स्वतंत्रता संग्राम के किस पहलू पर जोर दिया गया है?",
    options: {
      A: "अंग्रेज़ों द्वारा किया गया शोषण",
      B: "भारतीय जनमानस की जागरूकता",
      C: "सभी भारतीयों का एकजुट होना",
      D: "अंतर्राष्ट्रीय मदद की आवश्यकता",
    },
    answer: "B",
  },
  {
    id: 17,
    question: "‘जनतंत्र का जन्म’ के लेखक ने भारतीय स्वतंत्रता संग्राम को किस दृष्टिकोण से चित्रित किया है?",
    options: {
      A: "नकारात्मक दृष्टिकोण",
      B: "सकारात्मक और प्रेरणादायक दृष्टिकोण",
      C: "तटस्थ दृष्टिकोण",
      D: "विदेशी दृष्टिकोण",
    },
    answer: "B",
  },
  {
    id: 18,
    question: "‘जनतंत्र का जन्म’ में भारत की स्वतंत्रता के लिए किस प्रकार की संघर्ष पद्धति को महत्वपूर्ण बताया गया है?",
    options: {
      A: "सैन्य शक्ति",
      B: "सांस्कृतिक समर्पण",
      C: "गांधीवादी अहिंसा और सत्याग्रह",
      D: "धार्मिक आस्था",
    },
    answer: "C",
  },
  {
    id: 19,
    question: "‘जनतंत्र का जन्म’ में भारतीय जनतंत्र के गठन के किस पहलू पर बल दिया गया है?",
    options: {
      A: "संवैधानिक सुधार",
      B: "नए चुनावी प्रक्रिया",
      C: "लोकतांत्रिक अधिकारों की स्थापना",
      D: "अंतर्राष्ट्रीय समर्थन",
    },
    answer: "C",
  },
  {
    id: 20,
    question: "‘जनतंत्र का जन्म’ में भारतीय स्वतंत्रता संग्राम के अंतर्गत कौन सा संघर्ष विशेष रूप से महत्वपूर्ण बताया गया है?",
    options: {
      A: "1857 का विद्रोह",
      B: "1930 का नमक सत्याग्रह",
      C: "1942 का भारत छोड़ो आंदोलन",
      D: "1947 का स्वतंत्रता संग्राम",
    },
    answer: "A",
  }
];