import './CarouselOffers.css'
import imgOne from '../../assets/images/soon-img.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function CarouselOffers() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
            }
        };
    return (

        <div className="carosale-super scroll-scale">
            <Carousel
                responsive={responsive}
                infinite={true}
                itemClass="carousel-item-padding-40-px"
                autoPlay
                autoPlaySpeed={3000}
                >
                <div className='items'>
                    <a className='block-courses' href="#">
                        <img src={imgOne} alt="" />
                        <div className="details">
                            <div className="name-course">
                                <h4>تتوفر قريبا </h4>
                                <p>اضغط للطلـــب&nbsp;</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='items'>
                    <a className='block-courses' href="#">
                        <img src={imgOne} alt="" />
                        <div className="details">
                            <div className="name-course">
                                <h4>تتوفر قريبا </h4>
                                <p>اضغط للطلـــب&nbsp;</p>
                                
                            </div>
                        </div>
                    </a>
                    
                </div>
                <div className='items'>
                    <a className='block-courses' href="#">
                        <img src={imgOne} alt="" />
                        <div className="details">
                            <div className="name-course">
                                <h4>تتوفر قريبا </h4>
                                <p>اضغط للطلـــب&nbsp;</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='items'>
                    <a className='block-courses' href="#">
                        <img src={imgOne} alt="" />
                        <div className="details">
                            <div className="name-course">
                                <h4>تتوفر قريبا </h4>
                                <p>اضغط للطلـــب&nbsp;</p>
                            </div>
                        </div>
                    </a>
                </div>
            </Carousel>;
        </div>
    );
}
