import React from 'react'
import ChatList from '../../components/ChatList/ChatList'
import ChatWindow from '../../components/ChatWindow/ChatWindow'
import Dashboard from '../../components/Dashboard/Dashboard'
// import PostSide from '../../components/PostSide/PostSide'
// import ProfileSide from '../../components/profileSide/ProfileSide'
// import RightSide from '../../components/RightSide/RightSide'
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
        <Dashboard/>
        <ChatList/>
        <ChatWindow/>
    </div>
  )
}

export default Home