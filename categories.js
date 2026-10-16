/* ============================================================
   categories.js
   Defines all content for the six help-desk topic areas.
   Each category is a list of accordion sections.
   The buildCategoryPanels() function is called by app.js
   after the DOM is loaded.
   ============================================================ */

const CATEGORIES = {

  admissions: {
    title: "📋 Admissions",
    intro: "Everything you need to know about applying to a university as an international student.",
    sections: [
      {
        heading: "Step-by-Step Application Process",
        body: `
          <p>Most universities follow a similar process. Here is a general guide:</p>
          <ul>
            <li><strong>Step 1 – Research:</strong> Choose universities and programmes that match your qualifications and interests.</li>
            <li><strong>Step 2 – Check eligibility:</strong> Review each university's admission requirements on their official website.</li>
            <li><strong>Step 3 – Prepare documents:</strong> Gather transcripts, certificates, ID, and language test scores.</li>
            <li><strong>Step 4 – Write a Statement of Purpose (SOP):</strong> Explain why you want to study this programme.</li>
            <li><strong>Step 5 – Submit the application:</strong> Use the university's online application portal and pay any application fee.</li>
            <li><strong>Step 6 – Track your application:</strong> Log in to the portal regularly to check status and respond to any requests.</li>
            <li><strong>Step 7 – Accept the offer:</strong> Once you receive an offer letter, confirm your acceptance by the deadline.</li>
          </ul>
          <div class="tip-box">💡 Tip: Apply to more than one university so you have backup options.</div>
        `
      },
      {
        heading: "Documents Usually Required",
        body: `
          <ul>
            <li>Completed application form</li>
            <li>Academic transcripts and certificates (all previous qualifications)</li>
            <li>Copy of your passport</li>
            <li>English language test score (e.g., IELTS, TOEFL, or PTE) — check if your country is exempt</li>
            <li>Statement of Purpose or personal statement</li>
            <li>Two or three reference/recommendation letters</li>
            <li>Curriculum Vitae (CV) / Résumé (required for postgraduate courses)</li>
            <li>Portfolio (for art, design, or architecture programmes)</li>
          </ul>
          <div class="warn-box">⚠️ Always check the specific requirements on the university's official website. Requirements vary by institution and programme.</div>
        `
      },
      {
        heading: "Understanding Offer Letters",
        body: `
          <p>After applying you may receive one of these:</p>
          <ul>
            <li><strong>Unconditional Offer:</strong> You have met all requirements. You can accept and enrol right away.</li>
            <li><strong>Conditional Offer:</strong> You need to meet certain conditions (e.g., achieve a minimum grade in a pending exam or submit a missing document) before the offer becomes final.</li>
            <li><strong>Rejection:</strong> You were not accepted. You can try other universities or reapply next cycle.</li>
          </ul>
          <div class="tip-box">💡 Read the offer letter carefully. Note the deadline to accept and any conditions you must fulfil.</div>
        `
      },
      {
        heading: "Scholarships and Financial Aid",
        body: `
          <p>Many universities and governments offer scholarships for international students. Common types include:</p>
          <ul>
            <li>Merit-based scholarships (based on academic performance)</li>
            <li>Need-based grants</li>
            <li>Government scholarships (e.g., from your home country or the host country)</li>
            <li>University-specific bursaries and fee waivers</li>
          </ul>
          <p>Search the official financial aid page of each university you apply to, and also check your home country's scholarship programmes.</p>
          <div class="warn-box">⚠️ Be cautious of scholarship websites that ask for money upfront. Legitimate scholarships do not charge application fees.</div>
        `
      }
    ]
  },

  visa: {
    title: "🛂 Visa Guidance",
    intro: "General information about student visas. Always verify current rules on your country's official immigration website.",
    sections: [
      {
        heading: "What is a Student Visa?",
        body: `
          <p>A student visa is an official document (usually a stamp or sticker in your passport) that allows you to legally enter and study in another country. Most countries require international students to obtain a student visa before arriving.</p>
          <div class="warn-box">⚠️ Visa rules and names differ by country. The information here is general. Always check the official immigration website of the country where you plan to study.</div>
        `
      },
      {
        heading: "General Steps to Apply for a Student Visa",
        body: `
          <ul>
            <li><strong>1. Receive your offer letter</strong> from the university.</li>
            <li><strong>2. Check which visa category</strong> applies to your destination country and nationality.</li>
            <li><strong>3. Gather required documents</strong> (see next section).</li>
            <li><strong>4. Pay tuition deposit</strong> if required by the university, and get a Confirmation of Enrolment (CAS, I-20, or equivalent).</li>
            <li><strong>5. Complete the visa application form</strong> on the official immigration website.</li>
            <li><strong>6. Pay the visa fee.</strong></li>
            <li><strong>7. Book and attend a biometric appointment</strong> if required.</li>
            <li><strong>8. Submit your application</strong> online or at the visa application centre.</li>
            <li><strong>9. Wait for a decision</strong> and track your application online.</li>
          </ul>
          <div class="tip-box">💡 Apply for your visa as early as possible — processing can take several weeks.</div>
        `
      },
      {
        heading: "Documents Typically Needed for a Student Visa",
        body: `
          <ul>
            <li>Valid passport (usually valid for at least 6 months beyond your study end date)</li>
            <li>University acceptance / offer letter</li>
            <li>Confirmation of enrolment document (CAS, I-20, CoE, or similar)</li>
            <li>Proof of funds (bank statements showing you can cover tuition and living costs)</li>
            <li>Passport-sized photographs meeting official specifications</li>
            <li>Completed visa application form</li>
            <li>Visa application fee payment receipt</li>
            <li>Proof of English language ability (if applicable)</li>
            <li>Health insurance certificate (required by some countries)</li>
          </ul>
          <div class="warn-box">⚠️ The exact list varies by country and visa type. Always refer to the official immigration authority's checklist.</div>
        `
      },
      {
        heading: "Important Visa Conditions to Know",
        body: `
          <p>Most student visas come with conditions you must follow, such as:</p>
          <ul>
            <li>Studying only at the institution named in your visa</li>
            <li>Notifying immigration authorities if you change university</li>
            <li>Restrictions on the number of hours you can work per week during term time</li>
            <li>Maintaining satisfactory academic progress</li>
            <li>Keeping your passport and visa documents up to date</li>
          </ul>
          <div class="warn-box">⚠️ Breaking visa conditions can result in cancellation of your visa and being required to leave the country. Always read your visa conditions carefully.</div>
        `
      },
      {
        heading: "Extending or Changing Your Visa",
        body: `
          <p>If your course is longer than your visa allows, or if you want to continue to a higher level of study, you may need to extend your visa or apply for a new one. Contact your university's international student office well before your current visa expires — they can guide you through the process specific to your host country.</p>
          <div class="tip-box">💡 Keep copies of all visa application documents. You may need them again for future applications.</div>
        `
      }
    ]
  },

  accommodation: {
    title: "🏠 Accommodation",
    intro: "Finding a safe, comfortable, and affordable place to live is one of the first things to sort out when you arrive.",
    sections: [
      {
        heading: "On-Campus Housing (University Accommodation)",
        body: `
          <p>Many universities offer halls of residence or dormitories for students. Typical features include:</p>
          <ul>
            <li>Furnished room (bed, desk, wardrobe)</li>
            <li>Shared or en-suite bathroom</li>
            <li>Shared kitchen or meals provided in a canteen</li>
            <li>High-speed internet included</li>
            <li>Bills (electricity, water, heating) usually included in the rent</li>
            <li>On-site support staff and security</li>
          </ul>
          <p><strong>How to apply:</strong> Go to your university's accommodation portal once you have accepted your offer. Apply as early as possible — spaces fill up quickly, especially for new international students.</p>
          <div class="tip-box">💡 Many universities give priority to first-year international students. Check if this applies to you.</div>
        `
      },
      {
        heading: "Private / Off-Campus Accommodation",
        body: `
          <p>If on-campus housing is full or too expensive, you can look for private rentals. Options include:</p>
          <ul>
            <li><strong>Private student halls:</strong> Purpose-built student accommodation run by private companies.</li>
            <li><strong>Shared house or flat:</strong> Rent a room in a house or apartment shared with other students or young professionals.</li>
            <li><strong>Homestay:</strong> Live with a local family. Good for language practice and cultural immersion.</li>
            <li><strong>Studio apartment:</strong> A self-contained flat for one person. More expensive but more privacy.</li>
          </ul>
          <div class="warn-box">⚠️ Before paying any deposit, inspect the property (in person or via video call) and verify the landlord's identity. Read the tenancy agreement carefully before signing.</div>
        `
      },
      {
        heading: "What to Look for in a Rental",
        body: `
          <ul>
            <li>Distance from campus (walking, cycling, or public transport)</li>
            <li>Whether bills are included in the rent</li>
            <li>Minimum contract length (many require 6 or 12 months)</li>
            <li>Deposit amount and refund conditions</li>
            <li>Facilities: washing machine, kitchen, internet</li>
            <li>Safety of the neighbourhood</li>
            <li>Rules on guests, noise, and pets</li>
          </ul>
          <div class="tip-box">💡 Join your university's student Facebook group or accommodation forum — many students find housemates or sublets there.</div>
        `
      },
      {
        heading: "Temporary Accommodation on Arrival",
        body: `
          <p>If you arrive before your permanent accommodation is ready, options include:</p>
          <ul>
            <li>University guest rooms or temporary student housing (check availability with your university)</li>
            <li>Budget hotels or hostels near campus</li>
            <li>Airbnb short-term rental</li>
          </ul>
          <p>Book temporary accommodation before you travel so you have a confirmed place to stay on arrival.</p>
        `
      }
    ]
  },

  campus: {
    title: "🏫 Campus Life",
    intro: "Your campus has many services and facilities to support your studies and well-being.",
    sections: [
      {
        heading: "International Student Office",
        body: `
          <p>The International Student Office (sometimes called the International Student Services or Global Engagement Office) is your main point of contact for:</p>
          <ul>
            <li>Visa and immigration advice</li>
            <li>Orientation programmes for new international students</li>
            <li>Cultural adjustment support</li>
            <li>Documentation such as enrolment letters and bank letters</li>
            <li>Connecting you with student support services</li>
          </ul>
          <div class="tip-box">💡 Visit or email the International Student Office early. They can answer many questions and connect you with the right resources.</div>
        `
      },
      {
        heading: "Library and Study Spaces",
        body: `
          <ul>
            <li>The university library is free to use with your student ID card.</li>
            <li>You can borrow physical books and access online journals and e-books.</li>
            <li>Most libraries have quiet study areas, group study rooms, and computer terminals.</li>
            <li>Library staff can help you find research materials and cite sources correctly.</li>
            <li>Look for 24/7 study spaces during exam periods.</li>
          </ul>
        `
      },
      {
        heading: "Student Clubs and Societies",
        body: `
          <p>Joining a club or society is one of the best ways to make friends and enjoy your time at university. Most universities have:</p>
          <ul>
            <li>Sports clubs (football, cricket, badminton, swimming, etc.)</li>
            <li>Cultural and international societies (often organised by country or region)</li>
            <li>Academic and professional societies</li>
            <li>Arts, music, and drama groups</li>
            <li>Volunteering and charity groups</li>
          </ul>
          <p>Check your Students' Union website for a full list and sign-up information at the start of each academic year.</p>
        `
      },
      {
        heading: "Health and Well-being Services",
        body: `
          <ul>
            <li><strong>University Health Centre / GP surgery:</strong> Register as soon as you arrive. Provides general medical care.</li>
            <li><strong>Mental Health and Counselling Service:</strong> Free, confidential support for stress, anxiety, or personal difficulties.</li>
            <li><strong>Disability and Accessibility Support:</strong> Help for students with disabilities, learning differences, or long-term health conditions.</li>
            <li><strong>Campus Pharmacy:</strong> Prescription medicines and over-the-counter products.</li>
          </ul>
          <div class="tip-box">💡 Register with the campus GP / health centre on arrival — don't wait until you are unwell.</div>
        `
      },
      {
        heading: "IT Services and Wi-Fi",
        body: `
          <ul>
            <li>You will receive a university email address and login credentials at enrolment.</li>
            <li>Free Wi-Fi is available across campus. Look for the "eduroam" network, which works at many universities worldwide.</li>
            <li>Software like Microsoft Office 365 or Google Workspace is usually provided free to students.</li>
            <li>The IT helpdesk can assist with computer, network, and account problems.</li>
          </ul>
        `
      },
      {
        heading: "Academic Support",
        body: `
          <ul>
            <li><strong>Personal tutor / academic advisor:</strong> A staff member assigned to help you with academic progress and course choices.</li>
            <li><strong>Writing centre:</strong> Help with essay structure, grammar, and academic English.</li>
            <li><strong>Maths and statistics support:</strong> Drop-in sessions for quantitative modules.</li>
            <li><strong>Peer mentoring:</strong> Senior students who volunteer to help new students settle in.</li>
          </ul>
        `
      }
    ]
  },

  daily: {
    title: "☀️ Daily Life",
    intro: "Practical tips for everyday living as an international student.",
    sections: [
      {
        heading: "Opening a Bank Account",
        body: `
          <p>Having a local bank account makes it easier to receive money from home, pay rent, and shop. Steps generally include:</p>
          <ul>
            <li>Bring your passport, visa, university acceptance letter, and proof of address.</li>
            <li>Visit a bank branch or apply online — many banks now offer student accounts.</li>
            <li>Some banks take a few weeks to process applications; ask your university if they have a preferred banking partner with faster processing for students.</li>
          </ul>
          <div class="tip-box">💡 Consider a multi-currency prepaid card (e.g., Wise or Revolut) for international transfers while you wait for your bank account.</div>
          <div class="warn-box">⚠️ Specific bank requirements and available accounts depend on your host country and chosen bank. Check directly with the bank.</div>
        `
      },
      {
        heading: "Getting a SIM Card / Mobile Phone Plan",
        body: `
          <ul>
            <li>Buy a local SIM card at the airport, a phone shop, or a supermarket on arrival.</li>
            <li>You will need your passport for registration in most countries.</li>
            <li>Pay-as-you-go (PAYG) plans are flexible and ideal when you first arrive.</li>
            <li>Monthly plans with data bundles are usually better value once you settle in.</li>
          </ul>
          <div class="tip-box">💡 Check which network has the best coverage in your university area before buying.</div>
        `
      },
      {
        heading: "Transport",
        body: `
          <ul>
            <li>Many universities provide free or subsidised bus services between campus and the city centre.</li>
            <li>Ask about a student travel card or discount — most public transport systems offer reduced fares for students with valid ID.</li>
            <li>Cycling is popular in many university cities; check if the campus has bike storage and hire schemes.</li>
            <li>Download the public transport app for your city for real-time bus, tram, or metro information.</li>
          </ul>
        `
      },
      {
        heading: "Food and Grocery Shopping",
        body: `
          <ul>
            <li>Most campuses have a canteen or cafeteria with subsidised meals for students.</li>
            <li>Cooking for yourself is usually cheaper than eating out every day.</li>
            <li>Supermarkets often have budget own-brand ranges that are good value.</li>
            <li>Look for local markets or Asian/international grocery shops for ingredients from your home country.</li>
            <li>Check the student union for food bank or emergency food parcel support if you are struggling financially.</li>
          </ul>
        `
      },
      {
        heading: "Working While Studying",
        body: `
          <p>Many student visas allow part-time work during term time (hours are limited — check your visa conditions). Common on-campus jobs include library assistant, student ambassador, and catering staff. Off-campus work is also possible but double-check your visa allows it.</p>
          <div class="warn-box">⚠️ Working more hours than your visa permits is illegal and can result in visa cancellation. Always check your specific visa conditions before starting any job.</div>
        `
      },
      {
        heading: "Staying Safe",
        body: `
          <ul>
            <li>Save the university's emergency and security phone number in your phone.</li>
            <li>Register with your home country's embassy or consulate (many offer online registration).</li>
            <li>Do not share your personal documents or bank details with strangers.</li>
            <li>Be aware of common scams targeting students (e.g., fake visa emails, fake landlords, phone scams).</li>
            <li>Walk in well-lit areas at night and use the university's safe walk or night bus service if available.</li>
          </ul>
          <div class="tip-box">💡 Your university's security team is there to help 24/7 — do not hesitate to contact them if you feel unsafe.</div>
        `
      }
    ]
  },

  faqs: {
    title: "❓ Frequently Asked Questions",
    intro: "Quick answers to the questions students ask most often.",
    sections: [
      {
        heading: "Admissions FAQs",
        body: `
          <div class="faq-item">
            <p class="faq-q">Q: When should I start my university application?</p>
            <p class="faq-a">A: As early as possible — ideally 12 to 18 months before your intended start date. This gives you time to prepare documents, take language tests, and meet application deadlines.</p>
          </div>
          <div class="faq-item">
            <p class="faq-q">Q: Do I need an English language test if English is not my first language?</p>
            <p class="faq-a">A: Most English-speaking universities require a recognised test score (e.g., IELTS, TOEFL). Some may waive this if you have studied in English for several years. Check each university's specific policy.</p>
          </div>
          <div class="faq-item">
            <p class="faq-q">Q: Can I defer my offer to the next intake?</p>
            <p class="faq-a">A: Many universities allow deferral, but it is not guaranteed. Contact the university's admissions office directly to request a deferral and ask about any conditions attached.</p>
          </div>
        `
      },
      {
        heading: "Visa FAQs",
        body: `
          <div class="faq-item">
            <p class="faq-q">Q: How long does a student visa take to process?</p>
            <p class="faq-a">A: Processing times vary by country, time of year, and individual circumstances — from a few days to several weeks. Check the official immigration website of your destination country for current estimates.</p>
          </div>
          <div class="faq-item">
            <p class="faq-q">Q: What happens if my visa is refused?</p>
            <p class="faq-a">A: You will usually receive a refusal letter explaining the reason. You may be able to reapply after addressing the issue, or appeal the decision. Contact your university's international office for guidance.</p>
          </div>
          <div class="faq-item">
            <p class="faq-q">Q: Can my family come with me on a student visa?</p>
            <p class="faq-a">A: Some countries allow student visa holders to bring dependants (spouse and/or children). This depends on the country, your course level, and your finances. Check the official immigration rules for your specific situation.</p>
          </div>
        `
      },
      {
        heading: "Accommodation FAQs",
        body: `
          <div class="faq-item">
            <p class="faq-q">Q: Is it better to live on campus or off campus?</p>
            <p class="faq-a">A: On-campus housing is convenient and often easier to manage as a new international student. Off-campus can be cheaper but requires more effort to set up. Try on-campus for your first year if possible.</p>
          </div>
          <div class="faq-item">
            <p class="faq-q">Q: How much deposit will I need to pay?</p>
            <p class="faq-a">A: University halls may ask for a small holding deposit to reserve a room. Private rentals typically ask for a larger security deposit (often one to two months' rent). Always get a receipt and understand the refund conditions.</p>
          </div>
        `
      },
      {
        heading: "Daily Life FAQs",
        body: `
          <div class="faq-item">
            <p class="faq-q">Q: What should I pack when moving abroad to study?</p>
            <p class="faq-a">A: Important items include: all original documents (passport, visa, academic certificates), prescribed medicines with a doctor's letter, adaptors for your electronics, and a small amount of local currency for when you first arrive. You can buy most other things locally.</p>
          </div>
          <div class="faq-item">
            <p class="faq-q">Q: How do I make friends and avoid loneliness?</p>
            <p class="faq-a">A: Attend orientation events, join clubs and societies, talk to classmates, and use the international student community networks on campus. Homesickness is very normal — give yourself time to adjust and don't hesitate to contact the student well-being service.</p>
          </div>
          <div class="faq-item">
            <p class="faq-q">Q: What if I have a medical emergency?</p>
            <p class="faq-a">A: Call the local emergency number (e.g., 999 in the UK, 911 in the US, 000 in Australia, 112 in Europe) or go to the nearest hospital emergency department. Make sure you have health insurance before you travel.</p>
          </div>
        `
      }
    ]
  }

};

