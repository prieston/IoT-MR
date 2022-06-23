import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";

export default (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      pointerEvents: "none",
      height: 380,
      transform: "translateZ(0px)",
      flexGrow: 1,
      flex: 1,
      zIndex: 10,
      width: "100%",
      height: "100%",
    },
    speedDial: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      "& .MuiSpeedDialAction-staticTooltip .MuiSpeedDialAction-staticTooltipLabel": {
        whiteSpace: "nowrap",
      },
      "& .MuiButtonBase-root.MuiFab-root.MuiSpeedDial-fab.MuiFab-primary": {
        width: 48,
        height: 48,
        "& .MuiFab-label": {
          display: "initial",
        },
        "&:focus": {
          outline: "none",
        },
      },
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="Action Tooltip"
        className={classes.speedDial}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {props.actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
};
