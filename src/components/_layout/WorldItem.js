import React from "react";
import Drawer from "@material-ui/core/Drawer";
import readWorldData from "../../helpers/readWorldData";

export default function WorldItem(props) {
  const [state, setState] = React.useState({ selectedId: null });
  return (
    <React.Fragment>
      {props.item.map((w) => {
        if (w.id == 0) {
          return <React.Fragment key={w.id} />;
        }
        return (
          <div
            key={w.id}
            className="world-item"
            style={{
              border:
                w.id === state.selectedId
                  ? "1px solid #b34f0b"
                  : "1px solid #fff",
            }}
            onClick={() => {
              setState({ selectedId: w.id });
              if (
                window.iotmr.currentWorldId &&
                w.id !== window.iotmr.currentWorldId
              ) {
                window.iotmr.world[window.iotmr.currentWorldId].map((o) => {
                  if (o.object) {
                    o.object.visible = false;
                  }
                });
              }
              window.iotmr.currentWorldId = w.id;
              window.iotmr.center = w.meta.coordinates;
              if (window.iotmr.world.hasOwnProperty(w.id)) {
                window.iotmr.world[window.iotmr.currentWorldId].map((o) => {
                  if (o.object) {
                    o.object.visible = true;
                  }
                });
              } else {
                (async function() {
                  await readWorldData(w.id);
                })();
              }
            }}
          >
            {w.meta.thumbnail && (
              <img src={w.meta.thumbnail} sty={{ objectFit: "contain" }} />
            )}
            <label>{w.name}</label>
            <p>{w.description}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
}
