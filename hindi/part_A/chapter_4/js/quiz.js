const quizArr = [
  {
    id: 1,
    question: "नाखून क्यों बढ़ते हैं?",
    options: {
      A: "शरीर की कोशिकाओं का पुनर्निर्माण",
      B: "शरीर को गर्म रखने के लिए",
      C: "रक्त की कमी को पूरा करने के लिए",
      D: "शरीर के संतुलन को बनाए रखने के लिए",
    },
    answer: "A",
  },
  {
    id: 2,
    question: "नाखून किस सामग्री से बनते हैं?",
    options: {
      A: "केल्शियम",
      B: "प्रोटीन",
      C: "वसा",
      D: "कार्बोहाइड्रेट",
    },
    answer: "B",
  },
  {
    id: 3,
    question: "नाखून के बढ़ने की गति पर कौन से कारक प्रभाव डालते हैं?",
    options: {
      A: "आहार और जीवनशैली",
      B: "आकर्षण बल",
      C: "जलवायु",
      D: "शरीर का आकार",
    },
    answer: "A",
  },
  {
    id: 4,
    question: "नाखून के बढ़ने की गति कितनी होती है?",
    options: {
      A: "हर महीने लगभग 1 सेंटीमीटर",
      B: "हर महीने लगभग 5 सेंटीमीटर",
      C: "हर महीने लगभग 2 सेंटीमीटर",
      D: "हर महीने लगभग 3 सेंटीमीटर",
    },
    answer: "A",
  },
  {
    id: 5,
    question: "नाखून क्यों टूटते हैं?",
    options: {
      A: "पानी की कमी और पोषक तत्वों की कमी के कारण",
      B: "अत्यधिक बढ़ने के कारण",
      C: "स्ट्रेस के कारण",
      D: "सिर्फ जीन के कारण",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "क्या नाखूनों की लंबाई से शरीर की सेहत का संकेत मिलता है?",
    options: {
      A: "हां, यह संकेत दे सकता है",
      B: "नहीं, यह केवल आनुवंशिकी पर निर्भर है",
      C: "नाखूनों का आकार और लंबाई सेहत से कोई संबंध नहीं है",
      D: "यह केवल शरीर के अंगों की प्रक्रिया है",
    },
    answer: "A",
  },
  {
    id: 7,
    question: "नाखूनों के बढ़ने की प्रक्रिया में कौन से अंग शामिल होते हैं?",
    options: {
      A: "त्वचा और रक्त वाहिकाएँ",
      B: "केवल हड्डियाँ",
      C: "केवल पेशी",
      D: "केवल नसें",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "नाखूनों के बढ़ने की प्रक्रिया क्या है?",
    options: {
      A: "नाखूनों के नीचे के कोशिकाओं का विभाजन और विकास",
      B: "नाखूनों का जमीं पर लहराना",
      C: "नाखूनों का सिकुड़ना",
      D: "नाखूनों का पिघलना",
    },
    answer: "A",
  },
  {
    id: 9,
    question: "क्या नाखूनों को काटने से उनका बढ़ना तेज होता है?",
    options: {
      A: "नहीं, नाखूनों की वृद्धि पर काटने का कोई प्रभाव नहीं पड़ता",
      B: "हाँ, नाखून काटने से वे जल्दी बढ़ते हैं",
      C: "नाखून काटने से उनकी वृद्धि धीमी हो जाती है",
      D: "यह प्रक्रिया सिर्फ महिलाओं के लिए है",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "नाखूनों के स्वास्थ्य के लिए कौन सा पोषक तत्व जरूरी है?",
    options: {
      A: "विटामिन और मिनरल्स",
      B: "कार्बोहाइड्रेट",
      C: "फैटी एसिड्स",
      D: "पानी",
    },
    answer: "A",
  },
  {
    id: 11,
    question: "क्या नाखूनों के बढ़ने की दर जेंडर के आधार पर अलग होती है?",
    options: {
      A: "हाँ, पुरुषों की तुलना में महिलाओं के नाखून जल्दी बढ़ते हैं",
      B: "नहीं, दोनों के नाखूनों की वृद्धि समान होती है",
      C: "नाखूनों की वृद्धि का जेंडर से कोई संबंध नहीं है",
      D: "महिलाओं के नाखून कभी नहीं बढ़ते",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "क्या नाखूनों का रंग सेहत को दर्शाता है?",
    options: {
      A: "हाँ, नाखूनों का रंग शरीर की सेहत के बारे में जानकारी देता है",
      B: "नहीं, यह सिर्फ सौंदर्य का एक हिस्सा है",
      C: "नाखूनों का रंग शरीर की सेहत से कोई संबंध नहीं है",
      D: "यह केवल नाखूनों के आकार पर निर्भर है",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "नाखूनों के लिए कौन सा आहार सर्वोत्तम है?",
    options: {
      A: "प्रोटीन और विटामिन-बी युक्त आहार",
      B: "कार्बोहाइड्रेट से भरपूर आहार",
      C: "मिठाइयाँ और तले हुए भोजन",
      D: "केवल पानी पीना",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "क्या नाखूनों के बढ़ने की प्रक्रिया पर मौसम का प्रभाव पड़ता है?",
    options: {
      A: "हाँ, गर्मी में नाखूनों का विकास तेज होता है",
      B: "नहीं, मौसम का नाखूनों की वृद्धि पर कोई प्रभाव नहीं पड़ता",
      C: "सर्दी में नाखूनों का विकास तेज होता है",
      D: "केवल मानसून में नाखून बढ़ते हैं",
    },
    answer: "A",
  },
  {
    id: 15,
    question: "नाखूनों की मजबूती के लिए क्या करना चाहिए?",
    options: {
      A: "नाखूनों को स्वच्छ रखना और नियमित रूप से देखभाल करना",
      B: "नाखूनों को लंबा छोड़ देना",
      C: "नाखूनों को काटना और उन्हें उखाड़ना",
      D: "केवल नाखूनों पर रंग लगाना",
    },
    answer: "A",
  },
  {
    id: 16,
    question: "नाखूनों की देखभाल के लिए कौन सा उपाय सर्वोत्तम है?",
    options: {
      A: "नाखूनों को ताजे पानी में डुबोकर नमी बनाए रखना",
      B: "नाखूनों को कभी भी नहीं काटना",
      C: "केवल नाखूनों पर रंग लगाना",
      D: "नाखूनों को साबुन से धोना",
    },
    answer: "A",
  },
  {
    id: 17,
    question: "क्या नाखूनों की लंबाई से सेहत पर कोई असर पड़ता है?",
    options: {
      A: "नहीं, नाखूनों की लंबाई से सेहत का कोई संबंध नहीं है",
      B: "लंबे नाखून स्वस्थता का संकेत होते हैं",
      C: "लंबे नाखून शरीर में कमजोरी का संकेत होते हैं",
      D: "लंबे नाखून स्वास्थ्य के लिए हानिकारक होते हैं",
    },
    answer: "A",
  },
  {
    id: 18,
    question: "क्या नाखूनों को कठोर बनाने के लिए कोई विशेष उपाय हैं?",
    options: {
      A: "हां, नियमित तेल से मसाज और संतुलित आहार से नाखून मजबूत होते हैं",
      B: "नाखूनों को कभी भी नहीं काटना चाहिए",
      C: "नाखूनों पर केवल पेंट लगाना चाहिए",
      D: "केवल रासायनिक उत्पादों का उपयोग करना चाहिए",
    },
    answer: "A",
  },
  {
    id: 19,
    question: "क्या नाखूनों को मजबूत रखने के लिए विटामिन-ई महत्वपूर्ण है?",
    options: {
      A: "हाँ, विटामिन-ई नाखूनों की मजबूती में मदद करता है",
      B: "नहीं, यह सिर्फ त्वचा के लिए फायदेमंद है",
      C: "विटामिन-ई से कोई फर्क नहीं पड़ता",
      D: "विटामिन-ई केवल बालों के लिए फायदेमंद है",
    },
    answer: "A",
  },
  {
    id: 20,
    question: "नाखूनों के स्वास्थ्य के लिए कौन सा पोषक तत्व अधिक महत्वपूर्ण है?",
    options: {
      A: "जिंक और विटामिन-बी",
      B: "सोडियम और पोटेशियम",
      C: "विटामिन-सी और आयरन",
      D: "फैटी एसिड्स और कैल्शियम",
    },
    answer: "A",
  }
];
