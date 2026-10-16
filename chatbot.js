/* ============================================================
   chatbot.js
   Rule-based chatbot using keyword matching.
   No external API is used — all responses are built-in.
   This means the app works offline and without any API key.
   ============================================================ */

/**
 * Each entry has:
 *   keywords  – words/phrases to look for in the student's message
 *   response  – the reply shown in the chat window
 *   category  – optional tab to suggest navigating to
 */
const CHATBOT_KB = [

  /* ---- GREETINGS ---- */
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "howdy"],
    response: "Hello! Welcome to the International Student Help Desk. 😊 How can I help you today? You can ask me about admissions, visas, accommodation, campus life, or daily life.",
    category: null
  },
  {
    keywords: ["how are you", "how r u", "you okay", "you good"],
    response: "I am doing great, thank you for asking! 😄 I am here to help you with any questions about studying abroad. What would you like to know?",
    category: null
  },
  {
    keywords: ["thank", "thanks", "thank you", "thx"],
    response: "You are very welcome! 😊 Is there anything else I can help you with?",
    category: null
  },
  {
    keywords: ["bye", "goodbye", "see you", "take care"],
    response: "Goodbye! Best of luck with your studies. 🎓 Come back anytime you have questions!",
    category: null
  },

  /* ---- ADMISSIONS ---- */
  {
    keywords: ["how do i apply", "application process", "how to apply", "apply to university", "apply for university"],
    response: "Great question! The general steps are: (1) Research universities and programmes, (2) Check eligibility requirements, (3) Prepare your documents, (4) Write a Statement of Purpose, (5) Submit your application online, and (6) Accept your offer once you receive it. 📋 Check the Admissions tab for full details!",
    category: "admissions"
  },
  {
    keywords: ["what documents", "documents needed", "required documents", "documents do i need", "what do i need to apply"],
    response: "For most universities you will need: academic transcripts, a copy of your passport, English language test scores (e.g., IELTS or TOEFL), a Statement of Purpose, and two or three reference letters. Some courses also ask for a CV or portfolio. Always check the specific requirements on the university's official website. 📄",
    category: "admissions"
  },
  {
    keywords: ["offer letter", "conditional offer", "unconditional offer"],
    response: "An unconditional offer means you have met all requirements and can enrol. A conditional offer means you need to meet certain conditions first (for example, achieving a certain grade or submitting a missing document). Read your offer letter carefully and note the acceptance deadline! 📬",
    category: "admissions"
  },
  {
    keywords: ["scholarship", "financial aid", "bursary", "grant", "funding", "tuition fee"],
    response: "Many universities offer scholarships for international students, including merit-based awards, need-based grants, and government scholarships. Search the official financial aid page of each university you apply to. Also check your home country's scholarship programmes. 💰 See the Admissions tab for more details.",
    category: "admissions"
  },
  {
    keywords: ["deadline", "when to apply", "application deadline"],
    response: "Application deadlines vary by university and country. As a general rule, start your application 12–18 months before your intended start date. Always check each university's official website for their specific deadlines. 📅",
    category: "admissions"
  },
  {
    keywords: ["ielts", "toefl", "english test", "language test", "language requirement", "pte"],
    response: "Most English-speaking universities require an English language test such as IELTS, TOEFL, or PTE. The minimum required score varies by university and programme. Some universities waive this requirement if you have studied in English for several years. Check the specific entry requirements for the courses you are applying to. 📝",
    category: "admissions"
  },
  {
    keywords: ["statement of purpose", "sop", "personal statement", "why i want to study"],
    response: "A Statement of Purpose (SOP) or personal statement is a short essay explaining why you want to study your chosen programme, your academic background, and your future goals. It is an important part of your application — make it honest, clear, and specific to the programme you are applying for. ✍️",
    category: "admissions"
  },

  /* ---- VISA ---- */
  {
    keywords: ["visa", "student visa", "study visa", "apply for visa"],
    response: "Most countries require international students to have a student visa. The process generally involves: receiving your university offer, gathering documents, completing the visa application form online, paying the fee, and attending a biometric appointment if needed. 🛂 Check the Visa Guidance tab for full step-by-step information.",
    category: "visa"
  },
  {
    keywords: ["visa documents", "visa requirements", "what do i need for a visa"],
    response: "Typical documents for a student visa include: a valid passport, your university acceptance letter, a Confirmation of Enrolment (CAS/I-20/CoE), proof of funds, passport photos, and the application fee. Requirements vary by country — always check the official immigration website. 📋",
    category: "visa"
  },
  {
    keywords: ["how long does visa take", "visa processing", "visa time", "visa processing time"],
    response: "Visa processing times vary by country and time of year — it can range from a few days to several weeks. Apply as early as possible and check the official immigration website of your destination country for current estimates. ⏳",
    category: "visa"
  },
  {
    keywords: ["visa refused", "visa rejection", "visa denied", "visa rejected"],
    response: "If your visa is refused, you will usually receive a letter explaining the reason. You may be able to reapply after addressing the issue, or appeal the decision. Contact your university's international student office for guidance — they have experience with this. 💪",
    category: "visa"
  },
  {
    keywords: ["visa conditions", "visa rules", "work on student visa", "work hours", "can i work"],
    response: "Student visas usually come with conditions, including limits on how many hours you can work per week during term time. Working more hours than permitted is illegal and can result in visa cancellation. Always read your visa conditions carefully before starting any job. ⚠️",
    category: "visa"
  },
  {
    keywords: ["extend visa", "renew visa", "visa extension", "visa expiry"],
    response: "If your course is longer than your visa allows, you may need to extend it. Contact your university's international student office well before your visa expires — they can guide you through the process for your specific host country. 🗓️",
    category: "visa"
  },
  {
    keywords: ["bring family", "dependant visa", "family visa", "spouse visa", "children visa"],
    response: "Some countries allow student visa holders to bring dependants (spouse or children). This depends on the country, your course level, and your finances. Check the official immigration rules for your specific situation. 👨‍👩‍👧",
    category: "visa"
  },

  /* ---- ACCOMMODATION ---- */
  {
    keywords: ["accommodation", "housing", "where to stay", "place to live", "where can i live"],
    response: "You have several options: (1) On-campus halls of residence — convenient and great for meeting people, (2) Private student halls — purpose-built off-campus housing, (3) Shared house or flat with other students, (4) Homestay with a local family. 🏠 Check the Accommodation tab for full details!",
    category: "accommodation"
  },
  {
    keywords: ["on campus", "university accommodation", "dorm", "dormitory", "halls of residence", "hall"],
    response: "University halls of residence are a popular choice for new international students. They are usually furnished, include bills and internet, and have on-site support staff. Apply via the university's accommodation portal as soon as you accept your offer — spaces fill up fast! 🏠",
    category: "accommodation"
  },
  {
    keywords: ["off campus", "private accommodation", "rent a flat", "rent a room", "shared house", "flatmate"],
    response: "Off-campus options include private student halls, shared houses, and studio apartments. Before signing any agreement, inspect the property (or ask for a video tour), verify the landlord's identity, and read the tenancy agreement carefully. 🔍",
    category: "accommodation"
  },
  {
    keywords: ["deposit", "security deposit", "holding deposit"],
    response: "University halls may ask for a small holding deposit. Private rentals usually require a security deposit of one to two months' rent. Always get a receipt, understand the refund conditions, and keep copies of all correspondence. 💷",
    category: "accommodation"
  },
  {
    keywords: ["temporary accommodation", "arrive early", "where to stay when i first arrive", "first night"],
    response: "If you arrive before your permanent accommodation is ready, consider: university guest rooms (check availability first), budget hotels or hostels near campus, or an Airbnb short-term rental. Book in advance so you have a confirmed place to go straight from the airport. ✈️",
    category: "accommodation"
  },

  /* ---- CAMPUS LIFE ---- */
  {
    keywords: ["campus", "campus life", "university facilities", "what is on campus"],
    response: "Your campus likely has: an international student office, library and study spaces, student clubs and societies, health and counselling services, a canteen or cafeteria, sports facilities, and IT support. 🏫 Explore the Campus Life tab for more!",
    category: "campus"
  },
  {
    keywords: ["library", "books", "study space", "study room"],
    response: "The university library is free to use with your student ID. You can borrow books, access online journals and e-books, and use quiet study areas and group study rooms. Library staff can also help you find research materials and cite sources correctly. 📚",
    category: "campus"
  },
  {
    keywords: ["clubs", "societies", "join a club", "student union", "extracurricular", "activities"],
    response: "Joining a club or society is a fantastic way to make friends and enjoy university life! Most universities have sports clubs, cultural societies, academic societies, arts groups, and volunteering opportunities. Check the Students' Union website at the start of term. 🎭",
    category: "campus"
  },
  {
    keywords: ["health", "doctor", "gp", "medical", "hospital", "sick", "ill", "counselling", "mental health", "well-being", "wellness"],
    response: "Register with the campus health centre or a local GP as soon as you arrive — don't wait until you are unwell. Most universities also offer free, confidential counselling and mental health support. If you have a medical emergency, call the local emergency number immediately. 🏥",
    category: "campus"
  },
  {
    keywords: ["international student office", "student services", "international office", "iss", "global engagement"],
    response: "The International Student Office is your main support point for visa advice, orientation, cultural adjustment, and documentation (like enrolment letters). Visit or email them early in your studies — they are very helpful! 🌍",
    category: "campus"
  },
  {
    keywords: ["wifi", "wi-fi", "internet", "eduroam", "laptop", "computer"],
    response: "Free Wi-Fi is available across campus. Look for the 'eduroam' network — it works at many universities worldwide. You will also get a university email and access to software like Microsoft Office 365 or Google Workspace for free. 💻",
    category: "campus"
  },

  /* ---- DAILY LIFE ---- */
  {
    keywords: ["bank", "bank account", "open an account", "banking"],
    response: "To open a bank account you usually need your passport, visa, university acceptance letter, and proof of address. Some banks take a few weeks to process applications — ask your university if they have a preferred banking partner with faster processing for students. A multi-currency card (e.g., Wise) can be useful in the meantime. 🏦",
    category: "daily"
  },
  {
    keywords: ["sim card", "phone plan", "mobile data", "internet data", "phone number"],
    response: "Buy a local SIM card at the airport or a phone shop — you will need your passport to register it. A pay-as-you-go plan is flexible for when you first arrive. Monthly plans with data bundles are usually better value once you are settled. Check coverage in your university area first. 📱",
    category: "daily"
  },
  {
    keywords: ["transport", "bus", "train", "metro", "tram", "travel", "commute", "get around", "getting around"],
    response: "Many universities offer free or subsidised bus services. Ask about a student travel card for discounts on public transport. Cycling is popular in many university cities. Download the public transport app for your city to plan journeys and see real-time information. 🚌",
    category: "daily"
  },
  {
    keywords: ["food", "grocery", "supermarket", "eat", "cooking", "canteen", "cafeteria", "restaurant"],
    response: "Your campus canteen offers subsidised meals. Cooking at home is cheaper — look for budget supermarket own-brand products. You can often find international grocery shops for ingredients from your home country. The student union may also provide emergency food support if needed. 🍽️",
    category: "daily"
  },
  {
    keywords: ["part time", "part-time job", "work", "working", "earn money", "employment"],
    response: "Many student visas allow part-time work during term time, but hours are strictly limited. Common on-campus jobs include library assistant, student ambassador, and cafeteria staff. Always check your specific visa conditions before starting any job, as working beyond the permitted hours can result in visa cancellation. 💼",
    category: "daily"
  },
  {
    keywords: ["pack", "what to bring", "packing", "luggage", "what to take", "moving abroad"],
    response: "Essential items to pack: all original documents (passport, visa, academic certificates), prescribed medicines with a doctor's letter, power adaptors for your electronics, and some local currency for your first day. Most other things can be bought locally, so don't overpack! 🧳",
    category: "daily"
  },
  {
    keywords: ["safe", "safety", "crime", "scam", "fraud", "emergency"],
    response: "Save your university's security number and the local emergency number in your phone. Register with your home country's embassy. Be cautious of scams targeting students (fake visa emails, fake landlords, phone scams). Use well-lit routes at night and use the university's safe walk service if available. 🛡️",
    category: "daily"
  },
  {
    keywords: ["lonely", "homesick", "homesickness", "miss home", "friends", "social", "make friends"],
    response: "Feeling homesick or lonely is completely normal when you first move abroad. The best ways to make friends are: attending orientation events, joining clubs and societies, talking to classmates, and using the international student community on campus. Give yourself time to adjust, and don't hesitate to contact the student well-being service for support. 💙",
    category: "campus"
  },

  /* ---- GENERAL ---- */
  {
    keywords: ["cost of living", "how expensive", "living costs", "monthly expenses", "budget"],
    response: "The cost of living varies greatly by country and city. Main expenses are accommodation, food, transport, books, and personal items. Your university's international student office can give you a realistic estimate for your specific location. Create a monthly budget when you arrive to manage your money well. 💰",
    category: "daily"
  },
  {
    keywords: ["orientation", "induction", "welcome week", "freshers", "first week"],
    response: "Most universities run an orientation or welcome week for new students, including specific sessions for international students. It is a great opportunity to learn about campus services, meet other students, and get settled before classes begin. Check your university's official calendar for dates. 🗓️",
    category: "campus"
  },
  {
    keywords: ["help", "support", "who can i ask", "where to get help", "i need help"],
    response: "There are several places you can get help: (1) International Student Office — visa, paperwork, orientation, (2) Student Union — rights, welfare, activities, (3) Counselling Service — mental health and personal support, (4) Academic personal tutor — course advice, (5) IT helpdesk — computer and account issues. Which of these would you like more information about? 😊",
    category: null
  },
  {
    keywords: ["what can you do", "what can you help", "what topics", "what do you know"],
    response: "I can help you with questions about: 📋 Admissions, 🛂 Visa Guidance, 🏠 Accommodation, 🏫 Campus Life, ☀️ Daily Life, and ❓ FAQs. Just type your question and I will do my best to help!",
    category: null
  }
];

