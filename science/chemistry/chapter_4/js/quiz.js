const quizArr = [
  {
    id: 1,
    question: "कार्बन की परमाणु संख्या क्या है?",
    options: {
      A: "6",
      B: "8",
      C: "12",
      D: "14",
    },
    answer: "A",
  },
  {
    id: 2,
    question: "कार्बन की संयोजकता कितनी होती है?",
    options: {
      A: "4",
      B: "2",
      C: "3",
      D: "6",
    },
    answer: "A",
  },
  {
    id: 3,
    question: "कार्बन के कितने प्राकृतिक रूप पाए जाते हैं?",
    options: {
      A: "3",
      B: "4",
      C: "2",
      D: "5",
    },
    answer: "A",
  },
  {
    id: 4,
    question: "कार्बन के किस रूप को उच्चतम कठोरता के लिए जाना जाता है?",
    options: {
      A: "हीरा",
      B: "ग्रेफाइट",
      C: "फुलरीन",
      D: "कोयला",
    },
    answer: "A",
  },
  {
    id: 5,
    question: "ग्रेफाइट का उपयोग किसके रूप में किया जाता है?",
    options: {
      A: "विद्युत सुचालक",
      B: "आभूषण बनाने में",
      C: "रासायनिक अभिकर्मक",
      D: "औषधि निर्माण में",
    },
    answer: "A",
  },
  {
    id: 6,
    question: "कार्बन के कितने सहसंयोजक बंध होते हैं?",
    options: {
      A: "चार",
      B: "दो",
      C: "एक",
      D: "तीन",
    },
    answer: "A",
  },
  {
    id: 7,
    question: "हाइड्रोकार्बन क्या होते हैं?",
    options: {
      A: "कार्बन और हाइड्रोजन के यौगिक",
      B: "कार्बन और ऑक्सीजन के यौगिक",
      C: "कार्बन और नाइट्रोजन के यौगिक",
      D: "हाइड्रोजन और ऑक्सीजन के यौगिक",
    },
    answer: "A",
  },
  {
    id: 8,
    question: "एथेनॉल का रासायनिक सूत्र क्या है?",
    options: {
      A: "C2H5OH",
      B: "CH4",
      C: "C2H6",
      D: "C3H8",
    },
    answer: "A",
  },
  {
    id: 9,
    question: "साबुन बनाने की प्रक्रिया को क्या कहा जाता है?",
    options: {
      A: "सपोनीकरण",
      B: "न्यूट्रलाइजेशन",
      C: "हाइड्रोजनीकरण",
      D: "एस्टरीकरण",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "कार्बन के किस रूप को लवचिकता के लिए जाना जाता है?",
    options: {
      A: "ग्रेफाइट",
      B: "हीरा",
      C: "फुलरीन",
      D: "कोयला",
    },
    answer: "A",
  },
  {
    id: 11,
    question: "एथीन का रासायनिक सूत्र क्या है?",
    options: {
      A: "C2H4",
      B: "C2H6",
      C: "C3H8",
      D: "CH4",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "कार्बन के किस यौगिक का उपयोग इंधन के रूप में किया जाता है?",
    options: {
      A: "मिथेन",
      B: "ग्रेफाइट",
      C: "हीरा",
      D: "फुलरीन",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "कार्बन के कितने इलेक्ट्रॉनों की आवश्यकता होती है स्थायित्व प्राप्त करने के लिए?",
    options: {
      A: "4",
      B: "2",
      C: "6",
      D: "8",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "कार्बनिक यौगिकों में मुख्य रूप से कौन से तत्व पाए जाते हैं?",
    options: {
      A: "कार्बन और हाइड्रोजन",
      B: "कार्बन और नाइट्रोजन",
      C: "ऑक्सीजन और हाइड्रोजन",
      D: "सोडियम और क्लोरीन",
    },
    answer: "A",
  },
  {
    id: 15,
    question: "कौन-सा यौगिक एक एस्टर है?",
    options: {
      A: "C2H5COOC2H5",
      B: "CH3COOH",
      C: "CH4",
      D: "C2H6",
    },
    answer: "A",
  },
  {
    id: 16,
    question: "कार्बन की कौन-सी ऑक्साइड अम्लीय होती है?",
    options: {
      A: "कार्बन डाइऑक्साइड",
      B: "कार्बन मोनोऑक्साइड",
      C: "सिलिका",
      D: "कैल्शियम ऑक्साइड",
    },
    answer: "A",
  },
  {
    id: 17,
    question: "कौन-सी प्रक्रिया संतृप्त यौगिकों को बनाती है?",
    options: {
      A: "हाइड्रोजनीकरण",
      B: "ऑक्सीकरण",
      C: "निर्जलीकरण",
      D: "सपोनीकरण",
    },
    answer: "A",
  },
  {
    id: 18,
    question: "एथेनॉल के जलने पर कौन-सी गैस बनती है?",
    options: {
      A: "कार्बन डाइऑक्साइड",
      B: "ऑक्सीजन",
      C: "हाइड्रोजन",
      D: "नाइट्रोजन",
    },
    answer: "A",
  },
  {
    id: 19,
    question: "कार्बन के किस यौगिक का उपयोग पेय जल को शुद्ध करने में होता है?",
    options: {
      A: "सक्रिय चारकोल",
      B: "हीरा",
      C: "ग्रेफाइट",
      D: "फुलरीन",
    },
    answer: "A",
  },
  {
    id: 20,
    question: "कार्बन के परमाणु में कितने प्रोटॉन होते हैं?",
    options: {
      A: "6",
      B: "8",
      C: "12",
      D: "4",
    },
    answer: "A",
  }
];