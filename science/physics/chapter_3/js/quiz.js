const quizArr = [
  {
    id: 1,
    question: "विद्युत धारा की माप की इकाई क्या है?",
    options: {
      A: "एम्पीयर",
      B: "वोल्ट",
      C: "ओम",
      D: "जूल",
    },
    answer: "A",
  },
  {
    id: 2,
    question: "प्रतिरोध मापने की इकाई क्या है?",
    options: {
      A: "ओम",
      B: "वाट",
      C: "एम्पीयर",
      D: "कूलम्ब",
    },
    answer: "A",
  },
  {
    id: 3,
    question: "कौन सा उपकरण विद्युत धारा मापने के लिए उपयोग होता है?",
    options: {
      A: "एम्पीयरमीटर",
      B: "वोल्टमीटर",
      C: "ओममीटर",
      D: "गैल्वानोमीटर",
    },
    answer: "A",
  },
  {
    id: 4,
    question: "विद्युत धारा प्रवाहित करने वाले वाहक क्या कहलाते हैं?",
    options: {
      A: "इलेक्ट्रॉन",
      B: "प्रोटॉन",
      C: "न्यूट्रॉन",
      D: "फोटॉन",
    },
    answer: "A",
  },
  {
    id: 5,
    question: "वोल्टेज की माप की इकाई क्या है?",
    options: {
      A: "वोल्ट",
      B: "एम्पीयर",
      C: "ओम",
      D: "वाट",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "ओम के नियम के अनुसार विद्युत धारा किस पर निर्भर करती है?",
    options: {
      A: "वोल्टेज और प्रतिरोध",
      B: "वोल्टेज और शक्ति",
      C: "शक्ति और प्रतिरोध",
      D: "शक्ति और ऊर्जा",
    },
    answer: "A",
  },
  {
    id: 7,
    question: "ओम का नियम क्या बताता है?",
    options: {
      A: "वोल्टेज प्रतिरोध के अनुपात में होता है",
      B: "विद्युत धारा शक्ति के अनुपात में होती है",
      C: "विद्युत धारा ऊर्जा के अनुपात में होती है",
      D: "शक्ति वोल्टेज के अनुपात में होती है",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "विद्युत ऊर्जा की इकाई क्या है?",
    options: {
      A: "जूल",
      B: "एम्पीयर",
      C: "ओम",
      D: "वोल्ट",
    },
    answer: "A",
  },
  {
    id: 9,
    question: "किस उपकरण का प्रयोग वोल्टेज मापने के लिए किया जाता है?",
    options: {
      A: "वोल्टमीटर",
      B: "एम्पीयरमीटर",
      C: "ओममीटर",
      D: "बैरोमीटर",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "श्रृंखला परिपथ में प्रतिरोध कैसे जुड़ते हैं?",
    options: {
      A: "श्रृंखला में जोड़ने पर प्रतिरोध बढ़ता है",
      B: "श्रृंखला में जोड़ने पर प्रतिरोध घटता है",
      C: "कोई परिवर्तन नहीं होता",
      D: "वोल्टेज बढ़ता है",
    },
    answer: "A",
  },
  {
    id: 11,
    question: "समांतर परिपथ में कुल प्रतिरोध कैसे बदलता है?",
    options: {
      A: "कुल प्रतिरोध घटता है",
      B: "कुल प्रतिरोध बढ़ता है",
      C: "वोल्टेज घटता है",
      D: "वोल्टेज बढ़ता है",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "किसी परिपथ में विद्युत धारा प्रवाहित होने के लिए क्या आवश्यक है?",
    options: {
      A: "वोल्टेज स्रोत",
      B: "प्रकाश स्रोत",
      C: "चुंबकीय क्षेत्र",
      D: "गति स्रोत",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "विद्युत ऊर्जा को यांत्रिक ऊर्जा में कौन सा उपकरण बदलता है?",
    options: {
      A: "विद्युत मोटर",
      B: "जेनरेटर",
      C: "बैटरी",
      D: "एम्पीयरमीटर",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "विद्युत धारा का प्रवाह किस दिशा में होता है?",
    options: {
      A: "धनात्मक से ऋणात्मक दिशा में",
      B: "ऋणात्मक से धनात्मक दिशा में",
      C: "दोनों दिशाओं में",
      D: "कोई प्रवाह नहीं होता",
    },
    answer: "A",
  },
  {
    id: 15,
    question: "कौन सा उपकरण प्रतिरोध मापने के लिए उपयोग होता है?",
    options: {
      A: "ओममीटर",
      B: "वोल्टमीटर",
      C: "एम्पीयरमीटर",
      D: "गैल्वानोमीटर",
    },
    answer: "A",
  },
  {
    id: 16,
    question: "प्रतिरोध किस पर निर्भर करता है?",
    options: {
      A: "पदार्थ की लंबाई, क्षेत्रफल, और सामग्री",
      B: "धारा की दिशा",
      C: "वोल्टेज की दिशा",
      D: "ऊर्जा की मात्रा",
    },
    answer: "A",
  },
  {
    id: 17,
    question: "ताम्बे के तार में विद्युत धारा प्रवाहित करने के लिए कौन से कण उत्तरदायी होते हैं?",
    options: {
      A: "मुक्त इलेक्ट्रॉन",
      B: "मुक्त प्रोटॉन",
      C: "न्यूट्रॉन",
      D: "फोटॉन",
    },
    answer: "A",
  },
  {
    id: 18,
    question: "बैटरी में किस प्रकार की ऊर्जा संग्रहीत होती है?",
    options: {
      A: "रासायनिक ऊर्जा",
      B: "यांत्रिक ऊर्जा",
      C: "तापीय ऊर्जा",
      D: "चुंबकीय ऊर्जा",
    },
    answer: "A",
  },
  {
    id: 19,
    question: "वोल्टेज और धारा के बीच संबंध को कौन सा नियम बताता है?",
    options: {
      A: "ओम का नियम",
      B: "न्यूटन का नियम",
      C: "आर्किमिडीज का नियम",
      D: "कूलम्ब का नियम",
    },
    answer: "A",
  },
  {
    id: 20,
    question: "विद्युत परिपथ में फ्यूज का क्या कार्य है?",
    options: {
      A: "अधिक धारा से सुरक्षा",
      B: "वोल्टेज बढ़ाना",
      C: "धारा को स्थिर करना",
      D: "ऊर्जा उत्पन्न करना",
    },
    answer: "A",
  },
];