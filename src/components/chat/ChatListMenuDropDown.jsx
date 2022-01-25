import { useState, useContext } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { GoogleLogout } from "react-google-login";
import { AccountContext } from "../../context/AccountProvider";
// import { UserContext } from '../../context/UserProvider';

// import { clientId } from '../../constants/data';

//components
// import InfoDrawer from "../../drawer/Drawer";

const useStyle = makeStyles({
  menuItem: {
    fontSize: 14,
    padding: "15px 60px 5px 24px",
    color: "#4A4A4A",
  },
  logout: {
    border: "none!important",
    boxShadow: "none!important",
    "& > *": {
      padding: "0px!important",
    },
  },
});

const ChatListMenuDropDown = () => {
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openDrawer, setOpenDrawer] = useState(false);

  const {
    setAccount,
    setShowloginButton,
    showlogoutButton,
    setShowlogoutButton,
  } = useContext(AccountContext);
  //   const { setPerson } = useContext(UserContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowlogoutButton(false);
    setShowloginButton(true);
    setAccount("");
    // setPerson({});
  };

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      <MoreVertIcon onClick={handleClick} />
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        // style={{ borderRadius: "50%" }}
      >
        <MenuItem
          className={classes.menuItem}
          onClick={() => {
            handleClose();
            toggleDrawer();
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          onClick={() => {
            handleClose();
          }}
        >
          {showlogoutButton ? (
            <GoogleLogout
              clientId={"clientId"}
              buttonText="Logout"
              onLogoutSuccess={onSignoutSuccess}
              className={classes.logout}
            ></GoogleLogout>
          ) : null}
        </MenuItem>
      </Menu>
      {/* <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} /> */}
    </>
  );
};

export default ChatListMenuDropDown;
