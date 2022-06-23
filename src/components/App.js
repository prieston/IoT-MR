import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import World from "../components/world";
import Controls from "../components/controls";

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b34f0b",
    },
    secondary: {
      main: "#323228",
    },
  },
});

function App() {
  const [renderVideo, setRenderVideo] = React.useState(false);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <World renderVideo={renderVideo} />
        <Controls
          renderVideo={renderVideo}
          setRenderVideo={(bool) => setRenderVideo(bool)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
