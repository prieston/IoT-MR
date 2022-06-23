export default {
  id: "006cb9aE-S32A",
  name: "Test World",
  description: "",
  content: [
    {
      type: "virtual",
      ground: true,
      selectable: false,
      //visible: false,
      url: process.env.PUBLIC_URL + "/grafeio.glb",
      position: [-2.5, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
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
          x: 5,
          y: -2.5,
          z: 1.7,
        },
        heading: 230,
      },
    ],
  },
};
