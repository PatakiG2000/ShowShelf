import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";

export interface IProgressBarProps {
  progress: number;
  epTitle: string;
}

export default function ProgressBar(props: IProgressBarProps) {
  //maybe a hookot használni itt?

  return (
    <div className="progress-bar">
      <div className="progress-info">
        <p>Your upcoming episode: {props.epTitle}</p>
        <h3>{Math.ceil(props.progress)}%</h3>
      </div>

      <LinearProgress
        color={"secondary"}
        variant="determinate"
        value={props.progress}
        sx={{
          height: "10px",
          backgroundColor: "grey",
          borderRadius: "4px",
          width: "100%",
          margin: "0 auto",
        }}
      />
    </div>
  );
}
