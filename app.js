/* ============================================================
   app.js
   Main application wiring:
   - Initialises category panels (calls categories.js)
   - Initialises the chatbot (calls chatbot.js)
   - Handles tab switching for the navigation bar
   - Handles clicks on home category cards
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ---- 1. Build category accordion content ---- */
  buildCategoryPanels();   // defined in categories.js

  /* ---- 2. Initialise chatbot ---- */
  initChatbot();           // defined in chatbot.js

  /* ---- 3. Tab switching ---- */
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels  = document.querySelectorAll(".tab-panel");

  function activateTab(tabId) {
    // Update buttons
    tabButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });
    // Update panels
    tabPanels.forEach(panel => {
      panel.classList.toggle("active", panel.id === `tab-${tabId}`);
    });
    // Scroll to top of content on mobile
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => activateTab(btn.dataset.tab));
  });

  /* ---- 4. Home category card clicks ---- */
  document.querySelectorAll(".category-card[data-goto]").forEach(card => {
    card.addEventListener("click", () => activateTab(card.dataset.goto));
  });

});
