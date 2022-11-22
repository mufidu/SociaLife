import React from 'react'
import Logo from '../../img/small_logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'
const LogoSearch = () => {
  return (
   <div className="LogoSearch">
       {/* <img src={Logo} alt="" style={{ width: '40px' }}/> */}
       <div className="Search">
           <input type="text" placeholder='Add friends' />
           <div className="s-icon">
               <UilSearch/>
           </div>
       </div>
   </div>
  )
}

export default LogoSearch