/* ---- Suggestion questions shown as chips ---- */
const SUGGESTIONS = [
  "How do I apply to a university?",
  "What documents do I need for a visa?",
  "Where can I stay on campus?",
  "How do I open a bank account?",
  "Can I work while studying?",
  "How do I make friends?",
  "What is the International Student Office?",
  "How do I get a SIM card?"
];

/* -------------------------------------------------------
   Core chatbot logic
------------------------------------------------------- */

/**
 * Finds the best matching response for the user's input.
 * Uses simple keyword matching — no external AI needed.
 */
function getBotResponse(userMessage) {
  const lower = userMessage.toLowerCase().trim();

  // Empty input guard
  if (!lower) return null;

  let bestMatch = null;
  let bestScore = 0;

  for (const entry of CHATBOT_KB) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (lower.includes(kw)) {
        // Longer keyword matches score higher (more specific)
        score += kw.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch;
  }

  // Fallback
  return {
    response: "I am not sure I have a specific answer for that yet. 🤔 Try the topic tabs above (Admissions, Visa, Accommodation, Campus Life, Daily Life, FAQs) for detailed information, or rephrase your question using different words.",
    category: null
  };
}

/**
 * Adds a message bubble to the chat window.
 * @param {string} text     – message text
 * @param {"bot"|"user"} role
 */
