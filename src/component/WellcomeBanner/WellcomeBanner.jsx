import './WellcomeBanner.css'
import  bannerImg  from "../../assets/images/banner-img-1.png"
import  { useEffect } from 'react';
import ChangeWord from '../ChangeWord/ChangeWord';


export default function WellcomeBanner() {

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

    return (
        <section className="wellcome-banner">
            <div className="container ">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="text-banner scroll-scale">
                            <span className='sp-span'>نرحب بكم في</span>
                            <h1>مطاعم الاصيل</h1>
                            <ChangeWord />
                            <p>نحن نعمل على اختيار أفضل اللحوم والمكونات حرصاً على تقديم أشهى المأكولات لعملائنا.</p>
                            <a href="#" className='cus-btn '>أقرء المذيد</a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="image-banner scroll-left">
                            <div className="img">
                                <img src={bannerImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
