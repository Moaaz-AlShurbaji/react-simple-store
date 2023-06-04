import { Link } from 'react-router-dom'
function Item(props)
{
    return(
        <>
            <div className="col-sm-12 col-md-6 col-lg-3 mt-3 mb-3">
                <div className="card text-bg-dark" style={{}}>
                    <img src={props.item.image} height={300} width={400} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.item.title.slice(0,15) + "..."}</h5>
                        <p className="card-text">{props.item.description.slice(0,40) + "..."}</p>
                        <div className='text-center'>
                            <Link to={`/product/${props.item.id}`} className="btn btn-success">View Product</Link>
                        </div>
                        
                    </div>
                </div> 
            </div>
        </>
    );
}

export default Item