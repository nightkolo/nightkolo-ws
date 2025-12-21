const artworks = [
  {
    file: "vector/tank-is-tiny-cover.png",
    title: "Tank is Tiny",
    desc: "A piece of fanart I drew for Juho Sprite's OC"
  },
  {
    file: "art-juhosprite.png",
    title: "Juho Sprite",
    desc: "A piece of fanart I drew for Juho Sprite's OC"
  },
  {
    file: "art-juhosprite-02.png",
    title: "Juho Sprite Alt",
    desc: "Placeholder"
  },
  {
    file: "art-bomberman.png",
    title: "Bomberman",
    desc: "This was a fun character, I tried to pay attention to lighting within the shading,"
  },
  {
    file: "IMG_3943.jpeg",
    title: "Bugscaper",
    desc: "Piece of fanart for Bugscaper by my good friend Yolwoocle! Wish the game on steam (not sponsored :P)"
  },
  {
    file: "art-teevo.png",
    title: "Teevo",
    desc: "Bsky description"
  },
  {
    file: "jirachi-wip.png",
    title: "Jirachi",
    desc: "Bsky Description"
  },
  {
    file: "art-ettiko.png",
    title: "Ettiko",
    desc: "Bsky desc."
  },
  {
    file: "art-kologen.png",
    title: "Kologen",
    desc: "Bsky desc."
  },
  {
    file: "vector/boko-early-showcase.png",
    title: "Boko Early",
    desc: ""
  },
  {
    file: "vector/bokoblock-logo-showcase.png",
    title: "Bokoblock Logo",
    desc: ""
  },
  {
    file: "wip-board-intrustor.png",
    title: "Board Intrustor",
    desc: "A piece of early digital art, experimenting"
  },
  {
    file: "06/man-of-the-wip.png",
    title: "Rayman",
    desc: ""
  },
  {
    file: "06/klonoa.png",
    title: "Klonoa",
    desc: ""
  },
  {
    file: "06/heartfelt.png",
    title: "Pikachu",
    desc: ""
  },
  {
    file: "06/hammer-02.png",
    title: "Amy",
    desc: ""
  },
  {
    file: "06/ettiko.png",
    title: "Ettiko Old",
    desc: ""
  },
  {
    file: "06/color-study.png",
    title: "Color Study",
    desc: ""
  },

  // --- 05 ---
  {
    file: "05/kologen-01.png",
    title: "Kologen Old",
    desc: ""
  },
  {
    file: "05/GRMLN.jpeg",
    title: "GRMLN",
    desc: ""
  },
  {
    file: "05/art-bogo.png",
    title: "Bogo",
    desc: ""
  }
];

const grid = document.getElementById("art-grid");
const msg = document.getElementById("JS-disclaimer");
if (msg) msg.remove();

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