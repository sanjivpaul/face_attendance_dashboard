import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import Login from '../../pages/login/Login';
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">face attendance system</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <Link to="/login">
                        <div>
                            <img src="https://4.bp.blogspot.com/-tmLzHXAtKD0/UrT_ZW0URjI/AAAAAAAACZA/7yUxFzGytrE/s1600/Babies+Pictures+With+Cute+Smile+Baby+Images.jpg" alt="" className="topAvatar" />
                        </div>

                    </Link>
                </div>
            </div>
        </div>
    )
}
