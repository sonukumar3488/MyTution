const quizArr = [
  {
    id: 1,
    question: "यूरोप में राष्ट्रवाद का उत्पत्ति किसकी विचारधारा से हुई थी?",
    options: {
      A: "मार्क्सवाद",
      B: "प्रकृति का सिद्धांत",
      C: "प्रकाशकता का सिद्धांत",
      D: "प्रबोधन और लोकतंत्र",
    },
    answer: "D",
  },
  {
    id: 2,
    question: "निम्नलिखित में से कौन सा राष्ट्रवाद का प्रतीक था?",
    options: {
      A: "नारी",
      B: "राजा",
      C: "आत्मनिर्भरता",
      D: "स्वतंत्रता",
    },
    answer: "D",
  },
  {
    id: 3,
    question: "यूरोप में राष्ट्रवाद को प्रभावित करने वाला प्रमुख आंदोलन क्या था?",
    options: {
      A: "सांस्कृतिक आंदोलन",
      B: "औद्योगिक क्रांति",
      C: "प्रशासनिक सुधार",
      D: "धार्मिक आंदोलन",
    },
    answer: "B",
  },
  {
    id: 4,
    question: "निम्नलिखित में से कौन सा देश राष्ट्रवाद के आंदोलन का केंद्र था?",
    options: {
      A: "फ्रांस",
      B: "इंग्लैंड",
      C: "जर्मनी",
      D: "इटली",
    },
    answer: "A",
  },
  {
    id: 5,
    question: "19वीं सदी में जर्मनी और इटली का एकीकरण किसके नेतृत्व में हुआ?",
    options: {
      A: "विलियम I और ओटो वॉन बिस्मार्क",
      B: "नेपोलियन",
      C: "कार्ल मार्क्स",
      D: "गैरबेट",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "यूरोप में राष्ट्रवाद का उद्देश्य क्या था?",
    options: {
      A: "व्यक्तिगत स्वतंत्रता",
      B: "सामाजिक सुधार",
      C: "राजनीतिक और राष्ट्रीय एकता",
      D: "धार्मिक स्वतंत्रता",
    },
    answer: "C",
  },
  {
    id: 7,
    question: "निम्नलिखित में से कौन सा संगठित आंदोलन राष्ट्रवाद के साथ जुड़ा हुआ था?",
    options: {
      A: "महात्मा गांधी का असहमति आंदोलन",
      B: "इटली का रिसॉर्जिमेंटो",
      C: "विनोदी समाजवादी आंदोलन",
      D: "स्वतंत्रता संग्राम",
    },
    answer: "B",
  },
  {
    id: 8,
    question: "किस लेखक ने ‘नationale’ और ‘patriotism’ के बारे में लिखा था?",
    options: {
      A: "जॉर्ज बर्नार्ड शॉ",
      B: "विक्टर ह्यूगो",
      C: "गॉटफ्राइड विल्हेम फेडर",
      D: "मार्क्स",
    },
    answer: "B",
  },
  {
    id: 9,
    question: "विल्हेम II किस देश के शासक थे?",
    options: {
      A: "इटली",
      B: "जर्मनी",
      C: "फ्रांस",
      D: "ब्रिटेन",
    },
    answer: "B",
  },
  {
    id: 10,
    question: "यूरोपीय राष्ट्रवाद का जनक किसे माना जाता है?",
    options: {
      A: "नेपोलियन बोनापार्ट",
      B: "विलियम I",
      C: "चार्ल्स वी",
      D: "गैरीबेल्डी",
    },
    answer: "A",
  },
  {
    id: 11,
    question: "इटली के एकीकरण का प्रमुख नेता कौन था?",
    options: {
      A: "विक्टर इमैनुएल II",
      B: "गैरीबेल्डी",
      C: "ज्यां जांको",
      D: "हिटलर",
    },
    answer: "B",
  },
  {
    id: 12,
    question: "‘रिसॉर्जिमेंटो’ का क्या अर्थ है?",
    options: {
      A: "नई शुरुआत",
      B: "संविधान संशोधन",
      C: "राष्ट्र का विभाजन",
      D: "संस्कृति का पुनर्निर्माण",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "यूरोप में सबसे पहले राष्ट्रवादी आंदोलन किस देश में हुआ था?",
    options: {
      A: "इटली",
      B: "फ्रांस",
      C: "जर्मनी",
      D: "ग्रीस",
    },
    answer: "D",
  },
  {
    id: 14,
    question: "‘राष्ट्रीयता’ के रूप में यूरोपीय विचारधारा का क्या स्वरूप था?",
    options: {
      A: "सांस्कृतिक एकता",
      B: "संवैधानिक सुधार",
      C: "विवाद",
      D: "धार्मिक एकता",
    },
    answer: "A",
  },
  {
    id: 15,
    question: "फ्रांस के क्रांतिकारी विचार किसका भाग बने थे?",
    options: {
      A: "सामाजिकता",
      B: "समाजवाद",
      C: "राष्ट्रवाद",
      D: "संविधान",
    },
    answer: "C",
  },
  {
    id: 16,
    question: "विल्हेम I ने किसे जर्मनी के एकीकरण का प्रमुख जिम्मेदारी सौंपा था?",
    options: {
      A: "विक्टर इमैनुएल II",
      B: "फ्रांज जोसेफ",
      C: "ओटो वॉन बिस्मार्क",
      D: "गैरीबेल्डी",
    },
    answer: "C",
  },
  {
    id: 17,
    question: "राष्ट्रवाद के कारण किस प्रकार की सरकारों का समर्थन हुआ?",
    options: {
      A: "सामाजिकतावादी सरकारें",
      B: "राजशाही सरकारें",
      C: "लोकतांत्रिक सरकारें",
      D: "साम्राज्यवादी सरकारें",
    },
    answer: "C",
  },
  {
    id: 18,
    question: "यूरोपीय राष्ट्रवाद में क्या एक प्रमुख विचार था?",
    options: {
      A: "वैश्विक समानता",
      B: "राष्ट्रों की स्वतंत्रता",
      C: "धार्मिक एकता",
      D: "सामाजिक विषमता",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "किसी राष्ट्र के गठन के लिए मुख्य रूप से कौन-सी दो चीजें जरूरी थीं?",
    options: {
      A: "सांस्कृतिक और भाषाई समानता",
      B: "राजनीतिक और आर्थिक समानता",
      C: "सामाजिक और धार्मिक समानता",
      D: "सांस्कृतिक और राजनीतिक समानता",
    },
    answer: "D",
  },
  {
    id: 20,
    question: "यूरोप में राष्ट्रवाद की भावना को जागृत करने वाला प्रमुख आयोजन क्या था?",
    options: {
      A: "बर्लिन सम्मेलन",
      B: "फ्रांसीसी क्रांति",
      C: "स्वतंत्रता संग्राम",
      D: "वियना सम्मेलन",
    },
    answer: "B",
  },
];
