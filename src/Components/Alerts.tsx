import * as React from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import useControlledShows from "../Hooks/useControlledShows";
import useAlerts from "../Hooks/useAlerts";

export interface IAlertsProps {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Alerts(props: IAlertsProps) {
  //meg kell nézni hogy lesz kiszedve az ami változik
  const alert = useAlerts()


  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

  };


  return (
    <Snackbar open={alert} autoHideDuration={0} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {/*  {`Succesfully added to your ${where}!`} */}
        {alert}
      </Alert>
    </Snackbar>
  );
}
