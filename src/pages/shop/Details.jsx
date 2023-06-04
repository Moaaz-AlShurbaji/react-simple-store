import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details()
{
    const product_url = "https://fakestoreapi.com/products/";
    const params = useParams();
    console.log(params.id);
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(product_url+params.id)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    },[params.id]);

    return(
        <>
            <div className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 mt-5">
                            <img className="img-thumbnail" src={product.image} width={400} height={500} />
                        </div>
                    
                        <div className="col-sm-12 col-lg-6 my-auto">
                            <h2>{product.title}</h2>
                            <p className="h4">{product.description}</p>
                            <p className="h5"><i>Price: </i><strong>{product.price}$</strong></p>
                            <hr></hr>
                            <div className="text-center">
                                <button className="btn btn-warning mt-3 p-3">Add to Cart</button>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            
            
        </>
    );
}

export default Details;