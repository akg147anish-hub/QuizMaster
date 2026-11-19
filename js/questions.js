/**
 * QuizMaster - Master Question Database
 * 280+ Verified Questions spanning 9 topics and 5 difficulty tiers.
 * Categories: General Knowledge, Ramayana, Mahabharata, Sports, Science,
 *             History & Geography, Entertainment, Technology, Indian Culture.
 * Difficulties: Easy, Medium, Hard, Very Hard, Extreme.
 */

const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "category": "General Knowledge",
    "difficulty": "Easy",
    "question": "Which city is officially recognized as the capital of India?",
    "options": [
      "Mumbai",
      "New Delhi",
      "Kolkata",
      "Chennai"
    ],
    "correctAnswer": 1,
    "explanation": "New Delhi was inaugurated as the capital of India in 1931 by Viceroy Lord Irwin.",
    "hint": "It contains the India Gate and the Rashtrapati Bhavan."
  },
  {
    "id": 2,
    "category": "General Knowledge",
    "difficulty": "Easy",
    "question": "What is the national animal of India?",
    "options": [
      "Asian Elephant",
      "Royal Bengal Tiger",
      "Indian Lion",
      "Snow Leopard"
    ],
    "correctAnswer": 1,
    "explanation": "The Royal Bengal Tiger (Panthera tigris) was declared the national animal of India in April 1973.",
    "hint": "This big cat has orange fur with black stripes."
  },
  {
    "id": 3,
    "category": "General Knowledge",
    "difficulty": "Easy",
    "question": "What is the capital of Japan?",
    "options": [
      "Kyoto",
      "Osaka",
      "Tokyo",
      "Hiroshima"
    ],
    "correctAnswer": 2,
    "explanation": "Tokyo is the bustling capital of Japan and the world's most populous metropolitan area.",
    "hint": "This mega-city hosted the 1964 and 2020 Summer Olympics."
  },
  {
    "id": 4,
    "category": "General Knowledge",
    "difficulty": "Easy",
    "question": "Which is the largest ocean on Earth?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctAnswer": 3,
    "explanation": "The Pacific Ocean covers more than 30% of the Earth's surface and is larger than all landmasses combined.",
    "hint": "Its name means 'peaceful' and it contains the Mariana Trench."
  },
  {
    "id": 5,
    "category": "General Knowledge",
    "difficulty": "Easy",
    "question": "Who is known as the 'Father of the Indian Constitution'?",
    "options": [
      "Mahatma Gandhi",
      "Dr. B.R. Ambedkar",
      "Jawaharlal Nehru",
      "Sardar Vallabhbhai Patel"
    ],
    "correctAnswer": 1,
    "explanation": "Dr. Bhimrao Ramji Ambedkar served as the Chairman of the Drafting Committee of the Constituent Assembly.",
    "hint": "He was also independent India's first Minister of Law and Justice."
  },
  {
    "id": 6,
    "category": "General Knowledge",
    "difficulty": "Medium",
    "question": "How many articles were originally present in the Constitution of India when adopted in 1949?",
    "options": [
      "395",
      "448",
      "315",
      "402"
    ],
    "correctAnswer": 0,
    "explanation": "The original Constitution of India contained 395 articles arranged into 22 parts and 8 schedules.",
    "hint": "The number is just five short of 400."
  },
  {
    "id": 7,
    "category": "General Knowledge",
    "difficulty": "Medium",
    "question": "Which Indian state has the longest coastline?",
    "options": [
      "Maharashtra",
      "Tamil Nadu",
      "Gujarat",
      "Andhra Pradesh"
    ],
    "correctAnswer": 2,
    "explanation": "Gujarat has the longest mainland coastline in India, stretching approximately 1,600 kilometers.",
    "hint": "This western state borders the Arabian Sea and the Rann of Kutch."
  },
  {
    "id": 8,
    "category": "General Knowledge",
    "difficulty": "Medium",
    "question": "What is the official currency of the United Kingdom?",
    "options": [
      "Euro",
      "Pound Sterling",
      "Franc",
      "Krona"
    ],
    "correctAnswer": 1,
    "explanation": "The British Pound Sterling (GBP) is the world's oldest currency still in continuous use.",
    "hint": "Its symbol is £."
  },
  {
    "id": 9,
    "category": "General Knowledge",
    "difficulty": "Medium",
    "question": "Who was the first Indian citizen to win a Nobel Prize?",
    "options": [
      "C.V. Raman",
      "Rabindranath Tagore",
      "Mother Teresa",
      "Amartya Sen"
    ],
    "correctAnswer": 1,
    "explanation": "Rabindranath Tagore won the Nobel Prize in Literature in 1913 for his song collection 'Gitanjali'.",
    "hint": "He also composed the national anthems of India and Bangladesh."
  },
  {
    "id": 10,
    "category": "General Knowledge",
    "difficulty": "Medium",
    "question": "Which article of the Indian Constitution is referred to as the 'Heart and Soul of the Constitution'?",
    "options": [
      "Article 21",
      "Article 14",
      "Article 32",
      "Article 19"
    ],
    "correctAnswer": 2,
    "explanation": "Dr. B.R. Ambedkar called Article 32 (Right to Constitutional Remedies) the heart and soul of the Constitution.",
    "hint": "It empowers citizens to petition the Supreme Court directly for the enforcement of fundamental rights."
  },
  {
    "id": 11,
    "category": "General Knowledge",
    "difficulty": "Hard",
    "question": "Who was the first Chief Election Commissioner of independent India?",
    "options": [
      "Sukumar Sen",
      "T.N. Seshan",
      "K.V.K. Sundaram",
      "Nagendra Singh"
    ],
    "correctAnswer": 0,
    "explanation": "Sukumar Sen served as the first Chief Election Commissioner from 1950 to 1958 and successfully organized India's first general election.",
    "hint": "He also supervised the first general elections in Sudan in 1953."
  },
  {
    "id": 12,
    "category": "General Knowledge",
    "difficulty": "Hard",
    "question": "Which country is home to the world's northernmost national capital?",
    "options": [
      "Norway",
      "Iceland",
      "Finland",
      "Canada"
    ],
    "correctAnswer": 1,
    "explanation": "Reykjavik, the capital of Iceland, is located at approximately 64°08' N latitude, making it the world's northernmost sovereign capital.",
    "hint": "The country is known as the Land of Fire and Ice."
  },
  {
    "id": 13,
    "category": "General Knowledge",
    "difficulty": "Hard",
    "question": "Under which schedule of the Indian Constitution are the recognized official languages listed?",
    "options": [
      "Seventh Schedule",
      "Eighth Schedule",
      "Ninth Schedule",
      "Tenth Schedule"
    ],
    "correctAnswer": 1,
    "explanation": "The Eighth Schedule of the Indian Constitution lists 22 officially recognized languages.",
    "hint": "It immediately follows the schedule detailing the Union, State, and Concurrent Lists."
  },
  {
    "id": 14,
    "category": "General Knowledge",
    "difficulty": "Hard",
    "question": "In which year was the Bharat Ratna, India's highest civilian award, instituted?",
    "options": [
      "1950",
      "1952",
      "1954",
      "1956"
    ],
    "correctAnswer": 2,
    "explanation": "The Bharat Ratna was instituted on 2 January 1954 by President Rajendra Prasad.",
    "hint": "It was first conferred upon C. Rajagopalachari, Sarvepalli Radhakrishnan, and C.V. Raman."
  },
  {
    "id": 15,
    "category": "General Knowledge",
    "difficulty": "Very Hard",
    "question": "Who was the constitutional advisor to the Constituent Assembly during the drafting of the Indian Constitution?",
    "options": [
      "Sir Alladi Krishnaswami Iyer",
      "Sir B.N. Rau",
      "K.M. Munshi",
      "N. Gopalaswami Ayyangar"
    ],
    "correctAnswer": 1,
    "explanation": "Sir Benegal Narsing Rau (B.N. Rau) prepared the original draft of the Constitution and also served as a judge on the International Court of Justice.",
    "hint": "His brother Benegal Rama Rau was the longest-serving Governor of the Reserve Bank of India."
  },
  {
    "id": 16,
    "category": "General Knowledge",
    "difficulty": "Very Hard",
    "question": "Which African nation was previously known as 'Upper Volta' until 1984?",
    "options": [
      "Burkina Faso",
      "Benin",
      "Mali",
      "Zimbabwe"
    ],
    "correctAnswer": 0,
    "explanation": "Burkina Faso, which means 'Land of Incorruptible People', was renamed from Upper Volta in 1984 by Thomas Sankara.",
    "hint": "Its capital city is Ouagadougou."
  },
  {
    "id": 17,
    "category": "General Knowledge",
    "difficulty": "Very Hard",
    "question": "Which is the only UN member state whose flag is neither a square nor a rectangle?",
    "options": [
      "Switzerland",
      "Vatican City",
      "Nepal",
      "Bhutan"
    ],
    "correctAnswer": 2,
    "explanation": "Nepal's flag is the world's only sovereign state flag formed of two stacked triangles (double pennant).",
    "hint": "This Himalayan nation is home to Mount Everest."
  },
  {
    "id": 18,
    "category": "General Knowledge",
    "difficulty": "Extreme",
    "question": "In the landmark Kesavananda Bharati case (1973), how many judges sat on the Supreme Court bench that established the 'Basic Structure' doctrine?",
    "options": [
      "9",
      "11",
      "13",
      "15"
    ],
    "correctAnswer": 2,
    "explanation": "The largest constitutional bench in Indian legal history, comprising 13 judges, delivered the Kesavananda Bharati judgment by a narrow 7-6 majority.",
    "hint": "This 'baker's dozen' bench sat for 68 hearing days."
  },
  {
    "id": 19,
    "category": "General Knowledge",
    "difficulty": "Extreme",
    "question": "Which landlocked country is entirely surrounded by just one other country (an enclave), situated within South Africa?",
    "options": [
      "Eswatini",
      "Lesotho",
      "San Marino",
      "Andorra"
    ],
    "correctAnswer": 1,
    "explanation": "The Kingdom of Lesotho is entirely enclaved inside South Africa and is the only independent state lying entirely above 1,000 meters in elevation.",
    "hint": "Its capital is Maseru and it is known as the 'Kingdom in the Sky'."
  },
  {
    "id": 20,
    "category": "Ramayana",
    "difficulty": "Easy",
    "question": "Who was the father of Lord Rama, King of Ayodhya?",
    "options": [
      "King Janaka",
      "King Dasharatha",
      "King Harishchandra",
      "King Dilipa"
    ],
    "correctAnswer": 1,
    "explanation": "King Dasharatha ruled the Ikshvaku dynasty in Ayodhya and had four sons: Rama, Bharata, Lakshmana, and Shatrughna.",
    "hint": "His name means 'one who can drive ten chariots simultaneously'."
  },
  {
    "id": 21,
    "category": "Ramayana",
    "difficulty": "Easy",
    "question": "Who wrote the classic epic Ramayana in Sanskrit?",
    "options": [
      "Sage Ved Vyasa",
      "Sage Valmiki",
      "Sage Vishwamitra",
      "Sage Vashistha"
    ],
    "correctAnswer": 1,
    "explanation": "Sage Valmiki is revered as the 'Adi Kavi' (the first poet) for composing the epic Ramayana.",
    "hint": "He gave shelter to Sita and taught her twin sons, Lava and Kusha."
  },
  {
    "id": 22,
    "category": "Ramayana",
    "difficulty": "Easy",
    "question": "For how many years was Lord Rama exiled into the forest?",
    "options": [
      "12 years",
      "14 years",
      "10 years",
      "16 years"
    ],
    "correctAnswer": 1,
    "explanation": "Queen Kaikeyi requested two boons from Dasharatha: crowning Bharata and exiling Rama for 14 years.",
    "hint": "Two more than a dozen."
  },
  {
    "id": 23,
    "category": "Ramayana",
    "difficulty": "Easy",
    "question": "What was the name of the demon king of Lanka who abducted Sita?",
    "options": [
      "Kumbhakarna",
      "Ravana",
      "Meghnada",
      "Vibhishana"
    ],
    "correctAnswer": 1,
    "explanation": "Ravana, the ten-headed King of Lanka, abducted Sita disguised as a golden mendicant hermit.",
    "hint": "He was also known as Dashanana because of his ten heads."
  },
  {
    "id": 24,
    "category": "Ramayana",
    "difficulty": "Easy",
    "question": "Which bird hero fought fiercely against Ravana to rescue Sita from his chariot?",
    "options": [
      "Sampati",
      "Jatayu",
      "Garuda",
      "Kakbhushundi"
    ],
    "correctAnswer": 1,
    "explanation": "The courageous vulture king Jatayu sacrificed his life fighting Ravana to save Sita.",
    "hint": "Before passing away, he informed Rama and Lakshmana about Sita's abduction towards the south."
  },
  {
    "id": 25,
    "category": "Ramayana",
    "difficulty": "Medium",
    "question": "What was the name of the bow that Lord Rama strung and broke at Sita's Swayamvara?",
    "options": [
      "Gandiva",
      "Pinaka",
      "Sharanga",
      "Vijaya"
    ],
    "correctAnswer": 1,
    "explanation": "Lord Rama lifted and strung Lord Shiva's divine bow, known as Pinaka (or Shiva Dhanush), in King Janaka's court.",
    "hint": "It was Lord Shiva's celestial bow kept in Mithila."
  },
  {
    "id": 26,
    "category": "Ramayana",
    "difficulty": "Medium",
    "question": "Who was the devoted wife of Prince Lakshmana who remained in Ayodhya during his exile?",
    "options": [
      "Mandavi",
      "Shrutakirti",
      "Urmila",
      "Sulochana"
    ],
    "correctAnswer": 2,
    "explanation": "Urmila, the younger sister of Sita, endured 14 years of deep yogic slumber in Ayodhya while Lakshmana guarded Rama.",
    "hint": "She was King Janaka's second daughter."
  },
  {
    "id": 27,
    "category": "Ramayana",
    "difficulty": "Medium",
    "question": "Which medicinal herb did Lord Hanuman bring to save the unconscious Lakshmana?",
    "options": [
      "Ashwagandha",
      "Sanjeevani Booti",
      "Tulsi",
      "Brahmi"
    ],
    "correctAnswer": 1,
    "explanation": "Hanuman flew to Mount Dronagiri in the Himalayas to fetch the life-restoring herb Sanjeevani Booti.",
    "hint": "Unable to identify the exact plant, he lifted the entire mountain peak."
  },
  {
    "id": 28,
    "category": "Ramayana",
    "difficulty": "Medium",
    "question": "Which demoness had her nose and ears cut off by Lakshmana when she attacked Sita?",
    "options": [
      "Tataka",
      "Surpanakha",
      "Simhika",
      "Trijata"
    ],
    "correctAnswer": 1,
    "explanation": "Surpanakha, Ravana's sister, tried to devour Sita in Panchavati, prompting Lakshmana to sever her ears and nose.",
    "hint": "Her name literally translates to 'one with fingernails like winnowing baskets'."
  },
  {
    "id": 29,
    "category": "Ramayana",
    "difficulty": "Hard",
    "question": "What was the name of the elder brother of Jatayu who lost his wings while protecting Jatayu from the sun?",
    "options": [
      "Sampati",
      "Nala",
      "Neela",
      "Mainda"
    ],
    "correctAnswer": 0,
    "explanation": "Sampati lost his wings shielding his younger brother Jatayu from scorching solar rays in their youth.",
    "hint": "He spotted Sita across the southern ocean with his telescopic eagle vision."
  },
  {
    "id": 30,
    "category": "Ramayana",
    "difficulty": "Hard",
    "question": "Which wise demon in Ravana's court advised him to return Sita peacefully, and later crowned King of Lanka?",
    "options": [
      "Maricha",
      "Kumbhakarna",
      "Vibhishana",
      "Ahiravana"
    ],
    "correctAnswer": 2,
    "explanation": "Vibhishana stood for righteousness (Dharma), deserted Ravana's adharmic path, joined Rama, and was anointed King of Lanka.",
    "hint": "He was the youngest brother of Ravana and Kumbhakarna."
  },
  {
    "id": 31,
    "category": "Ramayana",
    "difficulty": "Hard",
    "question": "Who was the royal priest and preceptor of the Ikshvaku royal dynasty of Ayodhya?",
    "options": [
      "Sage Vishwamitra",
      "Sage Vashistha",
      "Sage Agastya",
      "Sage Bharadwaja"
    ],
    "correctAnswer": 1,
    "explanation": "Sage Vashistha was the Kula-Guru (family preceptor) of the Ikshvaku clan and guided King Dasharatha and Rama.",
    "hint": "He was the master of the wish-fulfilling divine cow Kamadhenu."
  },
  {
    "id": 32,
    "category": "Ramayana",
    "difficulty": "Hard",
    "question": "Which Vanara architects and engineers oversaw the construction of the Ram Setu bridge across the sea?",
    "options": [
      "Angada and Sugriva",
      "Nala and Neela",
      "Dwivida and Mainda",
      "Jambavan and Hanuman"
    ],
    "correctAnswer": 1,
    "explanation": "Nala, son of the divine architect Vishwakarma, along with Neela, engineered and built the floating bridge to Lanka.",
    "hint": "Nala possessed the special blessing of the divine craftsman."
  },
  {
    "id": 33,
    "category": "Ramayana",
    "difficulty": "Very Hard",
    "question": "By what title was Ravana's invincible son Meghnada known after he defeated the King of Devas?",
    "options": [
      "Indrajit",
      "Atikaya",
      "Trishira",
      "Akshayakumara"
    ],
    "correctAnswer": 0,
    "explanation": "Meghnada conquered Indra, ruler of the heavens, and brought him captive to Lanka, earning the title 'Indrajit'.",
    "hint": "The name means 'conqueror of Indra'."
  },
  {
    "id": 34,
    "category": "Ramayana",
    "difficulty": "Very Hard",
    "question": "Which sage cursed King Dasharatha that he would die grieving for his beloved son, after Dasharatha accidentally killed his son Shravan Kumar?",
    "options": [
      "Sage Durvasa",
      "Sage Shantanu (Shravan's father)",
      "Sage Rishyasringa",
      "Sage Chyavana"
    ],
    "correctAnswer": 1,
    "explanation": "The blind hermit father of Shravan Kumar cursed Dasharatha that he too would perish from sorrow and separation from his son.",
    "hint": "The young ascetic was fetching water for his thirsty blind parents when struck by an arrow."
  },
  {
    "id": 35,
    "category": "Ramayana",
    "difficulty": "Very Hard",
    "question": "What was the name of the divine ritual (yajna) performed by Dasharatha to be blessed with sons?",
    "options": [
      "Ashvamedha Yajna",
      "Putrakameshti Yajna",
      "Rajasuya Yajna",
      "Sarpa Satra"
    ],
    "correctAnswer": 1,
    "explanation": "Sage Rishyasringa officiated the Putrakameshti Yajna, from which Agni Dev emerged with the divine payasam/kheer.",
    "hint": "The name directly means 'sacrifice for the desire of offspring'."
  },
  {
    "id": 36,
    "category": "Ramayana",
    "difficulty": "Extreme",
    "question": "What was the name of the deadly supreme weapon that Indrajit had received from Lord Brahma, with which he bound Rama and Lakshmana?",
    "options": [
      "Pashupatastra",
      "Brahmashira / Nagapasha",
      "Vaishnavastra",
      "Narayanastra"
    ],
    "correctAnswer": 1,
    "explanation": "Indrajit immobilized Rama and Lakshmana using the venomous serpent-binding weapon Nagapasha, until Garuda arrived to liberate them.",
    "hint": "The serpents fled in terror upon the arrival of Lord Vishnu's mount, the eagle king."
  },
  {
    "id": 37,
    "category": "Ramayana",
    "difficulty": "Extreme",
    "question": "In the Valmiki Ramayana, what was the original name of the forest hermitage where Sita stayed during exile, situated on the banks of Godavari?",
    "options": [
      "Dandakaranya",
      "Panchavati",
      "Kishkindha",
      "Chitrakoot"
    ],
    "correctAnswer": 1,
    "explanation": "Panchavati, named after the five auspicious banyan trees, was suggested by Sage Agastya as their dwelling along the Godavari.",
    "hint": "The name signifies a cluster of five sacred banyan (Vata) trees."
  },
  {
    "id": 38,
    "category": "Mahabharata",
    "difficulty": "Easy",
    "question": "How many Pandava brothers were there in the epic Mahabharata?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctAnswer": 1,
    "explanation": "The five Pandava brothers were Yudhishthira, Bhima, Arjuna, Nakula, and Sahadeva.",
    "hint": "They were also known as the Pancha Pandavas."
  },
  {
    "id": 39,
    "category": "Mahabharata",
    "difficulty": "Easy",
    "question": "Who was the supreme archer among the Pandavas who won Draupadi in the swayamvara?",
    "options": [
      "Bhima",
      "Arjuna",
      "Nakula",
      "Yudhishthira"
    ],
    "correctAnswer": 1,
    "explanation": "Arjuna hit the eye of the rotating golden fish reflected in oil to win Princess Draupadi's hand.",
    "hint": "Lord Krishna served as his divine charioteer during the war."
  },
  {
    "id": 40,
    "category": "Mahabharata",
    "difficulty": "Easy",
    "question": "Who delivered the sacred discourse of the Bhagavad Gita to Arjuna on the battlefield?",
    "options": [
      "Lord Rama",
      "Lord Krishna",
      "Sage Vyasa",
      "Bhishma Pitamah"
    ],
    "correctAnswer": 1,
    "explanation": "Lord Krishna recited the 700 verses of the Bhagavad Gita to dispel Arjuna's moral hesitation in Kurukshetra.",
    "hint": "He was the Eighth Avatar of Lord Vishnu."
  },
  {
    "id": 41,
    "category": "Mahabharata",
    "difficulty": "Easy",
    "question": "For how many days did the great Kurukshetra War last?",
    "options": [
      "14 days",
      "16 days",
      "18 days",
      "21 days"
    ],
    "correctAnswer": 2,
    "explanation": "The epic battle of Kurukshetra raged continuously for 18 days.",
    "hint": "The Mahabharata is divided into this exact number of Parvas (books)."
  },
  {
    "id": 42,
    "category": "Mahabharata",
    "difficulty": "Easy",
    "question": "Who was the eldest among the 100 Kaurava brothers?",
    "options": [
      "Dushasana",
      "Duryodhana",
      "Vikarna",
      "Yuyutsu"
    ],
    "correctAnswer": 1,
    "explanation": "Duryodhana was the eldest son of King Dhritarashtra and Queen Gandhari.",
    "hint": "His close friend was Karna, whom he made King of Anga."
  },
  {
    "id": 43,
    "category": "Mahabharata",
    "difficulty": "Medium",
    "question": "What was the name of Arjuna's celestial bow?",
    "options": [
      "Pinaka",
      "Gandiva",
      "Vijaya",
      "Kodanda"
    ],
    "correctAnswer": 1,
    "explanation": "Arjuna received the divine Gandiva bow from Agni Dev, the Fire God, during the burning of Khandava forest.",
    "hint": "It was created by Lord Brahma and possessed invincible power."
  },
  {
    "id": 44,
    "category": "Mahabharata",
    "difficulty": "Medium",
    "question": "Who gave divine vision to Sanjaya so he could narrate the battle of Kurukshetra to the blind King Dhritarashtra?",
    "options": [
      "Lord Krishna",
      "Sage Ved Vyasa",
      "Dronacharya",
      "Kripacharya"
    ],
    "correctAnswer": 1,
    "explanation": "Sage Ved Vyasa granted Sanjaya the celestial vision (Divya Drishti) to perceive all occurrences on the battlefield.",
    "hint": "He is the traditional author of the Mahabharata."
  },
  {
    "id": 45,
    "category": "Mahabharata",
    "difficulty": "Medium",
    "question": "Who was the biological solar deity father of Karna?",
    "options": [
      "Indra",
      "Surya",
      "Vayu",
      "Yama"
    ],
    "correctAnswer": 1,
    "explanation": "Karna was born to Kunti before her marriage through the invocation of Surya Dev (the Sun God).",
    "hint": "He was born with golden armor (Kavacha) and radiant earrings (Kundala)."
  },
  {
    "id": 46,
    "category": "Mahabharata",
    "difficulty": "Medium",
    "question": "What was the name of the warrior son of Arjuna and Subhadra who penetrated the Chakravyuha?",
    "options": [
      "Iravan",
      "Abhimanyu",
      "Ghatotkacha",
      "Babruvahana"
    ],
    "correctAnswer": 1,
    "explanation": "16-year-old Abhimanyu knew how to enter the deadly Chakravyuha formation but not how to exit it.",
    "hint": "He learned the entrance strategy while in his mother Subhadra's womb."
  },
  {
    "id": 47,
    "category": "Mahabharata",
    "difficulty": "Hard",
    "question": "What was the original name of Bhishma Pitamah before he took his terrible vow of lifelong celibacy?",
    "options": [
      "Devavrata",
      "Chitrangada",
      "Vichitravirya",
      "Satyavrata"
    ],
    "correctAnswer": 0,
    "explanation": "Prince Devavrata was the eighth son of King Shantanu and Goddess Ganga; his vow of celibacy earned him the title 'Bhishma'.",
    "hint": "The vow was taken to allow his father to marry Satyavati."
  },
  {
    "id": 48,
    "category": "Mahabharata",
    "difficulty": "Hard",
    "question": "What was the name of Lord Krishna's divine conch shell?",
    "options": [
      "Devadatta",
      "Panchajanya",
      "Anantavijaya",
      "Paundra"
    ],
    "correctAnswer": 1,
    "explanation": "Lord Krishna blew the Panchajanya conch, retrieved after slaying the sea demon Panchajana.",
    "hint": "Its blast instilled dread in the hearts of the Kaurava army."
  },
  {
    "id": 49,
    "category": "Mahabharata",
    "difficulty": "Hard",
    "question": "Who was the only Kaurava brother who openly protested against the disrobing of Draupadi in the royal dice hall?",
    "options": [
      "Dushasana",
      "Vikarna",
      "Yuyutsu",
      "Chitrasena"
    ],
    "correctAnswer": 1,
    "explanation": "Vikarna raised his voice against the injustice done to Draupadi, declaring the game of dice invalid and unethical.",
    "hint": "Despite his righteousness, loyalty compelled him to fight for Duryodhana in the war."
  },
  {
    "id": 50,
    "category": "Mahabharata",
    "difficulty": "Hard",
    "question": "What was the disguise identity assumed by Arjuna during the Pandavas' one-year concealment (Agyatvas) in Matsya Kingdom?",
    "options": [
      "Kanka",
      "Brihannala",
      "Ballava",
      "Tantipala"
    ],
    "correctAnswer": 1,
    "explanation": "Arjuna lived as the eunuch dance teacher Brihannala in King Virata's court, teaching music to Princess Uttara.",
    "hint": "A curse by Urvashi turned into a blessing for his year of disguise."
  },
  {
    "id": 51,
    "category": "Mahabharata",
    "difficulty": "Very Hard",
    "question": "Which warrior was designated as the Supreme Commander of the Kaurava army for the final 18th day of the Kurukshetra War?",
    "options": [
      "Karna",
      "Dronacharya",
      "Shalya",
      "Ashwatthama"
    ],
    "correctAnswer": 2,
    "explanation": "King Shalya of Madra, maternal uncle of Nakula and Sahadeva, served as the supreme commander on Day 18 and was killed by Yudhishthira.",
    "hint": "He also served as Karna's charioteer on the 17th day."
  },
  {
    "id": 52,
    "category": "Mahabharata",
    "difficulty": "Very Hard",
    "question": "What was the primary weapon used by Lord Balarama, the elder brother of Krishna?",
    "options": [
      "Gada (Mace)",
      "Hala (Plough)",
      "Chakra (Discus)",
      "Trishula (Trident)"
    ],
    "correctAnswer": 1,
    "explanation": "Balarama is renowned as Haladhara, carrying a divine golden plough (Hala) and pestle (Musala) alongside his mastery of the mace.",
    "hint": "His weapon is also an agricultural implement symbolizing fertile land."
  },
  {
    "id": 53,
    "category": "Mahabharata",
    "difficulty": "Very Hard",
    "question": "Who was the mother of Ghatotkacha, the fearsome half-demon warrior who terrified the Kauravas on night 14?",
    "options": [
      "Ulupi",
      "Chitrangada",
      "Hidimbi",
      "Ahilawati"
    ],
    "correctAnswer": 2,
    "explanation": "Hidimbi was a Rakshasi who married Bhima after he slew her cannibalistic brother Hidimba in the forest.",
    "hint": "She has a famous wooden pagoda temple in Manali, Himachal Pradesh."
  },
  {
    "id": 54,
    "category": "Mahabharata",
    "difficulty": "Extreme",
    "question": "Which solitary warrior survived the Kurukshetra war from the Kaurava camp and joined the Pandavas beforehand due to his allegiance to Dharma?",
    "options": [
      "Kritavarma",
      "Kripacharya",
      "Yuyutsu",
      "Susharma"
    ],
    "correctAnswer": 2,
    "explanation": "Yuyutsu, the half-brother of Duryodhana born to Dhritarashtra and a maid Sughada, crossed over to the Pandava side when war began.",
    "hint": "After the Pandavas renounced the kingdom, Yudhishthira appointed him guardian of Hastinapur."
  },
  {
    "id": 55,
    "category": "Mahabharata",
    "difficulty": "Extreme",
    "question": "Which sage cursed Karna that he would forget the invocation of the Brahmastra in the decisive moment of battle?",
    "options": [
      "Sage Durvasa",
      "Lord Parashurama",
      "Sage Dadhichi",
      "Sage Kanva"
    ],
    "correctAnswer": 1,
    "explanation": "Lord Parashurama cursed Karna when he realized Karna had disguised his true caste identity while enduring the stinging bore of an insect without flinching.",
    "hint": "He was the sixth avatar of Vishnu and preceptor to Bhishma, Drona, and Karna."
  },
  {
    "id": 56,
    "category": "Sports",
    "difficulty": "Easy",
    "question": "Who is universally celebrated as the 'God of Cricket' in India?",
    "options": [
      "Virat Kohli",
      "MS Dhoni",
      "Sachin Tendulkar",
      "Sunil Gavaskar"
    ],
    "correctAnswer": 2,
    "explanation": "Sachin Tendulkar scored 100 international centuries and over 34,000 international runs across his legendary 24-year career.",
    "hint": "He is often referred to as the 'Little Master'."
  },
  {
    "id": 57,
    "category": "Sports",
    "difficulty": "Easy",
    "question": "Under whose captaincy did India win the ICC Men's Cricket World Cup in 2011?",
    "options": [
      "Sourav Ganguly",
      "Rahul Dravid",
      "MS Dhoni",
      "Virat Kohli"
    ],
    "correctAnswer": 2,
    "explanation": "MS Dhoni hit the iconic winning six at the Wankhede Stadium against Sri Lanka to lift the World Cup after 28 years.",
    "hint": "He is renowned for his signature 'Helicopter Shot' and cool demeanor."
  },
  {
    "id": 58,
    "category": "Sports",
    "difficulty": "Easy",
    "question": "Which sport is associated with the legendary athlete Usain Bolt?",
    "options": [
      "Swimming",
      "Track and Field (Sprinting)",
      "Gymnastics",
      "Boxing"
    ],
    "correctAnswer": 1,
    "explanation": "Usain Bolt of Jamaica is an eight-time Olympic gold medalist and holds the world records for 100m (9.58s) and 200m (19.19s).",
    "hint": "He is widely nicknamed 'Lightning Bolt'."
  },
  {
    "id": 59,
    "category": "Sports",
    "difficulty": "Easy",
    "question": "How many players are on the field for one team in a standard association football (soccer) match?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "correctAnswer": 2,
    "explanation": "Each football team fields 11 players, including 1 goalkeeper and 10 outfield players.",
    "hint": "The same number of players as in a cricket team."
  },
  {
    "id": 60,
    "category": "Sports",
    "difficulty": "Easy",
    "question": "Who won India's first-ever Olympic gold medal in track and field athletics at the Tokyo 2020 Olympics?",
    "options": [
      "Milkha Singh",
      "Neeraj Chopra",
      "Abhinav Bindra",
      "Bajrang Punia"
    ],
    "correctAnswer": 1,
    "explanation": "Neeraj Chopra won the Olympic gold medal in men's javelin throw with a mark of 87.58 meters.",
    "hint": "He threw the golden javelin for India."
  },
  {
    "id": 61,
    "category": "Sports",
    "difficulty": "Medium",
    "question": "Which country won the FIFA Men's World Cup in Qatar 2022?",
    "options": [
      "France",
      "Brazil",
      "Argentina",
      "Germany"
    ],
    "correctAnswer": 2,
    "explanation": "Lionel Messi led Argentina to victory over France in a thrilling final that concluded on penalty shootouts (3-3, 4-2 pens).",
    "hint": "The South American country wears sky-blue and white stripes."
  },
  {
    "id": 62,
    "category": "Sports",
    "difficulty": "Medium",
    "question": "Who was known as the 'Wizard of Hockey' for his mesmerizing ball control?",
    "options": [
      "Major Dhyan Chand",
      "Balbir Singh Sr.",
      "Dhanraj Pillay",
      "K.D. Singh Babu"
    ],
    "correctAnswer": 0,
    "explanation": "Major Dhyan Chand won three Olympic gold medals (1928, 1932, 1936) and scored over 400 goals in his career.",
    "hint": "National Sports Day in India is celebrated on his birthday, August 29."
  },
  {
    "id": 63,
    "category": "Sports",
    "difficulty": "Medium",
    "question": "Who became the first Indian woman to win two individual Olympic medals in badminton (2016 and 2020)?",
    "options": [
      "Saina Nehwal",
      "P.V. Sindhu",
      "Jwala Gutta",
      "Ashwini Ponnappa"
    ],
    "correctAnswer": 1,
    "explanation": "P.V. Sindhu secured a Silver medal at Rio 2016 and a Bronze medal at Tokyo 2020.",
    "hint": "She also became the BWF World Champion in 2019 in Basel."
  },
  {
    "id": 64,
    "category": "Sports",
    "difficulty": "Medium",
    "question": "How many Grand Slam men's singles titles has Rafael Nadal won in his career?",
    "options": [
      "20",
      "22",
      "24",
      "18"
    ],
    "correctAnswer": 1,
    "explanation": "Rafael Nadal has won 22 Grand Slam men's singles titles, including an unprecedented 14 French Open crowns.",
    "hint": "He is famed as the 'King of Clay'."
  },
  {
    "id": 65,
    "category": "Sports",
    "difficulty": "Hard",
    "question": "Who was the first Indian cricketer to claim a Test match hat-trick?",
    "options": [
      "Kapil Dev",
      "Anil Kumble",
      "Harbhajan Singh",
      "Jasprit Bumrah"
    ],
    "correctAnswer": 2,
    "explanation": "Harbhajan Singh took a historic hat-trick against Australia at Eden Gardens in Kolkata in March 2001.",
    "hint": "He dismissed Ricky Ponting, Adam Gilchrist, and Shane Warne on consecutive deliveries."
  },
  {
    "id": 66,
    "category": "Sports",
    "difficulty": "Hard",
    "question": "Which venue is officially renowned as the 'Home of Cricket'?",
    "options": [
      "Melbourne Cricket Ground",
      "Lord's Cricket Ground",
      "Eden Gardens",
      "The Oval"
    ],
    "correctAnswer": 1,
    "explanation": "Lord's Cricket Ground in St John's Wood, London, founded by Thomas Lord in 1814, is known as the Home of Cricket.",
    "hint": "It houses the Marylebone Cricket Club (MCC) museum and the famous Weathercock Father Time."
  },
  {
    "id": 67,
    "category": "Sports",
    "difficulty": "Hard",
    "question": "In which city were the first modern Olympic Games held in 1896?",
    "options": [
      "Paris",
      "London",
      "Athens",
      "Rome"
    ],
    "correctAnswer": 2,
    "explanation": "The inaugural modern Olympic Games took place in Athens, Greece, in the Panathenaic Stadium in April 1896.",
    "hint": "The homeland of the ancient Olympic games."
  },
  {
    "id": 68,
    "category": "Sports",
    "difficulty": "Hard",
    "question": "Who holds the legendary record for the highest individual score in a single Test cricket innings (400 not out)?",
    "options": [
      "Matthew Hayden",
      "Brian Lara",
      "Virender Sehwag",
      "Don Bradman"
    ],
    "correctAnswer": 1,
    "explanation": "Brian Lara of the West Indies scored an unbeaten 400 against England at Antigua in April 2004.",
    "hint": "He is from Trinidad and Tobago and is nicknamed the 'Prince of Port of Spain'."
  },
  {
    "id": 69,
    "category": "Sports",
    "difficulty": "Very Hard",
    "question": "Who was the first Indian individual Olympic gold medalist in history?",
    "options": [
      "K.D. Jadhav",
      "Abhinav Bindra",
      "Leander Paes",
      "Rajyavardhan Rathore"
    ],
    "correctAnswer": 1,
    "explanation": "Abhinav Bindra won the gold medal in the men's 10m Air Rifle event at the Beijing 2008 Olympics.",
    "hint": "He shot a near-flawless 10.8 on his final shot to clinch gold."
  },
  {
    "id": 70,
    "category": "Sports",
    "difficulty": "Very Hard",
    "question": "Which player holds the record for scoring the fastest goal in FIFA World Cup history (10.8 seconds)?",
    "options": [
      "Hakan Sükür",
      "Clint Dempsey",
      "Bryan Robson",
      "Pelé"
    ],
    "correctAnswer": 0,
    "explanation": "Turkish striker Hakan Sükür scored against South Korea in just 10.8 seconds in the 2002 World Cup third-place play-off.",
    "hint": "He played for Turkey and the match was hosted in Daegu, South Korea."
  },
  {
    "id": 71,
    "category": "Sports",
    "difficulty": "Very Hard",
    "question": "Who was the only bowler to take 800 wickets in Test match cricket history?",
    "options": [
      "Shane Warne",
      "Muttiah Muralitharan",
      "James Anderson",
      "Anil Kumble"
    ],
    "correctAnswer": 1,
    "explanation": "Sri Lankan off-spin maestro Muttiah Muralitharan claimed his 800th Test wicket on his very last ball in Test cricket against India.",
    "hint": "He captured 800 Test and 534 ODI wickets."
  },
  {
    "id": 72,
    "category": "Sports",
    "difficulty": "Extreme",
    "question": "In the 1954 Miracle Mile race in Vancouver, Roger Bannister and John Landy both ran the mile in under 4 minutes. What was Roger Bannister's historic first sub-4-minute time in Oxford earlier that year?",
    "options": [
      "3:59.4",
      "3:58.2",
      "3:56.8",
      "3:54.6"
    ],
    "correctAnswer": 0,
    "explanation": "On 6 May 1954 at Iffley Road Track in Oxford, Roger Bannister broke the barrier with a time of 3 minutes 59.4 seconds.",
    "hint": "It was just six-tenths of a second below the magical 4-minute barrier."
  },
  {
    "id": 73,
    "category": "Sports",
    "difficulty": "Extreme",
    "question": "In which Olympic Games did the Indian Men's Hockey team concede ZERO goals throughout the entire tournament while winning Gold?",
    "options": [
      "1928 Amsterdam",
      "1932 Los Angeles",
      "1936 Berlin",
      "1948 London"
    ],
    "correctAnswer": 0,
    "explanation": "At the 1928 Amsterdam Olympics, India scored 29 goals and conceded exactly zero goals across five matches under Jaipal Singh Munda.",
    "hint": "It was India's first Olympic gold medal in field hockey."
  },
  {
    "id": 74,
    "category": "Science",
    "difficulty": "Easy",
    "question": "What is the chemical symbol for Gold?",
    "options": [
      "Ag",
      "Au",
      "Fe",
      "Gd"
    ],
    "correctAnswer": 1,
    "explanation": "Au comes from the Latin word 'Aurum', which means 'shining dawn'.",
    "hint": "Silver is Ag, Iron is Fe."
  },
  {
    "id": 75,
    "category": "Science",
    "difficulty": "Easy",
    "question": "Which organ in the human body pumps blood continuously?",
    "options": [
      "Brain",
      "Lungs",
      "Heart",
      "Liver"
    ],
    "correctAnswer": 2,
    "explanation": "The human heart beats approximately 100,000 times a day, circulating about 2,000 gallons of blood.",
    "hint": "It has four chambers: two atria and two ventricles."
  },
  {
    "id": 76,
    "category": "Science",
    "difficulty": "Easy",
    "question": "Which planet in our solar system is famously known as the 'Red Planet'?",
    "options": [
      "Venus",
      "Mars",
      "Jupiter",
      "Mercury"
    ],
    "correctAnswer": 1,
    "explanation": "Mars appears reddish because of widespread iron oxide (rust) on its surface.",
    "hint": "It is fourth from the Sun and possesses two moons: Phobos and Deimos."
  },
  {
    "id": 77,
    "category": "Science",
    "difficulty": "Easy",
    "question": "What is the primary gas found in Earth's atmosphere?",
    "options": [
      "Oxygen",
      "Carbon Dioxide",
      "Nitrogen",
      "Argon"
    ],
    "correctAnswer": 2,
    "explanation": "Nitrogen makes up roughly 78% of Earth's atmosphere, followed by Oxygen at about 21%.",
    "hint": "Its chemical symbol is N."
  },
  {
    "id": 78,
    "category": "Science",
    "difficulty": "Easy",
    "question": "What process do green plants use to convert sunlight into food?",
    "options": [
      "Respiration",
      "Photosynthesis",
      "Fermentation",
      "Transpiration"
    ],
    "correctAnswer": 1,
    "explanation": "Photosynthesis uses chlorophyll to turn carbon dioxide and water into glucose and oxygen using light energy.",
    "hint": "The word combines Greek terms for 'light' and 'putting together'."
  },
  {
    "id": 79,
    "category": "Science",
    "difficulty": "Medium",
    "question": "What is the powerhouse of the biological eukaryotic cell?",
    "options": [
      "Ribosome",
      "Nucleus",
      "Mitochondria",
      "Endoplasmic Reticulum"
    ],
    "correctAnswer": 2,
    "explanation": "Mitochondria generate most of the chemical energy required by the cell in the form of ATP.",
    "hint": "They generate adenosine triphosphate (ATP)."
  },
  {
    "id": 80,
    "category": "Science",
    "difficulty": "Medium",
    "question": "What is the approximate speed of light in a vacuum?",
    "options": [
      "150,000 km/s",
      "300,000 km/s",
      "450,000 km/s",
      "3,000 km/s"
    ],
    "correctAnswer": 1,
    "explanation": "Light travels in a vacuum at exactly 299,792,458 meters per second, or roughly 300,000 km/s.",
    "hint": "It takes about 8 minutes and 20 seconds for sunlight to reach Earth."
  },
  {
    "id": 81,
    "category": "Science",
    "difficulty": "Medium",
    "question": "Which vitamin is synthesized in the human skin upon exposure to sunlight?",
    "options": [
      "Vitamin A",
      "Vitamin B12",
      "Vitamin C",
      "Vitamin D"
    ],
    "correctAnswer": 3,
    "explanation": "Ultraviolet B (UVB) rays from sunlight trigger cholesterol synthesis of Vitamin D3 in the skin.",
    "hint": "It is crucial for calcium absorption and healthy bones."
  },
  {
    "id": 82,
    "category": "Science",
    "difficulty": "Medium",
    "question": "What is the pH value of pure distilled water at 25°C?",
    "options": [
      "5",
      "7",
      "9",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "A pH of 7 represents a completely neutral solution, where hydrogen and hydroxide ions are balanced.",
    "hint": "Values below this are acidic; values above are basic or alkaline."
  },
  {
    "id": 83,
    "category": "Science",
    "difficulty": "Hard",
    "question": "Who discovered the fundamental principle of Electromagnetic Induction in 1831?",
    "options": [
      "James Clerk Maxwell",
      "Michael Faraday",
      "Nikola Tesla",
      "Thomas Edison"
    ],
    "correctAnswer": 1,
    "explanation": "Michael Faraday demonstrated that a changing magnetic field induces an electromotive force (voltage) in a conductor.",
    "hint": "The unit of electrical capacitance is named after him."
  },
  {
    "id": 84,
    "category": "Science",
    "difficulty": "Hard",
    "question": "Which elementary subatomic particle has no electric charge and an extremely small mass?",
    "options": [
      "Positron",
      "Neutrino",
      "Muon",
      "Gluon"
    ],
    "correctAnswer": 1,
    "explanation": "Neutrinos are neutral lepton particles produced in nuclear reactions that travel near the speed of light.",
    "hint": "Trillions pass through your body every second without interacting."
  },
  {
    "id": 85,
    "category": "Science",
    "difficulty": "Hard",
    "question": "What is the hottest planet in our solar system?",
    "options": [
      "Mercury",
      "Venus",
      "Mars",
      "Jupiter"
    ],
    "correctAnswer": 1,
    "explanation": "Venus is hotter than Mercury (approx 465°C / 870°F) due to a runaway greenhouse effect from its thick carbon dioxide atmosphere.",
    "hint": "Even though Mercury is closer to the Sun, this sister planet traps far more heat."
  },
  {
    "id": 86,
    "category": "Science",
    "difficulty": "Hard",
    "question": "Which noble gas was first discovered in the solar spectrum before being identified on Earth?",
    "options": [
      "Neon",
      "Argon",
      "Helium",
      "Krypton"
    ],
    "correctAnswer": 2,
    "explanation": "Helium was observed as a yellow spectral line in sunlight during an eclipse in Guntur, India in 1868, named after Helios.",
    "hint": "Its name originates from the Greek god of the Sun."
  },
  {
    "id": 87,
    "category": "Science",
    "difficulty": "Very Hard",
    "question": "What is the boundary surrounding a black hole beyond which nothing, not even light, can escape?",
    "options": [
      "Photon Sphere",
      "Ergosphere",
      "Event Horizon",
      "Accretion Disk"
    ],
    "correctAnswer": 2,
    "explanation": "The Event Horizon is the gravitational threshold where the escape velocity equals the speed of light.",
    "hint": "Its radius is defined by the Schwarzschild radius equation."
  },
  {
    "id": 88,
    "category": "Science",
    "difficulty": "Very Hard",
    "question": "Which enzyme is responsible for unwinding the DNA double helix during DNA replication?",
    "options": [
      "DNA Polymerase",
      "DNA Ligase",
      "DNA Helicase",
      "RNA Primase"
    ],
    "correctAnswer": 2,
    "explanation": "DNA Helicase breaks the hydrogen bonds between base pairs to unwind and separate the two strands.",
    "hint": "Think of the root word related to the spiral 'helix'."
  },
  {
    "id": 89,
    "category": "Science",
    "difficulty": "Very Hard",
    "question": "In quantum mechanics, what principle asserts that one cannot simultaneously know the exact position and momentum of a particle?",
    "options": [
      "Pauli Exclusion Principle",
      "Heisenberg Uncertainty Principle",
      "Schrödinger Wave Equation",
      "Born Rule"
    ],
    "correctAnswer": 1,
    "explanation": "Werner Heisenberg introduced the Uncertainty Principle in 1927, proving a fundamental limit to precision in complementary measurements.",
    "hint": "Formulated by a German physicist who won the 1932 Nobel Prize in Physics."
  },
  {
    "id": 90,
    "category": "Science",
    "difficulty": "Extreme",
    "question": "What is the value of absolute zero temperature on the Celsius scale?",
    "options": [
      "-273.15 °C",
      "-212.00 °C",
      "-459.67 °C",
      "-100.00 °C"
    ],
    "correctAnswer": 0,
    "explanation": "Absolute zero is 0 Kelvin, which corresponds precisely to -273.15 degrees Celsius, where thermodynamic entropy reaches its minimum.",
    "hint": "It corresponds to 0 on the Kelvin thermodynamic scale."
  },
  {
    "id": 91,
    "category": "Science",
    "difficulty": "Extreme",
    "question": "Which rare chemical element has the highest melting point of all known pure metals (3,422 °C)?",
    "options": [
      "Platinum",
      "Tungsten (Wolfram)",
      "Osmium",
      "Titanium"
    ],
    "correctAnswer": 1,
    "explanation": "Tungsten (W, atomic number 74) has the highest melting point of any metallic element at 3,422 °C (6,192 °F).",
    "hint": "It was traditionally used as filaments in incandescent light bulbs."
  },
  {
    "id": 92,
    "category": "History & Geography",
    "difficulty": "Easy",
    "question": "Which is the longest river in the world?",
    "options": [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River"
    ],
    "correctAnswer": 1,
    "explanation": "The Nile River in Africa flows northward for approximately 6,650 kilometers (4,132 miles).",
    "hint": "It flows through Egypt and empties into the Mediterranean Sea."
  },
  {
    "id": 93,
    "category": "History & Geography",
    "difficulty": "Easy",
    "question": "Which is the highest mountain peak in the world above sea level?",
    "options": [
      "K2",
      "Mount Everest",
      "Kanchenjunga",
      "Lhotse"
    ],
    "correctAnswer": 1,
    "explanation": "Mount Everest stands at 8,848.86 meters (29,031.7 feet) on the border between Nepal and China.",
    "hint": "In Nepal, it is known as Sagarmatha."
  },
  {
    "id": 94,
    "category": "History & Geography",
    "difficulty": "Easy",
    "question": "In which Indian city is the iconic monument Taj Mahal located?",
    "options": [
      "Jaipur",
      "Agra",
      "Delhi",
      "Lucknow"
    ],
    "correctAnswer": 1,
    "explanation": "The Taj Mahal was commissioned by Mughal Emperor Shah Jahan in 1631 on the banks of the Yamuna River in Agra.",
    "hint": "It is built with pure white Makrana marble."
  },
  {
    "id": 95,
    "category": "History & Geography",
    "difficulty": "Easy",
    "question": "In which year did India gain independence from British rule?",
    "options": [
      "1942",
      "1945",
      "1947",
      "1950"
    ],
    "correctAnswer": 2,
    "explanation": "India achieved independence at the stroke of midnight on 15 August 1947.",
    "hint": "Pandit Jawaharlal Nehru gave his famous 'Tryst with Destiny' speech."
  },
  {
    "id": 96,
    "category": "History & Geography",
    "difficulty": "Easy",
    "question": "Which continent contains the Sahara Desert?",
    "options": [
      "Asia",
      "South America",
      "Africa",
      "Australia"
    ],
    "correctAnswer": 2,
    "explanation": "The Sahara is the largest hot desert on Earth, covering almost all of North Africa.",
    "hint": "It covers about 9.2 million square kilometers."
  },
  {
    "id": 97,
    "category": "History & Geography",
    "difficulty": "Medium",
    "question": "Who was the founder of the Maurya Empire in ancient India?",
    "options": [
      "Ashoka",
      "Chandragupta Maurya",
      "Bindusara",
      "Samudragupta"
    ],
    "correctAnswer": 1,
    "explanation": "Chandragupta Maurya founded the Maurya Empire in 322 BCE with the strategic mentorship of Acharya Chanakya.",
    "hint": "His grandson was Ashoka the Great."
  },
  {
    "id": 98,
    "category": "History & Geography",
    "difficulty": "Medium",
    "question": "Which ancient civilization developed along the banks of the Nile River?",
    "options": [
      "Mesopotamian",
      "Ancient Egyptian",
      "Indus Valley",
      "Mayan"
    ],
    "correctAnswer": 1,
    "explanation": "Ancient Egypt flourished along the fertile lower reaches of the Nile, famous for pyramids, pharaohs, and hieroglyphs.",
    "hint": "They constructed the Great Sphinx and Pyramids of Giza."
  },
  {
    "id": 99,
    "category": "History & Geography",
    "difficulty": "Medium",
    "question": "Which strait separates the landmass of India from the island nation of Sri Lanka?",
    "options": [
      "Malacca Strait",
      "Palk Strait",
      "Bering Strait",
      "Strait of Hormuz"
    ],
    "correctAnswer": 1,
    "explanation": "The Palk Strait connects the Bay of Bengal with the Palk Bay between Tamil Nadu and Sri Lanka.",
    "hint": "It contains the chain of shoals known as Ram Setu (Adam's Bridge)."
  },
  {
    "id": 100,
    "category": "History & Geography",
    "difficulty": "Medium",
    "question": "Who was the first Mughal Emperor of India who defeated Ibrahim Lodi at the Battle of Panipat in 1526?",
    "options": [
      "Humayun",
      "Akbar",
      "Babur",
      "Jahangir"
    ],
    "correctAnswer": 2,
    "explanation": "Babur laid the foundation of the Mughal Empire in 1526 at the First Battle of Panipat using matchlocks and cannons.",
    "hint": "He wrote his autobiographical memoirs titled 'Baburnama'."
  },
  {
    "id": 101,
    "category": "History & Geography",
    "difficulty": "Hard",
    "question": "Which ancient Indus Valley Civilization site was famous for its engineered tidal dockyard?",
    "options": [
      "Harappa",
      "Mohenjo-daro",
      "Lothal",
      "Kalibangan"
    ],
    "correctAnswer": 2,
    "explanation": "Lothal in modern Gujarat had the world's earliest known dockyard connected to the ancient Sabarmati river route.",
    "hint": "Located in the Bhal region of modern Gujarat."
  },
  {
    "id": 102,
    "category": "History & Geography",
    "difficulty": "Hard",
    "question": "Which river flows through the Grand Canyon in the United States?",
    "options": [
      "Mississippi River",
      "Colorado River",
      "Rio Grande",
      "Columbia River"
    ],
    "correctAnswer": 1,
    "explanation": "The Colorado River carved the 277-mile-long Grand Canyon over millions of years.",
    "hint": "It shares its name with a US state known for the Rocky Mountains."
  },
  {
    "id": 103,
    "category": "History & Geography",
    "difficulty": "Hard",
    "question": "Who was the ruler of Mysore who fought four Anglo-Mysore wars and pioneered iron-cased rocket artillery?",
    "options": [
      "Hyder Ali",
      "Tipu Sultan",
      "Mir Jafar",
      "Nawab Siraj-ud-Daulah"
    ],
    "correctAnswer": 1,
    "explanation": "Tipu Sultan, known as the 'Tiger of Mysore', deployed Mysorean rockets against British forces before dying in 1799 at Srirangapatna.",
    "hint": "He was the son of Hyder Ali."
  },
  {
    "id": 104,
    "category": "History & Geography",
    "difficulty": "Hard",
    "question": "Which country possesses the largest number of natural lakes in the world?",
    "options": [
      "United States",
      "Russia",
      "Canada",
      "Sweden"
    ],
    "correctAnswer": 2,
    "explanation": "Canada contains over 2 million lakes, holding more than half of the world's total natural lakes.",
    "hint": "Its national symbol is the maple leaf."
  },
  {
    "id": 105,
    "category": "History & Geography",
    "difficulty": "Very Hard",
    "question": "In which year did the historic Fall of Constantinople occur, ending the Byzantine Empire?",
    "options": [
      "1453",
      "1492",
      "1204",
      "1517"
    ],
    "correctAnswer": 0,
    "explanation": "Ottoman Sultan Mehmed II conquered Constantinople on 29 May 1453, a date widely regarded as marking the end of the Middle Ages.",
    "hint": "It occurred 39 years before Columbus sailed to the Americas."
  },
  {
    "id": 106,
    "category": "History & Geography",
    "difficulty": "Very Hard",
    "question": "Which ancient university in Bihar, India was destroyed by Bakhtiyar Khilji in the late 12th century?",
    "options": [
      "Taxila University",
      "Nalanda University",
      "Vikramashila University",
      "Vallabhi University"
    ],
    "correctAnswer": 1,
    "explanation": "Nalanda University, a celebrated Buddhist monastic center of learning founded during the Gupta Empire, housed thousands of scholars.",
    "hint": "Its vast library was named 'Dharmaganja' (Treasury of Truth)."
  },
  {
    "id": 107,
    "category": "History & Geography",
    "difficulty": "Very Hard",
    "question": "What is the deepest known location on Earth, situated in the Western Pacific?",
    "options": [
      "Puerto Rico Trench",
      "Challenger Deep",
      "Java Trench",
      "Sunda Trench"
    ],
    "correctAnswer": 1,
    "explanation": "Challenger Deep in the southern Mariana Trench reaches an astonishing depth of approximately 10,994 meters (36,070 feet).",
    "hint": "It is named after the British survey ship HMS Challenger."
  },
  {
    "id": 108,
    "category": "History & Geography",
    "difficulty": "Extreme",
    "question": "Which Chola emperor carried out naval expeditions across the Bay of Bengal and conquered Srivijaya (in modern Indonesia and Malaysia) in 1025 CE?",
    "options": [
      "Raja Raja Chola I",
      "Rajendra Chola I",
      "Kulothunga Chola I",
      "Karikala Chola"
    ],
    "correctAnswer": 1,
    "explanation": "Rajendra Chola I ('Gangaikonda Chola') established maritime dominance over Southeast Asia with his powerful royal naval fleet.",
    "hint": "He also conquered territories up to the Ganges and founded Gangaikonda Cholapuram."
  },
  {
    "id": 109,
    "category": "History & Geography",
    "difficulty": "Extreme",
    "question": "Which volcano experienced the loudest sound in recorded history during its catastrophic eruption in August 1883?",
    "options": [
      "Mount Vesuvius",
      "Mount Krakatoa",
      "Mount Tambora",
      "Mount Pinatubo"
    ],
    "correctAnswer": 1,
    "explanation": "Krakatoa's explosion in the Sunda Strait of Indonesia was heard 4,800 km away and ruptured eardrums of sailors 64 km away.",
    "hint": "The atmospheric pressure wave circled the entire globe several times."
  },
  {
    "id": 110,
    "category": "Entertainment",
    "difficulty": "Easy",
    "question": "Who is fondly regarded as the 'King Khan' or 'Badshah' of Bollywood?",
    "options": [
      "Salman Khan",
      "Aamir Khan",
      "Shah Rukh Khan",
      "Saif Ali Khan"
    ],
    "correctAnswer": 2,
    "explanation": "Shah Rukh Khan has starred in dozens of iconic blockbusters like DDLJ, Dil To Pagal Hai, and Jawan.",
    "hint": "He opens his arms in his signature romantic pose."
  },
  {
    "id": 111,
    "category": "Entertainment",
    "difficulty": "Easy",
    "question": "Which Indian film song won the Academy Award for Best Original Song in 2023?",
    "options": [
      "Jai Ho",
      "Naatu Naatu",
      "Chaiyya Chaiyya",
      "Kesariya"
    ],
    "correctAnswer": 1,
    "explanation": "Composed by M.M. Keeravani with choreography in RRR, 'Naatu Naatu' won both the Golden Globe and Oscar in 2023.",
    "hint": "Directed by S.S. Rajamouli and performed energetically by Ram Charan and Jr. NTR."
  },
  {
    "id": 112,
    "category": "Entertainment",
    "difficulty": "Easy",
    "question": "Who played the legendary character 'Gabbar Singh' in the historic movie Sholay (1975)?",
    "options": [
      "Pran",
      "Amjad Khan",
      "Prem Chopra",
      "Danny Denzongpa"
    ],
    "correctAnswer": 1,
    "explanation": "Amjad Khan immortalized the dacoit Gabbar Singh with famous dialogues like 'Kitne aadmi the?'.",
    "hint": "It was his breakthrough role in Indian cinema."
  },
  {
    "id": 113,
    "category": "Entertainment",
    "difficulty": "Easy",
    "question": "Which legendary playback singer was honored with the title 'Nightingale of India' and received the Bharat Ratna in 2001?",
    "options": [
      "Asha Bhosle",
      "Lata Mangeshkar",
      "K.S. Chithra",
      "Shreya Ghoshal"
    ],
    "correctAnswer": 1,
    "explanation": "Lata Mangeshkar recorded thousands of songs in over 36 languages across seven decades.",
    "hint": "Her soulful rendition of 'Aye Mere Watan Ke Logo' moved Prime Minister Nehru to tears."
  },
  {
    "id": 114,
    "category": "Entertainment",
    "difficulty": "Easy",
    "question": "Which iconic music composer is known as the 'Mozart of Madras' and won two Academy Awards for Slumdog Millionaire?",
    "options": [
      "R.D. Burman",
      "A.R. Rahman",
      "Ilaiyaraaja",
      "Pritam"
    ],
    "correctAnswer": 1,
    "explanation": "A.R. Rahman won two Oscars (Best Original Score and Best Original Song for 'Jai Ho') at the 81st Academy Awards in 2009.",
    "hint": "He composed 'Roja', 'Dil Se..', and 'Maa Tujhe Salaam'."
  },
  {
    "id": 115,
    "category": "Entertainment",
    "difficulty": "Medium",
    "question": "Which was the first full-length Indian feature film, released in 1913 by Dadasaheb Phalke?",
    "options": [
      "Alam Ara",
      "Raja Harishchandra",
      "Kisan Kanya",
      "Ayodhyecha Raja"
    ],
    "correctAnswer": 1,
    "explanation": "Raja Harishchandra (1913) was a silent movie directed by Dadasaheb Phalke, considered the father of Indian cinema.",
    "hint": "It portrayed the story of the righteous King of Ayodhya who never lied."
  },
  {
    "id": 116,
    "category": "Entertainment",
    "difficulty": "Medium",
    "question": "Which was the first Indian sound film (talkie), released in 1931?",
    "options": [
      "Raja Harishchandra",
      "Alam Ara",
      "Kisan Kanya",
      "Chandidas"
    ],
    "correctAnswer": 1,
    "explanation": "Directed by Ardeshir Irani, 'Alam Ara' premiered on 14 March 1931 at the Majestic Cinema in Bombay.",
    "hint": "It featured the historic first song 'De de khuda ke naam pe pyare'."
  },
  {
    "id": 117,
    "category": "Entertainment",
    "difficulty": "Medium",
    "question": "Which movie was the first Indian film nominated for the Academy Award for Best Foreign Language Film in 1958?",
    "options": [
      "Mughal-e-Azam",
      "Mother India",
      "Pather Panchali",
      "Lagaan"
    ],
    "correctAnswer": 1,
    "explanation": "Mehboob Khan's 'Mother India' starring Nargis lost the Oscar by just a single vote to Fellini's 'Nights of Cabiria'.",
    "hint": "Starring Nargis, Sunil Dutt, and Rajendra Kumar."
  },
  {
    "id": 118,
    "category": "Entertainment",
    "difficulty": "Medium",
    "question": "Who directed the timeless masterpiece 'Mughal-e-Azam' (1960), which took over a decade to complete?",
    "options": [
      "Guru Dutt",
      "K. Asif",
      "Bimal Roy",
      "Raj Kapoor"
    ],
    "correctAnswer": 1,
    "explanation": "Director K. Asif spent nearly 14 years perfecting Mughal-e-Azam, starring Prithviraj Kapoor, Dilip Kumar, and Madhubala.",
    "hint": "His grand vision featured the lavish Sheesh Mahal set."
  },
  {
    "id": 119,
    "category": "Entertainment",
    "difficulty": "Hard",
    "question": "Who was the first Indian to win an Academy Award (Oscar) in 1983 for Costume Design for the film 'Gandhi'?",
    "options": [
      "Satyajit Ray",
      "Bhanu Athaiya",
      "Resul Pookutty",
      "A.R. Rahman"
    ],
    "correctAnswer": 1,
    "explanation": "Bhanu Athaiya made history by winning the Oscar for Best Costume Design for Richard Attenborough's biopic 'Gandhi'.",
    "hint": "She designed costumes for over 100 films, including Lagaan and Amrapali."
  },
  {
    "id": 120,
    "category": "Entertainment",
    "difficulty": "Hard",
    "question": "Which visionary Indian director was awarded the prestigious Honorary Lifetime Achievement Oscar in 1992 while in his hospital bed?",
    "options": [
      "Raj Kapoor",
      "Satyajit Ray",
      "Mrinal Sen",
      "Ritwik Ghatak"
    ],
    "correctAnswer": 1,
    "explanation": "Satyajit Ray, master of world cinema and creator of the Apu Trilogy, received the Honorary Oscar shortly before passing away.",
    "hint": "Audrey Hepburn presented the announcement at the 64th Academy Awards."
  },
  {
    "id": 121,
    "category": "Entertainment",
    "difficulty": "Hard",
    "question": "What was the first indigenously made Indian color film, released in 1937?",
    "options": [
      "Kisan Kanya",
      "Mother India",
      "Jhansi Ki Rani",
      "Aan"
    ],
    "correctAnswer": 0,
    "explanation": "Kisan Kanya (1937), directed by Moti Gidwani and produced by Ardeshir Irani using the Cinecolor process, was India's first indigenous color film.",
    "hint": "The title translates to 'Peasant Girl'."
  },
  {
    "id": 122,
    "category": "Entertainment",
    "difficulty": "Hard",
    "question": "Which film won 11 Oscars at the 70th Academy Awards, tying the all-time record with Ben-Hur and The Lord of the Rings: Return of the King?",
    "options": [
      "Avatar",
      "Titanic",
      "Gladiator",
      "La La Land"
    ],
    "correctAnswer": 1,
    "explanation": "James Cameron's 'Titanic' (1997) won 11 Oscars out of 14 nominations, including Best Picture and Best Director.",
    "hint": "Starring Leonardo DiCaprio and Kate Winslet aboard an ill-fated ship."
  },
  {
    "id": 123,
    "category": "Entertainment",
    "difficulty": "Very Hard",
    "question": "Who was the first female actress to win the prestigious Dadasaheb Phalke Award when it was instituted in 1969?",
    "options": [
      "Devika Rani",
      "Ruby Myers (Sulochana)",
      "Kanan Devi",
      "Durga Khote"
    ],
    "correctAnswer": 0,
    "explanation": "Devika Rani, co-founder of Bombay Talkies and known as the First Lady of Indian Cinema, received the inaugural award.",
    "hint": "She starred in 'Achhut Kannya' (1936) opposite Ashok Kumar."
  },
  {
    "id": 124,
    "category": "Entertainment",
    "difficulty": "Very Hard",
    "question": "In the film 'Lagaan' (2001), what was the name of the British Captain who challenged the villagers to a game of cricket?",
    "options": [
      "Captain Smith",
      "Captain Russell",
      "Captain Clive",
      "Captain Gordon"
    ],
    "correctAnswer": 1,
    "explanation": "Captain Andrew Russell was portrayed by English actor Paul Blackthorne in Ashutosh Gowariker's Oscar-nominated epic.",
    "hint": "His sister Elizabeth Russell secretly helps Bhuvan's team learn the game."
  },
  {
    "id": 125,
    "category": "Entertainment",
    "difficulty": "Very Hard",
    "question": "Which renowned sitar maestro won five Grammy Awards and performed at Woodstock in 1969?",
    "options": [
      "Pandit Ravi Shankar",
      "Ustad Vilayat Khan",
      "Pandit Nikhil Banerjee",
      "Ustad Amjad Ali Khan"
    ],
    "correctAnswer": 0,
    "explanation": "Pandit Ravi Shankar popularized Indian classical music globally and was teacher and mentor to George Harrison of the Beatles.",
    "hint": "He is the father of singer Norah Jones and sitarist Anoushka Shankar."
  },
  {
    "id": 126,
    "category": "Entertainment",
    "difficulty": "Extreme",
    "question": "Which legendary Bollywood lyricist and screenwriter holds the world record for writing the highest number of recorded film songs (over 3,500 songs in 650 films)?",
    "options": [
      "Majrooh Sultanpuri",
      "Sameer Anjaan",
      "Anand Bakshi",
      "Sahir Ludhianvi"
    ],
    "correctAnswer": 1,
    "explanation": "Sameer Anjaan entered the Guinness World Records in 2016 for penning an unprecedented 3,524 songs across 650 films.",
    "hint": "He is the son of noted Hindi lyricist Anjaan."
  },
  {
    "id": 127,
    "category": "Entertainment",
    "difficulty": "Extreme",
    "question": "Who was the sound designer from Kerala who won the Academy Award for Best Sound Mixing in 2009 for Slumdog Millionaire?",
    "options": [
      "Resul Pookutty",
      "Amrit Pritam",
      "Bhavdeep Jaipurwale",
      "P.M. Satheesh"
    ],
    "correctAnswer": 0,
    "explanation": "Resul Pookutty shared the Oscar with Ian Tapp and Richard Pryke at the 81st Academy Awards.",
    "hint": "He dedicated his award to his homeland India, saying 'This is not just a sound award, this is history'."
  },
  {
    "id": 128,
    "category": "Technology",
    "difficulty": "Easy",
    "question": "What does 'CPU' stand for in computer hardware?",
    "options": [
      "Central Processing Unit",
      "Computer Personal User",
      "Core Processing Utility",
      "Central Performance Unit"
    ],
    "correctAnswer": 0,
    "explanation": "The CPU (Central Processing Unit) acts as the primary brain of a computer, executing instructions and processing arithmetic logic.",
    "hint": "It is often referred to as the brain of the computer."
  },
  {
    "id": 129,
    "category": "Technology",
    "difficulty": "Easy",
    "question": "Who was the co-founder of Microsoft alongside Paul Allen?",
    "options": [
      "Steve Jobs",
      "Bill Gates",
      "Larry Page",
      "Mark Zuckerberg"
    ],
    "correctAnswer": 1,
    "explanation": "Bill Gates and Paul Allen founded Microsoft on 4 April 1975 in Albuquerque, New Mexico.",
    "hint": "He developed MS-DOS and Windows operating systems."
  },
  {
    "id": 130,
    "category": "Technology",
    "difficulty": "Easy",
    "question": "What does the 'www' prefix stand for in web browser URLs?",
    "options": [
      "World Wide Web",
      "World Web Wireless",
      "Wide World Window",
      "Web World Wide"
    ],
    "correctAnswer": 0,
    "explanation": "Sir Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN.",
    "hint": "Invented by Tim Berners-Lee."
  },
  {
    "id": 131,
    "category": "Technology",
    "difficulty": "Easy",
    "question": "What programming language is universally used alongside HTML and CSS to create interactive web pages?",
    "options": [
      "C++",
      "JavaScript",
      "Fortran",
      "COBOL"
    ],
    "correctAnswer": 1,
    "explanation": "JavaScript was created by Brendan Eich in 1995 and runs in modern web browsers.",
    "hint": "Created originally in just 10 days at Netscape."
  },
  {
    "id": 132,
    "category": "Technology",
    "difficulty": "Easy",
    "question": "Which operating system uses a green robot as its official mascot?",
    "options": [
      "iOS",
      "Android",
      "Windows",
      "Linux"
    ],
    "correctAnswer": 1,
    "explanation": "Android, developed by Google, uses the green Bugdroid robot logo designed by Irina Blok.",
    "hint": "It powers billions of smartphones globally."
  },
  {
    "id": 133,
    "category": "Technology",
    "difficulty": "Medium",
    "question": "Who created the open-source Linux kernel in 1991?",
    "options": [
      "Richard Stallman",
      "Linus Torvalds",
      "Ken Thompson",
      "Dennis Ritchie"
    ],
    "correctAnswer": 1,
    "explanation": "Finnish software engineer Linus Torvalds created Linux as a free operating system kernel while at the University of Helsinki.",
    "hint": "He also created the Git version control system."
  },
  {
    "id": 134,
    "category": "Technology",
    "difficulty": "Medium",
    "question": "What is the standard port number used for secure web traffic over HTTPS?",
    "options": [
      "80",
      "8080",
      "443",
      "22"
    ],
    "correctAnswer": 2,
    "explanation": "Port 443 is the standard default port designated for Transport Layer Security (HTTPS), whereas HTTP uses port 80.",
    "hint": "Port 80 is unencrypted HTTP; this port is four hundred and forty-three."
  },
  {
    "id": 135,
    "category": "Technology",
    "difficulty": "Medium",
    "question": "Who created the C programming language at Bell Labs in 1972?",
    "options": [
      "Dennis Ritchie",
      "Bjarne Stroustrup",
      "James Gosling",
      "Guido van Rossum"
    ],
    "correctAnswer": 0,
    "explanation": "Dennis Ritchie developed C at Bell Labs to re-implement the Unix operating system.",
    "hint": "He co-authored the legendary book 'The C Programming Language' with Brian Kernighan."
  },
  {
    "id": 136,
    "category": "Technology",
    "difficulty": "Medium",
    "question": "What does 'RAM' stand for in computer systems?",
    "options": [
      "Random Access Memory",
      "Read Always Memory",
      "Rapid Action Module",
      "Run Active Mechanism"
    ],
    "correctAnswer": 0,
    "explanation": "Random Access Memory (RAM) allows data items to be read or written in almost the same amount of time irrespective of physical location.",
    "hint": "It is volatile memory cleared when power is turned off."
  },
  {
    "id": 137,
    "category": "Technology",
    "difficulty": "Hard",
    "question": "Which English mathematician is celebrated as the world's first computer programmer for writing an algorithm for Babbage's Analytical Engine?",
    "options": [
      "Alan Turing",
      "Ada Lovelace",
      "Grace Hopper",
      "Katherine Johnson"
    ],
    "correctAnswer": 1,
    "explanation": "Ada Lovelace, daughter of Lord Byron, published an algorithm in 1843 designed for Charles Babbage's mechanical computer.",
    "hint": "An early DoD programming language was named 'Ada' in her honor."
  },
  {
    "id": 138,
    "category": "Technology",
    "difficulty": "Hard",
    "question": "What groundbreaking 2017 research paper introduced the 'Transformer' neural network architecture that revolutionized modern AI?",
    "options": [
      "Deep Residual Learning for Image Recognition",
      "Attention Is All You Need",
      "Generative Adversarial Nets",
      "Mastering the Game of Go"
    ],
    "correctAnswer": 1,
    "explanation": "'Attention Is All You Need' by Google researchers introduced the self-attention mechanism that powers models like GPT, Gemini, and Claude.",
    "hint": "Its title emphasizes the concept of 'Attention'."
  },
  {
    "id": 139,
    "category": "Technology",
    "difficulty": "Hard",
    "question": "Who invented the Python programming language, releasing its first version in 1991?",
    "options": [
      "Guido van Rossum",
      "Yukihiro Matsumoto",
      "Larry Wall",
      "Anders Hejlsberg"
    ],
    "correctAnswer": 0,
    "explanation": "Guido van Rossum created Python at CWI in the Netherlands, naming it after the British comedy troupe Monty Python.",
    "hint": "He was affectionately known as Python's Benevolent Dictator for Life (BDFL)."
  },
  {
    "id": 140,
    "category": "Technology",
    "difficulty": "Hard",
    "question": "What is the name of the first electronic general-purpose digital computer, completed in 1945 at the University of Pennsylvania?",
    "options": [
      "UNIVAC I",
      "ENIAC",
      "Colossus",
      "EDVAC"
    ],
    "correctAnswer": 1,
    "explanation": "ENIAC (Electronic Numerical Integrator and Computer) contained over 17,000 vacuum tubes and weighed nearly 30 tons.",
    "hint": "Designed by John Mauchly and J. Presper Eckert."
  },
  {
    "id": 141,
    "category": "Technology",
    "difficulty": "Very Hard",
    "question": "Who cracked the Nazi Enigma cipher machine at Bletchley Park and laid the mathematical foundation for modern computer science?",
    "options": [
      "John von Neumann",
      "Alan Turing",
      "Claude Shannon",
      "Kurt Gödel"
    ],
    "correctAnswer": 1,
    "explanation": "Alan Turing built the Bombe decryption device and formulated the concept of the universal Turing machine.",
    "hint": "The highest award in computer science is the Turing Award."
  },
  {
    "id": 142,
    "category": "Technology",
    "difficulty": "Very Hard",
    "question": "What famous law of empirical observation states that the number of transistors on a microchip doubles roughly every two years?",
    "options": [
      "Metcalfe's Law",
      "Moore's Law",
      "Amdahl's Law",
      "Little's Law"
    ],
    "correctAnswer": 1,
    "explanation": "Formulated by Intel co-founder Gordon Moore in 1965, Moore's Law guided semiconductor scaling for over five decades.",
    "hint": "Named after the co-founder of Intel, Gordon Moore."
  },
  {
    "id": 143,
    "category": "Technology",
    "difficulty": "Very Hard",
    "question": "In asymmetric public-key cryptography, what does the acronym 'RSA' stand for?",
    "options": [
      "Rivest, Shamir, and Adleman",
      "Rapid Security Algorithm",
      "Randomized Secure Architecture",
      "Radio Signal Authentication"
    ],
    "correctAnswer": 0,
    "explanation": "RSA was designed in 1977 by Ron Rivest, Adi Shamir, and Leonard Adleman at MIT, based on factoring large prime numbers.",
    "hint": "Named after the surnames of its three inventors at MIT."
  },
  {
    "id": 144,
    "category": "Technology",
    "difficulty": "Extreme",
    "question": "What was the very first message transmitted over ARPANET (the predecessor to the Internet) between UCLA and Stanford in October 1969 before the system crashed?",
    "options": [
      "HELLO",
      "LOGIN (crashed after 'LO')",
      "PING",
      "TEST"
    ],
    "correctAnswer": 1,
    "explanation": "Charley Kline tried to type 'LOGIN' from UCLA to Stanford. The computer transmitted 'L', then 'O', and then crashed, making 'LO' the first message.",
    "hint": "They intended to type 'LOGIN', but only the first two letters made it through."
  },
  {
    "id": 145,
    "category": "Technology",
    "difficulty": "Extreme",
    "question": "Who introduced the concept of Information Entropy in his landmark 1948 paper 'A Mathematical Theory of Communication'?",
    "options": [
      "Norbert Wiener",
      "Claude Shannon",
      "John von Neumann",
      "Andrey Kolmogorov"
    ],
    "correctAnswer": 1,
    "explanation": "Claude Shannon, revered as the Father of Information Theory, defined the fundamental limits on signal processing and data compression.",
    "hint": "He coined the term 'bit' as a contraction of binary digit."
  },
  {
    "id": 146,
    "category": "General Knowledge",
    "difficulty": "Easy",
    "question": "What is the national flower of India?",
    "options": [
      "Rose",
      "Lotus",
      "Marigold",
      "Jasmine"
    ],
    "correctAnswer": 1,
    "explanation": "The Lotus (Nelumbo nucifera) is the sacred national flower of India, symbolizing purity, beauty, and prosperity.",
    "hint": "It blossoms gracefully in muddy waters."
  },
  {
    "id": 147,
    "category": "General Knowledge",
    "difficulty": "Easy",
    "question": "Which country is popularly known as the 'Land of the Rising Sun'?",
    "options": [
      "China",
      "Japan",
      "South Korea",
      "Thailand"
    ],
    "correctAnswer": 1,
    "explanation": "Japan is called 'Nihon' or 'Nippon', which translates to 'origin of the sun'.",
    "hint": "Its capital is Tokyo."
  },
  {
    "id": 148,
    "category": "General Knowledge",
    "difficulty": "Medium",
    "question": "Who was the first woman Prime Minister of India?",
    "options": [
      "Sarojini Naidu",
      "Indira Gandhi",
      "Pratibha Patil",
      "Sushma Swaraj"
    ],
    "correctAnswer": 1,
    "explanation": "Indira Gandhi served as Prime Minister from 1966 to 1977 and again from 1980 until 1984.",
    "hint": "She was the daughter of Jawaharlal Nehru and known as the 'Iron Lady of India'."
  },
  {
    "id": 149,
    "category": "General Knowledge",
    "difficulty": "Medium",
    "question": "Which organ of the United Nations is responsible for maintaining international peace and security?",
    "options": [
      "General Assembly",
      "Security Council",
      "Economic and Social Council",
      "Secretariat"
    ],
    "correctAnswer": 1,
    "explanation": "The UN Security Council consists of 5 permanent members with veto power and 10 non-permanent members.",
    "hint": "Known as the UNSC."
  },
  {
    "id": 150,
    "category": "General Knowledge",
    "difficulty": "Hard",
    "question": "Which Indian Fundamental Right was omitted from the list of Fundamental Rights by the 44th Constitutional Amendment Act in 1978?",
    "options": [
      "Right to Equality",
      "Right to Property",
      "Right to Freedom of Religion",
      "Right to Constitutional Remedies"
    ],
    "correctAnswer": 1,
    "explanation": "The 44th Amendment in 1978 removed the Right to Property (Article 31) from fundamental rights, making it a legal right under Article 300A.",
    "hint": "It relates to owning land, houses, and real estate."
  },
  {
    "id": 151,
    "category": "General Knowledge",
    "difficulty": "Hard",
    "question": "What is the capital city of Australia?",
    "options": [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Brisbane"
    ],
    "correctAnswer": 2,
    "explanation": "Canberra was chosen as the compromise capital of Australia in 1908 to resolve the rivalry between Sydney and Melbourne.",
    "hint": "It was purpose-built as a planned city."
  },
  {
    "id": 152,
    "category": "General Knowledge",
    "difficulty": "Very Hard",
    "question": "In which city is the International Court of Justice (ICJ) headquartered?",
    "options": [
      "Geneva, Switzerland",
      "The Hague, Netherlands",
      "Vienna, Austria",
      "Brussels, Belgium"
    ],
    "correctAnswer": 1,
    "explanation": "The Peace Palace in The Hague, Netherlands serves as the official seat of the International Court of Justice.",
    "hint": "It is located in the political capital of the Netherlands."
  },
  {
    "id": 153,
    "category": "General Knowledge",
    "difficulty": "Extreme",
    "question": "Which amendment to the Constitution of India is commonly known as the 'Mini-Constitution' because of its vast changes?",
    "options": [
      "24th Amendment",
      "42nd Amendment",
      "44th Amendment",
      "73rd Amendment"
    ],
    "correctAnswer": 1,
    "explanation": "The 42nd Amendment Act (1976), enacted during the Emergency, added the words 'Socialist, Secular, and Integrity' to the Preamble.",
    "hint": "Enacted in 1976 during the national emergency."
  },
  {
    "id": 154,
    "category": "Ramayana",
    "difficulty": "Easy",
    "question": "Who was the mother of Lord Rama?",
    "options": [
      "Kaikeyi",
      "Kausalya",
      "Sumitra",
      "Mandodari"
    ],
    "correctAnswer": 1,
    "explanation": "Queen Kausalya was the senior-most queen of King Dasharatha and the mother of Lord Rama.",
    "hint": "She was the chief queen of Dasharatha."
  },
  {
    "id": 155,
    "category": "Ramayana",
    "difficulty": "Easy",
    "question": "What was the capital kingdom ruled by Sugriva, the King of the Vanaras?",
    "options": [
      "Ayodhya",
      "Mithila",
      "Kishkindha",
      "Lanka"
    ],
    "correctAnswer": 2,
    "explanation": "Kishkindha was the monkey kingdom ruled by Vali and subsequently by Sugriva after Rama defeated Vali.",
    "hint": "Located near modern Hampi in Karnataka."
  },
  {
    "id": 156,
    "category": "Ramayana",
    "difficulty": "Medium",
    "question": "Who accompanied Lord Rama and Sita willingly into their 14-year exile?",
    "options": [
      "Bharata",
      "Lakshmana",
      "Shatrughna",
      "Hanuman"
    ],
    "correctAnswer": 1,
    "explanation": "Prince Lakshmana steadfastly insisted on accompanying Rama and Sita to protect them through their forest ordeal.",
    "hint": "He was the twin brother of Shatrughna."
  },
  {
    "id": 157,
    "category": "Ramayana",
    "difficulty": "Medium",
    "question": "What form did the demon Maricha assume to lure Lord Rama away from their hermitage?",
    "options": [
      "White Elephant",
      "Golden Deer",
      "Winged Horse",
      "Singing Peacock"
    ],
    "correctAnswer": 1,
    "explanation": "Maricha transformed himself into a mesmerizing golden deer (Suvarna Mriga) with silver spots to entice Sita.",
    "hint": "Sita was enchanted by its shimmering golden pelt."
  },
  {
    "id": 158,
    "category": "Ramayana",
    "difficulty": "Hard",
    "question": "Who was the chief queen of Ravana, known for her piety and wisdom?",
    "options": [
      "Trijata",
      "Mandodari",
      "Surpanakha",
      "Simhika"
    ],
    "correctAnswer": 1,
    "explanation": "Mandodari, daughter of the celestial architect Mayasura, was Ravana's noble queen who repeatedly advised him to return Sita.",
    "hint": "She is venerated as one of the Panchakanyas."
  },
  {
    "id": 159,
    "category": "Ramayana",
    "difficulty": "Hard",
    "question": "Which sage's hermitage did Rama and Lakshmana protect from the demons Maricha and Subahu in their youth?",
    "options": [
      "Sage Valmiki",
      "Sage Vishwamitra",
      "Sage Gautama",
      "Sage Bharadwaja"
    ],
    "correctAnswer": 1,
    "explanation": "Sage Vishwamitra took teenage Rama and Lakshmana to his hermitage, Siddhashrama, to safeguard his sacred yajnas.",
    "hint": "The sage was formerly a king named Kaushika who attained Brahmarshi status."
  },
  {
    "id": 160,
    "category": "Ramayana",
    "difficulty": "Very Hard",
    "question": "Which gentle demoness guarded Sita in the Ashoka Vatika and comforted her with motherly care?",
    "options": [
      "Trijata",
      "Simhika",
      "Tataka",
      "Ayomukhi"
    ],
    "correctAnswer": 0,
    "explanation": "Trijata was a pious Rakshasi in Lanka who protected Sita from harassment by other guards and foresaw Rama's victory in a dream.",
    "hint": "Her name begins with 'Tri'."
  },
  {
    "id": 161,
    "category": "Ramayana",
    "difficulty": "Extreme",
    "question": "What was the name of the aerial chariot (flying vimana) that Ravana seized from Kubera, later used by Rama to return to Ayodhya?",
    "options": [
      "Pushpaka Vimana",
      "Garuda Vimana",
      "Meghavahana",
      "Surya Vimana"
    ],
    "correctAnswer": 0,
    "explanation": "The Pushpaka Vimana was originally crafted by Vishwakarma for Lord Brahma, then given to Kubera, stolen by Ravana, and finally boarded by Rama's entourage.",
    "hint": "Its name translates to 'flowering chariot'."
  },
  {
    "id": 162,
    "category": "Mahabharata",
    "difficulty": "Easy",
    "question": "What was the capital city of the Kuru kingdom ruled by Dhritarashtra?",
    "options": [
      "Indraprastha",
      "Hastinapur",
      "Mathura",
      "Varanasi"
    ],
    "correctAnswer": 1,
    "explanation": "Hastinapur, situated along the Ganges in modern Uttar Pradesh, was the traditional capital of the Kurus.",
    "hint": "The name means 'City of Elephants'."
  },
  {
    "id": 163,
    "category": "Mahabharata",
    "difficulty": "Easy",
    "question": "Who was the blind king of Hastinapur and father of the Kauravas?",
    "options": [
      "Pandu",
      "Dhritarashtra",
      "Shantanu",
      "Vidura"
    ],
    "correctAnswer": 1,
    "explanation": "Dhritarashtra was blind from birth; his wife Queen Gandhari voluntarily blindfolded herself for life in solidarity.",
    "hint": "His brother Pandu was the father of the Pandavas."
  },
  {
    "id": 164,
    "category": "Mahabharata",
    "difficulty": "Medium",
    "question": "Who was the royal guru who taught archery and warfare to both the Pandavas and Kauravas?",
    "options": [
      "Kripacharya",
      "Dronacharya",
      "Parashurama",
      "Balarama"
    ],
    "correctAnswer": 1,
    "explanation": "Guru Dronacharya was the master of military arts who demanded the right thumb of Ekalavya as Guru Dakshina.",
    "hint": "He was the father of Ashwatthama."
  },
  {
    "id": 165,
    "category": "Mahabharata",
    "difficulty": "Medium",
    "question": "What magnificent capital city did the Pandavas construct on the arid land of Khandavaprastha?",
    "options": [
      "Dwarka",
      "Hastinapur",
      "Indraprastha",
      "Ayodhya"
    ],
    "correctAnswer": 2,
    "explanation": "With the assistance of Maya Danava and Lord Krishna, the Pandavas created the breathtaking city of Indraprastha (modern Delhi).",
    "hint": "Named in honor of Lord Indra."
  },
  {
    "id": 166,
    "category": "Mahabharata",
    "difficulty": "Hard",
    "question": "Who was the maternal uncle of the Kauravas who masterminded the rigged game of dice against Yudhishthira?",
    "options": [
      "Shakuni",
      "Shalya",
      "Jayadratha",
      "Kritavarma"
    ],
    "correctAnswer": 0,
    "explanation": "Prince Shakuni of Gandhara rolled enchanted dice carved from his father's bones to defeat Yudhishthira.",
    "hint": "He was the prince of Gandhara and brother of Queen Gandhari."
  },
  {
    "id": 167,
    "category": "Mahabharata",
    "difficulty": "Hard",
    "question": "Which warrior possessed the boon of 'Ichha Mrityu' (the power to choose the exact time of his death)?",
    "options": [
      "Dronacharya",
      "Bhishma",
      "Karna",
      "Ashwatthama"
    ],
    "correctAnswer": 1,
    "explanation": "King Shantanu granted his dutiful son Devavrata (Bhishma) the boon of dying only when he willed it.",
    "hint": "He lay upon a bed of arrows awaiting the auspicious Uttarayana."
  },
  {
    "id": 168,
    "category": "Mahabharata",
    "difficulty": "Very Hard",
    "question": "Who was the warrior born as a woman named Shikhandini, who later fought as a man to become instrumental in Bhishma's fall?",
    "options": [
      "Satyavati",
      "Amba / Shikhandi",
      "Dushala",
      "Ulupi"
    ],
    "correctAnswer": 1,
    "explanation": "Princess Amba was reborn as Shikhandi; Bhishma dropped his weapons facing Shikhandi, allowing Arjuna to strike him down.",
    "hint": "She was the eldest princess of Kashi seeking vengeance against Bhishma."
  },
  {
    "id": 169,
    "category": "Mahabharata",
    "difficulty": "Extreme",
    "question": "What was the name of the celestial discus (spinning weapon) wielded by Lord Krishna?",
    "options": [
      "Kaumodaki",
      "Sudarshana Chakra",
      "Nandaka",
      "Sharanga"
    ],
    "correctAnswer": 1,
    "explanation": "The Sudarshana Chakra has 108 serrated edges and was used by Krishna to sever the heads of Shishupala and others.",
    "hint": "Its name translates to 'auspicious vision'."
  },
  {
    "id": 170,
    "category": "Sports",
    "difficulty": "Easy",
    "question": "In cricket, how many runs are scored when a batsman hits the ball over the boundary ropes on the full?",
    "options": [
      "4 runs",
      "5 runs",
      "6 runs",
      "8 runs"
    ],
    "correctAnswer": 2,
    "explanation": "A maximum of six runs is awarded when the ball clears the boundary without bouncing on the ground.",
    "hint": "A 'maximum'."
  },
  {
    "id": 171,
    "category": "Sports",
    "difficulty": "Easy",
    "question": "In which sport is the term 'Love' used to indicate a score of zero?",
    "options": [
      "Tennis",
      "Golf",
      "Cricket",
      "Basketball"
    ],
    "correctAnswer": 0,
    "explanation": "In tennis scoring, 'love' means zero, derived from the French word 'l'oeuf' (egg), resembling a zero.",
    "hint": "Played with rackets and a yellow ball on grass, clay, or hard courts."
  },
  {
    "id": 172,
    "category": "Sports",
    "difficulty": "Medium",
    "question": "Who holds the record for the most goals scored in official international men's football matches?",
    "options": [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Pelé",
      "Ali Daei"
    ],
    "correctAnswer": 1,
    "explanation": "Cristiano Ronaldo of Portugal has netted over 130 international goals for his country, surpassing Ali Daei.",
    "hint": "The Portuguese icon wears jersey number 7."
  },
  {
    "id": 173,
    "category": "Sports",
    "difficulty": "Medium",
    "question": "Which Indian chess grandmaster became the world chess champion five times between 2000 and 2012?",
    "options": [
      "Viswanathan Anand",
      "Pentala Harikrishna",
      "Vidit Gujrathi",
      "Gukesh D"
    ],
    "correctAnswer": 0,
    "explanation": "Viswanathan Anand ('Vishy') was India's first Grandmaster in 1988 and reigned as undisputed World Chess Champion.",
    "hint": "Known as the 'Lightning Kid' from Chennai."
  },
  {
    "id": 174,
    "category": "Sports",
    "difficulty": "Hard",
    "question": "Who was the first Indian woman to win an Olympic medal in boxing (Bronze at London 2012)?",
    "options": [
      "Lovlina Borgohain",
      "Mary Kom",
      "Nikhat Zareen",
      "Sarita Devi"
    ],
    "correctAnswer": 1,
    "explanation": "M.C. Mary Kom from Manipur won Bronze at London 2012 and is a record six-time World Amateur Boxing Champion.",
    "hint": "Known as 'Magnificent Mary'."
  },
  {
    "id": 175,
    "category": "Sports",
    "difficulty": "Hard",
    "question": "Which athlete holds the world record for the most Olympic gold medals won in history (23 gold medals)?",
    "options": [
      "Usain Bolt",
      "Michael Phelps",
      "Carl Lewis",
      "Mark Spitz"
    ],
    "correctAnswer": 1,
    "explanation": "American swimmer Michael Phelps won 23 gold medals and 28 total medals across five Olympic Games.",
    "hint": "Nicknamed 'The Baltimore Bullet'."
  },
  {
    "id": 176,
    "category": "Sports",
    "difficulty": "Very Hard",
    "question": "Who was the first batsman to score a double century (200 not out) in Men's One Day International (ODI) cricket?",
    "options": [
      "Virender Sehwag",
      "Rohit Sharma",
      "Sachin Tendulkar",
      "Chris Gayle"
    ],
    "correctAnswer": 2,
    "explanation": "Sachin Tendulkar achieved the historic first men's ODI double century against South Africa at Gwalior on 24 February 2010.",
    "hint": "Commentator Ravi Shastri exclaimed: 'The first man on the planet to reach 200 and it's the Superman from India!'."
  },
  {
    "id": 177,
    "category": "Sports",
    "difficulty": "Extreme",
    "question": "In Test cricket history, only two bowlers have taken all 10 wickets in a single Test innings besides Jim Laker and Ajaz Patel. Who was the Indian who achieved this feat at Feroz Shah Kotla in 1999?",
    "options": [
      "Kapil Dev",
      "Anil Kumble",
      "Bishan Singh Bedi",
      "Ravichandran Ashwin"
    ],
    "correctAnswer": 1,
    "explanation": "Anil Kumble took 10 wickets for 74 runs against Pakistan in Delhi on 7 February 1999.",
    "hint": "Nicknamed 'Jumbo', he is India's highest Test wicket-taker."
  },
  {
    "id": 178,
    "category": "Science",
    "difficulty": "Easy",
    "question": "What is the hardest naturally occurring mineral on Earth?",
    "options": [
      "Quartz",
      "Diamond",
      "Topaz",
      "Corundum"
    ],
    "correctAnswer": 1,
    "explanation": "Diamond is a crystalline allotrope of carbon and rates 10 (the maximum) on the Mohs scale of mineral hardness.",
    "hint": "Composed of pure carbon arranged in a tetrahedral lattice."
  },
  {
    "id": 179,
    "category": "Science",
    "difficulty": "Easy",
    "question": "What is the common chemical formula for table salt?",
    "options": [
      "H2O",
      "CO2",
      "NaCl",
      "KCl"
    ],
    "correctAnswer": 2,
    "explanation": "Table salt is Sodium Chloride (NaCl), formed by ionic bonding between sodium and chlorine atoms.",
    "hint": "Combines Sodium (Na) and Chlorine (Cl)."
  },
  {
    "id": 180,
    "category": "Science",
    "difficulty": "Medium",
    "question": "Which blood cells are responsible for fighting off infections and pathogens in the human body?",
    "options": [
      "Red Blood Cells (Erythrocytes)",
      "White Blood Cells (Leukocytes)",
      "Platelets (Thrombocytes)",
      "Plasma Cells"
    ],
    "correctAnswer": 1,
    "explanation": "White blood cells (leukocytes) form the primary line of defense in the human immune system.",
    "hint": "Also known as leukocytes."
  },
  {
    "id": 181,
    "category": "Science",
    "difficulty": "Medium",
    "question": "What is the closest star to planet Earth?",
    "options": [
      "Proxima Centauri",
      "Sirius",
      "The Sun",
      "Alpha Centauri A"
    ],
    "correctAnswer": 2,
    "explanation": "The Sun is our home star, situated approximately 149.6 million kilometers away from Earth.",
    "hint": "It provides Earth with daylight and warmth."
  },
  {
    "id": 182,
    "category": "Science",
    "difficulty": "Hard",
    "question": "Who proposed the General Theory of Relativity in 1915?",
    "options": [
      "Isaac Newton",
      "Albert Einstein",
      "Niels Bohr",
      "Max Planck"
    ],
    "correctAnswer": 1,
    "explanation": "Albert Einstein demonstrated that gravity is the curvature of spacetime caused by mass and energy.",
    "hint": "He also derived the famous mass-energy equivalence equation E=mc²."
  },
  {
    "id": 183,
    "category": "Science",
    "difficulty": "Hard",
    "question": "Which gas is primarily responsible for the greenhouse effect on Venus, creating its extreme surface temperatures?",
    "options": [
      "Methane",
      "Carbon Dioxide",
      "Sulfur Dioxide",
      "Nitrogen"
    ],
    "correctAnswer": 1,
    "explanation": "Venus's atmosphere is over 96% Carbon Dioxide (CO2), creating a runaway greenhouse trap.",
    "hint": "Formula CO2."
  },
  {
    "id": 184,
    "category": "Science",
    "difficulty": "Very Hard",
    "question": "What particle is popularly nicknamed the 'God Particle' in physics, confirmed by CERN in 2012?",
    "options": [
      "Higgs Boson",
      "Top Quark",
      "Graviton",
      "W Boson"
    ],
    "correctAnswer": 0,
    "explanation": "The Higgs Boson, predicted by Peter Higgs and François Englert, explains how fundamental particles acquire mass.",
    "hint": "Discovered using the Large Hadron Collider (LHC)."
  },
  {
    "id": 185,
    "category": "Science",
    "difficulty": "Extreme",
    "question": "What is the name of the cosmological limit that defines the maximum stable mass of a non-rotating white dwarf star (approx. 1.4 solar masses)?",
    "options": [
      "Oppenheimer-Volkoff limit",
      "Chandrasekhar limit",
      "Schwarzschild radius",
      "Eddington limit"
    ],
    "correctAnswer": 1,
    "explanation": "Indian-American astrophysicist Subrahmanyan Chandrasekhar calculated this limit in 1930 and won the 1983 Nobel Prize in Physics.",
    "hint": "Named after the Indian-born Nobel laureate Subrahmanyan."
  },
  {
    "id": 186,
    "category": "History & Geography",
    "difficulty": "Easy",
    "question": "Which Indian city is famously nicknamed the 'Pink City'?",
    "options": [
      "Udaipur",
      "Jaipur",
      "Jodhpur",
      "Bhopal"
    ],
    "correctAnswer": 1,
    "explanation": "Jaipur was painted terracotta pink in 1876 under Maharaja Sawai Ram Singh to welcome the Prince of Wales.",
    "hint": "Capital of the state of Rajasthan."
  },
  {
    "id": 187,
    "category": "History & Geography",
    "difficulty": "Easy",
    "question": "Which is the smallest country in the world by both area and population?",
    "options": [
      "Monaco",
      "Vatican City",
      "Liechtenstein",
      "San Marino"
    ],
    "correctAnswer": 1,
    "explanation": "Vatican City covers an area of just 0.49 square kilometers (121 acres) inside Rome, Italy.",
    "hint": "Home of the Pope and St. Peter's Basilica."
  },
  {
    "id": 188,
    "category": "History & Geography",
    "difficulty": "Medium",
    "question": "Who was the legendary Maratha warrior king who established the Maratha Empire and was crowned 'Chhatrapati' in 1674?",
    "options": [
      "Sambhajiraje",
      "Chhatrapati Shivaji Maharaj",
      "Peshwa Baji Rao I",
      "Tanaji Malusare"
    ],
    "correctAnswer": 1,
    "explanation": "Chhatrapati Shivaji Maharaj established a progressive sovereign state with Raigad as its capital in 1674.",
    "hint": "He pioneered innovative guerrilla naval and hill warfare strategies (Ganimi Kava)."
  },
  {
    "id": 189,
    "category": "History & Geography",
    "difficulty": "Medium",
    "question": "Which waterfall on the border of Zambia and Zimbabwe is known locally as 'Mosi-oa-Tunya' (The Smoke That Thunders)?",
    "options": [
      "Niagara Falls",
      "Victoria Falls",
      "Angel Falls",
      "Iguazu Falls"
    ],
    "correctAnswer": 1,
    "explanation": "Victoria Falls on the Zambezi River forms one of the world's largest sheets of falling water.",
    "hint": "Named by explorer David Livingstone after the British monarch."
  },
  {
    "id": 190,
    "category": "History & Geography",
    "difficulty": "Hard",
    "question": "In which year did the Dandi March (Salt Satyagraha) led by Mahatma Gandhi take place?",
    "options": [
      "1920",
      "1930",
      "1942",
      "1919"
    ],
    "correctAnswer": 1,
    "explanation": "Gandhiji walked 240 miles from Sabarmati Ashram to Dandi from 12 March to 6 April 1930 to protest the British salt tax.",
    "hint": "It launched the nationwide Civil Disobedience Movement."
  },
  {
    "id": 191,
    "category": "History & Geography",
    "difficulty": "Hard",
    "question": "Which ancient Wonder of the Ancient World was located in Alexandria, Egypt?",
    "options": [
      "Hanging Gardens",
      "Colossus of Rhodes",
      "Lighthouse of Alexandria (Pharos)",
      "Temple of Artemis"
    ],
    "correctAnswer": 2,
    "explanation": "The Lighthouse of Alexandria (Pharos), built by the Ptolemaic Kingdom around 280 BCE, guided ships into the harbor.",
    "hint": "It was a famous coastal navigational beacon."
  },
  {
    "id": 192,
    "category": "History & Geography",
    "difficulty": "Very Hard",
    "question": "Which Mauryan Emperor embraced Buddhism and gave up warfare after witnessing the catastrophic devastation of the Kalinga War in 261 BCE?",
    "options": [
      "Chandragupta Maurya",
      "Bindusara",
      "Emperor Ashoka",
      "Dasharatha Maurya"
    ],
    "correctAnswer": 2,
    "explanation": "Emperor Ashoka the Great inscribed edicts promoting Dhamma (righteousness) and non-violence across the subcontinent.",
    "hint": "The Lion Capital of his pillar at Sarnath is India's national emblem."
  },
  {
    "id": 193,
    "category": "History & Geography",
    "difficulty": "Extreme",
    "question": "Which treaty signed in 1919 formally concluded World War I between Germany and the Allied Powers?",
    "options": [
      "Treaty of Paris",
      "Treaty of Versailles",
      "Treaty of Utrecht",
      "Treaty of Brest-Litovsk"
    ],
    "correctAnswer": 1,
    "explanation": "The Treaty of Versailles was signed on 28 June 1919 in the Hall of Mirrors at Versailles, exactly five years after Franz Ferdinand's assassination.",
    "hint": "Signed in the famous French royal palace."
  },
  {
    "id": 194,
    "category": "Entertainment",
    "difficulty": "Easy",
    "question": "Which legendary Bollywood actor is celebrated as the 'Big B' and 'Shahenshah of Bollywood'?",
    "options": [
      "Dharmendra",
      "Amitabh Bachchan",
      "Dev Anand",
      "Rajesh Khanna"
    ],
    "correctAnswer": 1,
    "explanation": "Amitabh Bachchan rose to stardom in the 1970s as the 'Angry Young Man' with films like Zanjeer, Deewaar, and Sholay.",
    "hint": "He also hosts the popular quiz show Kaun Banega Crorepati."
  },
  {
    "id": 195,
    "category": "Entertainment",
    "difficulty": "Easy",
    "question": "In the blockbuster movie '3 Idiots' (2009), what was the real name of the character Rancho played by Aamir Khan?",
    "options": [
      "Farhan Qureshi",
      "Phunsukh Wangdu",
      "Chatur Ramalingam",
      "Raju Rastogi"
    ],
    "correctAnswer": 1,
    "explanation": "Rancho was secretly Phunsukh Wangdu, a brilliant scientist holding over 400 patents in Ladakh.",
    "hint": "He lived in Ladakh teaching school children."
  },
  {
    "id": 196,
    "category": "Entertainment",
    "difficulty": "Medium",
    "question": "Which film won the Best Feature Film award at the 69th National Film Awards for 2021?",
    "options": [
      "RRR",
      "Rocketry: The Nambi Effect",
      "Pushpa: The Rise",
      "Gangubai Kathiawadi"
    ],
    "correctAnswer": 1,
    "explanation": "Rocketry: The Nambi Effect, directed by and starring R. Madhavan, won the National Film Award for Best Feature Film.",
    "hint": "Based on the life of ISRO scientist Nambi Narayanan."
  },
  {
    "id": 197,
    "category": "Entertainment",
    "difficulty": "Medium",
    "question": "Which singer is known as the 'Voice of Romance' and sang hits like 'Tum Hi Ho' and 'Channa Mereya'?",
    "options": [
      "Atif Aslam",
      "Arijit Singh",
      "Sonu Nigam",
      "Mohit Chauhan"
    ],
    "correctAnswer": 1,
    "explanation": "Arijit Singh rose to immense fame after the soundtrack of Aashiqui 2 in 2013.",
    "hint": "Born in Murshidabad, West Bengal."
  },
  {
    "id": 198,
    "category": "Entertainment",
    "difficulty": "Hard",
    "question": "Which director directed the celebrated fantasy epic 'Baahubali: The Beginning' and 'Baahubali 2: The Conclusion'?",
    "options": [
      "Prashanth Neel",
      "S.S. Rajamouli",
      "Mani Ratnam",
      "Shankar"
    ],
    "correctAnswer": 1,
    "explanation": "S.S. Rajamouli created the massive cinematic world of Mahishmati, starring Prabhas as Amarendra and Mahendra Baahubali.",
    "hint": "He also directed 'Eega' and 'RRR'."
  },
  {
    "id": 199,
    "category": "Entertainment",
    "difficulty": "Hard",
    "question": "Who composed the legendary musical score for the 1975 movie 'Sholay', including 'Mehbooba Mehbooba'?",
    "options": [
      "Laxmikant-Pyarelal",
      "R.D. Burman (Pancham)",
      "Kalyanji-Anandji",
      "Bappi Lahiri"
    ],
    "correctAnswer": 1,
    "explanation": "Rahul Dev Burman composed the soundtrack and also sang the high-pitched vocals for 'Mehbooba Mehbooba'.",
    "hint": "Affectionately known as 'Pancham Da'."
  },
  {
    "id": 200,
    "category": "Entertainment",
    "difficulty": "Very Hard",
    "question": "Which Indian documentary won the Academy Award for Best Documentary Short Film in 2023?",
    "options": [
      "Writing with Fire",
      "The Elephant Whisperers",
      "All That Breathes",
      "Period. End of Sentence."
    ],
    "correctAnswer": 1,
    "explanation": "Directed by Kartiki Gonsalves and produced by Guneet Monga, 'The Elephant Whisperers' won the Oscar in 2023.",
    "hint": "It depicts an indigenous couple caring for orphaned elephant calves in Mudumalai National Park."
  },
  {
    "id": 201,
    "category": "Entertainment",
    "difficulty": "Extreme",
    "question": "Which film was chosen as India's first official submission for the Academy Award for Best Foreign Language Film in 1957?",
    "options": [
      "Mother India",
      "Aparajito",
      "Do Bigha Zamin",
      "Madhumati"
    ],
    "correctAnswer": 0,
    "explanation": "Mother India was submitted in 1957 for the 30th Academy Awards and became the first Indian movie ever nominated for the Oscar.",
    "hint": "Starring Nargis as Radha."
  },
  {
    "id": 202,
    "category": "Technology",
    "difficulty": "Easy",
    "question": "What does 'USB' stand for in computer connectivity?",
    "options": [
      "Universal Serial Bus",
      "Unified System Bridge",
      "Universal Socket Board",
      "United Serial Binary"
    ],
    "correctAnswer": 0,
    "explanation": "USB (Universal Serial Bus) is an industry standard established in 1996 for cables, connectors, and protocols.",
    "hint": "Plugged into computers to connect flash drives and mice."
  },
  {
    "id": 203,
    "category": "Technology",
    "difficulty": "Easy",
    "question": "Which company created the iPhone and Mac computers?",
    "options": [
      "Microsoft",
      "Apple",
      "IBM",
      "Sony"
    ],
    "correctAnswer": 1,
    "explanation": "Apple Inc. was founded on 1 April 1976 by Steve Jobs, Steve Wozniak, and Ronald Wayne in Cupertino, California.",
    "hint": "Its logo is an apple with a bite taken out."
  },
  {
    "id": 204,
    "category": "Technology",
    "difficulty": "Medium",
    "question": "What is the primary function of a DNS (Domain Name System) server on the Internet?",
    "options": [
      "Encrypt web passwords",
      "Translate domain names to IP addresses",
      "Store website images",
      "Block viruses"
    ],
    "correctAnswer": 1,
    "explanation": "DNS acts as the phonebook of the Internet, translating human-friendly domain names like 'google.com' into machine-readable IP addresses.",
    "hint": "It works like an Internet phonebook."
  },
  {
    "id": 205,
    "category": "Technology",
    "difficulty": "Medium",
    "question": "Which programming language was created by James Gosling at Sun Microsystems in 1995 with the slogan 'Write Once, Run Anywhere'?",
    "options": [
      "Python",
      "Java",
      "Ruby",
      "Swift"
    ],
    "correctAnswer": 1,
    "explanation": "Java compiles code into bytecode that runs on any machine with a Java Virtual Machine (JVM).",
    "hint": "Named after a type of coffee bean."
  },
  {
    "id": 206,
    "category": "Technology",
    "difficulty": "Hard",
    "question": "What does the abbreviation 'JSON' stand for in software and web development?",
    "options": [
      "Java Standard Output Network",
      "JavaScript Object Notation",
      "Joint Synchronized Object Node",
      "JavaScript Online Numbering"
    ],
    "correctAnswer": 1,
    "explanation": "JSON (JavaScript Object Notation) is a lightweight, human-readable data interchange format widely used for web APIs.",
    "hint": "Commonly used for REST API responses."
  },
  {
    "id": 207,
    "category": "Technology",
    "difficulty": "Hard",
    "question": "Who is recognized as the inventor of the World Wide Web and the first web browser (WorldWideWeb / Nexus)?",
    "options": [
      "Tim Berners-Lee",
      "Marc Andreessen",
      "Vint Cerf",
      "Bob Kahn"
    ],
    "correctAnswer": 0,
    "explanation": "Sir Tim Berners-Lee proposed the World Wide Web in 1989 and launched the world's first website at info.cern.ch in 1991.",
    "hint": "He also created HTML, HTTP, and URLs."
  },
  {
    "id": 208,
    "category": "Technology",
    "difficulty": "Very Hard",
    "question": "Which algorithmic complexity notation represents searching in a balanced binary search tree or performing a binary search?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n^2)"
    ],
    "correctAnswer": 2,
    "explanation": "Binary search halves the search space at every step, yielding a logarithmic time complexity of O(log n).",
    "hint": "Logarithmic time complexity."
  },
  {
    "id": 209,
    "category": "Technology",
    "difficulty": "Extreme",
    "question": "What pseudonym was used by the mysterious person or group who published the Bitcoin whitepaper in 2008?",
    "options": [
      "Satoshi Nakamoto",
      "Hal Finney",
      "Nick Szabo",
      "Wei Dai"
    ],
    "correctAnswer": 0,
    "explanation": "Satoshi Nakamoto authored 'Bitcoin: A Peer-to-Peer Electronic Cash System' in October 2008 and mined the genesis block in January 2009.",
    "hint": "The smallest unit of Bitcoin is named after this pseudonym."
  },
  {
    "id": 210,
    "category": "General Knowledge",
    "difficulty": "Medium",
    "question": "Which Indian city is known as the 'Silicon Valley of India' due to its status as the nation's leading IT exporter?",
    "options": [
      "Hyderabad",
      "Bengaluru",
      "Pune",
      "Gurugram"
    ],
    "correctAnswer": 1,
    "explanation": "Bengaluru (Bangalore) hosts headquarters for Infosys, Wipro, ISRO, and thousands of tech startups.",
    "hint": "Capital of Karnataka."
  },
  {
    "id": 211,
    "category": "Sports",
    "difficulty": "Medium",
    "question": "Which country won the inaugural ICC Men's T20 World Cup in 2007?",
    "options": [
      "Pakistan",
      "Australia",
      "India",
      "West Indies"
    ],
    "correctAnswer": 2,
    "explanation": "India, captained by MS Dhoni, defeated Pakistan by 5 runs in an unforgettable final in Johannesburg in September 2007.",
    "hint": "Joginder Sharma bowled the dramatic final over to Misbah-ul-Haq."
  },
  {
    "id": 212,
    "category": "Science",
    "difficulty": "Medium",
    "question": "What is the primary function of red blood cells in the human body?",
    "options": [
      "Fighting bacteria",
      "Clotting blood",
      "Carrying oxygen to tissues",
      "Producing antibodies"
    ],
    "correctAnswer": 2,
    "explanation": "Red blood cells (erythrocytes) contain hemoglobin, an iron-rich protein that binds and delivers oxygen to body cells.",
    "hint": "They contain hemoglobin."
  },
  {
    "id": 213,
    "category": "History & Geography",
    "difficulty": "Medium",
    "question": "Which ancient monument in India is celebrated as the tallest brick minaret in the world?",
    "options": [
      "Charminar",
      "Qutub Minar",
      "Chand Minar",
      "Jhulta Minar"
    ],
    "correctAnswer": 1,
    "explanation": "Qutub Minar in Mehrauli, Delhi stands 72.5 meters tall, commenced by Qutb-ud-din Aibak in 1199 CE.",
    "hint": "Located in Mehrauli, South Delhi."
  },
  {
    "id": 214,
    "category": "Ramayana",
    "difficulty": "Medium",
    "question": "What was the name of Ravana's giant brother who slept for six months at a time?",
    "options": [
      "Kumbhakarna",
      "Maricha",
      "Khara",
      "Dushana"
    ],
    "correctAnswer": 0,
    "explanation": "Kumbhakarna was tricked by Goddess Saraswati into asking for 'Nidravatvam' (sleep) instead of 'Nirdevatvam' from Lord Brahma.",
    "hint": "Awakened with great difficulty to fight Rama's army."
  },
  {
    "id": 215,
    "category": "Mahabharata",
    "difficulty": "Medium",
    "question": "Who was the mother of the Pandava princes Nakula and Sahadeva?",
    "options": [
      "Kunti",
      "Madri",
      "Gandhari",
      "Subhadra"
    ],
    "correctAnswer": 1,
    "explanation": "Princess Madri of Madra invoked the divine twin physicians Ashvini Kumaras to bear Nakula and Sahadeva.",
    "hint": "She was King Pandu's second wife."
  },
  {
    "id": 216,
    "category": "Technology",
    "difficulty": "Medium",
    "question": "Which company developed the popular relational database management system 'MySQL' before acquisition by Sun and Oracle?",
    "options": [
      "MySQL AB",
      "Microsoft",
      "SAP",
      "Sybase"
    ],
    "correctAnswer": 0,
    "explanation": "Swedish company MySQL AB created MySQL in 1995, founded by David Axmark, Allan Larsson, and Michael 'Monty' Widenius.",
    "hint": "A Swedish company whose name matches the database software."
  },
  {
    "id": 217,
    "category": "Entertainment",
    "difficulty": "Medium",
    "question": "Which Indian film became the highest-grossing Indian film of all time worldwide, surpassing 2,000 crore rupees?",
    "options": [
      "Baahubali 2",
      "Dangal",
      "K.G.F: Chapter 2",
      "Jawan"
    ],
    "correctAnswer": 1,
    "explanation": "Nitesh Tiwari's 'Dangal' (2016), starring Aamir Khan as Mahavir Singh Phogat, earned over ₹2,000 crore globally.",
    "hint": "Based on the true story of wrestler sisters Geeta and Babita Phogat."
  },
  {
    "id": 218,
    "category": "General Knowledge",
    "difficulty": "Hard",
    "question": "What is the highest civilian award conferred in the United States?",
    "options": [
      "Congressional Gold Medal",
      "Presidential Medal of Freedom",
      "Distinguished Service Cross",
      "Legion of Merit"
    ],
    "correctAnswer": 1,
    "explanation": "The Presidential Medal of Freedom is the highest civilian decoration in the US, established by President John F. Kennedy.",
    "hint": "Conferred directly by the US President for meritorious contributions."
  },
  {
    "id": 219,
    "category": "Sports",
    "difficulty": "Hard",
    "question": "Who was the only Formula 1 driver to have won 7 World Drivers' Championships alongside Michael Schumacher?",
    "options": [
      "Sebastian Vettel",
      "Lewis Hamilton",
      "Max Verstappen",
      "Ayrton Senna"
    ],
    "correctAnswer": 1,
    "explanation": "Sir Lewis Hamilton of Great Britain has won 7 World Drivers' Championships and holds the all-time record for pole positions and race wins.",
    "hint": "British driver who drove for McLaren and Mercedes."
  },
  {
    "id": 220,
    "category": "Science",
    "difficulty": "Hard",
    "question": "What is the chemical formula for Ozone gas present in the stratosphere?",
    "options": [
      "O2",
      "O3",
      "O4",
      "H2O2"
    ],
    "correctAnswer": 1,
    "explanation": "Ozone is a triatomic molecule consisting of three oxygen atoms (O3) that absorbs harmful ultraviolet rays.",
    "hint": "Composed of three bonded oxygen atoms."
  },
  {
    "id": 221,
    "category": "History & Geography",
    "difficulty": "Hard",
    "question": "Which sea is the saltiest body of water in the world, in which humans can float effortlessly?",
    "options": [
      "Red Sea",
      "Dead Sea",
      "Caspian Sea",
      "Baltic Sea"
    ],
    "correctAnswer": 1,
    "explanation": "The Dead Sea, bordered by Jordan and Israel, has a salinity of approximately 34%, making it nearly 10 times saltier than the ocean.",
    "hint": "Its name reflects that no fish or plants can survive in its hyper-saline waters."
  },
  {
    "id": 222,
    "category": "Ramayana",
    "difficulty": "Hard",
    "question": "Who was the king of the Nishadas and a beloved childhood friend of Rama who helped him cross the sacred Ganga?",
    "options": [
      "Guha",
      "Kevat",
      "Sugriva",
      "Jambavan"
    ],
    "correctAnswer": 0,
    "explanation": "King Guha of the Nishada forest tribe welcomed Rama, Sita, and Lakshmana at Sringaverapura with deep devotion.",
    "hint": "He was chieftain of Sringaverapura on the banks of Ganga."
  },
  {
    "id": 223,
    "category": "Mahabharata",
    "difficulty": "Hard",
    "question": "What was the name of the majestic white celestial elephant that served as the mount of King Indra?",
    "options": [
      "Airavata",
      "Uchchaihshravas",
      "Parijata",
      "Gajaraja"
    ],
    "correctAnswer": 0,
    "explanation": "Airavata emerged during the Churning of the Ocean (Samudra Manthan) and became the divine mount of Indra.",
    "hint": "He has multiple tusks and heads."
  },
  {
    "id": 224,
    "category": "Technology",
    "difficulty": "Hard",
    "question": "What does 'API' stand for in computer software development?",
    "options": [
      "Application Programming Interface",
      "Automated Program Integration",
      "Advanced Processing Instrument",
      "App Protocol Instruction"
    ],
    "correctAnswer": 0,
    "explanation": "An API (Application Programming Interface) enables distinct software applications to communicate and exchange data.",
    "hint": "A bridge between different software components."
  },
  {
    "id": 225,
    "category": "Entertainment",
    "difficulty": "Hard",
    "question": "Which acclaimed Indian director directed the classic trilogy 'Pather Panchali', 'Aparajito', and 'Apur Sansar'?",
    "options": [
      "Ritwik Ghatak",
      "Satyajit Ray",
      "Mrinal Sen",
      "Bimal Roy"
    ],
    "correctAnswer": 1,
    "explanation": "Satyajit Ray's Apu Trilogy won major international accolades, including at Cannes, establishing Indian parallel cinema globally.",
    "hint": "Recipient of the Bharat Ratna and an Honorary Oscar."
  },
  {
    "category": "Indian Culture",
    "difficulty": "Easy",
    "question": "Which classical dance form originated in the state of Tamil Nadu?",
    "options": [
      "Kathak",
      "Bharatanatyam",
      "Kathakali",
      "Manipuri"
    ],
    "correctAnswer": 1,
    "explanation": "Bharatanatyam is one of the oldest classical dance traditions of India, originating in the Hindu temples of Tamil Nadu.",
    "hint": "Its name combines Bhava, Raga, and Tala with Natyam.",
    "id": 226
  },
  {
    "category": "Indian Culture",
    "difficulty": "Easy",
    "question": "Which sacred river is worshipped as the mother goddess 'Ganga Maa' in Indian culture?",
    "options": [
      "Yamuna",
      "Godavari",
      "Ganges (Ganga)",
      "Narmada"
    ],
    "correctAnswer": 2,
    "explanation": "The Ganges is personified as the goddess Ganga and is considered the holiest river in Hinduism.",
    "hint": "It originates from the Gangotri Glacier in the Himalayas.",
    "id": 227
  },
  {
    "category": "Indian Culture",
    "difficulty": "Easy",
    "question": "Which festival is celebrated across India with colors, water balloons, and gulal powders?",
    "options": [
      "Diwali",
      "Holi",
      "Navratri",
      "Dussehra"
    ],
    "correctAnswer": 1,
    "explanation": "Holi, known as the Festival of Colors, marks the arrival of spring and the triumph of good over evil.",
    "hint": "Associated with the legend of Prahlad and Holika.",
    "id": 228
  },
  {
    "category": "Indian Culture",
    "difficulty": "Medium",
    "question": "Which classical dance form from Kerala is famous for its elaborate facial makeup and towering headgear?",
    "options": [
      "Mohiniyattam",
      "Kathakali",
      "Odissi",
      "Kuchipudi"
    ],
    "correctAnswer": 1,
    "explanation": "Kathakali is a major form of classical Indian dance drama distinguished by vibrant facial makeup (vesham) and grand headgear.",
    "hint": "Its name literally means 'story play'.",
    "id": 229
  },
  {
    "category": "Indian Culture",
    "difficulty": "Medium",
    "question": "Which monument in Odisha is designed in the shape of a colossal chariot dedicated to the Sun God?",
    "options": [
      "Jagannath Temple",
      "Konark Sun Temple",
      "Lingaraj Temple",
      "Mukteshwar Temple"
    ],
    "correctAnswer": 1,
    "explanation": "The Konark Sun Temple, built in the 13th century by King Narasimhadeva I, features 24 intricately carved stone wheels pulled by seven horses.",
    "hint": "It is also known as the 'Black Pagoda'.",
    "id": 230
  },
  {
    "category": "Indian Culture",
    "difficulty": "Medium",
    "question": "How many principal Vedas are there in ancient Indian Vedic literature?",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "The four sacred Vedas are the Rigveda, Samaveda, Yajurveda, and Atharvaveda.",
    "hint": "Rig, Sama, Yajur, and Atharva.",
    "id": 231
  },
  {
    "category": "Indian Culture",
    "difficulty": "Hard",
    "question": "Which ancient treatise on the performing arts—encompassing theater, dance, and music—was authored by Sage Bharata Muni?",
    "options": [
      "Natyashastra",
      "Abhinaya Darpana",
      "Sangita Ratnakara",
      "Brihaddeshi"
    ],
    "correctAnswer": 0,
    "explanation": "The Natyashastra is the foundational Sanskrit text on performing arts, setting down the theory of the eight primary Rasas.",
    "hint": "It outlines the foundational theory of dramatic aesthetics and Rasa.",
    "id": 232
  },
  {
    "category": "Indian Culture",
    "difficulty": "Hard",
    "question": "In which city is the world-renowned Meenakshi Amman Temple located?",
    "options": [
      "Thanjavur",
      "Madurai",
      "Kanchipuram",
      "Rameswaram"
    ],
    "correctAnswer": 1,
    "explanation": "The Meenakshi Amman Temple, dedicated to Goddess Meenakshi (Parvati) and Sundareswarar (Shiva), is in the historic city of Madurai on the Vaigai River.",
    "hint": "Known as the 'Athens of the East' and the temple city of Tamil Nadu.",
    "id": 233
  },
  {
    "category": "Indian Culture",
    "difficulty": "Hard",
    "question": "Which sacred harvest festival celebrated in Tamil Nadu involves boiling fresh milk and rice in an earthen pot until it overflows?",
    "options": [
      "Onam",
      "Pongal",
      "Bihu",
      "Baisakhi"
    ],
    "correctAnswer": 1,
    "explanation": "Pongal is a four-day thanksgiving festival in Tamil Nadu where the overflowing pot symbolizes prosperity and abundance.",
    "hint": "Celebrated in mid-January, coinciding with Makar Sankranti.",
    "id": 234
  },
  {
    "category": "Indian Culture",
    "difficulty": "Very Hard",
    "question": "The Brihadisvara Temple at Thanjavur, an architectural wonder with an 80-tonne monolithic granite cupola, was built by which emperor?",
    "options": [
      "Raja Raja Chola I",
      "Rajendra Chola I",
      "Karikala Chola",
      "Narasimhavarman I"
    ],
    "correctAnswer": 0,
    "explanation": "Emperor Raja Raja Chola I completed the grand Brihadisvara Temple in 1010 CE, a UNESCO World Heritage Great Living Chola Temple.",
    "hint": "He was the supreme Chola monarch who also codified the Thirumurai.",
    "id": 235
  },
  {
    "category": "Indian Culture",
    "difficulty": "Very Hard",
    "question": "Which school of classical Indian music originated in Northern India and features Gharanas like Gwalior, Agra, and Kirana?",
    "options": [
      "Carnatic music",
      "Hindustani classical music",
      "Sopana Sangeetham",
      "Baul music"
    ],
    "correctAnswer": 1,
    "explanation": "Hindustani classical music developed in Northern India, enriched by Persian cultural interactions and structured into distinct Gharana lineages.",
    "hint": "Contrasted with the southern Carnatic tradition.",
    "id": 236
  },
  {
    "category": "Indian Culture",
    "difficulty": "Very Hard",
    "question": "Which Upanishad is the shortest of all classical Upanishads, containing only 12 verses yet summarizing the four states of consciousness (Om)?",
    "options": [
      "Katha Upanishad",
      "Mandukya Upanishad",
      "Chandogya Upanishad",
      "Brihadaranyaka Upanishad"
    ],
    "correctAnswer": 1,
    "explanation": "The Mandukya Upanishad discusses the sacred syllable OM and the four states of consciousness: waking, dreaming, deep sleep, and Turiya.",
    "hint": "Gaudapada wrote a famous Karika commentary on it.",
    "id": 237
  },
  {
    "category": "Indian Culture",
    "difficulty": "Extreme",
    "question": "Which ancient rock-cut monolithic temple in Cave 16 of Ellora Caves was carved top-down from a single basalt cliff face?",
    "options": [
      "Kailash Temple",
      "Dashavatara Temple",
      "Elephanta Main Cave",
      "Badami Cave 3"
    ],
    "correctAnswer": 0,
    "explanation": "The Kailash Temple (Cave 16 at Ellora) was carved out of 200,000 tonnes of basalt rock from top to bottom under Rashtrakuta King Krishna I.",
    "hint": "Dedicated to Lord Shiva and named after his celestial Himalayan abode.",
    "id": 238
  },
  {
    "category": "Indian Culture",
    "difficulty": "Extreme",
    "question": "From which ancient Sanskrit text does the national motto of India, 'Satyameva Jayate' (Truth Alone Triumphs), originate?",
    "options": [
      "Rigveda",
      "Mundaka Upanishad",
      "Bhagavad Gita",
      "Manusmriti"
    ],
    "correctAnswer": 1,
    "explanation": "'Satyameva Jayate' is an aphorism from Mantra 3.1.6 of the Mundaka Upanishad, adopted as national motto on 26 January 1950.",
    "hint": "It is an Upanishad associated with the Atharvaveda.",
    "id": 239
  },
  {
    "category": "Indian Culture",
    "difficulty": "Extreme",
    "question": "In Carnatic classical music, how many primary parent scales (Melakarta ragas) exist in the foundational 72-Melakarta system formalized by Venkatamakhin?",
    "options": [
      "36",
      "48",
      "72",
      "108"
    ],
    "correctAnswer": 2,
    "explanation": "Venkatamakhin's Chaturdandi Prakasika organized all 72 Melakarta parent ragas into 12 Chakras of 6 ragas each.",
    "hint": "Twelve chakras of six ragas each.",
    "id": 240
  },
  {
    "category": "Entertainment",
    "difficulty": "Medium",
    "question": "Who composed the iconic soundtrack of the film 'Dilwale Dulhania Le Jayenge' (1995)?",
    "options": [
      "Nadeem-Shravan",
      "Jatin-Lalit",
      "Anand-Milind",
      "Anu Malik"
    ],
    "correctAnswer": 1,
    "explanation": "Brother duo Jatin-Lalit composed timeless romantic tracks like 'Tujhe Dekha Toh', 'Mehndi Laga Ke Rakhna', and 'Ruk Ja O Dil Deewane'.",
    "hint": "A famous brother composer duo of the 1990s.",
    "id": 241
  },
  {
    "category": "Entertainment",
    "difficulty": "Hard",
    "question": "Who was the legendary playback singer who sang 'O Mere Dil Ke Chain' and 'Roop Tera Mastana' and was also an accomplished comic actor?",
    "options": [
      "Mohammed Rafi",
      "Kishore Kumar",
      "Mukesh",
      "Manna Dey"
    ],
    "correctAnswer": 1,
    "explanation": "Kishore Kumar was a versatile genius—singer, actor, composer, and director—who won 8 Filmfare Awards for Best Male Playback Singer.",
    "hint": "He was the younger brother of actor Ashok Kumar.",
    "id": 242
  },
  {
    "category": "Entertainment",
    "difficulty": "Hard",
    "question": "Which film won the Best Picture award at the 92nd Academy Awards (2020), becoming the first non-English language film to win Best Picture?",
    "options": [
      "Parasite",
      "Roma",
      "1917",
      "Life is Beautiful"
    ],
    "correctAnswer": 0,
    "explanation": "Bong Joon-ho's South Korean masterpiece 'Parasite' made cinema history by winning Best Picture, Best Director, and Best Original Screenplay.",
    "hint": "A darkly comedic South Korean thriller directed by Bong Joon-ho.",
    "id": 243
  },
  {
    "category": "Entertainment",
    "difficulty": "Very Hard",
    "question": "Who was the legendary cinematographer who shot Guru Dutt's classics 'Pyaasa' and 'Kaagaz Ke Phool', pioneering brilliant black-and-white lighting?",
    "options": [
      "V.K. Murthy",
      "Subrata Mitra",
      "K.K. Mahajan",
      "Ashok Mehta"
    ],
    "correctAnswer": 0,
    "explanation": "V.K. Murthy was awarded the Dadasaheb Phalke Award for his masterly camera work and poetic lighting in Guru Dutt's films.",
    "hint": "He was the first cinematographer to receive the Dadasaheb Phalke Award.",
    "id": 244
  },
  {
    "category": "Entertainment",
    "difficulty": "Very Hard",
    "question": "In the film 'Sholay' (1975), which village served as the setting terrorized by Gabbar Singh?",
    "options": [
      "Ramgarh",
      "Sundarnagar",
      "Champaner",
      "Lalpur"
    ],
    "correctAnswer": 0,
    "explanation": "The village defended by Veeru and Jai under the guidance of Thakur Baldev Singh was Ramgarh, shot on location near Ramanagara, Karnataka.",
    "hint": "Thakur was the retired police officer of this village.",
    "id": 245
  },
  {
    "category": "Entertainment",
    "difficulty": "Extreme",
    "question": "Which acclaimed Hindi writer and poet wrote the legendary song 'Kar Chale Hum Fida Jan-o-Tan Sathiyon' for the 1964 war film 'Haqeeqat'?",
    "options": [
      "Kaifi Azmi",
      "Sahir Ludhianvi",
      "Shakeel Badayuni",
      "Shailendra"
    ],
    "correctAnswer": 0,
    "explanation": "Kaifi Azmi wrote the deeply moving patriotic poem set to music by Madan Mohan and sung by Mohammed Rafi.",
    "hint": "He is the father of acclaimed actress Shabana Azmi.",
    "id": 246
  },
  {
    "category": "Sports",
    "difficulty": "Medium",
    "question": "Which nation has won the most FIFA Men's World Cup titles in soccer history (5 titles)?",
    "options": [
      "Germany",
      "Italy",
      "Brazil",
      "Argentina"
    ],
    "correctAnswer": 2,
    "explanation": "Brazil has won the World Cup five times: 1958, 1962, 1970, 1994, and 2002.",
    "hint": "The Seleção wears yellow and green.",
    "id": 247
  },
  {
    "category": "Sports",
    "difficulty": "Hard",
    "question": "Who was the captain of the Indian cricket team when they won the 1983 Cricket World Cup at Lord's?",
    "options": [
      "Sunil Gavaskar",
      "Kapil Dev",
      "Mohinder Amarnath",
      "Ravi Shastri"
    ],
    "correctAnswer": 1,
    "explanation": "Kapil Dev led underdog India to beat the mighty two-time defending champions West Indies at Lord's on 25 June 1983.",
    "hint": "Nicknamed the 'Haryana Hurricane'.",
    "id": 248
  },
  {
    "category": "Sports",
    "difficulty": "Very Hard",
    "question": "Who was the first Indian woman wrestler to win an Olympic medal (Bronze at Rio 2016)?",
    "options": [
      "Geeta Phogat",
      "Babita Kumari",
      "Sakshi Malik",
      "Vinesh Phogat"
    ],
    "correctAnswer": 2,
    "explanation": "Sakshi Malik won the bronze medal in the 58 kg freestyle wrestling category at the 2016 Rio Summer Olympics.",
    "hint": "She hails from Rohtak, Haryana.",
    "id": 249
  },
  {
    "category": "Sports",
    "difficulty": "Very Hard",
    "question": "Which legendary cricket player holds the highest career batting average in Test cricket history (99.94)?",
    "options": [
      "Sir Don Bradman",
      "Wally Hammond",
      "Herbert Sutcliffe",
      "Ken Barrington"
    ],
    "correctAnswer": 0,
    "explanation": "Sir Donald Bradman of Australia scored 6,996 runs in 52 Tests with 29 centuries and an unmatched average of 99.94.",
    "hint": "He was bowled for a duck in his final Test innings, falling just 4 runs short of a 100 average.",
    "id": 250
  },
  {
    "category": "Sports",
    "difficulty": "Extreme",
    "question": "In the 1936 Berlin Olympics final, by what scoreline did the Indian Men's Hockey team led by Dhyan Chand defeat host nation Germany to claim gold?",
    "options": [
      "8 - 1",
      "5 - 0",
      "3 - 1",
      "6 - 2"
    ],
    "correctAnswer": 0,
    "explanation": "India defeated Germany 8-1 in the final on 15 August 1936 in front of Adolf Hitler, with Dhyan Chand scoring three goals.",
    "hint": "India scored eight goals and Germany scored only one.",
    "id": 251
  },
  {
    "category": "Science",
    "difficulty": "Medium",
    "question": "Which atmospheric layer contains the protective ozone layer that filters solar ultraviolet radiation?",
    "options": [
      "Troposphere",
      "Stratosphere",
      "Mesosphere",
      "Thermosphere"
    ],
    "correctAnswer": 1,
    "explanation": "The Stratosphere, located roughly between 10 km and 50 km above Earth, contains the highest concentration of ozone.",
    "hint": "It lies immediately above the troposphere where commercial jets fly.",
    "id": 252
  },
  {
    "category": "Science",
    "difficulty": "Hard",
    "question": "Who formulated the Law of Universal Gravitation and the three Laws of Motion in his 1687 book 'Principia Mathematica'?",
    "options": [
      "Galileo Galilei",
      "Sir Isaac Newton",
      "Johannes Kepler",
      "René Descartes"
    ],
    "correctAnswer": 1,
    "explanation": "Sir Isaac Newton published his landmark 'Philosophiae Naturalis Principia Mathematica' laying the foundation of classical mechanics.",
    "hint": "The SI unit of force is named in his honor.",
    "id": 253
  },
  {
    "category": "Science",
    "difficulty": "Very Hard",
    "question": "What is the name of the cellular organelle responsible for protein synthesis by translating messenger RNA?",
    "options": [
      "Lysosome",
      "Golgi apparatus",
      "Ribosome",
      "Peroxisome"
    ],
    "correctAnswer": 2,
    "explanation": "Ribosomes read RNA sequences and assemble amino acids into polypeptide chains to synthesize proteins.",
    "hint": "Venkatraman Ramakrishnan won the 2009 Nobel Prize in Chemistry for mapping its atomic structure.",
    "id": 254
  },
  {
    "category": "Science",
    "difficulty": "Very Hard",
    "question": "Which space telescope, launched on Christmas Day 2021 as the successor to Hubble, orbits the Sun at the second Lagrange point (L2)?",
    "options": [
      "James Webb Space Telescope",
      "Spitzer Space Telescope",
      "Nancy Grace Roman Telescope",
      "Kepler Observatory"
    ],
    "correctAnswer": 0,
    "explanation": "The James Webb Space Telescope (JWST) uses a 6.5-meter gold-coated beryllium mirror to observe high-redshift early cosmic structures in infrared.",
    "hint": "Known as JWST.",
    "id": 255
  },
  {
    "category": "Science",
    "difficulty": "Extreme",
    "question": "What is the half-life of Carbon-14, the radioactive isotope universally employed in archaeological radiocarbon dating?",
    "options": [
      "1,200 years",
      "5,730 years",
      "14,200 years",
      "24,100 years"
    ],
    "correctAnswer": 1,
    "explanation": "Carbon-14 decays into Nitrogen-14 through beta decay with a half-life of 5,730 ± 40 years, enabling dating of organic artifacts up to 50,000 years old.",
    "hint": "A little over 5,700 years.",
    "id": 256
  },
  {
    "category": "Science",
    "difficulty": "Extreme",
    "question": "Which physical constant, symbolized by 'h' with a value of approximately 6.626 x 10^-34 J·s, relates the energy of a photon to its frequency?",
    "options": [
      "Boltzmann constant",
      "Planck's constant",
      "Rydberg constant",
      "Avogadro's number"
    ],
    "correctAnswer": 1,
    "explanation": "Planck's constant (h) was introduced in 1900 by Max Planck in his black-body radiation formula, initiating quantum mechanics.",
    "hint": "Formulated by the German physicist Max Planck.",
    "id": 257
  },
  {
    "category": "History & Geography",
    "difficulty": "Medium",
    "question": "Which is the highest waterfall in the world, dropping uninterrupted for 979 meters (3,212 feet) in Venezuela?",
    "options": [
      "Niagara Falls",
      "Angel Falls",
      "Victoria Falls",
      "Tugela Falls"
    ],
    "correctAnswer": 1,
    "explanation": "Angel Falls (Salto Ángel) drops over the edge of Auyán-tepui mountain in Canaima National Park, Venezuela.",
    "hint": "Named after US aviator Jimmie Angel who flew over it.",
    "id": 258
  },
  {
    "category": "History & Geography",
    "difficulty": "Hard",
    "question": "Who was the viceroy of British India when the Partition of Bengal took place in 1905?",
    "options": [
      "Lord Curzon",
      "Lord Dalhousie",
      "Lord Ripon",
      "Lord Mountbatten"
    ],
    "correctAnswer": 0,
    "explanation": "Lord Curzon partitioned Bengal in 1905, triggering the widespread Swadeshi movement and boycott of British goods.",
    "hint": "He also oversaw the construction of the Victoria Memorial in Kolkata.",
    "id": 259
  },
  {
    "category": "History & Geography",
    "difficulty": "Very Hard",
    "question": "Which sea is connected to the Red Sea via the Bab-el-Mandeb strait?",
    "options": [
      "Gulf of Aden",
      "Persian Gulf",
      "Arabian Sea",
      "Gulf of Oman"
    ],
    "correctAnswer": 0,
    "explanation": "The Bab-el-Mandeb strait links the southern Red Sea directly with the Gulf of Aden.",
    "hint": "Its name translates to 'Gate of Tears' in Arabic.",
    "id": 260
  },
  {
    "category": "History & Geography",
    "difficulty": "Very Hard",
    "question": "Which famous battle in 1576 was fought between the Mughal forces led by Raja Man Singh I and Maharana Pratap of Mewar?",
    "options": [
      "Battle of Haldighati",
      "Battle of Khanwa",
      "Battle of Panipat",
      "Battle of Samugarh"
    ],
    "correctAnswer": 0,
    "explanation": "The Battle of Haldighati on 18 June 1576 was a fierce mountain-pass clash in Rajasthan immortalized by Maharana Pratap and his loyal warhorse Chetak.",
    "hint": "Named after the yellow turmeric-colored soil of the pass.",
    "id": 261
  },
  {
    "category": "History & Geography",
    "difficulty": "Extreme",
    "question": "Which ancient Mesopotamian ruler compiled one of the earliest and most complete written legal codes, inscribed on a diorite stele around 1750 BCE?",
    "options": [
      "Sargon of Akkad",
      "King Hammurabi",
      "Ashurbanipal",
      "Nebuchadnezzar II"
    ],
    "correctAnswer": 1,
    "explanation": "The Code of Hammurabi of Babylon established 282 edicts including the famous 'eye for an eye' lex talionis doctrine.",
    "hint": "Babylonian king whose code is preserved in the Louvre Museum.",
    "id": 262
  },
  {
    "category": "History & Geography",
    "difficulty": "Extreme",
    "question": "Which is the only sea on Earth that has no land boundary or coastline, defined entirely by ocean currents in the Atlantic Ocean?",
    "options": [
      "Sargasso Sea",
      "Bering Sea",
      "Coral Sea",
      "Weddell Sea"
    ],
    "correctAnswer": 0,
    "explanation": "The Sargasso Sea in the North Atlantic is bounded by four ocean currents (Gulf Stream, North Atlantic Current, Canary Current, and North Atlantic Equatorial Current).",
    "hint": "Named after the free-floating Sargassum seaweed that thrives there.",
    "id": 263
  },
  {
    "category": "Ramayana",
    "difficulty": "Medium",
    "question": "What was the name of the magical forest where Lord Rama lived for ten years during his exile?",
    "options": [
      "Dandakaranya",
      "Naimisharanya",
      "Kamyaka forest",
      "Madhuvana"
    ],
    "correctAnswer": 0,
    "explanation": "Dandakaranya was the dense, vast forest where Rama, Sita, and Lakshmana spent a major portion of their 14-year exile visiting various hermitages.",
    "hint": "It covered regions of modern-day Chhattisgarh, Odisha, and Maharashtra.",
    "id": 264
  },
  {
    "category": "Ramayana",
    "difficulty": "Hard",
    "question": "Who was the revered boatman who washed Lord Rama's feet before ferrying him across the sacred Ganga River?",
    "options": [
      "Kevat",
      "Guha",
      "Shabari",
      "Nishada"
    ],
    "correctAnswer": 0,
    "explanation": "Kevat, a devoted boatman, lovingly washed Rama's feet saying he wanted to cleanse any dust that could turn his wooden boat into a woman, referencing Ahalya's redemption.",
    "hint": "He ferried Rama, Sita, and Lakshmana across the Ganga.",
    "id": 265
  },
  {
    "category": "Ramayana",
    "difficulty": "Very Hard",
    "question": "Who was the wise elderly bear king in Sugriva's Vanara army who reminded Hanuman of his latent divine powers when facing the vast ocean?",
    "options": [
      "Jambavan",
      "Angada",
      "Mainda",
      "Dwivida"
    ],
    "correctAnswer": 0,
    "explanation": "King Jambavan, who was blessed with immense longevity by Lord Brahma, awakened Hanuman's memory of his supernatural strength on the seashore.",
    "hint": "He was the oldest and wisest councillor in Sugriva's army.",
    "id": 266
  },
  {
    "category": "Ramayana",
    "difficulty": "Extreme",
    "question": "Which divine astras did Sage Vishwamitra bestow upon Lord Rama after the slaying of the demoness Tataka?",
    "options": [
      "Brahmashira and Danda astras",
      "Over 100 celestial astras including Dandachakra and Kalachakra",
      "Only the Pashupatastra",
      "Only the Vaishnavastra"
    ],
    "correctAnswer": 1,
    "explanation": "Sage Vishwamitra initiated Rama in the invocation and retraction of a comprehensive arsenal of over 100 divine celestial weapons.",
    "hint": "Vishwamitra rewarded Rama with the complete lore of cosmic weapons.",
    "id": 267
  },
  {
    "category": "Mahabharata",
    "difficulty": "Medium",
    "question": "Which divine father granted Bhima his immense physical strength equal to ten thousand elephants?",
    "options": [
      "Vayu Dev (Wind God)",
      "Indra Dev",
      "Varuna Dev",
      "Agni Dev"
    ],
    "correctAnswer": 0,
    "explanation": "Bhima was born to Queen Kunti through the grace of Vayu Dev, the Lord of the Winds.",
    "hint": "He was also the spiritual father of Lord Hanuman.",
    "id": 268
  },
  {
    "category": "Mahabharata",
    "difficulty": "Hard",
    "question": "What was the name of the miraculous architect of the Asuras who constructed the dazzling Palace of Illusions (Maya Sabha) at Indraprastha?",
    "options": [
      "Maya Danava",
      "Vishwakarma",
      "Nala",
      "Bhauma"
    ],
    "correctAnswer": 0,
    "explanation": "Maya Danava built the Maya Sabha for the Pandavas out of gratitude to Arjuna and Krishna for sparing his life during the Khandava forest fire.",
    "hint": "His magical hall fooled Duryodhana into mistaking water for marble floor.",
    "id": 269
  },
  {
    "category": "Mahabharata",
    "difficulty": "Very Hard",
    "question": "Which divine weapon of supreme destruction was discharged by Ashwatthama towards the womb of Uttara to exterminate the last Pandava lineage?",
    "options": [
      "Brahmashira Astra",
      "Narayanastra",
      "Pashupatastra",
      "Vaishnavastra"
    ],
    "correctAnswer": 0,
    "explanation": "Ashwatthama unleashed the Brahmashira Astra against unborn Parikshit in Uttara's womb, which Krishna neutralized with his Sudarshana power.",
    "hint": "He could invoke this supreme weapon but did not know how to withdraw it.",
    "id": 270
  },
  {
    "category": "Mahabharata",
    "difficulty": "Extreme",
    "question": "What was the name of the divine horse born during the Churning of the Ocean (Samudra Manthan) that became the king of all horses and Indra's mount?",
    "options": [
      "Uchchaihshravas",
      "Ashwatthama",
      "Hayagriva",
      "Turanga"
    ],
    "correctAnswer": 0,
    "explanation": "Uchchaihshravas was a radiant, snow-white seven-headed flying horse that emerged from the ocean and was claimed by Indra.",
    "hint": "A bet over the color of its tail caused Kadru to enslave Vinata.",
    "id": 271
  },
  {
    "category": "Technology",
    "difficulty": "Medium",
    "question": "Which company created the TypeScript programming language as a typed superset of JavaScript?",
    "options": [
      "Microsoft",
      "Google",
      "Facebook (Meta)",
      "Apple"
    ],
    "correctAnswer": 0,
    "explanation": "Microsoft developed TypeScript under lead architect Anders Hejlsberg and released it as open source in 2012.",
    "hint": "Developed by the makers of VS Code and Windows.",
    "id": 272
  },
  {
    "category": "Technology",
    "difficulty": "Hard",
    "question": "In Git version control, which command creates a new local branch and switches to it in a single step?",
    "options": [
      "git checkout -b <name>",
      "git branch -n <name>",
      "git switch -c <name>",
      "Both A and C"
    ],
    "correctAnswer": 3,
    "explanation": "Both 'git checkout -b' (classic) and 'git switch -c' (modern Git 2.23+) create and switch to a new branch.",
    "hint": "Both the classic checkout with -b flag and the modern switch with -c flag accomplish this.",
    "id": 273
  },
  {
    "category": "Technology",
    "difficulty": "Very Hard",
    "question": "Who created the relational database model (RDBMS) based on relational algebra while working at IBM in 1970?",
    "options": [
      "Edgar F. Codd (E.F. Codd)",
      "Larry Ellison",
      "Jim Gray",
      "Donald Chamberlin"
    ],
    "correctAnswer": 0,
    "explanation": "Dr. Edgar Frank Codd published 'A Relational Model of Data for Large Shared Data Banks', establishing modern relational databases.",
    "hint": "His surname is associated with Codd's 12 rules.",
    "id": 274
  },
  {
    "category": "Technology",
    "difficulty": "Extreme",
    "question": "Which computer scientist proved the Halting Problem to be undecidable in 1936, establishing the theoretical boundaries of computation?",
    "options": [
      "Alan Turing",
      "Alonzo Church",
      "Kurt Gödel",
      "John von Neumann"
    ],
    "correctAnswer": 0,
    "explanation": "Alan Turing proved that no general algorithm can determine whether an arbitrary computer program will finish running or run forever.",
    "hint": "He also designed the Turing machine model.",
    "id": 275
  },
  {
    "category": "Technology",
    "difficulty": "Extreme",
    "question": "What is the name of the consensus algorithm introduced by Leslie Lamport in 1989 for state machine replication in asynchronous distributed systems?",
    "options": [
      "Paxos",
      "Raft",
      "Zab",
      "Byzantine Fault Tolerance"
    ],
    "correctAnswer": 0,
    "explanation": "Leslie Lamport formulated the Paxos algorithm, named whimsically after an imaginary parliamentary consensus system on the Greek island of Paxos.",
    "hint": "Named after a Greek island parliament.",
    "id": 276
  },
  {
    "category": "General Knowledge",
    "difficulty": "Hard",
    "question": "Under which Article of the Indian Constitution can the President proclaim a Financial Emergency?",
    "options": [
      "Article 352",
      "Article 356",
      "Article 360",
      "Article 368"
    ],
    "correctAnswer": 2,
    "explanation": "Article 360 empowers the President to declare a financial emergency if the financial stability or credit of India is threatened.",
    "hint": "Article 352 is National Emergency, Article 356 is President's Rule; this is three-sixty.",
    "id": 277
  },
  {
    "category": "General Knowledge",
    "difficulty": "Very Hard",
    "question": "Who was the first recipient of the prestigious Jnanpith Award, India's highest literary honour, in 1965?",
    "options": [
      "G. Sankara Kurup",
      "Tarasankar Bandyopadhyay",
      "K.V. Puttappa (Kuvempu)",
      "Umashankar Joshi"
    ],
    "correctAnswer": 0,
    "explanation": "Malayalam poet G. Sankara Kurup won the inaugural Jnanpith Award in 1965 for his poetry collection 'Odakkuzhal' (The Bamboo Flute).",
    "hint": "A celebrated Malayalam poet and essayist.",
    "id": 278
  },
  {
    "category": "General Knowledge",
    "difficulty": "Extreme",
    "question": "Which archipelago nation in the Indian Ocean comprises 26 natural atolls and is the lowest-lying sovereign state on Earth?",
    "options": [
      "Maldives",
      "Seychelles",
      "Mauritius",
      "Comoros"
    ],
    "correctAnswer": 0,
    "explanation": "The Republic of Maldives has an average ground elevation of just 1.5 meters above sea level, making it the lowest country in the world.",
    "hint": "Its capital city is Malé.",
    "id": 279
  }
];

// Export to window for vanilla JS modularity
if (typeof window !== 'undefined') {
  window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
}
