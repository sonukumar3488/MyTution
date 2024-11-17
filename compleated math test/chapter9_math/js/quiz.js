const quizArr = [
  {
    id: 1,
    question: "त्रिकोणमिति का अनुप्रयोग मुख्य रूप से किसके लिए किया जाता है?",
    options: {
      A: "भूमि की माप",
      B: "ज्योतिष शास्त्र",
      C: "खेल कूद",
      D: "कला और संगीत",
    },
    answer: "A",
  },
  {
    id: 2,
    question: "यदि एक पेड़ का कोणीय ऊँचाई θ है और पेड़ की ऊँचाई h है, तो पेड़ की छाया की लंबाई कैसे निकाली जा सकती है?",
    options: {
      A: "h * tan θ",
      B: "h / tan θ",
      C: "h * sin θ",
      D: "h / cos θ",
    },
    answer: "B",
  },
  {
    id: 3,
    question: "किसी वस्तु की ऊँचाई ज्ञात करने के लिए किस त्रिकोणमितीय अनुपात का उपयोग किया जाता है?",
    options: {
      A: "cos θ",
      B: "tan θ",
      C: "sec θ",
      D: "cot θ",
    },
    answer: "B",
  },
  {
    id: 4,
    question: "किसी ऊँची वस्तु पर दृष्टि कोण को क्या कहा जाता है?",
    options: {
      A: "उपस्थिति कोण",
      B: "दृष्टि का कोण",
      C: "उत्थान कोण",
      D: "दृष्टि की रेखा",
    },
    answer: "C",
  },
  {
    id: 5,
    question: "यदि कोण θ को बढ़ाया जाए, तो tan θ का मान:",
    options: {
      A: "बढ़ता है",
      B: "घटता है",
      C: "स्थिर रहता है",
      D: "बदलता नहीं है",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "नीचे की ओर देखने का कोण किस नाम से जाना जाता है?",
    options: {
      A: "दृष्टि कोण",
      B: "नीचे दृष्टि का कोण",
      C: "कोणीय ऊँचाई",
      D: "दृष्टि की रेखा",
    },
    answer: "B",
  },
  {
    id: 7,
    question: "अगर θ दृष्टि के कोण के बराबर है, तो कौन सा त्रिकोणमितीय अनुपात ऊँचाई और दूरी को जोड़ता है?",
    options: {
      A: "sin θ",
      B: "cos θ",
      C: "tan θ",
      D: "cot θ",
    },
    answer: "C",
  },
  {
    id: 8,
    question: "किस अनुप्रयोग में त्रिकोणमिति का उपयोग नहीं किया जाता है?",
    options: {
      A: "सड़कें बनाना",
      B: "विमान की ऊँचाई मापना",
      C: "स्वास्थ्य परीक्षण",
      D: "जलाशयों की गहराई मापना",
    },
    answer: "C",
  },
  {
    id: 9,
    question: "एक व्यक्ति एक टावर की ऊँचाई को देखने के लिए θ° का कोण बनाता है। टावर की ऊँचाई कैसे निकाली जाती है?",
    options: {
      A: "tan θ = ऊँचाई / दूरी",
      B: "cos θ = दूरी / ऊँचाई",
      C: "sin θ = ऊँचाई * दूरी",
      D: "tan θ = दूरी / ऊँचाई",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "त्रिकोणमिति का उपयोग किस कार्य में किया जाता है?",
    options: {
      A: "किसानों द्वारा फसल की लंबाई मापने में",
      B: "रास्तों की लंबाई मापने में",
      C: "पानी की मात्रा मापने में",
      D: "केवल गणित की कक्षाओं में",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "यदि किसी व्यक्ति का टावर से दृष्टि का कोण 45° है और दूरी d है, तो टावर की ऊँचाई क्या होगी?",
    options: {
      A: "d",
      B: "d/2",
      C: "2d",
      D: "d * tan 45°",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "कोणीय ऊँचाई और दृष्टि कोण में क्या समानता होती है?",
    options: {
      A: "दोनों समान हैं",
      B: "कोणीय ऊँचाई बड़ी होती है",
      C: "दृष्टि कोण बड़ा होता है",
      D: "कोई संबंध नहीं होता",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "यदि एक पेड़ का आधार बिंदु से दूरी d है और ऊँचाई h है, तो tan θ का मान क्या होगा?",
    options: {
      A: "h/d",
      B: "d/h",
      C: "h + d",
      D: "h * d",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "विमानों की ऊँचाई मापने के लिए कौन सा त्रिकोणमितीय अनुप्रयोग उपयोगी है?",
    options: {
      A: "sin θ",
      B: "cos θ",
      C: "tan θ",
      D: "cot θ",
    },
    answer: "C",
  },
  {
    id: 15,
    question: "नीचे देखने का कोण 30° है और ऊँचाई h है। दूरी कैसे निकाली जाएगी?",
    options: {
      A: "h * tan 30°",
      B: "h / tan 30°",
      C: "h * sin 30°",
      D: "h / cos 30°",
    },
    answer: "B",
  },
  {
    id: 16,
    question: "ऊँचाई और दूरी के सवालों में त्रिकोणमिति का कौन सा अनुपात सबसे अधिक प्रयुक्त होता है?",
    options: {
      A: "sec θ",
      B: "cos θ",
      C: "sin θ",
      D: "tan θ",
    },
    answer: "D",
  },
  {
    id: 17,
    question: "एक लिफ्ट के ऊँचाई पर पहुँचने के लिए कौन सा त्रिकोणमितीय अनुप्रयोग काम में आता है?",
    options: {
      A: "समानांतर रेखाएं",
      B: "ऊँचाई और दूरी",
      C: "त्रिज्या मापन",
      D: "घनफल गणना",
    },
    answer: "B",
  },
  {
    id: 18,
    question: "यदि θ का मान 60° है और ऊँचाई h है, तो छाया की लंबाई कैसे निकाली जाएगी?",
    options: {
      A: "h * tan 60°",
      B: "h / tan 60°",
      C: "h * cos 60°",
      D: "h / sin 60°",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "दृष्टि की रेखा और आधार रेखा के बीच का कोण क्या कहलाता है?",
    options: {
      A: "दृष्टि कोण",
      B: "कोणीय ऊँचाई",
      C: "नीचे दृष्टि का कोण",
      D: "विराम कोण",
    },
    answer: "A",
  },
  {
    id: 20,
    question: "किसी वस्तु की ऊँचाई और दूरी के प्रश्न हल करने में कौन सा त्रिकोणमितीय अनुपात मदद करता है?",
    options: {
      A: "cot θ",
      B: "tan θ",
      C: "sec θ",
      D: "cos θ",
    },
    answer: "B",
  },
];