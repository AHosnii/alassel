// src/ViewProduct.jsx
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
    const { productId } = useParams(); // Get the productId from the URL params
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch the product details using productId
        // You can use the same API or any other data source
        fetch(`http://localhost:3005/items/${productId}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (

        <>
        <section className="title-page">
            <div className="container">
                <h3>{product.name}</h3>
                <ul>
					<li>
						<Link to="/list-food">قائمه الطعام</Link>
					</li>
					<li>
                        <span>{product.name}</span>
					</li>
				</ul>
            </div>
        </section>
        
        <section className="about-inner">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-6">
                        <div className="text-about">
                            <h3>{product.name}</h3>
                            <span className='price'> السعر : {product.price}</span>
                            <p className='info'>جميع الأسعار شاملة ضريبة القيمة المضافة 15%</p>
                            <p className='bio'>{product.bio}</p>
                            <a className='cus-btn' href="">اطلب الان</a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-lg-6">
                        <div className="img-about">
                            <img src={product.img} alt="img-rroduct" />
                        </div>
                    </div>
                </div>
            </div>
        </section>


        </>
    )
}

export default ProductDetail;