import './MyNav.css'
import { FaTh } from "react-icons/fa";
import  logo  from "../../assets/images/logo-2.png"
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MyNav() {
    
    // State to track the active link
    const [activeLink, setActiveLink] = useState(null);
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    //    Function to toggle the sidebar
    //   const toggleSidebar = () => {
    //     setIsSidebarOpen(!isSidebarOpen);
    //   };

    //// Function to open the sidebar
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    // Function to close the sidebar
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    // Define the styles for the sidebar based on its open/closed state
    const sidebarStyle = {
        transform: isSidebarOpen ? 'translateX(0%)' : 'translateX(-150%)',
        maxHeight: '100vh', // Add maxHeight here
        overflowY: 'auto', // Add overflowY here
    };

    // Function to update the active link
    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };
    
    useEffect(() => {
        // Extract the route from the current location and set it as the active link
        const currentRoute = location.pathname.substring(1); // Remove the leading slash
        setActiveLink(currentRoute);
    }, [location]);

    /***********Test ************ */
    // useEffect(() => {
    // // Read the active link from local storage when the component mounts
    // const storedActiveLink = localStorage.getItem('activeLink');
    
    // // If a stored active link is found, set it as the initial state
    // if (storedActiveLink) {
    //     setActiveLink(storedActiveLink);
    // } else {
    //   // Otherwise, set the active link based on the current route
    //   const currentRoute = location.pathname.substring(1); // Remove the leading slash
    //   setActiveLink(currentRoute || 'home'); // Set to 'home' if no route is present
    // }
    // }, [location]);

    // // Update the active link in local storage whenever it changes
    // useEffect(() => {
    //     localStorage.setItem('activeLink', activeLink);
    // }, [activeLink]);

    return (
        <>
            <div className="logo-respnsive">
                <Link to="home" className='logo-top-img'>
                    <img src={logo} alt='logo-img'/>
                </Link>
            </div>

            {/* Main Nav */}
            <div className="navbar">
                <div className="container">
                    <div className="nav-content">
                        <div className="nav-logo">
                            <Link to="home" >
                                <img className='main-logo' src={logo} alt="logo-img" />
                            </Link>
                        </div>
                        <div className="navbar-collapsee">
                            <ul>
                                <li>
                                    <Link to="/home" 
                                    // onClick={() => setActiveLink('home')} => Test local
                                    onClick={() => handleSetActiveLink('home')} 
                                    className={activeLink === 'home' ? 'active-link' : ''}
                                    >الرئيسية
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/we-are" 
                                    onClick={() => handleSetActiveLink('we-are')} 
                                    className={activeLink === 'we-are' ? 'active-link' : ''}
                                    >من نحن
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/list-food" 
                                    onClick={() => handleSetActiveLink('list-food')} 
                                    className={activeLink === 'list-food' ? 'active-link' : ''}
                                    >قائمة الطعام
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/branches" 
                                    onClick={() => handleSetActiveLink('branches')} 
                                    className={activeLink === 'branches' ? 'active-link' : ''}
                                    >فروعنا
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/gallery" 
                                    onClick={() => handleSetActiveLink('gallery')} 
                                    className={activeLink === 'gallery' ? 'active-link' : ''}
                                    >معرض الصور
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" 
                                    onClick={() => handleSetActiveLink('contact')} 
                                    className={activeLink === 'contact' ? 'active-link' : ''}
                                    >اتصل بنا
                                    </Link>
                                </li>
                            </ul>
                            <button className='btn-menu' onClick={isSidebarOpen ? closeSidebar : openSidebar}><FaTh /></button>
                        </div>
                        <div className="book-order">
                            <div className="book">
                                <Link to={"/home"} className="cus-btn">
                                    أحجز طلبك
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Start Sidebar *****/}
            <div className="sidebar-menu" style={sidebarStyle} >
            {/* Start Container Line ****************************** */}
                <div className="container-line">
                    <div className="container-line-center">
                        <div className="line-item one"></div>
                        <div className="line-item two"></div>
                        <div className="line-item three"></div>
                        <div className="line-item four"></div>
                    </div>
                </div>
                {/* End Container Line ****************************** */}
                {/* Start btn Close ****************************** */}
                <div className="close-sidbar" onClick={closeSidebar}>
                    <span className="circel-h"></span>
                    <span className="close-sidebar"></span>
                    <span>إغلاق</span>
                </div>
                {/* End btn Close ****************************** */}
                {/* Start sidebar Body  ****************************** */}
                <div className="container">
                    <div className="row" >
                        <div className="col-xs-12">
                            <div className="logo-sidebar">
                                <div className="logo-h">
                                    <div className="img-22">
                                        <Link to="/home">
                                            <img src={logo} alt="logo-img" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-3">
                            <div className="side-nav scroll-scale" >
                                <ul>
                                    <li>
                                        <Link to="/home" onClick={closeSidebar}>الرئيسية</Link>
                                        <div className="hover-img">
                                            <img src={logo} alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/we-are" onClick={closeSidebar}>من نحن</Link>
                                        <div className="hover-img">
                                            <img src="https://thouqaldeera.com/wp-content/uploads/2020/01/٢٠٢٠٠١٠٩_٢٣٥٤٣٢-scaled.jpg " alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/list-food" onClick={closeSidebar}>قائمة الطعام</Link>
                                        <div className="hover-img">
                                            <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-retro-tattoo-price-list_23-2149159445.jpg?w=2000" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/branches" onClick={closeSidebar}>فروعنا</Link>
                                        <div className="hover-img">
                                            <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhu7kCaCBLmPzYcfObM9J9Cg0crgD0LWHkxTfmHQDwWG2RyoBV9bjuIpwaQyAPUSUfDp1N7raTCL-JY8f9-b8QOdSyXnU0NgU7tlCgVgmcSCyGdgWiiGF5g5amSdxd0Zkvx_5x1XfiZgCRK3GdBRnTwIRguZTGYH8mK6N2NpwRc07az8tYXRGxLPFY60A=w320-h320" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/gallery" onClick={closeSidebar}>معرض الصور</Link>
                                        <div className="hover-img">
                                            <img src="https://images01.nicepagecdn.com/page/78/63/web-design-preview-78639.jpg" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/contact" onClick={closeSidebar}>اتصل بنا</Link>
                                        <div className="hover-img">
                                            <img src="https://thouqaldeera.com/wp-content/uploads/2020/01/client.png" alt="" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-1"></div>
                        <div className="col-xs-12 col-lg-4">
                            <div className="follow-us scroll-scale">
                                <div className="title-follow">
                                    <span>تواصل معنا</span>
                                </div>
                                <div className="follow-contact">
                                    <ul>
                                        <li>
                                            <span>Info@AhmedHosni.com</span>
                                        </li>
                                        <li>
                                            <span>الرقم الموحد 920033065</span>
                                        </li>
                                    </ul>
                                    <p>الادارة العامة - ص.ب 739 شقراء - 11961</p>
                                </div>
                                <div className="social-sidbar">
                                    <ul>
                                        <li>
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="title-follow">
                                    <span>موقعنا</span>
                                </div>
                                <div className="map-sidebar">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d926499.5318243024!2d46.490958279802825!3d24.89324685088861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2YXYt9i52YUg2LDZiNmCINin2YTYr9mK2LHYqQ!5e0!3m2!1sar!2ssa!4v1580156543576!5m2!1sar!2ssa" style={{ border: 0 }} allowFullScreen="" aria-hidden="false"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-4">
                            <div className="title-follow scroll-scale">
                                <span>تواصل معنا</span>
                            </div>
                            <div className="form-contact scroll-scale">
                                <p>تواصل معنا الان</p>
                                <div className="form">
                                    <div className="form-group">
                                        <span>
                                            <input className='form-controll' type="text" placeholder='الاسم الاول' />
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <span>
                                            <input className='form-controll' type="text" placeholder='اسم العائله' />
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <span>
                                            <input className='form-controll' type="email" placeholder='البريد الالكتروني' />
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <span>
                                            <input className='form-controll' type="email" placeholder='رقم الجوال' />
                                        </span>
                                    </div>
                                    <div className="form-group">
                                    <button type="submit" className="btn-more">
                                        ارسال
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End sidebar Body  ****************************** */}
            </div>
            {/* Start Sidebar *****/}
        </>
        
    )
}
