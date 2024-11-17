const quizArr = [
  {
    id: 1,
    question: "‘जित - जित मैं निरखत हूँ’ पाठ का लेखक कौन है?",
    options: {
      A: "सूरदास",
      B: "तुलसीदास",
      C: "मीरा बाई",
      D: "कबीरदास",
    },
    answer: "A",
  },
  {
    id: 2,
    question: "‘जित - जित मैं निरखत हूँ’ में किसकी महिमा का वर्णन है?",
    options: {
      A: "प्रकृति की महिमा",
      B: "भगवान श्रीकृष्ण की महिमा",
      C: "संतों की महिमा",
      D: "रानी की महिमा",
    },
    answer: "B",
  },
  {
    id: 3,
    question: "सूरदास ने इस कविता में किस भाव को व्यक्त किया है?",
    options: {
      A: "वैराग्य भाव",
      B: "भक्ति भाव",
      C: "क्रोध भाव",
      D: "शांति भाव",
    },
    answer: "B",
  },
  {
    id: 4,
    question: "सूरदास किस भक्ति सम्प्रदाय से संबंधित थे?",
    options: {
      A: "रामानंदी सम्प्रदाय",
      B: "वल्लभ सम्प्रदाय",
      C: "नाथ सम्प्रदाय",
      D: "शैव सम्प्रदाय",
    },
    answer: "B",
  },
  {
    id: 5,
    question: "इस कविता में सूरदास ने भगवान श्रीकृष्ण के किस रूप का वर्णन किया है?",
    options: {
      A: "बाल रूप",
      B: "युवा रूप",
      C: "योगी रूप",
      D: "रणवीर रूप",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "‘जित - जित मैं निरखत हूँ’ में कवि ने किस माध्यम से भगवान की महिमा को देखा?",
    options: {
      A: "प्राकृतिक सौंदर्य के माध्यम से",
      B: "मंदिर के माध्यम से",
      C: "ध्यान के माध्यम से",
      D: "युद्ध के माध्यम से",
    },
    answer: "A",
  },
  {
    id: 7,
    question: "सूरदास ने किस प्रकार के भक्ति का समर्थन किया है?",
    options: {
      A: "सगुण भक्ति",
      B: "निर्गुण भक्ति",
      C: "तांत्रिक भक्ति",
      D: "साधना भक्ति",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "सूरदास की रचनाओं में प्रमुख विषय क्या है?",
    options: {
      A: "प्रेम",
      B: "भक्ति और प्रेम",
      C: "क्रोध और युद्ध",
      D: "संतोष और वैराग्य",
    },
    answer: "B",
  },
  {
    id: 9,
    question: "इस कविता में सूरदास ने किस तत्व की चर्चा की है?",
    options: {
      A: "आध्यात्मिक तत्व",
      B: "सामाजिक तत्व",
      C: "राजनीतिक तत्व",
      D: "आर्थिक तत्व",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "सूरदास ने अपने भक्ति गीतों में भगवान के किस रूप की आराधना की है?",
    options: {
      A: "शिव",
      B: "कृष्ण",
      C: "राम",
      D: "दुर्गा",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "‘जित - जित मैं निरखत हूँ’ कविता में कौन से प्राकृतिक सौंदर्य का वर्णन किया गया है?",
    options: {
      A: "पर्वत और नदियाँ",
      B: "फूल और बाग",
      C: "वन और झरने",
      D: "समुद्र और रेगिस्तान",
    },
    answer: "B",
  },
  {
    id: 12,
    question: "सूरदास के अनुसार भक्ति का सबसे बड़ा उद्देश्य क्या है?",
    options: {
      A: "धन प्राप्ति",
      B: "ज्ञान प्राप्ति",
      C: "भगवान की कृपा प्राप्त करना",
      D: "यश प्राप्त करना",
    },
    answer: "C",
  },
  {
    id: 13,
    question: "सूरदास के काव्य में मुख्यतः किस भाषा का प्रयोग किया गया है?",
    options: {
      A: "संस्कृत",
      B: "ब्रज भाषा",
      C: "अवधी",
      D: "राजस्थानी",
    },
    answer: "B",
  },
  {
    id: 14,
    question: "सूरदास की कविता में भावनाओं की अभिव्यक्ति कैसी होती है?",
    options: {
      A: "सीधी और सरल",
      B: "कठिन और जटिल",
      C: "तर्कपूर्ण",
      D: "प्राकृतिक",
    },
    answer: "A",
  },
  {
    id: 15,
    question: "सूरदास की रचनाओं में भगवान श्रीकृष्ण के किस लीलाओं का वर्णन है?",
    options: {
      A: "गोपियों के साथ रास",
      B: "अर्जुन को गीता का उपदेश",
      C: "कंस वध",
      D: "द्रोपदी का चीरहरण",
    },
    answer: "A",
  },
  {
    id: 16,
    question: "सूरदास किस काल के कवि थे?",
    options: {
      A: "आधुनिक काल",
      B: "भक्ति काल",
      C: "रीतिकाल",
      D: "मध्यकाल",
    },
    answer: "B",
  },
  {
    id: 17,
    question: "सूरदास ने अपनी कविता में किस प्रकार की भाषा का प्रयोग किया है?",
    options: {
      A: "कठिन और संस्कृतमय",
      B: "सरल और सहज ब्रज भाषा",
      C: "राजस्थानी और हिंदी मिश्रित",
      D: "फारसी और अरबी मिश्रित",
    },
    answer: "B",
  },
  {
    id: 18,
    question: "सूरदास की रचनाओं का मुख्य भाव क्या है?",
    options: {
      A: "प्रेम और भक्ति",
      B: "क्रोध और प्रतिशोध",
      C: "ज्ञान और मोक्ष",
      D: "अहिंसा और शांति",
    },
    answer: "A",
  },
  {
    id: 19,
    question: "सूरदास की रचनाओं में किनकी लीलाओं का उल्लेख प्रमुखता से होता है?",
    options: {
      A: "भगवान राम की",
      B: "शिवजी की",
      C: "भगवान श्रीकृष्ण की",
      D: "देवी दुर्गा की",
    },
    answer: "C",
  },
  {
    id: 20,
    question: "सूरदास की रचनाओं में कौन-सी भावना प्रमुख होती है?",
    options: {
      A: "संतोष",
      B: "भक्ति और प्रेम",
      C: "असंतोष",
      D: "प्रतिशोध",
    },
    answer: "B",
  }
];
