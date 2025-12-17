const artworks = [
  {
    file: "art-juhosprite.png",
    title: "Art Juho Sprite",
    desc: "Placeholder"
  },
  {
    file: "art-juhosprite-02.png",
    title: "Art Juho Sprite 02",
    desc: "Placeholder"
  },
  {
    file: "art-bomberman.png",
    title: "Art Bomberman",
    desc: "Placeholder"
  },
  {
    file: "IMG_3943.jpeg",
    title: "Untitled 3943",
    desc: "Placeholder"
  },
  {
    file: "art-teevo.png",
    title: "Art Teevo",
    desc: "Placeholder"
  },
  {
    file: "jirachi-wip.png",
    title: "Jirachi WIP",
    desc: "Placeholder"
  },
  {
    file: "art-ettiko.png",
    title: "Art Ettiko",
    desc: "Placeholder"
  },
  {
    file: "art-kologen.png",
    title: "Art Kologen",
    desc: "Placeholder"
  },
  {
    file: "wip-board-intrustor.png",
    title: "WIP Board Intrustor",
    desc: "Placeholder"
  },
  {
    file: "06/man-of-the-wip.png",
    title: "Rayman",
    desc: "Placeholder"
  },
  {
    file: "06/klonoa.png",
    title: "Klonoa",
    desc: "Placeholder"
  },
  {
    file: "06/heartfelt.png",
    title: "Heartfelt",
    desc: "Placeholder"
  },
  {
    file: "06/hammer-02.png",
    title: "Amy",
    desc: "Placeholder"
  },
  {
    file: "06/ettiko.png",
    title: "Ettiko Old",
    desc: "Placeholder"
  },
  {
    file: "06/color-study.png",
    title: "Color Study",
    desc: "Placeholder"
  },

  // --- 05 ---
  {
    file: "05/kologen-01.png",
    title: "Kologen Old",
    desc: "Placeholder"
  },
  {
    file: "05/GRMLN.jpeg",
    title: "GRMLN",
    desc: "Placeholder"
  },
  {
    file: "05/art-bogo.png",
    title: "Art Bogo",
    desc: "Placeholder"
  }
];

const grid = document.getElementById("art-grid");

console.log("Hello?");

artworks.forEach(a => {
  const entry = document.createElement("div");
  entry.className = "div-art-entry";
  entry.dataset.img = `artwork/${a.file}`;
  entry.dataset.title = a.title;
  entry.dataset.desc = a.desc;

  entry.innerHTML = `
    <div>
      <img src="artwork/${a.file}" alt="">
    </div>
    <h2 class="unselectable">${a.title}</h2>
  `;

  grid.appendChild(entry);
});