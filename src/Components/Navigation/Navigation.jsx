import * as React from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Menu } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import MenuItem from "@mui/material/MenuItem";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log();
    handleClose();
  };

  const handleLogout = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <img
            src="https://about.twitter.com/content/dam/about-twitter/x/large-x-logo.png.twimg.1920.png"
            height={30}
            width={30}
          />
        </div>

        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              className="cursor-pointer flex space-x-3 items-center"
              onClick={() =>
                item.title === "Profile"
                  ? navigate(`profile/${5}`)
                  : navigate(item.path)
              }
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1e88e5",
            }}
            variant="contained"
          >
            Tweet
          </Button>
        </div>

        
      </div>

      {/* <div class="flex space-x-3">
            <span>Hello</span>
            <span>@pramod_pgn</span>
            <span>@pramod_pgn</span>
        </div> */}

      <div className="flex">
        <div className="flex space-x-3">
          <Avatar
            alt="username"
            src="https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-469.jpg"
          ></Avatar>

          <div>
            <span >Pramod Nagaral</span>
            <span className="opacity-70">@pramod_pgn</span>
          </div>

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
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
