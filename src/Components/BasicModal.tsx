import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { handleModal } from "../features/toplist/modalHandler";
import Ratingform from "../Layout/Ratingform";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  boxShadow: 24,
};

export default function BasicModal() {
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(handleModal({ open: false, movieData: { id: 0 } }));
  }
  const open = useSelector(
    (state: { value: any }) => state?.modalHandler?.value.isOpen
  );

  const movieData = useSelector(
    (state: { value: any }) => state?.modalHandler?.value.movieData
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Ratingform movieData={movieData} />
        </Box>
      </Modal>
    </div>
  );
}
