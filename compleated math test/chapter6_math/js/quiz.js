const quizArr = [
  {
    id: 1,
    question: "दो समरूप त्रिभुजों की संगत भुजाएँ 4 : 9 के अनुपात में हैं। त्रिभुजों के क्षेत्रफलों का अनुपात कितना होगा ?",
    options: {
      A: "9:4",
      B: "2:3",
      C: "3:2",
      D: "16:81",
    },
    answer: "A",
  },
  {
    id: 2,
    question: "AABC में, AB = 6√3 cm, AC = 12 cm, BC = 6 cm, तो VB बराबर है",
    options: {
      A: "120°",
      B: "60°",
      C: "90°",
      D: "45°",
    },
    answer: "B",
  },
  {
    id: 3,
    question: "सभी समबाहु त्रिभुज होते हैं -",
    options: {
      A: "सर्वागसम",
      B: "समरूप",
      C: "(A) तथा (B) दोनों",
      D: "इनमें कोई नहीं",
    },
    answer: "B",
  },
  {
    id: 4,
    question: "सभी वर्ग होते हैं-",
    options: {
      A: "समरूप",
      B: "सर्वांगसम",
      C: "समानुपाती",
      D: "इनमें कोई नहीं",
    },
    answer: "B",
  },
  {
    id: 5,
    question: "यदि दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात 16 : 9 हो, तो उनकी संगत भुजाओं का अनुपात क्या होगा ?",
    options: {
      A:  "2:3",
      B:  "3:4",
      C:  "4:3",
      D:  "9:16",
    },
    answer: "B",
  },
  {
    id: 6,
    question:
      "एक समकोण त्रिभुज में कर्ण का वर्ग शेष दो भुजाओं के वर्गों के योग के बराबर होता है। इस प्रमेय को किसने प्रतिपादित किया ?",
    options: {
      A: " पाइथागोरस",
      B: "यूक्लिड",
      C: "थेल्स",
      D: "इनमें कोई नहीं",
    },
    answer: "B",
  },
  {
    id: 7,
    question: "यदि ABC तथा POR समरूप त्रिभुज हैं जिसमें VA = 42° तथा VR = 80°, तो √B =?",
    options: {
      A: "42°",
      B: "30°",
      C: "58°",
      D: "48°",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "∆ABC में AB एवं AC के मध्यबिंदु D एवं E इस प्रकार हैं कि DE || BC तथा BC = 8cm, तब DE का मान होगा",
    options: {
      A: "5cm",
      B: "3cm",
      C: "4cm",
      D: "2cm",
    },
    answer: "A",
  },
  {
    id: 9,
    question:"दो खंभे जिनकी ऊँचाइयाँ 6m और 11 m हैं, समतल भूमि पर खड़े हैं। यदि खंभों के पादों के बीच की दूरी 12 m हो, तो इनके ऊपरी सिरों के बीच की दूरी है ?",
    options: {
      A: "17cm",
      B: "18cm",
      C: "13cm",
      D: "12cm",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "ABC और BDE दो समबाहु त्रिभुज इस प्रकार हैं कि D भुजा BC का मध्यबिंदु है । त्रिभुज ABC और BDE के क्षेत्रफलों का अनुपात है",
    options: {
      A: "1:2",
      B: "1:4",
      C: "2:1",
      D: "4:1",
    },
    answer: "A",
  },
  {
    id: 11,
    question: "दो समबाहु त्रिभुजों के क्षेत्रफलों का अनुपात 9 : 4 है, तो उनकी भुजाओं का अनुपात होगा - ",
    options: {
      A: "81:16",
      B: "3:2",
      C: "9:4",
      D: "4:5",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "समचतुर्भुज के विकर्ण 6 cm और 8 cm हैं । इसकी प्रत्येक भुजा की लंबाई होगी",
    options: {
      A: "9cm",
      B: "4cm",
      C: "5cm",
      D: "7cm",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "यदि किसी त्रिभुज के एक कोण की समद्विभाजक रेखा उसकी एक माध्यिका हो, तो वह त्रिभुज कैसा होगा ?",
    options: {
      A: "समबाहु",
      B: "समद्विबाहु",
      C: "विषमबाहु",
      D: "इनमें कोई नहीं",
    },
    answer: "B",
  },
  {
    id: 14,
    question: "समचतुर्भुज के विकर्ण 6 cm और 8 cm हैं । इसकी प्रत्येक भुजा की लंबाई होगी",
    options: {
      A: "9cm",
      B: "4cm",
      C: "5cm",
      D: "7cm",
    },
    answer: "B",
  },
  {
    id: 15,
    question: "किसी त्रिभुज ABC में B कोण समकोण है, यदि AB = 12 cm तथा BC = 5 cm हो, तो AC का मान है?",
    options: {
      A: "13 cm",
      B: "15 cm",
      C: "17 cm",
      D: "20 cm",
    },
    answer: "B",
  },
  {
    id: 16,
    question:
      "निम्नलिखित में से किस त्रिभुज की भुजाओं की लंबाई समान है?",
    options: {
      A: "स्केलीन",
      B: "समद्विबाहु",
      C: "समबाहु",
      D: "इनमें से कोई नहीं",
    },
    answer: "B",
  },
  {
    id: 17,
    question: "भुजा की लंबाई वाले एक समबाहु त्रिभुज का क्षेत्रफल बराबर है:",
    options: {
      A: "√3/2a",
      B: "√3/2a2",
      C: "√3/4 a2",
      D: "√3/4a",
    },
    answer: "C",
  },
  {
    id: 18,
    question: "D और E क्रमशः त्रिभुज ABC की भुजा AB और AC के मध्यबिंदु हैं और BC=6 सेमी। यदि डीई || BC, तो DE की लंबाई है:",
    options: {
      A: "2.5",
      B: "3",
      C: "5",
      D: "6",
    },
    answer: "A",
  },
  {
    id: 19,
    question: "एक समचतुर्भुज के विकर्णों की लंबाई 16 सेमी और 12 सेमी है। समचतुर्भुज की भुजा की लंबाई है:",
    options: {
      A: "20सेमी",
      B: "8सेमी",
      C: "10सेमी",
      D: "9सेमी",
    },
    answer: "B",
  },
  {
    id: 20,
    question: "दो समरूप त्रिभुजों की संगत भुजाओं का अनुपात 2:3 है। यदि छोटे त्रिभुज का क्षेत्रफल 48 वर्ग सेमी है, तो बड़े त्रिभुज का क्षेत्रफल है:",
    options: {
      A: "230 वर्ग सेमी",
      B: "106 वर्ग सेमी",
      C: "107 वर्ग सेमी",
      D: "108 वर्ग सेमी",
    },
    answer: "B",
  },
];
