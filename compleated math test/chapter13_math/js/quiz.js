const quizArr = [
  {
    id: 1,
    question: "घन का पृष्ठीय क्षेत्रफल ज्ञात करने का सूत्र क्या है?",
    options: {
      A: "6a²",
      B: "4a²",
      C: "a³",
      D: "3a²",
    },
    answer: "A",
  },
  {
    id: 2,
    question: "यदि घन का एक पृष्ठ 5 सेमी हो, तो उसका पृष्ठीय क्षेत्रफल क्या होगा?",
    options: {
      A: "150 वर्ग सेमी",
      B: "125 वर्ग सेमी",
      C: "100 वर्ग सेमी",
      D: "75 वर्ग सेमी",
    },
    answer: "B",
  },
  {
    id: 3,
    question: "घनाभ का कुल पृष्ठीय क्षेत्रफल ज्ञात करने का सूत्र क्या है?",
    options: {
      A: "2(lb + bh + hl)",
      B: "4(lb + bh + hl)",
      C: "3(lb + bh + hl)",
      D: "lb + bh + hl",
    },
    answer: "A",
  },
  {
    id: 4,
    question: "यदि घनाभ की लंबाई 4 सेमी, चौड़ाई 3 सेमी, और ऊंचाई 2 सेमी हो, तो उसका कुल पृष्ठीय क्षेत्रफल क्या होगा?",
    options: {
      A: "52 वर्ग सेमी",
      B: "36 वर्ग सेमी",
      C: "72 वर्ग सेमी",
      D: "48 वर्ग सेमी",
    },
    answer: "A",
  },
  {
    id: 5,
    question: "शंकु का वक्र पृष्ठीय क्षेत्रफल ज्ञात करने का सूत्र क्या है?",
    options: {
      A: "πr²",
      B: "πr(r + l)",
      C: "πrl",
      D: "r² + l²",
    },
    answer: "C",
  },
  {
    id: 6,
    question: "यदि किसी शंकु की त्रिज्या 7 सेमी और ऊंचाई 24 सेमी हो, तो उसका वक्र पृष्ठीय क्षेत्रफल क्या होगा?",
    options: {
      A: "168π वर्ग सेमी",
      B: "176π वर्ग सेमी",
      C: "132π वर्ग सेमी",
      D: "154π वर्ग सेमी",
    },
    answer: "D",
  },
  {
    id: 7,
    question: "गोले का पृष्ठीय क्षेत्रफल ज्ञात करने का सूत्र क्या है?",
    options: {
      A: "3πr²",
      B: "4πr²",
      C: "2πr²",
      D: "πr²",
    },
    answer: "B",
  },
  {
    id: 8,
    question: "यदि किसी गोले की त्रिज्या 5 सेमी हो, तो उसका पृष्ठीय क्षेत्रफल क्या होगा?",
    options: {
      A: "100π वर्ग सेमी",
      B: "25π वर्ग सेमी",
      C: "50π वर्ग सेमी",
      D: "75π वर्ग सेमी",
    },
    answer: "A",
  },
  {
    id: 9,
    question: "घन का आयतन ज्ञात करने का सूत्र क्या है?",
    options: {
      A: "a²",
      B: "a³",
      C: "6a²",
      D: "2a³",
    },
    answer: "B",
  },
  {
    id: 10,
    question: "यदि घन की एक भुजा 3 सेमी हो, तो उसका आयतन क्या होगा?",
    options: {
      A: "9 घन सेमी",
      B: "27 घन सेमी",
      C: "18 घन सेमी",
      D: "12 घन सेमी",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "घनाभ का आयतन ज्ञात करने का सूत्र क्या है?",
    options: {
      A: "l + b + h",
      B: "lbh",
      C: "2(l + b + h)",
      D: "3lbh",
    },
    answer: "B",
  },
  {
    id: 12,
    question: "यदि घनाभ की लंबाई 8 सेमी, चौड़ाई 3 सेमी, और ऊंचाई 5 सेमी हो, तो उसका आयतन क्या होगा?",
    options: {
      A: "100 घन सेमी",
      B: "80 घन सेमी",
      C: "120 घन सेमी",
      D: "150 घन सेमी",
    },
    answer: "C",
  },
  {
    id: 13,
    question: "शंकु का आयतन ज्ञात करने का सूत्र क्या है?",
    options: {
      A: "πr²h",
      B: "1/3 πr²h",
      C: "2/3 πr²h",
      D: "4/3 πr²h",
    },
    answer: "B",
  },
  {
    id: 14,
    question: "यदि किसी शंकु की त्रिज्या 3 सेमी और ऊंचाई 6 सेमी हो, तो उसका आयतन क्या होगा?",
    options: {
      A: "18π घन सेमी",
      B: "36π घन सेमी",
      C: "54π घन सेमी",
      D: "27π घन सेमी",
    },
    answer: "D",
  },
  {
    id: 15,
    question: "गोले का आयतन ज्ञात करने का सूत्र क्या है?",
    options: {
      A: "4/3 πr³",
      B: "2/3 πr³",
      C: "3/4 πr³",
      D: "πr³",
    },
    answer: "A",
  },
  {
    id: 16,
    question: "यदि किसी गोले की त्रिज्या 4 सेमी हो, तो उसका आयतन क्या होगा?",
    options: {
      A: "64π घन सेमी",
      B: "256π घन सेमी",
      C: "128π घन सेमी",
      D: "32π घन सेमी",
    },
    answer: "C",
  },
  {
    id: 17,
    question: "अर्धगोले के पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
    options: {
      A: "2πr²",
      B: "3πr²",
      C: "πr²",
      D: "4πr²",
    },
    answer: "B",
  },
  {
    id: 18,
    question: "यदि किसी अर्धगोले की त्रिज्या 6 सेमी हो, तो उसका पृष्ठीय क्षेत्रफल क्या होगा?",
    options: {
      A: "54π वर्ग सेमी",
      B: "108π वर्ग सेमी",
      C: "72π वर्ग सेमी",
      D: "144π वर्ग सेमी",
    },
    answer: "B",
  },
  {
    id: 19,
    question: "सिलेंडर के आयतन का सूत्र क्या है?",
    options: {
      A: "πr²h",
      B: "2πr²",
      C: "πrh",
      D: "4πr²h",
    },
    answer: "A",
  },
  {
    id: 20,
    question: "यदि किसी सिलेंडर की त्रिज्या 2 सेमी और ऊंचाई 10 सेमी हो, तो उसका आयतन क्या होगा?",
    options: {
      A: "20π घन सेमी",
      B: "40π घन सेमी",
      C: "60π घन सेमी",
      D: "80π घन सेमी",
    },
    answer: "B",
  },
];
