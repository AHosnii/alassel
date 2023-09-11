import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MyNav from './component/NavBar/MyNav'
import HeaderTop from './component/HeaderTop/HeaderTop';
import HomePage from './pages/HomePage/HomePage';
import WeAre from './pages/WeArePage/WeAre';
import Footer from './component/Footer/Footer';
import {  useEffect } from 'react';
import ProductDetail from './component/ProductDetail/ProductDetail';
import ListFoodPage from './pages/ListFoodPage/ListFoodPage';
import BranchesPage from './pages/branchesPage/BranchesPage';
import Login from './component/Login/Login';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ContactUs from './pages/ContactUs/ContactUs';
import NotFound from './component/NotFound/NotFound';


  function App() {

    // start Animation *******************************************************************
    // Animating Elements with Intersection Observer
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
          entry.target.classList.add("show-items");
          } else {
          entry.target.classList.remove("show-items");
          }
      });
      });
      
      const scrollScale = document.querySelectorAll(".scroll-scale");
      scrollScale.forEach((el) => observer.observe(el));
  
      const scrollTop = document.querySelectorAll(".scroll-top");
      scrollTop.forEach((el) => observer.observe(el));
  
      const scrollButton = document.querySelectorAll(".scroll-bottom");
      scrollButton.forEach((el) => observer.observe(el));
  
      const scrollLeft = document.querySelectorAll(".scroll-left");
      scrollLeft.forEach((el) => observer.observe(el));
  
      const scrollRight = document.querySelectorAll(".scroll-right");
      scrollRight.forEach((el) => observer.observe(el));
      
  
      // Cleanup the observer on component unmount
      return () => {
          scrollScale.forEach((el) => observer.unobserve(el));
          scrollTop.forEach((el) => observer.unobserve(el));
          scrollButton.forEach((el) => observer.unobserve(el));
          scrollLeft.forEach((el) => observer.unobserve(el));
          scrollRight.forEach((el) => observer.unobserve(el));
      };
    }, []); // Empty dependency array ensures the effect runs only once

      // End Animation *******************************************************************

  return (

      <Router>
        <HeaderTop />
        <MyNav />
        <Routes>
          {/* <Route path="/" element={loggedIn ? <Login /> : <Login onLogin={< Dashboard />} />} /> */}
          {/* <Route path="/" element={loggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />} /> */}
          {/* <Route path="/login" element={loggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />} /> */}
          {/* <Route path="/dashboard" element={ <Dashboard />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashboard" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/we-are" element={<WeAre />} />
          <Route path="/list-food" element={<ListFoodPage />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/view/:productId" element={<ProductDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
      

  )
}

export default App
