const quizArr = [
  {
    id: 1,
    question: "लैंगिक जनन क्या है?",
    options: {
      A: "दो जीवों के संलयन से जनन",
      B: "एक ही जीव से जनन",
      C: "बीजाणुओं से जनन",
      D: "कलम द्वारा जनन",
    },
    answer: "A",
  },
  {
    id: 2,
    question: "कौन सा जनन विधि में केवल एक ही जीव भाग लेता है?",
    options: {
      A: "लैंगिक जनन",
      B: "अलैंगिक जनन",
      C: "बीज जनन",
      D: "परागण",
    },
    answer: "B",
  },
  {
    id: 3,
    question: "स्पोर का निर्माण किस प्रकार के जनन में होता है?",
    options: {
      A: "लैंगिक जनन",
      B: "अलैंगिक जनन",
      C: "कलम जनन",
      D: "काटिंग विधि",
    },
    answer: "B",
  },
  {
    id: 4,
    question: "कृष्णा सरिता में से कौन सा एक जनन प्रकार है?",
    options: {
      A: "विभाजन",
      B: "कली जनन",
      C: "स्पोर जनन",
      D: "सभी",
    },
    answer: "D",
  },
  {
    id: 5,
    question: "कली जनन का उदाहरण कौन है?",
    options: {
      A: "हाइड्रा",
      B: "अमीबा",
      C: "परमेसियम",
      D: "मच्छर",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "स्पोर जनन किस जीव में देखा जाता है?",
    options: {
      A: "फर्न",
      B: "हाइड्रा",
      C: "मनुष्य",
      D: "कुत्ता",
    },
    answer: "A",
  },
  {
    id: 7,
    question: "मनुष्यों में जनन किस प्रकार का होता है?",
    options: {
      A: "लैंगिक जनन",
      B: "अलैंगिक जनन",
      C: "स्पोर जनन",
      D: "अंकुरण",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "बीजाणु किस जनन विधि का उदाहरण है?",
    options: {
      A: "लैंगिक जनन",
      B: "अलैंगिक जनन",
      C: "निषेचन",
      D: "परागण",
    },
    answer: "B",
  },
  {
    id: 9,
    question: "मनुष्यों में निषेचन कहाँ होता है?",
    options: {
      A: "गर्भाशय में",
      B: "फैलोपियन ट्यूब में",
      C: "अंडाशय में",
      D: "वीर्यवाहिनी में",
    },
    answer: "B",
  },
  {
    id: 10,
    question: "फूलों में परागण किसके द्वारा होता है?",
    options: {
      A: "कीड़े-मकोड़े",
      B: "पानी",
      C: "हवा",
      D: "सभी",
    },
    answer: "D",
  },
  {
    id: 11,
    question: "विभाजन जनन किसमें देखा जाता है?",
    options: {
      A: "अमीबा",
      B: "गुलाब",
      C: "सेब का पेड़",
      D: "मनुष्य",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "स्पोर जनन किन पौधों में देखा जाता है?",
    options: {
      A: "केक्टस",
      B: "मूंगफली",
      C: "फर्न",
      D: "पाइन",
    },
    answer: "C",
  },
  {
    id: 13,
    question: "निषेचन की प्रक्रिया क्या है?",
    options: {
      A: "पराग कण का गिरना",
      B: "स्पर्म और अंडाणु का मिलन",
      C: "बीज का अंकुरण",
      D: "पत्ती का विकास",
    },
    answer: "B",
  },
  {
    id: 14,
    question: "जनन का उद्देश्य क्या है?",
    options: {
      A: "ऊर्जा उत्पन्न करना",
      B: "नए जीव बनाना",
      C: "पोषक तत्व प्राप्त करना",
      D: "जल संरक्षण करना",
    },
    answer: "B",
  },
  {
    id: 15,
    question: "मनुष्यों में गर्भ का विकास कहाँ होता है?",
    options: {
      A: "अंडाशय में",
      B: "गर्भाशय में",
      C: "फैलोपियन ट्यूब में",
      D: "यकृत में",
    },
    answer: "B",
  },
  {
    id: 16,
    question: "परागण कितने प्रकार का होता है?",
    options: {
      A: "दो",
      B: "तीन",
      C: "चार",
      D: "एक",
    },
    answer: "A",
  },
  {
    id: 17,
    question: "कौन सा जनन एकल कोशिका जीवों में होता है?",
    options: {
      A: "लैंगिक जनन",
      B: "अलैंगिक जनन",
      C: "पुष्प जनन",
      D: "कली जनन",
    },
    answer: "B",
  },
  {
    id: 18,
    question: "बाहरी निषेचन का उदाहरण कौन है?",
    options: {
      A: "मेंढक",
      B: "मनुष्य",
      C: "बिल्ली",
      D: "साँप",
    },
    answer: "A",
  },
  {
    id: 19,
    question: "कली जनन किस प्रकार का जनन है?",
    options: {
      A: "लैंगिक जनन",
      B: "अलैंगिक जनन",
      C: "बीज जनन",
      D: "परागण",
    },
    answer: "B",
  },
  {
    id: 20,
    question: "स्पर्म और अंडाणु के मिलन को क्या कहते हैं?",
    options: {
      A: "निषेचन",
      B: "परागण",
      C: "स्पोर जनन",
      D: "कलम लगाना",
    },
    answer: "A",
  }
];