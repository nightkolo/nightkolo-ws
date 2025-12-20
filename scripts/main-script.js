const btn = document.getElementById("reduceMotionBtn");
const root = document.documentElement;

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