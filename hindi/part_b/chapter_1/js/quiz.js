const quizArr = [
  {
    id: 1,
    question: "‘राम बिनु बिरथे जगी जनमा’ का मुख्य संदेश क्या है?",
    options: {
      A: "धन कमाना महत्वपूर्ण है",
      B: "राम के बिना जीवन व्यर्थ है",
      C: "संगीत सुनना लाभकारी है",
      D: "प्रकृति की पूजा करनी चाहिए",
    },
    answer: "B",
  },
  {
    id: 2,
    question: "लेखक ने जीवन को किससे सार्थक बताया है?",
    options: {
      A: "धन और संपत्ति से",
      B: "राम के भजन और सेवा से",
      C: "खेल और मनोरंजन से",
      D: "विदेश यात्रा से",
    },
    answer: "B",
  },
  {
    id: 3,
    question: "‘राम बिनु बिरथे जगी जनमा’ में किसके प्रति श्रद्धा व्यक्त की गई है?",
    options: {
      A: "भगवान शिव",
      B: "भगवान राम",
      C: "भगवान विष्णु",
      D: "भगवान कृष्ण",
    },
    answer: "B",
  },
  {
    id: 4,
    question: "लेखक के अनुसार किसकी उपासना से जीवन सफल होता है?",
    options: {
      A: "संपत्ति की",
      B: "ईश्वर की",
      C: "संगीत की",
      D: "शक्ति की",
    },
    answer: "B",
  },
  {
    id: 5,
    question: "राम के बिना जीवन को किससे तुलना की गई है?",
    options: {
      A: "सूरज बिना दिन से",
      B: "बिना पानी के समुद्र से",
      C: "बिना फूलों के बाग से",
      D: "बिना पंखों के पक्षी से",
    },
    answer: "C",
  },
  {
    id: 6,
    question: "पाठ के अनुसार सच्ची भक्ति किसकी होती है?",
    options: {
      A: "भगवान की",
      B: "धन की",
      C: "राजनीति की",
      D: "प्रकृति की",
    },
    answer: "A",
  },
  {
    id: 7,
    question: "‘राम बिनु बिरथे जगी जनमा’ में किसकी महिमा गाई गई है?",
    options: {
      A: "धरती माता की",
      B: "भगवान राम की",
      C: "नदियों की",
      D: "पर्वतों की",
    },
    answer: "B",
  },
  {
    id: 8,
    question: "जीवन को किस प्रकार जीना चाहिए?",
    options: {
      A: "संपत्ति इकट्ठा करके",
      B: "ईश्वर की सेवा करके",
      C: "खेल-कूद में व्यस्त रहकर",
      D: "मनोरंजन में लिप्त रहकर",
    },
    answer: "B",
  },
  {
    id: 9,
    question: "राम के बिना जीवन को किस प्रकार से व्यर्थ माना गया है?",
    options: {
      A: "खाली घर की तरह",
      B: "सूखी नदी की तरह",
      C: "खाली पेट की तरह",
      D: "बिना फूलों के बाग की तरह",
    },
    answer: "D",
  },
  {
    id: 10,
    question: "लेखक के अनुसार मानव जीवन का मुख्य उद्देश्य क्या है?",
    options: {
      A: "धन कमाना",
      B: "ईश्वर भक्ति करना",
      C: "संसार घूमना",
      D: "खेलना और मौज मस्ती करना",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "पाठ में किस प्रकार के जीवन को सार्थक बताया गया है?",
    options: {
      A: "आध्यात्मिक जीवन",
      B: "सामाजिक जीवन",
      C: "व्यावसायिक जीवन",
      D: "आर्थिक जीवन",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "राम की भक्ति करने से क्या मिलता है?",
    options: {
      A: "धन-संपत्ति",
      B: "आंतरिक शांति",
      C: "शक्ति और शक्ति",
      D: "प्रसिद्धि और शोहरत",
    },
    answer: "B",
  },
  {
    id: 13,
    question: "लेखक ने किसकी पूजा करने की सलाह दी है?",
    options: {
      A: "प्राकृतिक तत्वों की",
      B: "भगवान राम की",
      C: "माता-पिता की",
      D: "राजनीतिक नेताओं की",
    },
    answer: "B",
  },
  {
    id: 14,
    question: "‘राम बिनु बिरथे जगी जनमा’ का पाठ किस पर आधारित है?",
    options: {
      A: "प्रकृति के महत्व पर",
      B: "ईश्वर भक्ति के महत्व पर",
      C: "वैज्ञानिक आविष्कारों पर",
      D: "सामाजिक मुद्दों पर",
    },
    answer: "B",
  },
  {
    id: 15,
    question: "जीवन की सार्थकता किससे प्राप्त होती है?",
    options: {
      A: "व्यापार से",
      B: "संगीत से",
      C: "भगवान की भक्ति से",
      D: "खेल-कूद से",
    },
    answer: "C",
  },
  {
    id: 16,
    question: "राम के भक्ति मार्ग को किसने सरल बताया है?",
    options: {
      A: "ज्ञानियों ने",
      B: "ऋषियों ने",
      C: "साधुओं ने",
      D: "संतों ने",
    },
    answer: "D",
  },
  {
    id: 17,
    question: "राम की उपासना से कौन सा लाभ मिलता है?",
    options: {
      A: "धन-संपत्ति",
      B: "मानसिक शांति",
      C: "राजनीतिक शक्ति",
      D: "वैभव और ऐश्वर्य",
    },
    answer: "B",
  },
  {
    id: 18,
    question: "राम की भक्ति में कौन सा भाव होना चाहिए?",
    options: {
      A: "प्रेम और श्रद्धा",
      B: "डर और भय",
      C: "शक्ति और अहंकार",
      D: "धन की लालसा",
    },
    answer: "A",
  },
  {
    id: 19,
    question: "लेखक ने किसे जीवन की सफलता की कुंजी बताया है?",
    options: {
      A: "धन-दौलत को",
      B: "ईश्वर भक्ति को",
      C: "शिक्षा को",
      D: "सामाजिक संबंधों को",
    },
    answer: "B",
  },
  {
    id: 20,
    question: "पाठ में किसके बिना जीवन को व्यर्थ कहा गया है?",
    options: {
      A: "धन के बिना",
      B: "शक्ति के बिना",
      C: "राम के बिना",
      D: "शिक्षा के बिना",
    },
    answer: "C",
  }
];
