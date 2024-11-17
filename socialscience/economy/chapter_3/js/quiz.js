const quizArr = [
  {
    id: 1,
    question: "बचत किसे कहते हैं?",
    options: {
      A: "विवेकपूर्ण खर्च करना",
      B: "आवश्यकताओं से अधिक खर्च करना",
      C: "आय में से कुछ हिस्सा खर्च न करके जमा करना",
      D: "आय से सारे खर्च करना",
    },
    answer: "C",
  },
  {
    id: 2,
    question: "साख का प्रमुख उद्देश्य क्या होता है?",
    options: {
      A: "व्यक्तिगत खर्च",
      B: "व्यापारिक उद्देश्यों के लिए ऋण प्रदान करना",
      C: "सरकारी सेवाओं में निवेश",
      D: "निजी संपत्ति का निर्माण",
    },
    answer: "B",
  },
  {
    id: 3,
    question: "संचय के दो प्रमुख स्रोत कौन से हैं?",
    options: {
      A: "वेतन और आय",
      B: "निवेश और ब्याज",
      C: "आय और खर्च में अंतर",
      D: "शेयर और बॉन्ड",
    },
    answer: "C",
  },
  {
    id: 4,
    question: "साख के आधार पर कौन सा खाता खुलता है?",
    options: {
      A: "वर्तमान खाता",
      B: "सुरक्षा खाता",
      C: "ऋण खाता",
      D: "बचत खाता",
    },
    answer: "D",
  },
  {
    id: 5,
    question: "वित्तीय संस्थाएं किसे साख प्रदान करती हैं?",
    options: {
      A: "सरकार",
      B: "निजी क्षेत्र",
      C: "व्यक्तिगत एवं व्यावसायिक जरूरतों को",
      D: "केवल सरकारी कर्मचारियों को",
    },
    answer: "C",
  },
  {
    id: 6,
    question: "बचत को बढ़ावा देने के लिए सरकार कौन सी योजना शुरू करती है?",
    options: {
      A: "प्रधानमंत्री जन धन योजना",
      B: "पेंशन योजना",
      C: "बचत योजनाएं",
      D: "आधार योजना",
    },
    answer: "C",
  },
  {
    id: 7,
    question: "साख की सुविधा किसके द्वारा दी जाती है?",
    options: {
      A: "बैंक और अन्य वित्तीय संस्थाएं",
      B: "सरकारी विभाग",
      C: "निजी व्यक्तियों",
      D: "कोई नहीं",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "संचय की प्रक्रिया में क्या लाभ होता है?",
    options: {
      A: "आवश्यकताओं को पूरा करना",
      B: "भविष्य के लिए सुरक्षा",
      C: "लाभ की प्राप्ति",
      D: "सभी",
    },
    answer: "D",
  },
  {
    id: 9,
    question: "किस प्रकार की बचत में लोग सामान्यतः रुचि रखते हैं?",
    options: {
      A: "नकद बचत",
      B: "स्वर्ण में बचत",
      C: "बैंक में बचत",
      D: "निवेश बचत",
    },
    answer: "C",
  },
  {
    id: 10,
    question: "संचय के लिए सबसे उचित साधन कौन सा है?",
    options: {
      A: "बैंक खाता",
      B: "स्मारकीय योजनाएं",
      C: "शेयर बाजार",
      D: "गृह निर्माण योजनाएं",
    },
    answer: "A",
  },
  {
    id: 11,
    question: "ऋण प्रदान करने की प्रक्रिया क्या कहलाती है?",
    options: {
      A: "संचय",
      B: "साख",
      C: "वित्तीय सहायता",
      D: "ब्याज भुगतान",
    },
    answer: "B",
  },
  {
    id: 12,
    question: "वर्तमान में बचत के लिए कौन सा प्रमुख माध्यम है?",
    options: {
      A: "अर्थव्यवस्था में बदलाव",
      B: "बैंक और वित्तीय संस्थाएं",
      C: "शेयर बाजार",
      D: "नौकरशाही योजनाएं",
    },
    answer: "B",
  },
  {
    id: 13,
    question: "साख को किस प्रकार से वापस किया जाता है?",
    options: {
      A: "ब्याज के साथ",
      B: "बिना ब्याज",
      C: "सिर्फ मूलधन",
      D: "सभी विकल्प सही हैं",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "संचय किसका परिणाम होता है?",
    options: {
      A: "कम खर्च",
      B: "ब्याज कमाना",
      C: "आवश्यकताओं का पूरा होना",
      D: "सभी",
    },
    answer: "D",
  },
  {
    id: 15,
    question: "बचत पर ब्याज का निर्धारण किससे किया जाता है?",
    options: {
      A: "वित्तीय बाजार",
      B: "बैंक",
      C: "वित्त मंत्रालय",
      D: "राज्य सरकार",
    },
    answer: "B",
  },
  {
    id: 16,
    question: "किसे 'साख की दर' कहा जाता है?",
    options: {
      A: "ब्याज दर",
      B: "संचय दर",
      C: "ऋण दर",
      D: "मूलधन दर",
    },
    answer: "A",
  },
  {
    id: 17,
    question: "संचय और निवेश के बीच क्या अंतर है?",
    options: {
      A: "संचय सिर्फ बचत है, जबकि निवेश ब्याज अर्जित करता है",
      B: "संचय पर ब्याज मिलता है, निवेश में लाभ होता है",
      C: "संचय को निवेश कहा जाता है",
      D: "इनमें कोई अंतर नहीं है",
    },
    answer: "A",
  },
  {
    id: 18,
    question: "साख और ऋण में क्या अंतर है?",
    options: {
      A: "साख से धन उधार मिलता है, जबकि ऋण बैंक से लिया जाता है",
      B: "साख केवल सरकार द्वारा दिया जाता है",
      C: "ऋण में ब्याज नहीं होता, जबकि साख में ब्याज होता है",
      D: "साख बिना सुरक्षा के होती है, जबकि ऋण के लिए सुरक्षा ली जाती है",
    },
    answer: "D",
  },
  {
    id: 19,
    question: "आधुनिक अर्थव्यवस्था में बचत और साख का क्या महत्व है?",
    options: {
      A: "वह अर्थव्यवस्था की विकास दर को बढ़ाते हैं",
      B: "यह सरकारी खजाने में योगदान करते हैं",
      C: "यह विकासशील देशों के लिए अधिक आवश्यक होते हैं",
      D: "सभी",
    },
    answer: "D",
  },
  {
    id: 20,
    question: "संचय का क्या लाभ होता है?",
    options: {
      A: "भविष्य में खर्चों के लिए सुरक्षा",
      B: "आर्थिक संकट से बचाव",
      C: "लंबे समय तक आय में वृद्धि",
      D: "सभी",
    },
    answer: "D",
  },
];