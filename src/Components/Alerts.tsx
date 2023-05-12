import * as React from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import useControlledShows from "../Hooks/useControlledShows";

export interface IAlertsProps {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Alerts(props: IAlertsProps) {
  //meg kell nézni hogy lesz kiszedve az ami változik
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  //holding so can be checked if a removal or a adding happens
  const [length, setLength] = React.useState(0);
  //holding so can be checked the place of the removal orr adding ha a where nem lenne jó valamiért
  const [place, setPlace] = React.useState("");
  const [tracklistItems, watchlist, toplist, allShows, where] =
    useControlledShows(0);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 200);
  }, [allShows]);

  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {`Succesfully added to your ${where}!`}
      </Alert>
    </Snackbar>
  );
}
