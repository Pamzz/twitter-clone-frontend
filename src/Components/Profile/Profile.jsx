import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Tab, Tabs } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TweetCard from "../HomeSection/TweetCard";
import ProfileModal from "./ProfileModal";

const Profile = () => {
    const navigate = useNavigate();
    const [tabValue, setTabValue] = useState("1");
    const [openProfileModal,setOpenProfileModal] = useState(false);
    const handleOpenProfileModel = () => setOpenProfileModal(true);
    const handleClose = () => setOpenProfileModal(false);
    
    const handleTabChange = (event, newValue) =>{
        setTabValue(newValue)
        if(newValue===4){
            console.log("likes tweets");
        }
        else if(newValue ===1){
            console.log("users twits");
        }
    }


  
  const handleBack = () => navigate(-1);
  

  const handleFollowUser = () => {
    console.log("handle FollowUser");
  };

  return (
    <div>
      <section className={`bg-white z-50 flex items-center sticky top-0 bg-pacity-95`}>
        <div>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        </div>
        
        <div>
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          Pramod Nagaral
        </h1>
        </div>
        
      </section>

      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2023/08/02/14/21/cloud-8165401_640.jpg"
        />
      </section>

      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="Pramod"
            src="https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-469.jpg"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />

          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>

            <div style={{textAlign:'left'}} className="mt-1">
                <div className="flex items-center">
                    <h1 className="font-bold text-lg">Pramod Nagaral </h1>
                    {true &&(<img
                className="ml-2 w-5 h-5 mt-1.5"
                src="https://w7.pngwing.com/pngs/267/59/png-transparent-blue-and-white-check-logo-illustration-verified-badge-logo-youtube-youtube-thumbnail.png"
                alt=""/>)}

                </div>

                <h1 className="text-gray-500">@Pramod_pgn</h1>
            


            <div className="mt-2 space-y-3">
                <p>Hello, I am Travel Vlogger you will find good places to experience vertually</p>
                <div className="py-1 flex space-x-5">
                    <div className="flex items-center text-gray-500">
                        <BusinessCenterIcon />
                        <p className="ml-2">Education</p>
                    </div>

                    <div className="flex items-center text-gray-500">
                        <LocationOnIcon />
                        <p className="ml-2">Indian</p>
                    </div>

                    <div className="flex items-center text-gray-500">
                        <CalendarMonthIcon />
                        <p className="ml-2">Joined Aug 10</p>
                    </div>
                </div>

                <div className="flex items-center space-x-5">
                <div className="flex items-center space-x-1 font-semibold">
                        <span>165</span>
                        <span className="text-gray-500">Following</span>
                    </div>

                    <div className="flex items-center space-x-1 font-semibold">
                        <span>10k</span>
                        <span className="text-gray-500">Followers</span>
                    </div>
                </div>

            </div>
            </div>

      </section>

      <section className="mt-3 ml-2">
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Tweets" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
            {[1,1,1,1,1].map((tweet)=><TweetCard />)}

        </TabPanel>
        <TabPanel value="2">users replies</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>
      </section>

    <section>
     <ProfileModal handleClose={handleClose} open={openProfileModal}/>
    </section>
      
    </div>
  );
};

export default Profile;
