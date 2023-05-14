import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { handleModal } from "../features/toplist/modalHandler";
import Ratingform from "../Layout/Ratingform";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",

  boxShadow: 24,
};

export default function BasicModal(props) {
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(handleModal({ open: false, movieData: {} }));
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
