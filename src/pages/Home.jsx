import React from 'react';
import Header from './Header';
import CategoryTab from './CategoryTab';
import PopularSection from './PopularSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CategoryTab></CategoryTab>
            <PopularSection></PopularSection>

        </div>
    );
};

export default Home;