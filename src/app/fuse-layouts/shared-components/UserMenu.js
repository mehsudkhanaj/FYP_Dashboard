import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import i18next from 'i18next';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser, setUser, userLoggedOut } from 'app/auth/store/userSlice';
import history from '@history';
import { signedInDefaultRedirect, checkGimminie } from 'app/auth/store/loginSlice';
import ds from '../../services/DataService';
import { setProfileLoader } from 'app/auth/store/loadersSlice';

function UserMenu(props) {
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);

  const [userMenu, setUserMenu] = useState(null);

  React.useEffect(() => {
    let mounted = true;

    if (mounted) {
      // getData();
      console.log("usermenu useeffect");
      const data = localStorage.getItem('ghuid') ? JSON.parse(localStorage.getItem('ghuid')) : false;
      if (data) {
        dispatch(checkGimminie(data.roleid ? data.roleid : 0));
        dispatch(setUser(data));
      } else {
        // dispatch(checkGimminie(0));
        // dispatch(logoutUser());
      }
    }

    return () => mounted = false;
  }, []);
  
  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUserMenu(null);
  };

  return (
    <>
      <Button
        className="min-h-40 min-w-40 px-0 md:px-16 py-0 md:py-6"
        onClick={userMenuClick}
        color="inherit"
      >
        <div className="hidden md:flex flex-col mx-4 items-end">
          <Typography component="span" className="font-semibold flex">
            {user && user.data && user.data.displayName ? user.data.displayName : ''}
          </Typography>
          <Typography className="text-11 font-medium" color="textSecondary">
            {user && user.roleid && user.roleid != '' && user.roleid != 0 && `${user.roleid}`}
            {/* {user.role.toString()}
            {(!user.role || (Array.isArray(user.role) && user.role.length === 0)) && 'Guest'} */}
          </Typography>
        </div>

        {user && user.data && user.data.photoURL ? (
          <Avatar
            className="md:mx-4"
            alt="user photo"
          // src={user.data.photoURL}
          >
            <Icon color='inherit'>user</Icon>
          </Avatar>
        ) : (
          <Avatar className="md:mx-4">
            <Icon color='inherit'>account_circle</Icon>
            {/* {user && user.data && user.data.displayName ? user.data.displayName[0].toUpperCase() : ""} */}
          </Avatar>
        )}
      </Button>

      <Popover
        open={Boolean(userMenu)}
        anchorEl={userMenu}
        onClose={userMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: 'py-8',
        }}
      >
        <>
          <MenuItem onClick={() => dispatch(logoutUser())} role="button">
            <ListItemIcon className="min-w-40">
              <Icon>exit_to_app</Icon>
            </ListItemIcon>
            <ListItemText primary={i18next.t(`navigation:LOGOUT`)} />
          </MenuItem>
          {/* <MenuItem onClick={handleProfileChange} role="button">
            <ListItemIcon className="min-w-40">
              <Icon>person_add</Icon>
            </ListItemIcon>
            <ListItemText primary={i18next.t(`navigation:ADDUSER`)} />
          </MenuItem> */}
        </>
      </Popover>
    </>
  );
}

export default UserMenu;
