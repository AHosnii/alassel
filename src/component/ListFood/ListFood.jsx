
import "./ListFood.css"
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { BiTimeFive } from 'react-icons/bi';
import { Link } from "react-router-dom";



export default function ListFood() {

    const [category, setCategory] = useState('chicken');
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:3005/items?category=${category}`)
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        }, [category]);

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
      }, ); // Empty dependency array ensures the effect runs only once and i need more once

      // End Animation *******************************************************************

    return (

        <section className="list-food">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="main-header scroll-scale">
                            <h3>
                                قائمة الطعام
                            </h3>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="col-xs-12">
                            <ul className="nav-tabs scroll-scale ">
                                <li className={category === 'chicken' ? 'active' : ''}><button onClick={() => setCategory('chicken')}>الدجاج والارز</button></li>
                                <li className={category === 'meat' ? 'active' : ''}><button onClick={() => setCategory('meat')}>اللحوم</button></li>
                                <li className={category === 'barbecue' ? 'active' : ''}><button onClick={() => setCategory('barbecue')}>المشويات</button></li>
                                <li className={category === 'popular' ? 'active' : ''}><button onClick={() => setCategory('popular')}>الإيدامات والشعبيات</button></li>
                                <li className={category === 'salad' ? 'active' : ''}><button onClick={() => setCategory('salad')}>السلطات والمقبلا</button></li>
                                <li className={category === 'sweets' ? 'active' : ''}><button onClick={() => setCategory('sweets')}>الحلا والكنافة</button></li>
                                <li className={category === 'drinks' ? 'active' : ''}><button onClick={() => setCategory('drinks')}>المشروبات</button></li>
                            </ul>
                        </div>
                        <div className="col-xs-12">
                                <div className="row">
                                    {items.map(item => (                         
                                        <div key={item.id} className = "col-xs-12 col-md-6 col-lg-4 ">
                                            <Link to={`/view/${item.id}`}>
                                                    <div className="box  scroll-scale" >
                                                        <div className="img-cont">
                                                            <img src={item.img} alt="img-food" />
                                                        </div>
                                                        <div className="details">
                                                            <div className="row">
                                                                <div className="col-md-7 col-xs-12">
                                                                    <div className="name-product">
                                                                        <h4>{item.name}</h4>
                                                                        <p>{item.bio}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-5 col-xs-12 text-center">
                                                                    <div className="time">
                                                                        <span><BiTimeFive /></span>
                                                                        <h4>0:0:0: متبقي</h4>
                                                                    </div>
                                                                    <div className="price">
                                                                        <span>{item.price}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </Link>
                                            {/* <button onClick={() => handleProductClick(item)}>View Details</button> */}
                                        </div>
                                    ))}
                                </div>
                                    {/* {selectedProduct && <ProductDetail product={selectedProduct} />} */}
                        </div>
                        <div className="col-xs-12">
                            <div className="super text-center scroll-right">
                                <Link to="/list-food" className="btn-more ">
                                    <span>المزيد</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
