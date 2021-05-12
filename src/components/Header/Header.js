import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import logoImage from '../../images/logo.png';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOption from '../../components/HeaderOption/HeaderOption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import avatarImage from '../../images/crescentpark.jpg'
import { auth } from '../../firebase';
import { logout} from '../../features/userSlice';
import { useDispatch} from 'react-redux';

function Header() {

    const dispatch = useDispatch();

    const logoutToApp = ()=>{
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src={logoImage} alt="Logo" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar={avatarImage} title="Logout" onclick={logoutToApp}/>
            </div>
        </div>
    )
}

export default Header
