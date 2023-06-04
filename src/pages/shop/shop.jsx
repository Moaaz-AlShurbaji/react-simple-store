import { useEffect, useState } from "react";
import Item from "../../components/Item";
import Loading from "../../components/Loading";
function Shop()
{
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const products_url = 'https://fakestoreapi.com/products';
    const categories_url = 'https://fakestoreapi.com/products/categories';
    const category_url = 'https://fakestoreapi.com/products/category/';

    const getCategoryItems = (category) => {
        if(category === "all")
        {
            fetch(products_url)
            .then((response) => response.json())
            .then((data) => setItems(data));
        }
        else{
            fetch(category_url + category)
            .then((response) => response.json())
            .then((data) => setItems(data));
        }
       
    };

    useEffect(() => {
        fetch(categories_url)
        .then((response) => response.json())
        .then((data) => setCategories(data));
    },[]);

    useEffect(() => {
        fetch(products_url)
        .then((response) => response.json())
        .then((data) => setItems(data));
    },[]);

    const categories_list = categories.map((category) => 
    {
        return(
            <button key={category} onClick={() => getCategoryItems(category)} className="btn btn-outline-primary m-3 p-3">{category}</button>
        );
        
    });
    categories_list.push(<button key="all" onClick={() => getCategoryItems("all")} className="btn btn-outline-primary m-3 p-3">All</button>);

    const products = items.map((item) => 
    { return (
            <Item key={item.id} item={item}></Item>
    );})

    return(
        <>
            <div className="container">
                <h2 className="text-center">Shopping Page</h2>
                <div className="text-center mt-5 mb-5">

                    {categories_list}
                </div>
                
                <div className="row">
                    { products < 10 ? <Loading></Loading> : products }
                </div>
            </div>
        </>
    );
}
export default Shop;