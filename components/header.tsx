import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {

    return(
        <header id="header">
            {/* normal header */}
            <div className="header header-1 d-none d-lg-block js-header-1">
                    <div className="header__bar">
                        <div className="wrap wrap--w1790">
                            <div className="container-fluid">
                                <div className="header__content">
                                    <div className="logo">                            
                                        <Image  
                                            src="/images/cns-icon-152.png"
                                            width="60"
                                            height="60"
                                            alt="CNSPRO"
                                        />
                                        <span>CNSPRO</span>
                                    </div>

                                    <div className="header__content-right">
                                        <nav className="header-nav-menu">
                                            <ul className="menu nav-menu">
                                                <li className="menu-item menu-item-has-children">
                                                    <Link href="/">
                                                        <a>Home</a>
                                                    </Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link href="/about-us">
                                                        <a>about</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                        {/* social links */}
                                        <div className="header-social">
                                            <ul className="list-social">
                                                <li className="list-social__item">
                                                    <a className="ic-fb" href="#">
                                                        <i className="zmdi zmdi-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-social__item">
                                                    <a className="ic-insta" href="#">
                                                        <i className="zmdi zmdi-instagram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            {/* mobile header */}
            <div className="header-mobile d-block d-lg-none">
                <div className="header-mobile__bar">
                    <div className="container-fluid">
                        <div className="header-mobile__bar-inner">
                            <a className="logo" href="index.html">
                                <img src="/images/cns-icon-76.png" alt="CNSPRO" />
                            </a>
                            <button className="hamburger hamburger--slider float-right" type="button">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <nav className="header-nav-menu-mobile">
                    <div className="container-fluid">
                        <ul className="menu nav-menu menu-mobile">
                            <li className="menu-item menu-item-has-children">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="/about-us">about</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header