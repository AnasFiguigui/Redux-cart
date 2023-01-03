import React from 'react';
import productsData from '../../data/productsData';
import ProductsCard from '../ProductsCard';

const Casques = () => {
    return (
        <>
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            productsData.map((item) => (
                                item.type === "Casque"? 
                                <ProductsCard key={item.id} {...item} />:null
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Casques;