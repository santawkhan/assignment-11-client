/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';

import DetailsOne from './DetailsOne';
import DetailsTwo from './DetailsTwo';
import DetailsThree from './DetailsThree';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const CategoryTab = () => {
    const [categoryDolls, setcategoryDolls] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setcategoryDolls(data))
    }, [])
    return (
        <div className='mt-3'>
            <h3 className='text-center text-5xl font-serif mt-8 text-red-300 font-bold mb-6'>Shop By Category</h3>
            <Tabs className='text-center'>
                <TabList >
                    <Tab><span className='text-xl font-bold text-red-300 '>Baby Dolls</span></Tab>
                    <Tab><span className='text-xl font-bold text-red-300 '>Barbie Dolls</span></Tab>
                    <Tab><span className='text-xl font-bold text-red-300 '>American Girls</span></Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 '>
                        {
                            categoryDolls.map(categoryDoll => <DetailsOne key={categoryDoll._id} categoryDoll={categoryDoll}></DetailsOne>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 ' >{
                        categoryDolls.map(categoryDoll => <DetailsTwo key={categoryDoll._id} categoryDoll={categoryDoll} ></DetailsTwo>)
                    }</div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 ' >{
                        categoryDolls.map(categoryDoll => <DetailsThree key={categoryDoll._id} categoryDoll={categoryDoll} ></DetailsThree>)
                    }</div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTab;