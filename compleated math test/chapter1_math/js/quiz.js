const quizArr = [
  {
    id: 1,
    question: "दो या दो से अधिक अभाज्य संख्याओं का म०स० है?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "इनमें से कोई नहीं",
    },
    answer: "A",
  },
  {
    id: 2,
    question: "दो परिमेय संख्याओं के बीच कितनी परिमेय संख्या हो सकती है?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "अनंत",
    },
    answer: "D",
  },
  {
    id: 3,
    question: "निम्नलिखित में से कौन अभाज्य संख्या है?",
    options: {
      A: "8",
      B: "9",
      C: "11",
      D: "15",
    },
    answer: "C",
  },
  {
    id: 4,
    question: "दो संख्याओं का म० स० 25 और ल० स० 50 है तो संख्याओं का गुणनफल होगी-",
    options: {
      A: "1150",
      B: "1250",
      C: "1260",
      D: "1280",
    },
    answer: "B",
  },
  {
    id: 5,
    question: "निम्नलिखित में कौन अभाज्य संख्या है?",
    options: {
      A:  "15",
      B:  "12",
      C:  "75",
      D:  "23",
    },
    answer: "D",
  },
  {
    id: 6,
    question:
      "निम्न में कौन अपरिमेय संख्या नहीं है?",
    options: {
      A: " √11",
      B: "√15",
      C: "√9 * √16",
      D: "√5",
    },
    answer: "C",
  },
  {
    id: 7,
    question: "यूक्लिड विभाजन एलगोरिथ्म दो धनात्मक पूर्णांकों के निम्न में किसे परिकलित करने की तकनीक है?",
    options: {
      A: "ल० स०",
      B: "भागफल",
      C: "म० स०",
      D: "शेषफल",
    },
    answer: "C",
  },
  {
    id: 8,
    question: "निम्न में से कौन परिमेय संख्या है?",
    options: {
      A: "+3",
      B: "2√2/√2",
      C: "4 + √5",
      D: "√5",
    },
    answer: "B",
  },
  {
    id: 9,
    question:
      "दो क्रमिक सम संख्याओं का HCF क्या होगा?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "5",
    },
    answer: "B",
  },
  {
    id: 10,
    question: "1400 में 2 का अधिकतम घात है?",
    options: {
      A: "2",
      B: "3",
      C: "5",
      D: "इनमें से कोई नहीं",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "निम्न में कौन अभाज्य संख्या है?",
    options: {
      A: "8",
      B: "9",
      C: "11",
      D: "15",
    },
    answer: "C",
  },
  {
    id: 12,
    question: "इनमें कौन-सी संख्या अपरिमेय है?",
    options: {
      A: "√20",
      B: "√21",
      C: "√22",
      D: "√23",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "संख्याओं 25 और 50 के HCF और LCM का गुणनफल क्या होगा?",
    options: {
      A: "1150",
      B: "1250",
      C: "1350",
      D: "1450",
    },
    answer: "B",
  },
  {
    id: 14,
    question: "निम्नलिखित में कौन परिमेय संख्या है?",
    options: {
      A: "√5/5",
      B: "2-2",
      C: "√7",
      D: "5",
    },
    answer: "A",
  },
  {
    id: 15,
    question: "6 / 15 का दशमलव प्रसार होगा?",
    options: {
      A: "सांत",
      B: "असान्त",
      C: "आवर्ती",
      D: "इनमें से कोई नहीं",
    },
    answer: "B",
  },
  {
    id: 16,
    question:
      "8, 9, 25 का HCF है?",
    options: {
      A: "8",
      B: "9",
      C: "25",
      D: "1",
    },
    answer: "D",
  },
  {
    id: 17,
    question: "एक परिमेय और अपरिमेय संख्या का योग होता है",
    options: {
      A: "तर्कसंगत",
      B: "तर्कहीन",
      C: "उपरोक्त दोनों",
      D: "उपरोक्त में से कोई नहीं",
    },
    answer: "B",
  },
  {
    id: 18,
    question: "तीन क्रमागत धनात्मक पूर्णांकों का गुणनफल से विभाज्य होता है",
    options: {
      A: "4",
      B: "6",
      C: "कोई सामान्य कारक नहीं",
      D: "केवल 1",
    },
    answer: "B",
  },
  {
    id: 19,
    question:
      "कौन सी संख्या 11 से विभाज्य है?",
    options: {
      A: "1516",
      B: "1452",
      C: "1011",
      D: "1121",
    },
    answer: "B",
  },
  {
    id: 20,
    question:
      "सबसे बड़ी संख्या जिससे 398,436 और 542 को विभाजित करने पर क्रमशः 7,11 और 15 शेष बचे वह है",
    options: {
      A: "17",
      B: "11",
      C: "34",
      D: "45",
    },
    answer: "B",
  },
];