import React from 'react';
import productsData from '../../data/productsData';
import ProductsCard from '../ProductsCard';

const Souris = () => {
    return (
        <>
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            productsData.map((item) => (
                                item.type === "Souris"? 
                                <ProductsCard key={item.id} {...item} />:null
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Souris;