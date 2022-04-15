import { v4 as uuidv4 } from "uuid";

function chillhop() {
  return [
    {
      name: "Murmuration",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-300x300.jpg",
      artist: "Blue Wednesday, Shopan",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7814",
      color: ["#36AB9D", "#096E7C"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "ny90",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
      artist: "Ezzy",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9331",
      color: ["#1E1E54", "#31579D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Parasol",
      cover: "https://i.scdn.co/image/ab67616d0000b273b09ada4b5c5651dd37acb44d",
      artist: "Plusma, Guillaume Muschalle, Thomas Renwick",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=28901",
      color: ["#4C8D9C", "#C0967E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Violet",
      cover: "https://i.scdn.co/image/ab67616d0000b2739943db1968007e9288d94e83",
      artist: "INKY!, Toby Schay",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30106",
      color: ["#4C6383", "#62432D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Just to Make Sure",
      cover: "https://i.scdn.co/image/ab67616d0000b2732254728af1d599d01f3f3da4",
      artist: "Taro",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30106",
      color: ["#151D2C", "#F8CAB2"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Out Biking",
      cover: "https://i.scdn.co/image/ab67616d0000b2732782513c4a0591c1e82a8fea",
      artist: "Blue Wednesday, Khutko",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24696",
      color: ["#BBD4DE", "#EE977C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Conflicted",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",
      artist: "Hanz",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24642",
      color: ["#5B444A", "#977078"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillhop;
