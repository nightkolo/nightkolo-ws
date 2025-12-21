// Root HTML element (used for lang/dir)
const root = document.documentElement;

// Grab language switch buttons (may not exist on every page)
const enBtn = document.getElementById("enBtn");
const arBtn = document.getElementById("arBtn");

// Determine initial language:
// 1) Use saved preference if available
// 2) Otherwise default to English
const savedLang = localStorage.getItem("language");
const initialLang = (savedLang === "en" || savedLang === "ar") ? savedLang : "en";

// Apply language immediately on page load
loadLanguage(initialLang);

// Only attach listeners if both buttons are present
if (enBtn && arBtn) {
  arBtn.addEventListener("click", () => {
    // Apply Arabic language metadata and translations
    loadLanguage("ar");
  });

  enBtn.addEventListener("click", () => {
    // Apply English language metadata and translations
    loadLanguage("en");
  });
}

// Load and apply a language from the translations directory
async function loadLanguage(lang) {
  // Fetch the corresponding translation file
  const res = await fetch(`/translation/${lang}.json`);
  const translations = await res.json();

  // Find all elements marked for title attribute translation
  document.querySelectorAll("[data-i18n][data-i18n-attr]").forEach(el => {
    const attrName = el.dataset.i18nAttr; // e.g. "title"
    const key = el.dataset.i18n;          // e.g. "hover-info.home"

    // `key` is a dot-separated string like "hover-info.home"
    // We want to resolve it to translations.hover-info.home

    const value = key
      // Split the string into parts:
      // "hover-info.home" → ["hover-info", "home"]
      .split(".")

      // Walk through the translations object using each part
      // `obj` starts as `translations`
      // `part` is each key in the array ("hover-info", then "home")
      .reduce((obj, part) => {
        // Optional chaining (?.) prevents errors if a key is missing
        // Equivalent to: obj && obj[part]
        return obj?.[part];
      }, translations);

    if (value) {
      el.setAttribute(attrName, value);
    }
  });
  // document.querySelectorAll("[data-i18n]").forEach(el => {
  // Find all elements marked for translation
  for (const el of document.querySelectorAll("[data-i18n]")) {
    if (el.dataset.i18n.includes("hover-info")) continue;
    
    const key = el.dataset.i18n;

    // `key` is a dot-separated string like "hover-info.home"
    // We want to resolve it to translations.hover-info.home

    const value = key
      .split(".")
      .reduce((obj, part) => {
        return obj?.[part];}, translations);

      // Translate element text content
    if (value) {
      el.innerHTML = value;
    }
  };
  // });

  // Update document language for accessibility and text rendering
  document.documentElement.lang = lang;

  // Switch text direction for RTL languages like Arabic
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  // Remember the user's language choice across pages
  localStorage.setItem("language", lang);
}

const btn = document.getElementById("reduceMotionBtn");

// Determine initial state:
// 1) Explicit user choice wins
// 2) Otherwise fall back to system preference
const stored = localStorage.getItem("reduceMotion");

let reduced;
if (stored === "true") {
  reduced = true;
} else if (stored === "false") {
  reduced = false;
} else {
  reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Apply initial state
if (reduced) {
  root.classList.add("reduce-motion");
}

// Sync button label (if button exists on this page)
if (btn) {
  btn.textContent = reduced ? "Enable motion" : "Reduce motion";

  btn.addEventListener("click", () => {
    const enabled = root.classList.toggle("reduce-motion");
    localStorage.setItem("reduceMotion", enabled);
    btn.textContent = enabled ? "Enable motion" : "Reduce motion";
  });
}
