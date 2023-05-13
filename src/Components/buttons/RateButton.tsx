import * as React from "react";
import Ratingform from "../../Layout/Ratingform";
import { useState } from "react";
import { Modal } from "react-overlays";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { handleModal } from "../../features/toplist/modalHandler";

export interface IRateButtonProps {
  movieData: {
    title: string;
    id: number;
    year: number;
    genre: string;
    time: number;
    img: string;
  };
}

export default function RateButton(props: IRateButtonProps) {
  const dispatch = useDispatch();
  const movieData = props.movieData;

  function handleOpen() {
    dispatch(handleModal({ open: true, movieData }));
  }

  return (
    <>
      <button onClick={() => handleOpen()} className="btn">
        Rate
      </button>
    </>
  );
}
