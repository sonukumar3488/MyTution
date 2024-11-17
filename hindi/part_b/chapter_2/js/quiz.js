const quizArr = [
  {
    id: 1,
    question: "‘प्रेम आयनी श्री राधिका’ का मुख्य विषय क्या है?",
    options: {
      A: "धन और संपत्ति",
      B: "श्री राधा और प्रेम",
      C: "राजनीतिक मुद्दे",
      D: "प्रकृति का सौंदर्य",
    },
    answer: "B",
  },
  {
    id: 2,
    question: "श्री राधिका का प्रेम किस प्रकार का बताया गया है?",
    options: {
      A: "साधारण प्रेम",
      B: "आध्यात्मिक प्रेम",
      C: "स्वार्थी प्रेम",
      D: "भौतिक प्रेम",
    },
    answer: "B",
  },
  {
    id: 3,
    question: "पाठ में प्रेम का सबसे पवित्र रूप किसके माध्यम से व्यक्त हुआ है?",
    options: {
      A: "श्रीकृष्ण के प्रति राधा का प्रेम",
      B: "प्रकृति के प्रति प्रेम",
      C: "संगीत के प्रति प्रेम",
      D: "विद्या के प्रति प्रेम",
    },
    answer: "A",
  },
  {
    id: 4,
    question: "श्री राधिका के प्रेम में कौन सा भाव प्रमुख है?",
    options: {
      A: "अहंकार",
      B: "निस्वार्थता",
      C: "द्वेष",
      D: "धन-लालसा",
    },
    answer: "B",
  },
  {
    id: 5,
    question: "श्री राधिका का प्रेम किसकी ओर पूर्ण रूप से समर्पित है?",
    options: {
      A: "श्रीकृष्ण",
      B: "धन-दौलत",
      C: "सामाजिक प्रतिष्ठा",
      D: "शक्ति",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "‘प्रेम आयनी श्री राधिका’ में किस प्रकार का प्रेम वर्णित है?",
    options: {
      A: "स्वार्थी और भौतिक प्रेम",
      B: "अत्यंत पवित्र और आध्यात्मिक प्रेम",
      C: "प्राकृतिक प्रेम",
      D: "राजनीतिक प्रेम",
    },
    answer: "B",
  },
  {
    id: 7,
    question: "श्री राधिका का प्रेम किसे प्रभावित करता है?",
    options: {
      A: "समाज को",
      B: "संपूर्ण सृष्टि को",
      C: "केवल मित्रों को",
      D: "राजाओं को",
    },
    answer: "B",
  },
  {
    id: 8,
    question: "पाठ में प्रेम को किससे तुलना की गई है?",
    options: {
      A: "मधुर संगीत से",
      B: "स्वर्ण से",
      C: "पानी से",
      D: "खुशबू से",
    },
    answer: "A",
  },
  {
    id: 9,
    question: "श्री राधा का प्रेम कैसा होता है?",
    options: {
      A: "स्वार्थ से भरा",
      B: "निस्वार्थ और निरपेक्ष",
      C: "लालच से भरा",
      D: "धन-समृद्धि के प्रति",
    },
    answer: "B",
  },
  {
    id: 10,
    question: "पाठ के अनुसार सच्चे प्रेम की विशेषता क्या है?",
    options: {
      A: "संपत्ति की प्राप्ति",
      B: "निस्वार्थता और समर्पण",
      C: "लोकप्रियता प्राप्त करना",
      D: "शक्ति और अधिकार",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "श्री राधिका का प्रेम किस प्रकार का प्रतीक है?",
    options: {
      A: "मोह और माया का",
      B: "आध्यात्मिकता और पवित्रता का",
      C: "धन और वैभव का",
      D: "विज्ञान और तर्क का",
    },
    answer: "B",
  },
  {
    id: 12,
    question: "प्रेम का सर्वोच्च रूप किसके प्रेम में झलकता है?",
    options: {
      A: "मित्रों के प्रेम में",
      B: "राधा-कृष्ण के प्रेम में",
      C: "राजनीतिक प्रेम में",
      D: "सामाजिक प्रेम में",
    },
    answer: "B",
  },
  {
    id: 13,
    question: "श्री राधिका का प्रेम किसे समर्पित है?",
    options: {
      A: "संपत्ति को",
      B: "ईश्वर को",
      C: "विद्या को",
      D: "खेल-कूद को",
    },
    answer: "B",
  },
  {
    id: 14,
    question: "प्रेम में सबसे महत्वपूर्ण तत्व क्या है?",
    options: {
      A: "अहंकार",
      B: "समर्पण और निस्वार्थता",
      C: "धन-दौलत",
      D: "भौतिक सुख",
    },
    answer: "B",
  },
  {
    id: 15,
    question: "श्री राधिका का प्रेम किससे परिपूर्ण है?",
    options: {
      A: "धन-वैभव से",
      B: "आध्यात्मिकता और भक्ति से",
      C: "राजनीतिक महत्वाकांक्षा से",
      D: "शारीरिक सौंदर्य से",
    },
    answer: "B",
  },
  {
    id: 16,
    question: "श्री राधिका का प्रेम किस प्रकार से देखा जाता है?",
    options: {
      A: "साधारण दृष्टि से",
      B: "अलौकिक दृष्टि से",
      C: "भौतिक दृष्टि से",
      D: "राजनीतिक दृष्टि से",
    },
    answer: "B",
  },
  {
    id: 17,
    question: "प्रेम की सच्चाई किसके व्यवहार में प्रकट होती है?",
    options: {
      A: "मित्रों के",
      B: "श्री राधिका के",
      C: "राजाओं के",
      D: "गुरुओं के",
    },
    answer: "B",
  },
  {
    id: 18,
    question: "श्री राधिका का प्रेम किसे प्रेरित करता है?",
    options: {
      A: "केवल मित्रों को",
      B: "संपूर्ण ब्रह्मांड को",
      C: "राजनीतिक नेताओं को",
      D: "वैज्ञानिकों को",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "प्रेम का सर्वोच्च आदर्श कौन है?",
    options: {
      A: "भगवान शिव",
      B: "श्री राधा और कृष्ण",
      C: "गणेश जी",
      D: "राम और सीता",
    },
    answer: "B",
  },
  {
    id: 20,
    question: "पाठ में प्रेम को किस रूप में प्रस्तुत किया गया है?",
    options: {
      A: "भौतिक संपत्ति के रूप में",
      B: "आध्यात्मिक भाव के रूप में",
      C: "संगीत के रूप में",
      D: "मोह-माया के रूप में",
    },
    answer: "B",
  }
];