const quizArr = [
  {
    id: 1,
    question: "‘एक वृक्ष की हत्या’ के लेखक कौन हैं?",
    options: {
      A: "प्रेमचंद",
      B: "महादेवी वर्मा",
      C: "विष्णु प्रभाकर",
      D: "सुमित्रानंदन पंत",
    },
    answer: "C",
  },
  {
    id: 2,
    question: "‘एक वृक्ष की हत्या’ में वृक्ष का प्रतीक क्या है?",
    options: {
      A: "प्राकृतिक सम्पत्ति",
      B: "जीवन और संवेदनशीलता",
      C: "मूल्यांकन और शांति",
      D: "पर्यावरणीय संकट",
    },
    answer: "B",
  },
  {
    id: 3,
    question: "‘एक वृक्ष की हत्या’ में वृक्ष की हत्या को किस रूप में देखा गया है?",
    options: {
      A: "प्राकृतिक विनाश",
      B: "आध्यात्मिक संकट",
      C: "मानवता का संघर्ष",
      D: "प्राकृतिक संतुलन का असंतुलन",
    },
    answer: "D",
  },
  {
    id: 4,
    question: "‘एक वृक्ष की हत्या’ कहानी में वृक्ष की हत्या के बाद किस प्रकार का वातावरण उत्पन्न हुआ?",
    options: {
      A: "वातावरण में आंतरिक शांति",
      B: "प्राकृतिक जीवन में हिंसा",
      C: "समाज में बदलाव",
      D: "उत्सव और खुशी",
    },
    answer: "B",
  },
  {
    id: 5,
    question: "कहानी में वृक्ष की हत्या से लेखक क्या संदेश देना चाहते हैं?",
    options: {
      A: "प्राकृतिक संसाधनों का सम्मान",
      B: "मानव जीवन की श्रेष्ठता",
      C: "प्राकृतिक आक्रमण का समर्थन",
      D: "वृक्षों की नफरत",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "‘एक वृक्ष की हत्या’ के लेखक ने इस घटना को किस भावनात्मक दृष्टिकोण से लिखा है?",
    options: {
      A: "समानता और न्याय",
      B: "दुःख और पीड़ा",
      C: "प्राकृतिक संरक्षण",
      D: "सामाजिक न्याय",
    },
    answer: "B",
  },
  {
    id: 7,
    question: "‘एक वृक्ष की हत्या’ में वृक्ष की हत्या के बाद किस प्रकार के सामाजिक परिणाम सामने आते हैं?",
    options: {
      A: "समाज का जागरूक होना",
      B: "संवेदनहीनता और निर्दयता",
      C: "प्राकृतिक और सामाजिक बदलाव",
      D: "आध्यात्मिक शांति का लाभ",
    },
    answer: "B",
  },
  {
    id: 8,
    question: "‘एक वृक्ष की हत्या’ में वृक्ष के प्रतीक के रूप में क्या दर्शाया गया है?",
    options: {
      A: "मानव जीवन का संकट",
      B: "प्राकृतिक सौंदर्य का मापदंड",
      C: "संवेदनशीलता और निपटारे",
      D: "प्राकृतिक जीवन का गहरा संबंध",
    },
    answer: "D",
  },
  {
    id: 9,
    question: "कहानी में वृक्ष की हत्या का असर किस पर पड़ता है?",
    options: {
      A: "वृक्षों पर",
      B: "पक्षियों पर",
      C: "मानव समाज पर",
      D: "प्राकृतिक संसाधनों पर",
    },
    answer: "C",
  },
  {
    id: 10,
    question: "‘एक वृक्ष की हत्या’ की कहानी में वृक्ष के कटने के बाद कौन सा नया विचार सामने आता है?",
    options: {
      A: "संवेदनशीलता की कमी",
      B: "वृक्षों की रक्षा",
      C: "सामाजिक जागरूकता",
      D: "वृक्षों के बिना जीवन का अस्तित्व",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "कहानी के लेखक ने वृक्ष की हत्या के पश्चात किस प्रकार के चित्रण का इस्तेमाल किया?",
    options: {
      A: "प्राकृतिक सौंदर्य का ह्रास",
      B: "मानवता की गिरावट",
      C: "वृक्षों का पवित्र रूप",
      D: "शक्ति और प्रेरणा",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "‘एक वृक्ष की हत्या’ कहानी में वृक्ष की हत्या को किस प्रकार की प्रतीकात्मक घटना के रूप में देखा गया है?",
    options: {
      A: "प्राकृतिक असंतुलन",
      B: "सांस्कृतिक विनाश",
      C: "आध्यात्मिक मृत्यु",
      D: "धार्मिक महत्व की कमी",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "कहानी में लेखक ने वृक्ष की हत्या के द्वारा समाज के किस पहलू को उजागर किया?",
    options: {
      A: "सामाजिक संघर्ष",
      B: "मानवाधिकार उल्लंघन",
      C: "प्राकृतिक कुप्रभाव",
      D: "सांस्कृतिक उत्थान",
    },
    answer: "C",
  },
  {
    id: 14,
    question: "कहानी ‘एक वृक्ष की हत्या’ में वृक्ष की मृत्यु का मुख्य कारण क्या था?",
    options: {
      A: "प्राकृतिक आपदाएँ",
      B: "मानव क्रूरता",
      C: "बिना कारण के मौत",
      D: "धार्मिक विवाद",
    },
    answer: "B",
  },
  {
    id: 15,
    question: "‘एक वृक्ष की हत्या’ कहानी में वृक्ष की हत्या का मनोवैज्ञानिक प्रभाव किस पर दिखाया गया है?",
    options: {
      A: "समाज पर",
      B: "पर्यावरण पर",
      C: "व्यक्तिगत मानसिकता पर",
      D: "प्राकृतिक जीवन पर",
    },
    answer: "C",
  },
  {
    id: 16,
    question: "कहानी के लेखक ने वृक्ष की हत्या के बाद क्या संदेश दिया?",
    options: {
      A: "प्राकृतिक शांति का महत्व",
      B: "मनुष्य का अपराधबोध",
      C: "मानवता की विकृति",
      D: "प्राकृतिक सौंदर्य की रक्षा",
    },
    answer: "A",
  },
  {
    id: 17,
    question: "कहानी ‘एक वृक्ष की हत्या’ में वृक्ष की हत्या के बाद किस प्रकार के सामाजिक मुद्दे सामने आते हैं?",
    options: {
      A: "प्राकृतिक असंतुलन",
      B: "सामाजिक जागरूकता",
      C: "पर्यावरणीय न्याय",
      D: "मानवाधिकार उल्लंघन",
    },
    answer: "A",
  },
  {
    id: 18,
    question: "‘एक वृक्ष की हत्या’ कहानी का संदेश क्या है?",
    options: {
      A: "प्राकृतिक संसाधनों का सम्मान करना",
      B: "संवेदनशीलता का अभाव",
      C: "सामाजिक असमानता",
      D: "मानव जीवन की श्रेष्ठता",
    },
    answer: "A",
  },
  {
    id: 19,
    question: "कहानी ‘एक वृक्ष की हत्या’ में वृक्ष की हत्या को किस रूप में प्रस्तुत किया गया है?",
    options: {
      A: "प्राकृतिक संसाधनों का दुरुपयोग",
      B: "सांस्कृतिक अपमान",
      C: "धार्मिक विघटन",
      D: "सामाजिक असहमति",
    },
    answer: "A",
  },
  {
    id: 20,
    question: "‘एक वृक्ष की हत्या’ के लेखक ने इस घटना के द्वारा समाज में क्या बदलाव लाने की कोशिश की?",
    options: {
      A: "प्राकृतिक संतुलन की पुनः स्थापना",
      B: "मानवता में सुधार",
      C: "धार्मिक विवादों का समाधान",
      D: "सामाजिक न्याय की स्थापना",
    },
    answer: "A",
  }
];
