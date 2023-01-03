import React from 'react';
import productsData from '../../data/productsData';
import ProductsCard from '../ProductsCard';

const Clavier = () => {
    return (
        <>
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            productsData.map((item) => (
                                item.type === "Clavier"? 
                                <ProductsCard key={item.id} {...item} />:null
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Clavier;