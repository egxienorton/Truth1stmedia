import React, { Fragment, useState } from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import { Link } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
      
    },
    {
        id: 2,
        title: 'About',
        link: '/about',
      
    },
    {
        id: 1,
        title: 'Anty Ecosystem',
        link: 'https://www.antishifty.com',
        external: true,
      
    },
    {
        id: 6,
        title: 'Merch Store',
        link: '/merch-store',
        // submenu: [
        //     {
        //         id: 61,
        //         title: 'Archive',
        //         link: '/blog'
        //     },
        //     {
        //         id: 62,
        //         title: 'Contact Us',
        //         link: '/contact'
        //     },
        //     {
        //         id: 63,
        //         title: 'Shop',
        //         link: '/shop'
        //     },
        //     {
        //         id: 64,
        //         title: 'Shop Single',
        //         link: '/product-single/1'
        //     },
        //     {
        //         id: 65,
        //         title: 'Cart',
        //         link: '/cart'
        //     },
        //     {
        //         id: 66,
        //         title: 'Checkout',
        //         link: '/checkout'
        //     },
        //     {
        //         id: 67,
        //         title: '404',
        //         link: '/404'
        //     },
        //     {
        //         id: 68,
        //         title: 'Login',
        //         link: '/login'
        //     },
        // ]
    },
    {
        id: 7,
        title: 'Dao',
        link: '/dao',
    },
    {
        id: 8,
        title: 'Reports',
        link: '/report',
    },
    {
        id: 9,
        title: 'Donations',
        link: '/donations',
    },
    

]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null}  key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                          <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    // : <Link className="active"
                                    //     to={item.link}>{item.title}</Link>
                                    : item.external ? (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="active"
                                        >
                                            {item.title}
                                        </a>
                                    ) : (
                                        <Link onClick={ClickHandler} className="active" to={item.link}>
                                            {item.title}
                                        </Link>
                                    )
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;