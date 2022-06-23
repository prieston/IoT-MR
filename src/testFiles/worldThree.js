const scene3delay = 0;
export default {
  id: "006cb9aE-S324",
  name: "Apollonia Bath",
  description: "Simulation of the Otoman Bath in Apollonia.",
  content: [
    {
      type: "virtual",
      ground: true,
      selectable: false,
      //visible: false,
      url: process.env.PUBLIC_URL + "/testworld/ground.glb",
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
    },
    {
      type: "virtual",
      selectable: false,
      opacity: 0.2,
      url: process.env.PUBLIC_URL + "/testworld/hamam.glb",
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
    },
    // {
    //   type: "virtual",
    //   url: process.env.PUBLIC_URL + "/testworld/SCENE 4/TOWEL 1 S4.glb",
    //   selectable: false,
    //   position: [0, 0, 0],
    //   rotation: [0, 0, 0],
    //   scale: [1, 1, 1],
    //   description: ``,
    //   actions: {
    //     onLoad: {
    //       animations: [
    //         {
    //           // man entering
    //           // starts 0
    //           startAt: scene3delay,
    //           name: "Armature|Take 001|BaseLayer",
    //           duration: 39000,
    //           singleLoopDuration: 39000,
    //           path: [[0, 0, 0]],
    //         },
    //       ],
    //     },
    //   },
    // },
    // {
    //   type: "virtual",
    //   url: process.env.PUBLIC_URL + "/testworld/SCENE 4/3D ANC MAN 2 S4.glb",
    //   selectable: false,
    //   position: [0, 0, 0],
    //   rotation: [0, 0, 0],
    //   scale: [1, 1, 1],
    //   description: ``,
    //   actions: {
    //     onLoad: {
    //       animations: [
    //         {
    //           // man entering
    //           // starts 0
    //           startAt: scene3delay,
    //           name: "Bip02 S4|Take 001|BaseLayer.001",
    //           duration: 39000,
    //           singleLoopDuration: 39000,
    //           path: [[0, 0, 0]],
    //         },
    //       ],
    //     },
    //   },
    // },
    // {
    //   type: "virtual",
    //   url:
    //     process.env.PUBLIC_URL +
    //     "/testworld/SCENE 4/3D ANC MAN 2 S4 EXTRA.FBX.glb",
    //   selectable: false,
    //   position: [0, 0, 0],
    //   rotation: [0, 0, 0],
    //   scale: [1, 1, 1],
    //   description: ``,
    //   actions: {},
    // },
    // {
    //   type: "virtual",
    //   url: process.env.PUBLIC_URL + "/testworld/SCENE 4/3D ANC MAN 1 S4.glb",
    //   selectable: false,
    //   position: [0, 0, 0],
    //   rotation: [0, 0, 0],
    //   scale: [1, 1, 1],
    //   description: ``,
    //   actions: {
    //     onLoad: {
    //       animations: [
    //         {
    //           // man entering
    //           // starts 0
    //           startAt: scene3delay,
    //           name: "Bip01 S4|Take 001|BaseLayer",
    //           duration: 39000,
    //           singleLoopDuration: 39000,
    //           path: [[0, 0, 0]],
    //         },
    //       ],
    //     },
    //   },
    // },
    {
      type: "virtual",
      url: process.env.PUBLIC_URL + "/testworld/SCENE 3/3D GLOVE.glb",
      selectable: false,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
      actions: {
        onLoad: {
          animations: [
            {
              // man entering
              // starts 0
              startAt: scene3delay,
              name: "Bip04 GLOVE|Take 001|BaseLayer",
              duration: 83000,
              singleLoopDuration: 83000,
              path: [[0, 0, 0]],
            },
          ],
        },
      },
    },
    {
      type: "virtual",
      url: process.env.PUBLIC_URL + "/testworld/SCENE 3/3D ANC MAN 1 S3.glb",
      selectable: false,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
      actions: {
        onLoad: {
          animations: [
            {
              // man entering
              // starts 0
              startAt: scene3delay,
              name: "Bip01|Take 001|BaseLayer.001",
              duration: 83000,
              singleLoopDuration: 83000,
              path: [[0, 0, 0]],
            },
          ],
        },
      },
    },
    {
      type: "virtual",
      url: process.env.PUBLIC_URL + "/testworld/SCENE 3/3D ANC MAN 4 S3.glb",
      selectable: false,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
      actions: {
        onLoad: {
          animations: [
            {
              // man entering
              // starts 0
              startAt: scene3delay,
              name: "Bip04|Take 001|BaseLayer.004",
              duration: 83000,
              singleLoopDuration: 83000,
              path: [[0, 0, 0]],
            },
          ],
        },
      },
    },
    {
      type: "virtual",
      url: process.env.PUBLIC_URL + "/testworld/SCENE 3/3D COPPER BOWL.glb",
      selectable: false,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
      actions: {
        onLoad: {
          animations: [
            {
              // man entering
              // starts 0
              name: "3D COPPER BOWL|Take 001|BaseLayer",
              duration: 83000,
              singleLoopDuration: 83000,
              path: [[0, 0, 0]],
            },
          ],
        },
      },
    },
    {
      type: "virtual",
      url: process.env.PUBLIC_URL + "/testworld/SCENE 2/taksidiotisS2.glb",
      selectable: false,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
      actions: {
        onLoad: {
          animations: [
            {
              // man entering
              // starts 0
              name: "Bip01|Take 001|BaseLayer.002",
              duration: 33000,
              singleLoopDuration: 33000,
              path: [[0, 0, 0]],
            },
          ],
        },
      },
    },
    {
      type: "virtual",
      url: process.env.PUBLIC_URL + "/testworld/SCENE 1/taksidiotis.glb",
      selectable: false,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
      actions: {
        onLoad: {
          animations: [
            {
              // man entering
              // starts 0
              name: "Bip MAN 1|Take 001|BaseLayer",
              duration: 33000,
              singleLoopDuration: 33000,
              path: [[0, 0, 0]],
            },
          ],
        },
      },
    },
    {
      type: "virtual",
      url: process.env.PUBLIC_URL + "/testworld/SCENE 1/loutraris.glb",
      selectable: false,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
      actions: {
        onLoad: {
          animations: [
            {
              // man entering
              // starts 0
              name: "Bip MAN L|Take 001|BaseLayer.001",
              duration: 33000,
              singleLoopDuration: 33000,
              path: [[0, 0, 0]],
            },
          ],
        },
      },
    },
    {
      type: "virtual",
      url: process.env.PUBLIC_URL + "/testworld/SCENE 1/petseta.glb",
      selectable: false,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
      actions: {
        onLoad: {
          animations: [
            {
              // man entering
              // starts 0
              name: "3D PESHTEMAL|Take 001|BaseLayer",
              duration: 33000,
              singleLoopDuration: 33000,
              path: [[0, 0, 0]],
            },
          ],
        },
      },
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
        id: "006cb9aE-S324",
        pointId: 1,
        position: {
          x: -1.03,
          y: 43.05,
          z: 1.7,
        },
        heading: 9,
      },
      {
        id: "006cb9aE-S324",
        pointId: 2,
        position: {
          x: 6.33,
          y: 7.77,
          z: 1.7,
        },
        heading: 323,
      },
      {
        id: "006cb9aE-S324",
        pointId: 3,
        position: {
          x: 0.22,
          y: -1.36,
          z: 1.7,
        },
        heading: 89,
      },
      {
        id: "006cb9aE-S324",
        pointId: 4,
        position: {
          x: 8.36,
          y: -4.61,
          z: 1.7,
        },
        heading: 286,
      },
      {
        id: "006cb9aE-S324",
        pointId: 5,
        position: {
          x: 44.77,
          y: 35.64,
          z: 1.7,
        },
        heading: 318,
      },
    ],
  },
};
