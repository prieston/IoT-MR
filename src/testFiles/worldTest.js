export default {
  id: "006cb9aE-S32A",
  name: "Test World",
  description: "",
  content: [
    {
      type: "virtual",
      ground: false,
      selectable: true,
      url: process.env.PUBLIC_URL + "/light-switch.glb",
      position: [0, 0.01, -1],
      rotation: [0, Math.PI, 0],
      scale: [1, 1, 1],
      description: `<iframe
      style="
        width: 100%;
        height: 100%;
        border:none;"
      src="${process.env.PUBLIC_URL}/templates/switch.html"></iframe>`,
    },
  ],
  meta: {
    authors: [
      { firstName: "Konstantinos", lastName: "Evanggelidis" },
      { firstName: "Theofilos", lastName: "Papadopoulos" },
    ],
    thumbnail: `${process.env.PUBLIC_URL}/worldThree-Thumbnail.png`,
    coordinates: [0, 0, 0],
    observationPoints: [
      {
        id: "006cb9aE-S32A",
        pointId: 1,
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        heading: 0,
      },
    ],
  },
};
