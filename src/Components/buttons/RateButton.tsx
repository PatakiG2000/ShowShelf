import * as React from "react";
import { useDispatch } from "react-redux";
import { handleModal } from "../../features/toplist/modalHandler";
import { MovieData } from "../../interfaces/interfaces";

export interface IRateButtonProps {
  movieData: MovieData;
}

export default function RateButton({ movieData }: IRateButtonProps) {
  const dispatch = useDispatch();

  function handleOpen() {
    dispatch(
      handleModal({
        open: true,
        movieData,
      })
    );
  }

  return (
    <>
      <button onClick={() => handleOpen()} className="btn">
        Rate
      </button>
    </>
  );
}
