import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './HeaderOption.css';

function HeaderOption({avatar, Icon, title, onclick}) {

    const user = useSelector(selectUser);
    return (
        <div className="headerOption" onClick={onclick}>
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && <Avatar className="headerOption__icon" src={user?.photoUrl}></Avatar>}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
  