import React from 'react'
import CloseFriend from '../closeFriend/CloseFriend';
import './Sidebar.css'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import { Users } from '../../dummyData';


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <HomeIcon className='sidebarIcon'></HomeIcon>
            <span className='sidebarListItemText'>ホーム</span>
          </li>
          <li className='sidebarListItem'>
            <SearchIcon className='sidebarIcon'></SearchIcon>
            <span className='sidebarListItemText'>検索</span>
          </li>
          <li className='sidebarListItem'>
            <NotificationsIcon className='sidebarIcon'></NotificationsIcon>
            <span className='sidebarListItemText'>通知</span>
          </li>
          <li className='sidebarListItem'>
            <MessageIcon className='sidebarIcon'></MessageIcon>
            <span className='sidebarListItemText'>メッセージ</span>
          </li>
          <li className='sidebarListItem'>
            <BookmarkIcon className='sidebarIcon'></BookmarkIcon>
            <span className='sidebarListItemText'>ブックマーク</span>
          </li>
          <li className='sidebarListItem'>
            <PersonIcon className='sidebarIcon'></PersonIcon>
            <span className='sidebarListItemText'>プロフィール</span>
          </li>
          <li className='sidebarListItem'>
            <SettingsIcon className='sidebarIcon'></SettingsIcon>
            <span className='sidebarListItemText'>設定</span>
          </li>
        </ul>
        <hr className='sidebarHr' />
        <ul className='sidebarFriendList'>
          {Users.map((user) => (
            <CloseFriend user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
