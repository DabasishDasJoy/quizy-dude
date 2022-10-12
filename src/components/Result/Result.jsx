import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import { CorrectAnsCountContext } from "../../Context/CorrectAnsContext";
import { OpenResultModalContext } from "../../Context/OpenResultModal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

const Result = ({ total }) => {
  let [correctAns, setCorrectAns] = useContext(CorrectAnsCountContext);

  const [open, setOpen] = useContext(OpenResultModalContext);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              class="text-3xl font-bold text-center text-green-500"
            >
              <FontAwesomeIcon className="text-orange-400" icon={faTrophy} />{" "}
              Congrats!
            </Typography>
            <Typography
              id="transition-modal-description"
              class="text-2xl text-center mt-5 text-[#111D5E] font-medium"
              sx={{ mt: 2 }}
            >
              You got <span className="text-[#FA4729]">{correctAns}</span> out
              of {total}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Result;
