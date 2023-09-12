import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Height } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

export default function SubscriptionModal({open,handleClose}) {

  const [plan, setPlan] = React.useState("Anually");

  const features = [
    "All Users shall use the Services in accordance with these Terms and Conditions. ",
    "If there are Separate Terms and Conditions applicable to the Services, Users shall also comply.",
    "Submitted Contents means Contents that Users have submitted, transmitted or uploaded on or to the Services.",
    "places top priority on the privacy of its Users.",
    "When the Services cannot be provided due to force majeure such as an accident (fire, power outage, etc.), act of God, war, riot, labor dispute;"
  ];

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center space-x-3">
            <IconButton onClick={handleClose} aria-label="delete">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex justify-center py-10">
            <div className="w-[80%] space-y-10 ">
              <div className="p-5 rounded-md flex items-center justify-between shadow-lg ">
                <h1 className="text-lg pr-5">
                  Blue subscriber with verified phone number will get a blue
                  check mark once approved
                </h1>
                <img
                  className="w-24 h-24"
                  src="https://cdn-icons-png.flaticon.com/128/5249/5249095.png"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between border rounded-full m-3 px-5 py-3 border border-gray-500">
            <div>
              <span
                onClick={() => setPlan("Anually")}
                className={`${
                  plan === "Anually" ? "text-black" : "text-gray-400"
                } cursor-pointer`}
              >
                Anually
              </span>

              <span className="text-green-500 text-sm ml-5">SVAE 15%</span>
            </div>
            <p
              onClick={() => setPlan("monthly")}
              className={`${
                plan === "monthly" ? "text-black" : "text-gray-400"
              } cursor-pointer`}
            >
              Monthly
            </p>
          </div>
          <div className="m-10">
            {features.map((item) => <div className="flex items-center space-x-5 mt-1">
              <FiberManualRecordIcon sx={{ width: "7px", Height: "7px" }} />
              <p className="text-xs">{item}</p>
            </div>)}
          </div>

          <div className="cursor-pointer flex justify-center py-3 m-5 rounded-full bg-gray-800 text-white">

            <span className="line-through italic">₹ 7,500.00</span>
            <span className="px-5">₹ 6,500.00/yearly</span>

          </div>

        </Box>
      </Modal>
    </div>
  );
}
