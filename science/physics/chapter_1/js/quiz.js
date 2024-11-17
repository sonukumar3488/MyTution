const quizArr = [
  {
    id: 1,
    question: "प्रकाश के परावर्तन में कौन-सा नियम लागू होता है?",
    options: {
      A: "अपवर्तित किरण अपवर्तक तल पर लम्बवत होती है",
      B: "अपवर्तित किरण, आपतित किरण और अपवर्तन तल समान तल में होते हैं",
      C: "आपतित किरण और परावर्तित किरण समकोण बनाती हैं",
      D: "परावर्तन कोण हमेशा शून्य होता है",
    },
    answer: "B",
  },
  {
    id: 2,
    question: "परावर्तन के नियम के अनुसार, आपतित किरण, परावर्तित किरण और परावर्तन तल किसमें स्थित होते हैं?",
    options: {
      A: "एक ही तल में",
      B: "भिन्न-भिन्न तल में",
      C: "कोई नियम नहीं है",
      D: "समानांतर तल में",
    },
    answer: "A",
  },
  {
    id: 3,
    question: "कोण-आपतन और कोण-परावर्तन के बीच क्या संबंध होता है?",
    options: {
      A: "दोनों बराबर होते हैं",
      B: "दोनों विपरीत होते हैं",
      C: "दोनों का कोई संबंध नहीं होता",
      D: "एक दूसरे से दोगुने होते हैं",
    },
    answer: "A",
  },
  {
    id: 4,
    question: "स्नेल का नियम किससे संबंधित है?",
    options: {
      A: "अपवर्तन",
      B: "परावर्तन",
      C: "प्रकीर्णन",
      D: "परिच्छेदन",
    },
    answer: "A",
  },
  {
    id: 5,
    question: "अपवर्तनांक का सही परिभाषा क्या है?",
    options: {
      A: "प्रकाश की गति का अनुपात दो माध्यमों में",
      B: "प्रकाश की ऊर्जा का मापन",
      C: "प्रकाश की तीव्रता का मापन",
      D: "कोण-परावर्तन और कोण-आपतन का योग",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "जब प्रकाश एक माध्यम से दूसरे में प्रवेश करता है, तो उसकी गति क्यों बदल जाती है?",
    options: {
      A: "दो माध्यमों के अपवर्तनांक भिन्न होने के कारण",
      B: "दो माध्यमों के तापमान भिन्न होने के कारण",
      C: "प्रकाश की ऊर्जा भिन्न होने के कारण",
      D: "माध्यम के रंग के कारण",
    },
    answer: "A",
  },
  {
    id: 7,
    question: "प्रकाश के पूर्ण आंतरिक परावर्तन की स्थिति कब उत्पन्न होती है?",
    options: {
      A: "जब आपतन कोण क्रांतिक कोण से अधिक होता है",
      B: "जब आपतन कोण क्रांतिक कोण से कम होता है",
      C: "जब आपतन कोण शून्य होता है",
      D: "जब माध्यम एक समान होता है",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "वस्तु और उसके प्रतिबिंब के बीच की दूरी किस पर निर्भर करती है?",
    options: {
      A: "दर्पण के प्रकार पर",
      B: "वस्तु के रंग पर",
      C: "आपतित प्रकाश की तीव्रता पर",
      D: "परावर्तित प्रकाश की गति पर",
    },
    answer: "A",
  },
  {
    id: 9,
    question: "स्नेल के नियम के अनुसार, अपवर्तनांक का सूत्र क्या है?",
    options: {
      A: "n = sin i / sin r",
      B: "n = cos i / cos r",
      C: "n = tan i / tan r",
      D: "n = cot i / cot r",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "जब प्रकाश वक्र तल पर आपतन करता है, तो वह किस प्रकार परावर्तित होता है?",
    options: {
      A: "विभिन्न दिशाओं में",
      B: "केवल एक दिशा में",
      C: "ऊपर की दिशा में",
      D: "नीचे की दिशा में",
    },
    answer: "A",
  },
  {
    id: 11,
    question: "किस प्रकार के दर्पण में वास्तविक प्रतिबिंब बनता है?",
    options: {
      A: "अवतल दर्पण",
      B: "उत्तल दर्पण",
      C: "समतल दर्पण",
      D: "प्रकीर्ण दर्पण",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "वर्णक्रम का कौन-सा रंग सबसे अधिक अपवर्तित होता है?",
    options: {
      A: "बैंगनी",
      B: "लाल",
      C: "पीला",
      D: "हरा",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "फाइबर ऑप्टिक्स किस सिद्धांत पर आधारित है?",
    options: {
      A: "पूर्ण आंतरिक परावर्तन",
      B: "अपवर्तन",
      C: "परावर्तन",
      D: "प्रकीर्णन",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "जब प्रकाश एक अपवर्तक माध्यम से गुजरता है, तो किस गुण में परिवर्तन होता है?",
    options: {
      A: "वेग",
      B: "द्रव्यमान",
      C: "घनत्व",
      D: "ऊर्जा",
    },
    answer: "A",
  },
  {
    id: 15,
    question: "प्रकाश के अपवर्तन का एक उदाहरण क्या है?",
    options: {
      A: "जल में रखी छड़ी का टेढ़ा दिखना",
      B: "धातु की चमक",
      C: "लौह की जंग",
      D: "पानी का जमना",
    },
    answer: "A",
  },
  {
    id: 16,
    question: "किस प्रकार के लेंस में प्रकाश अपवर्तित होकर एक बिंदु पर एकत्रित होता है?",
    options: {
      A: "अवतल लेंस",
      B: "उत्तल लेंस",
      C: "समतल लेंस",
      D: "दोनों लेंस",
    },
    answer: "B",
  },
  {
    id: 17,
    question: "आपतन कोण और अपवर्तन कोण के बीच का संबंध किस माध्यम पर निर्भर करता है?",
    options: {
      A: "दोनों माध्यमों के अपवर्तनांक पर",
      B: "माध्यम के रंग पर",
      C: "तापमान पर",
      D: "प्रकाश की तीव्रता पर",
    },
    answer: "A",
  },
  {
    id: 18,
    question: "पूर्ण आंतरिक परावर्तन का एक प्राकृतिक उदाहरण क्या है?",
    options: {
      A: "जल में मछलियों का चमकना",
      B: "सूर्य का उगना",
      C: "पानी में तेल का तैरना",
      D: "आकाश का नीला होना",
    },
    answer: "A",
  },
  {
    id: 19,
    question: "आपतन कोण क्या होता है?",
    options: {
      A: "वह कोण जो आपतित किरण द्वारा आपतन बिंदु पर बनता है",
      B: "वह कोण जो परावर्तित किरण बनाती है",
      C: "वह कोण जो माध्यम बनाता है",
      D: "वह कोण जो अपवर्तित किरण बनाती है",
    },
    answer: "A",
  },
  {
    id: 20,
    question: "परावर्तन के नियम कितने होते हैं?",
    options: {
      A: "दो",
      B: "एक",
      C: "तीन",
      D: "चार",
    },
    answer: "A",
  }
];
