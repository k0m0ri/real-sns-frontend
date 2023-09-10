import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import './Topbar.css'

export default function Topbar() {
  return (
  <div className='topbarContainer'>
    <div className='topbarLeft'>
        <span className='logo'>SNS Mock</span>
    </div>
    <div className='topbarCenter'>
        <div className='searchbar'>
            <SearchIcon className='searchIcon'></SearchIcon>
            <input type="text" className='searchInput' placeholder='探し物は何ですか？' />
        </div>
    </div>
    <div className="topbarRight">
        <div className="topbarIconItems">
            <div className="topbarIconItem">
                <ChatIcon></ChatIcon>
               <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <NotificationsIcon></NotificationsIcon>
                <span className="topbarIconBadge">1</span>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className='topbarImg'/>
        </div>
    </div>
</div>
);
}