/**
 * Builds the accordion HTML for a category tab panel.
 * Called from app.js after the DOM is loaded.
 */
function buildCategoryPanels() {
  document.querySelectorAll(".tab-panel[data-category]").forEach(panel => {
    const key = panel.dataset.category;
    const cat = CATEGORIES[key];
    if (!cat) return;

    let html = `<h2>${cat.title}</h2><p>${cat.intro}</p>`;

    cat.sections.forEach((sec, i) => {
      html += `
        <div class="info-section" id="${key}-sec-${i}">
          <div class="info-section-header" role="button" tabindex="0" aria-expanded="false"
               data-section="${key}-sec-${i}">
            <h3>${sec.heading}</h3>
            <span class="toggle-icon" aria-hidden="true">+</span>
          </div>
          <div class="info-section-body">${sec.body}</div>
        </div>
      `;
    });

    panel.innerHTML = html;
  });

  // Accordion toggle behaviour
  document.querySelectorAll(".info-section-header").forEach(header => {
    function toggleSection() {
      const sectionEl = header.closest(".info-section");
      const isOpen = sectionEl.classList.contains("open");
      sectionEl.classList.toggle("open", !isOpen);
      header.setAttribute("aria-expanded", String(!isOpen));
    }
    header.addEventListener("click", toggleSection);
    header.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleSection(); }
    });
  });
}
