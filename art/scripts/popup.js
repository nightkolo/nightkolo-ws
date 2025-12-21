

    // ==============================
    // Developer Cheat Sheet
    // ==============================
    // How the modal works:
    //   - The modal is shown when an artwork entry (with class "div-art-entry") is clicked.
    //   - The modal displays the image, title, and description from the clicked entry's data-* attributes.
    //   - Navigation buttons ("left" and "right") and arrow keys allow cycling through artworks.
    //   - The modal can be closed by clicking the close button (&times;), pressing Escape, or clicking the modal background.

    // How data-* attributes are used:
    //   - Each ".div-art-entry" may have data-img, data-title, and data-desc attributes.
    //   - JavaScript reads these via element.dataset (e.g., arts[index].dataset.img) to populate the modal.
    //   - If an entry is missing a data-* attribute, modal content may appear blank.

    // How the navigation buttons work:
    //   - Left and right buttons (with ids "modal-left-btn" and "modal-right-btn") cycle through the artworks.
    //   - Keyboard ArrowLeft and ArrowRight keys also cycle the modal content.
    //   - Cycling wraps around at the ends.

    // How to safely make small changes:
    //   - To add or change an artwork, edit or duplicate a ".div-art-entry" div. Set the correct data-img, data-title, and data-desc.
    //   - Avoid removing required data-* attributes, or the modal may show blank fields.
    //   - For style or text tweaks, update the relevant CSS or HTML.
    //   - Test modal and navigation after changes to ensure UX is not broken.

// ==============================
  // Modal element references
  // ==============================

  const modal = document.getElementById("art-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const closeBtn = document.getElementById("modal-close");
  const modalDesc = document.getElementById("modal-desc")
  const modalEntry = document.getElementById("modal-entry-number");

  const leftBtn = document.getElementById("modal-left-btn");
  const rightBtn = document.getElementById("modal-right-btn");

  // ==============================
  // Open modal when artwork is clicked
  // ==============================

  const arts = document.querySelectorAll(".div-art-entry");
  const numberOfArtworks = arts.length;

  let currentIndex = 0;

  // Select ALL artwork entries on the page
  for (let i = 0; i < numberOfArtworks; i++){
    arts[i].addEventListener("click", () => {
      loadArtworkPopup(i);
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowRight"){
      cycleArtwork(1);
    } else if (event.key === "ArrowLeft") {
      cycleArtwork(-1); 
    } else if (event.key === "Escape") {
      closeArtworkPopup();
    }
  });

  rightBtn.addEventListener("click", () => {
    cycleArtwork(1);
  });

  leftBtn.addEventListener("click", () => {
    cycleArtwork(-1);
  });

  function cycleArtwork(move = 1){
    const setIndex = (currentIndex + Math.sign(move) + numberOfArtworks) % numberOfArtworks;
    loadArtworkPopup(setIndex);
  }

  function loadArtworkPopup(index){
    const entry = index + 1;
    currentIndex = index;

    // Read the image path from this element's data-img attribute
    // and assign it to the modal image src
    // dataset allows JS to access HTML data-* attributes
    modalImg.src = arts[index].dataset.img;

    // Read the artwork title from this element's data-title attribute
    // and insert it as text into the modal title element
    modalTitle.textContent = arts[index].dataset.title;
    modalDesc.innerHTML = arts[index].dataset.desc;
    modalEntry.textContent = `${entry} / ${numberOfArtworks}`;
    // Remove the "hidden" class so the modal becomes visible
    modal.classList.remove("hidden");
  }

  // Close modal
  function closeArtworkPopup(){
    // Add the "hidden" class so the modal becomes invisible
    modal.classList.add("hidden");
  }

  closeBtn.addEventListener("click", () => {
    closeArtworkPopup();
  });

  // Close modal when clicking the background
  // Listen for clicks anywhere on the modal overlay
  modal.addEventListener("click", (e) => {
    // Only close modal if the background (modal itself) is clicked,
    // not the modal content
    if (e.target === modal) {
      // Hide the modal
      closeArtworkPopup();
    }
  });