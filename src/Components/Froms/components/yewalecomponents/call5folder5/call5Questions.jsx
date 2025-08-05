

const call5Questions = [
  {
    id: 1,
    mr: "नमस्कार सर मी YNK ग्रुप मधून बोलत आहे, फीडबॅक साठी कॉल आहे तुमच्याकडे 2 मिनिट वेळ आहे का ?",
    en: "Hello sir, I am calling from YNK Group for feedback. Do you have 2 minutes?",
    type: "yesno",
  },
  {
    id: 2,
    mr: "सर आपल्या शॉप ची ओपनिंग व्यवस्थित झाली का ?",
    en: "Was your shop's opening smooth?",
    type: "yesno",
  },
  {
    id: 3,
    mr: "सर आपल्याला शॉप ओपनिंगच्या दिवशी काही त्रास झाला आहे का ?",
    en: "Did you face any issues on the shop opening day?",
    type: "yesno",
  },
  {
    id: 4,
    mr: "सर शॉप ओपनिंगच्या वेळी YNK चे इंजिनियर साइटवर होते का ?",
    en: "Were YNK engineers present on-site during shop opening?",
    type: "yesno",
  },
  {
    id: 5,
    mr: "सर आपल्या शॉप मध्ये सर्व वस्तु शॉप ओपनिंग च्या दिवशी चालू होत्या ना ?",
    en: "Were all items working on the opening day?",
    type: "yesno",
  },
  {
    id: 6,
    mr: "सर आपल्या शॉप मधील कोणत्या वस्तु ला वापरताना कामगारांना त्रास होत आहे का ?",
    en: "Are workers facing issues while using any item in your shop?",
    type: "text",
  },
  {
    id: 7,
    mr: "सर आपल्या शॉप मध्ये CCTV कॅमेरा काम करीत आहेत का ?",
    en: "Are CCTV cameras working properly in your shop?",
    type: "yesno",
  },
  {
    id: 8,
    mr: "सर आपल्या शॉप मध्ये फ्रीज, मिक्सर, इडली स्टीमर, कॉफी मशी, फ्रायर मशीन बरोबर काम करीत आहेत का ?",
    en: "Are fridge, mixer, idli steamer, coffee machine, fryer working properly?",
    type: "yesno",
  },
  {
    id: 9,
    mr: "सर आपल्या शॉप मधील सर्व लाईट पॉइंट काम करीत आहेत का ?",
    en: "Are all light points working in your shop?",
    type: "yesno",
  },
  {
    id: 10,
    mr: "सर आपण शॉप मधील ज्या कामगारांना ट्रेनिंग दिली तेच शॉप मध्ये काम करीत आहेत का ?",
    en: "Are the trained workers still working in your shop?",
    type: "yesno",
  },
  {
    id: 11,
    mr: "सर शॉप चालू झाल्यानंतर 2 दिवशी YNK कंपनी कडून इंजिनियर साईड वर किती वाजे पर्यंत होते ?",
    en: "Until what time were YNK engineers present for the 2 days after shop started?",
    type: "text",
  },
  {
    id: 13,
    mr: "सर इडली स्टीमर बॉयलर साठी वॉटर पुरत आहे का ?",
    en: "Is water sufficient for idli steamer boiler?",
    type: "yesno",
  },
  {
    id: 14,
    mr: "सर आपल्या शॉप मध्ये कोणत्या वस्तु बंद किव्हा खराब आल्या आहेत का ?",
    en: "Are there any items not working or defective in your shop?",
    type: "text",
  },
  {
    id: 15,
    mr: "सर बिल मशीन आणि समोरील बोर्ड व्यवस्थित काम करीत आहेत का ?",
    en: "Are the billing machine and the front board working properly?",
    type: "yesno",
  },
  {
    id: 16,
    mr: "सर आपल्याला YNK कंपनी कडून इंजिनियर यांनी दिलेले सर्व वस्तूंचे वॉरंटी कार्ड आपण व्यवस्थित ठेवले का ?",
    en: "Have you kept all the warranty cards given by YNK engineer safely?",
    type: "yesno",
  },
  {
    id: 17,
    mr: "सर शॉप मधील पाणी आपल्याला वापरण्यासाठी व्यस्थित पूर्ण दिवस पुरत आहे का ?",
    en: "Is water sufficient throughout the day for your usage?",
    type: "yesno",
  },
  {
    id: 18,
    mr: "सर आपण सर्व वस्तूंची असलेली माहिती बूकलेट मधील वाचून घेतले आहे का ?",
    en: "Have you read the item details from the booklet?",
    type: "yesno",
  },
  {
    id: 19,
    mr: "सर आपल्याला कोणतीही मदत लागल्यास तुम्ही YNK कस्टमर केयर नं वर कॉल करू शकता टाईम सकाळी- 10 ते 6 वा",
    en: "You can call YNK customer care (10 AM to 6 PM) if you need any help.",
    type: "info",
  },
  {
    id: 20,
    mr: "सर तुम्ही इंजिनियर आणि YNK टिम  यांना किती रेटिंग देणार - 3, 4, 5, या पैकी ?",
    en: "What rating will you give to the engineers and YNK team - 3, 4 or 5?",
    type: "rating",
  },
];
 
export default call5Questions;
