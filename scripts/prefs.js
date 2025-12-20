(function () {
  const root = document.documentElement;

  // Apply reduce motion
  if (localStorage.getItem("reduceMotion") === "true") {
    root.classList.add("reduce-motion");
  }
})();