import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";

export interface IProgressBarProps {
  progress: number;
}

//Progress majd a sliceba!!

export default function ProgressBar(props: IProgressBarProps) {

  return (
    <>
      <h3>{Math.ceil(props.progress)}</h3>
      <LinearProgress
        color={"primary"}
        variant="determinate"
        value={props.progress}
        sx={{
          height: "40px",
          backgroundColor: "green",
          borderRadius: 5,
          width: "50%",
          margin: "0 auto",
        }}
      />
    </>
  );
}