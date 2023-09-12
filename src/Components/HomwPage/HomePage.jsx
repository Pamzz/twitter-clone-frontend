import { Grid } from "@mui/material";
import React from "react";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import RightPart from "../RightPart/RightPart";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import TwitDetails from "../TweetDetails/TwitDetails";

const HomePage = () => {
  return (
    <Grid container flex xs={12} className="mt-5 px-5 lg:px-36">
      <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
        <Navigation />
        {/* <p className='text-center'>left part</p> */}
      </Grid>

      <Grid
        item
        xs={12}
        lg={6}
        className="px-5 lg:px-9 hidden lg:block w-full relative"
      >
        <Routes>
          <Route path="/" element={<HomeSection/>}> </Route>
          <Route path="/home" element={<HomeSection/>}> </Route>
          <Route path="/profile/:id" element={<Profile/>}> </Route>
          <Route path="/twit/:id" element={<TwitDetails/>}> </Route>
        </Routes>
      </Grid>

      <Grid
        item
        xs={0}
        lg={3}
        style={{ textAlign: "left" }}
        className="hidden lg:block pl-8 w-full relative"
      >
        <RightPart />
      </Grid>
    </Grid>
  );
};

export default HomePage;