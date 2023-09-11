import { Link } from 'react-router-dom'
import offers from '../../assets/images/brush2.png'
import CarouselOffers from '../Carousel/CarouselOffers'
import './Offers.css'
export default function Offers() {
    return (
        <section className="offers-section">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-4">
                        <div className="text-offers scroll-right">
                            <div className="title-news">
                                <h3>عروضنا</h3>
                                <img src={offers} alt="img-ff" />
                            </div>
                            <p>
                                تقدم مطاعم ومطابخ الاصيل دائمًا أفضل العروض والأسعار
                                لك ولعائلتك مع ضمان أفضل مذاق وأعلى جودة تجلب لك السعادة.
                            </p>
                            <Link className='btn' to="/home">
                                المزيد
                            </Link>
                        </div>  
                    </div>

                    <div className="col-xs-12 col-lg-8">
                        <div className="corsl">
                            <CarouselOffers />
                        </div>
                    </div>
                </div>
                
                .
            </div>
        </section>
    )
}
