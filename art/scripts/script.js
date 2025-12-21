const artworks = [
  {
    file: "vector/tank-is-tiny-cover.png",
    title: "Tank is Tiny",
    desc: "Game cover for my game"
  },
  {
    file: "art-juhosprite.png",
    title: "Juho Sprite",
    desc: "A piece of fanart I drew of Juho Sprite's OC"
  },
  {
    file: "art-juhosprite-02.png",
    title: "Juho Sprite Alt",
    desc: "Juho Sprite fanart alt!"
  },
  {
    file: "art-bomberman.png",
    title: "Bomberman",
    desc: "<a target='_blank' herf='https://www.newgrounds.com/art/view/night-kolo/kologen'>Watch Speedpaint</a> - This was a fun character."
  },
  {
    file: "IMG_3943.jpeg",
    title: "Bugscaper",
    desc: "Piece of fanart for Bugscaper by my good friend Yolwoocle! wishlist his game on steam! (not sponsored) :P"
  },
  {
    file: "art-teevo.png",
    title: "Teevo",
    desc: "A blissful colorful TV with no thoughts but analog indeed. With a wieldy power plug as his reign. They have a limbless appearance similar to my other characters and two main poses are shown in the Canvas, including a 'funni angle'. To the bottom are some simple iconography and graphic design!"
  },
  {
    file: "jirachi-wip.png",
    title: "Jirachi",
    desc: "WIP drawing of Jirachi, with some tweaks on my variant to the right."
  },
  {
    file: "art-ettiko.png",
    title: "Ettiko",
    desc: "Illustration with some graphic design of my OC, Ettiko! They have a chibi bunny-like (bnuuy) appearance with pink as their primary color. Their hand is holding a yellow bat while thumbing down with the other in an arrogant, competent pose and a smug face. 'Unshakable swagger 1000%' is written to their side, because it's true."
  },
  {
    file: "art-kologen.png",
    title: "Kologen",
    desc: "<a target='_blank' herf='https://www.newgrounds.com/art/view/night-kolo/kologen'>Backstory</a> - 3 illustrations of my OC, Kologen! They are a robot-like crescent moon head with two large silver parts resembling their ear (he can still hear), and their eyes appear closed (he can still see), and their arms are limbless (he is... Rayman). You're probably wondering what kind of analog horror entity is this?... it's Kologen."
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
    desc: "Puppos, fun characters I sketched earlier. This was when I was experimenting with shading styles and layers. Still intrigued to find out more"
  },
  {
    file: "06/man-of-the-wip.png",
    title: "Rayman",
    desc: "Rayman Origins and Legends are my favorite games :)"
  },
  {
    file: "06/klonoa.png",
    title: "Klonoa",
    desc: "Modern Klonoa holding the belt from their classic design by the thumb, asserting modernity. this was me messing around with colors earlier"
  },
  {
    file: "06/heartfelt.png",
    title: "Pikachu",
    desc: "Pikachu looking delightful, snapshot from a draw pale I was having fun with. I still have my pikachu plush btw, my emotional support :)"
  },
  {
    file: "06/hammer-02.png",
    title: "Amy",
    desc: "Cute illustration of Amy Rose I did earlier, making a :D face"
  },
  {
    file: "06/ettiko.png",
    title: "Ettiko Old",
    desc: "Older sketch of Ettiko that I didn't share"
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
    desc: "An older sketch of my OC, Kologen! with a first showcase of his butt! He's drawn in three different poses. He has a simple, cartoon-like design with a rounded body, large ear-like side shapes on the head, with a crescent moon on his head (get it? 'Night' Kolo?). He has a minimalist expression with closed eyed (but he can still see you)."
  },
  {
    file: "05/GRMLN.jpeg",
    title: "GRMLN",
    desc: "<a target='_blank' herf='https://www.newgrounds.com/art/view/night-kolo/kologen'>Post</a> - Fanart of Ethan8bit's OC on Bluesky!"
  },
  {
    file: "05/art-bogo.png",
    title: "Bogo",
    desc: "A sketch of an OC named Bogo with bear-like ears, big oval eyes, and a large scarf covering its mouth. The character has a round belly with a monstrous mouth. He's also a cutie patootie :3"
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