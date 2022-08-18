export default {
  id: "006cb9aE-S32A",
  name: "World IoT",
  description: "",
  actions: [
    {
      name: "Show/Hide Virtual",
      run: () => {
        window.iotmr.world[window.iotmr.currentWorldId].map((item) => {
          if (item.type === "virtual") {
            item.object.visible = !item.object.visible;
          }
        });
      },
    },
    {
      name: "Lights On",
      run: () => {
        const x = window.setInterval(() => {
          if (
            window.iotmr.world[window.iotmr.currentWorldId][0].runtimeInfo
              .animationIndex == 2
          ) {
            window.clearInterval(x);
            fetch(`http://localhost:3000/light-on`, {
              method: "GET",
            }).then((data) => console.log("ON"));
          }
        }, 500);
      },
    },
    {
      name: "Lights off",
      run: () => {
        const x = window.setInterval(() => {
          if (
            window.iotmr.world[window.iotmr.currentWorldId][0].runtimeInfo
              .animationIndex == 2
          ) {
            window.clearInterval(x);
            fetch(`http://localhost:3000/light-off`, {
              method: "GET",
            }).then((data) => console.log("OFF"));
          }
        }, 500);
      },
    },
  ],
  content: [
    {
      type: "mapped",
      url: process.env.PUBLIC_URL + "/batler.glb",
      position: [0.5, 0, 0.5], //position y is height
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      selectable: true,
      smoothRotation: true,
      actions: {
        onLoad: {
          animations: [
            {
              name: "Rig|idle",
              path: [
                [0.5, 0, 0.5], //y is the height
                [0.5, 0, 0.5], //y is the height
              ],
              singleLoopDuration: 6000,
              duration: 6000,
            },

            {
              name: "Rig|walk",
              path: [
                [0.5, 0, 0.5], //y is the height
                [1.3, 0, -1.5], //y is the height
              ],
              singleLoopDuration: 1500,
              speed: 2,
              units: "km/h",
            },
            {
              name: "Rig|idle",
              path: [
                [1.3, 0, -1.5], //y is the height
                [1.3, 0, -1.5], //y is the height
              ],
              singleLoopDuration: 3000,
              duration: 3000,
            },
            {
              name: "Rig|walk",
              path: [
                [1.3, 0, -1.5], //y is the height
                [0.5, 0, 0.5], //y is the height
              ],
              singleLoopDuration: 1500,
              speed: 2,
              units: "km/h",
            },
            {
              name: "Rig|idle",
              path: [
                [0.5, 0, 0.5], //y is the height
                [0.5, 0, 0.5], //y is the height
              ],
              singleLoopDuration: 6000,
              duration: 6000,
            },
          ],
        },
        onSelect: {
          animations: [
            {
              name: "Rig|idle",
              singleLoopDuration: 6000,
              lookAt: "camera",
              duration: Infinity,
            },
          ],
        },
      },
      description: `<iframe
      style="
        width: 100%;
        height: 100%;
        border:none;"
      src="${process.env.PUBLIC_URL}/templates/switch.html"></iframe>`,
    },
    {
      type: "virtual",
      ground: false,
      url: process.env.PUBLIC_URL + "/myhouse.glb",
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
    },
  ],
  meta: {
    authors: [
      { firstName: "Konstantinos", lastName: "Evanggelidis" },
      { firstName: "Georgios", lastName: "Evanggelidis" },
      { firstName: "Theodoros", lastName: "Kaskalis" },
    ],
    thumbnail: `${process.env.PUBLIC_URL}/worldThree-Thumbnail.png`,
    coordinates: [0, 0, 0],
    observationPoints: [
      {
        id: "006cb9aE-S32A",
        pointId: 1,
        position: {
          x: 2.5,
          y: 1.3, //should be negative
          z: 1.8, //this is the height
        },
        heading: 260,
      },
    ],
  },
};
