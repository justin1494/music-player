import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "In Between",
      cover: "https://i.scdn.co/image/ab67616d0000b273b2fa71344696baeb5752dafe",
      artist: "Bao, Venuz Beats, Justin Wyatt",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32845",
      color: ["#64B3E2", "#F1DEB6"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover: "https://i.scdn.co/image/ab67616d0000b27390203703bdf3bf4ba72dc565",
      artist: "Kissamile",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32842",
      color: ["#C8B593", "#BEC2CD"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "2Girls 1Rose",
      cover: "https://i.scdn.co/image/ab67616d0000b273114bb39955deb233c38ae315",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32890",
      color: ["#30C1E9", "#EA83B2"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Morning View",
      cover: "https://i.scdn.co/image/ab67616d0000b27364c085d4fe1ed54f2ec389c7",
      artist: "Enzalla",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32839",
      color: ["#DFC5A4", "#415F59"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Billie & Zanaho",
      cover: "https://i.scdn.co/image/ab67616d0000b2738612c673eb5021b17dc507ae",
      artist: "sadtoi, Akulta",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32861",
      color: ["#E5FAFF", "#AC635A"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
