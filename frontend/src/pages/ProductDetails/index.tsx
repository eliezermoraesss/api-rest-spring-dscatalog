import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg'
import axios from 'axios';
import ProductPrice from 'components/ProductPrice';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { BASE_URL } from 'util/requests';

import './styles.css'

const ProductDetails = () => {

    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        axios.get(BASE_URL + "/products/1")
        .then(response => {
            setProduct(response.data)
        })
    }, [])

    // FORMA INCORRETA
    //let product : Product;

    return (
        <div className="product-details-container">
            <div className="base-card product-details-card">
                <Link to="/products">
                    <div className="goback-container">
                        <ArrowIcon />
                        <h2>VOLTAR</h2>
                    </div>
                </Link>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-container">
                            <img src={product?.imgUrl} alt={product?.name}></img>
                        </div>
                        <div className="name-price-container">
                            <h1>{product?.name}</h1>
                            {product && <ProductPrice price={product?.price} />}
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="description-container">
                            <h2>Descrição do produto</h2>
                            <p>{product?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;