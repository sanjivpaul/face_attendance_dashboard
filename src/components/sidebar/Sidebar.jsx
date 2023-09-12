import React from 'react'
import "./sidebar.css"
import {
    Timeline, PersonOutline, StorefrontOutlined, MailOutlineOutlined, DynamicFeedOutlined, ChatBubbleOutlineOutlined, HomeOutlined, CreateOutlined, AccountCircleOutlined, ExitToApp, InsertDriveFileOutlined,
} from "@material-ui/icons"
import { Link } from 'react-router-dom'


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                {/* dashboard */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className='link'>
                            <li className="sidebarListItem activate">
                                <HomeOutlined color='primary' className='sidebarIcon' />
                                Home
                            </li>
                        </Link>
                    </ul>
                </div>
                {/* Quick menu */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Faculty</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className='link'>
                            <li className="sidebarListItem">
                                <PersonOutline color="secondary" className='sidebarIcon' />
                                Faculty
                            </li>
                        </Link>

                        <Link to="/newUser" className='link'>
                            <li className="sidebarListItem">
                                <CreateOutlined color="primary" className="sidebarIcon" />

                                Create
                            </li>
                        </Link>

                        <Link to="products" className="link">
                            <li className="sidebarListItem">
                                <StorefrontOutlined className='sidebarIcon' />
                                Products
                            </li>
                        </Link>
                        {/* <li className="sidebarListItem">
                            <AttachMoneyOutlined className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentOutlined
                                className='sidebarIcon' />
                            Reports
                        </li> */}
                    </ul>
                </div>
                {/* Notification */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineOutlined className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedOutlined className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineOutlined
                                className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                {/* Staff */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Admin</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <AccountCircleOutlined className='sidebarIcon' />
                            Profile
                        </li>
                        <Link to="/login" className="link sidebarListItem">
                            {/* <li className="sidebarListItem"> */}
                            <InsertDriveFileOutlined className='sidebarIcon'/>
                            Login
                            {/* </li> */}
                        </Link>
                        <li className="sidebarListItem">
                            <ExitToApp className='sidebarIcon' />
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
