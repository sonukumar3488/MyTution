const quizArr = [
  {
    id: 1,
    question: "‘हमारी नींद’ के लेखक कौन हैं?",
    options: {
      A: "रामकृष्ण परमहंस",
      B: "महादेवी वर्मा",
      C: "हिंदी के प्रसिद्ध कवि",
      D: "मुंशी प्रेमचंद",
    },
    answer: "B",
  },
  {
    id: 2,
    question: "‘हमारी नींद’ में नींद के महत्व को किस रूप में प्रस्तुत किया गया है?",
    options: {
      A: "जीवन की अनिवार्यता",
      B: "सांस्कृतिक पहलू",
      C: "स्वास्थ्य का अहम हिस्सा",
      D: "संगीत और कविता का संयोजन",
    },
    answer: "C",
  },
  {
    id: 3,
    question: "‘हमारी नींद’ में नींद के बारे में कौन सा विचार प्रस्तुत किया गया है?",
    options: {
      A: "नींद को एक विलासिता के रूप में देखा गया है",
      B: "नींद का महत्व जीवन में अनिवार्य है",
      C: "नींद से कोई फर्क नहीं पड़ता",
      D: "नींद सिर्फ शारीरिक आराम के लिए है",
    },
    answer: "B",
  },
  {
    id: 4,
    question: "लेखक ने ‘हमारी नींद’ में नींद की किस विशेषता को महत्व दिया है?",
    options: {
      A: "आध्यात्मिक शांति",
      B: "शारीरिक ऊर्जा का संचार",
      C: "मानसिक विश्राम और ऊर्जा",
      D: "सांस्कृतिक परंपरा",
    },
    answer: "C",
  },
  {
    id: 5,
    question: "‘हमारी नींद’ में लेखक ने नींद के संबंध में किस सामाजिक पहलू को उजागर किया है?",
    options: {
      A: "सोने की आदतें समाज में बदल रही हैं",
      B: "नींद के बिना जीवन असंभव है",
      C: "नींद सामाजिक स्थिति का प्रतीक है",
      D: "नींद का महत्व आजकल कम हो रहा है",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "‘हमारी नींद’ में नींद के आदान-प्रदान को किस प्रकार से बताया गया है?",
    options: {
      A: "मनुष्य का मानसिक और शारीरिक विश्राम",
      B: "एक प्राकृतिक प्रक्रिया",
      C: "हमारी जीवन शैली का हिस्सा",
      D: "एक विज्ञान जो हमें समझना चाहिए",
    },
    answer: "D",
  },
  {
    id: 7,
    question: "किस कारण से लेखक ‘हमारी नींद’ में नींद को एक अनिवार्य हिस्सा मानते हैं?",
    options: {
      A: "क्योंकि नींद से शरीर और मन दोनों को विश्राम मिलता है",
      B: "क्योंकि यह एक धार्मिक कर्तव्य है",
      C: "क्योंकि यह समाज की आदत है",
      D: "क्योंकि यह एक मानसिक संतुलन बनाए रखता है",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "‘हमारी नींद’ में लेखक नींद के किस पहलू को अधिक महत्व देते हैं?",
    options: {
      A: "नींद और स्वास्थ्य का संबंध",
      B: "नींद और भूत-प्रेत का संबंध",
      C: "नींद और आध्यात्मिकता",
      D: "नींद और समय की महत्ता",
    },
    answer: "A",
  },
  {
    id: 9,
    question: "‘हमारी नींद’ में लेखक नींद को किस रूप में वर्णित करते हैं?",
    options: {
      A: "एक आवश्यक क्रिया",
      B: "एक कला",
      C: "एक परंपरा",
      D: "एक साधना",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "‘हमारी नींद’ में नींद के प्रति लेखक का दृष्टिकोण क्या है?",
    options: {
      A: "नींद को एक अत्यधिक विलासिता मानते हैं",
      B: "नींद को स्वास्थ्य और मन की शांति के लिए जरूरी मानते हैं",
      C: "नींद को एक सामान्य आदत मानते हैं",
      D: "नींद को एक बेमतलब की प्रक्रिया मानते हैं",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "‘हमारी नींद’ में लेखक ने नींद के बारे में किस सामाजिक जागरूकता को उठाया है?",
    options: {
      A: "लोगों को नींद के महत्व के बारे में शिक्षित करना",
      B: "समाज में नींद को लेकर अनावश्यक भ्रांतियाँ फैलाना",
      C: "नींद के बारे में शोध करना",
      D: "नींद को एक खतरनाक आदत बताना",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "लेखक के अनुसार नींद का सामाजिक महत्व क्या है?",
    options: {
      A: "यह स्वास्थ्य से जुड़ा हुआ है",
      B: "यह व्यक्तिगत स्वतंत्रता का प्रतीक है",
      C: "यह शारीरिक और मानसिक विश्राम का साधन है",
      D: "यह एक प्राकृतिक गुण है",
    },
    answer: "C",
  },
  {
    id: 13,
    question: "‘हमारी नींद’ में लेखक ने नींद को किस रूप में प्रस्तुत किया है?",
    options: {
      A: "सामाजिक क्रांति",
      B: "मानव जीवन का अहम हिस्सा",
      C: "शारीरिक विश्राम",
      D: "आध्यात्मिक दृष्टि",
    },
    answer: "B",
  },
  {
    id: 14,
    question: "‘हमारी नींद’ में लेखक ने नींद के बारे में किस प्रकार के विचार प्रस्तुत किए हैं?",
    options: {
      A: "यह एक प्राकृतिक आदत है",
      B: "यह जीवन का अनिवार्य हिस्सा है",
      C: "यह एक धार्मिक कार्य है",
      D: "यह जीवन की सबसे महत्वपूर्ण प्रक्रिया है",
    },
    answer: "B",
  },
  {
    id: 15,
    question: "‘हमारी नींद’ में लेखक ने नींद की आदतों को किस परिप्रेक्ष्य में देखा है?",
    options: {
      A: "समाज की बदलती हुई आदतें",
      B: "समाज में नींद के लिए नए दृष्टिकोण",
      C: "नींद के प्रति समाज की उपेक्षा",
      D: "समाज में नींद का विकास",
    },
    answer: "A",
  },
  {
    id: 16,
    question: "‘हमारी नींद’ में लेखक ने नींद को क्यों जरूरी माना है?",
    options: {
      A: "यह शरीर को शांति और आराम देती है",
      B: "यह मानसिक शक्ति को बढ़ाती है",
      C: "यह समाज की आदत है",
      D: "यह जीवन की स्थिरता के लिए आवश्यक है",
    },
    answer: "A",
  },
  {
    id: 17,
    question: "‘हमारी नींद’ में नींद से क्या संदेश दिया गया है?",
    options: {
      A: "समाज में नींद की महत्ता को समझना चाहिए",
      B: "नींद से शारीरिक आराम नहीं मिलता",
      C: "नींद से केवल आत्मा को शांति मिलती है",
      D: "नींद सामाजिक स्थिति का संकेत है",
    },
    answer: "A",
  },
  {
    id: 18,
    question: "‘हमारी नींद’ में नींद की आदतों पर लेखक का क्या विचार है?",
    options: {
      A: "नींद को बुरा माना है",
      B: "नींद को एक आवश्यक क्रिया मानते हैं",
      C: "नींद एक बेमतलब प्रक्रिया है",
      D: "नींद को केवल शरीर की जरूरत मानते हैं",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "‘हमारी नींद’ के लेखक ने नींद के विषय में किस प्रकार की सोच को प्रकट किया?",
    options: {
      A: "यह एक साधारण आदत है",
      B: "यह जीवन का एक जरूरी हिस्सा है",
      C: "यह जीवन की एक अनिवार्यता नहीं है",
      D: "यह केवल आराम का समय है",
    },
    answer: "B",
  },
  {
    id: 20,
    question: "‘हमारी नींद’ में लेखक ने नींद को क्यों महत्वपूर्ण माना?",
    options: {
      A: "क्योंकि यह शारीरिक और मानसिक विश्राम दोनों देती है",
      B: "क्योंकि यह एक सांस्कृतिक धरोहर है",
      C: "क्योंकि यह मानसिक क्रांति का हिस्सा है",
      D: "क्योंकि यह जीवन का सबसे महत्वपूर्ण अंग है",
    },
    answer: "A",
  }
];