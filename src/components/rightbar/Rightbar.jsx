import React from 'react'
import Online from '../online/Online'
import { Users } from '../../dummyData'
import './Rightbar.css'

export default function Rightbar() {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
            <div className="eventContainer">
                <img src="/assets/star.png" alt="" className='starImg'/>
                <span className='eventText'>
                    <b>フォロワー限定</b>イベント開催中！
                </span>
            </div>
            <img src="/assets/event.jpeg" alt="" className='eventImg'/>
            <h4 className='rightbarTitle'>オンラインの友達</h4>
            <ui className="rightbarFriendList">
                {Users.map((user) => (
                    <Online user={user} key={user.id} />
                ))}
            </ui>
            <p className='promotionTitle'>プロモーション広告</p>
            <img src="/assets/promotion/promotion1.jpeg" alt="" className='rightbarPromotionImg'/>
            <p className='promotionName'>ショッピング</p>
            <img src="/assets/promotion/promotion2.jpeg" alt="" className='rightbarPromotionImg'/>
            <p className='promotionName'>カーショップ</p>
            <img src="/assets/promotion/promotion3.jpeg" alt="" className='rightbarPromotionImg'/>
            <p className='promotionName'>クリエイティブ株式会社</p>
        </div>
    </div>
  )
}
