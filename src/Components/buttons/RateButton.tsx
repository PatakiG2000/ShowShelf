import * as React from "react";
import Ratingform from "../../Layout/Ratingform";
import { useState } from "react";
import { Modal } from "react-overlays";

export interface IRateButtonProps {
  movieData: {};
}

export default function RateButton(props: IRateButtonProps) {
  const [showModal, setShowModal] = useState(false);

  const movieData = props.movieData;

  function handleClose() {
    setShowModal(false);
  }
  const renderBackdrop = (props: any) => (
    <div className="backdrop" {...props} />
  );

  return (
    <>
      <Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <Ratingform movieData={movieData}></Ratingform>
      </Modal>
      <button onClick={() => setShowModal(true)} className="btn">
        Rate
      </button>
    </>
  );
}
