import React from 'react'
import "./_header.scss"

import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"

const Header = ({ handleToggleSidebar }) => {
    return (
        <div className='header'>
            <FaBars
                className='header__menu'
                size={26}
                onClick={() => handleToggleSidebar()}
            />
            <img src="https://www.freepnglogos.com/uploads/youtube-logo-red-hd-13.png" alt="youtube logo red hd" class="header__logo" />
            <form>
                <input type="text" placeholder='Search' />
                <button type='submit'>
                    <AiOutlineSearch size={22} />
                </button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="avatar" />
            </div>
        </div>
    )
}

export default Header

