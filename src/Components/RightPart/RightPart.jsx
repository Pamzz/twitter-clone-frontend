import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SubscriptionModal from "../SubscriptionModal/SubscriptionModal";

const RightPart = () => {


  const [openSubscriptionModal, setOpenSubscriptionModal] = React.useState(false);
  const handleOpenSubscriptionModal = () => setOpenSubscriptionModal(true);
  const handleCloseSubscriptionModal = () => setOpenSubscriptionModal(false);

  const handleChangeTheme = () => {
    console.log("handleChangeTheme");
  };

  return (
    <div className="py-5 sticky top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className="text-gray-500" />
        </div>

        <Brightness4Icon
          className="ml-3 cursor-pointer"
          onClick={handleChangeTheme}
        />
      </div>

      <section className="my-5">
        <h1 className="text-xl font-bold">Get varified</h1>
        <h1 className="font-bold my-2">Subscribe to unlock new features</h1>
        <Button
        onClick={handleOpenSubscriptionModal}
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
        >
          Get verified
        </Button>
      </section>

      <section className="mt-7 space-y-5">
        <h1 className="font-bold text-xl py-1">What's Happenning</h1>
        <div>
          <p className="text-sm">FIFA Women's World Cup . LIVE 
          <LiveTvIcon className="ml-4 mb-1"/>
          </p>
          <p className="font-bold">France vs Morocco</p>
        </div>

        {[1,1,1,1].map((item) => <div className="flex justify-between w-full">
          <div>
            <p>Entertinment - Trending</p>
            <p className="font-bold">@The Marvels</p>
            <p>34.3k tweets</p>

            
          </div>
          <MoreHorizIcon className="cursor-pointer"/>

          
        </div>)}
        
      </section>

      <SubscriptionModal open={openSubscriptionModal} handleClose={handleCloseSubscriptionModal}/>
    </div>
  );
};

export default RightPart;