function appendChatMessage(text, role) {
  const chatWindow = document.getElementById("chatWindow");
  const msg = document.createElement("div");
  msg.className = `chat-msg ${role}`;

  const avatar = document.createElement("span");
  avatar.className = "chat-avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = role === "bot" ? "🤖" : "🧑‍🎓";

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble";
  bubble.textContent = text;

  msg.appendChild(avatar);
  msg.appendChild(bubble);
  chatWindow.appendChild(msg);

  // Scroll to bottom
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

/**
 * Initialises the chatbot: builds suggestion chips and wires the form.
 * Called by app.js after DOM is ready.
 */
function initChatbot() {
  // Build suggestion chips
  const chipContainer = document.getElementById("suggestionChips");
  SUGGESTIONS.forEach(q => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = q;
    chip.addEventListener("click", () => handleUserInput(q));
    chipContainer.appendChild(chip);
  });

  // Wire the chat form
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    handleUserInput(text);
    input.value = "";
  });
}

/**
 * Processes user input: shows user bubble, then bot reply.
 */
function handleUserInput(text) {
  appendChatMessage(text, "user");

  // Short artificial delay to feel more natural
  setTimeout(() => {
    const result = getBotResponse(text);
    if (result) {
      appendChatMessage(result.response, "bot");
    }
  }, 400);
}
