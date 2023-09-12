import React, { useState } from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button, Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyModal from "./ReplyModal";

const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [openReplyModal,setOpenReplyModal] = useState(false);
  const handleOpenReplyModel = () => {
    setOpenReplyModal(true);
    console.log("Hii");
  }
  const handleCloseReplytModal = () => setOpenReplyModal(false);


  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log();
    handleClose();
  };

  const handleDeleteTweet = () => {
    console.log("delete tweeet");
    handleClose();
  };

  

  const handleCreateRetweet = ()=>{
    console.log("handle Create Retweet")
  }

  const handleLikeRetweet  = ()=>{
    console.log("handle Like tweet")
  }

  return (
    <React.Fragment>
      {/* <div className='flex item-center font-semibold text-gray-700 py-2'>
            <RepeatIcon />
            <p>You Retweet</p>

        </div> */}

      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate("/profile/${6}")}
          className="cursor-pointer"
          alt="username"
          src="https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-469.jpg"
        />

        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items items-center space-x-2">
              <span className="font-semibold">Pramod's</span>
              <span className="text-gray-600">@pramod_pgn . 5m</span>
              <img
                className="ml-2 w-5 h-5"
                src="https://w7.pngwing.com/pngs/267/59/png-transparent-blue-and-white-check-logo-illustration-verified-badge-logo-youtube-youtube-thumbnail.png"
              />
            </div>

            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="mt-2 ml-2">
            <div onClick={()=>navigate(`/twit/${3}`)} className="cursor-pointer">
                <p className="mb-2 p-0" style={{textAlign:'left'}}>Lets hangout somewhere</p>
                <img className="w-[28rem] border border-gray-400 p-5 rounded-md"
                 src="https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-469.jpg"
                 alt="" />

            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
                <div className="space-x-3 flex items-center text-gray-600">
                    <ChatBubbleOutlineIcon className="cursor-pointer" onClick={handleOpenReplyModel} /><p>43</p>
                </div>
                <div className={`${true?"text-pink-600":"text-gray-600"} space-x-3 flex items-center`}>
                    <RepeatIcon onClick={handleCreateRetweet} className="cursor-pointer" />
                    <p>54</p>
                </div>
                <div className={`${true?"text-pink-600":"text-gray-600"} space-x-3 flex items-center`}>
                   {true? <FavoriteIcon 
                   onClick={handleLikeRetweet} 
                   className="cursor-pointer"/> :<FavoriteBorderIcon
                   onClick={handleLikeRetweet} 
                   className="cursor-pointer"/> }
                    <p>54</p>
                </div>

                <div className={`space-x-3 flex items-center text-gray-600`}>
                    <BarChartIcon onClick={handleCreateRetweet} className="cursor-pointer" />
                    <p>504</p>
                </div>

                <div className={`space-x-3 flex items-center text-gray-600`}>
                    <FileUploadIcon onClick={handleCreateRetweet} className="cursor-pointer" />
                    
                </div>
                
            </div>

            
        </div>
        </div>

        


        
      </div>
      

        <ReplyModal  open={openReplyModal} handleClose={handleCloseReplytModal}/>

    </React.Fragment>
  );
};

export default TweetCard;
