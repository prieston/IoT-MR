export default {
  id: "006cb9aE-S322",
  name: "14th Century Great Wall",
  description: "A simple overview of the area near the tower of thessaloniki.",
  content: [
    {
      type: "mapped",
      url: process.env.PUBLIC_URL + "/14th_century_great_wall.glb",
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      ground: true,
      actions: [],
      description: `<iframe
          style="
            width: 100%;
            height: 100%;
            border:none;"
          src="${process.env.PUBLIC_URL}/templates/white-tower.html"></iframe>`
    },
    {
      type: "virtual",
      url: process.env.PUBLIC_URL + "/animated_dragon.glb",
      position: [1.5, 13, 3],
      rotation: [0, 0, 0],
      scale: [20, 20, 20],
      actions: {
        onLoad: {
          animations: [
            {
              name: "idle",
              duration: Infinity,
              singleLoopDuration: 5000,
              path: [[1.5, 13, 3]]
            }
          ]
        },
        onSelect: {
          animations: [
            {
              name: "flying",
              duration: Infinity,
              singleLoopDuration: 6000,
              path: [[1.5, 15, 3]],
              lookAt: "camera"
            }
          ]
        }
      },
      description: `<iframe
          style="
            width: 100%;
            height: 100%;
            border:none;"
          src="${process.env.PUBLIC_URL}/templates/soldier.html"></iframe>`
    }
  ],
  meta: {
    authors: [
      { firstName: "Konstantinos", lastName: "Evanggelidis" },
      { firstName: "Theofilos", lastName: "Papadopoulos" }
    ],
    thumbnail: `${process.env.PUBLIC_URL}/worldTwo-Thumbnail.png`,
    coordinates: [0, 0, 0]
  }
};
