import { useState } from 'react';
import  './index.css'

const Filters = () => {
    const [clicked, setClicked] = useState(false)
    const [clickedPrice, setClickedPrice] = useState(false)

    const onShow = () => {
        setClicked(!clicked )
    }

    const onShowPrice = () => {
        setClickedPrice(!clickedPrice )
    }
  return (
    <div className="filter-section">
        <div className='heading'>
            <p className="filter-title">Filter</p>
            <p className="filter-title">CLEAR ALL</p>
        </div>
        <hr/>
            <div className='heading'>
                <p className="category-title">Type of Plants</p>
                <button className='plus' onClick={onShow}>
                    {clicked ? "^" : "+"}
                </button>
            </div>
            {clicked ? (<ul className="filter-options">
            <li key="1"><input type="checkbox" /> Monstera (4)</li><hr/>
            <li key="2"><input type="checkbox" /> Snake Plant (5)</li><hr/>
            <li key='3'><input type="checkbox" /> Money Plant (8)</li><hr/>
            <li key ='4'><input type="checkbox" /> Fern (12)</li>
            </ul>) : ''} 
        <hr/>
            <div className='heading'>
                <p className="category-title">Price</p>
                <button className='plus' onClick={onShowPrice}>
                    {clickedPrice ? "^" : "+"}
                </button>
            </div>
            
            {clickedPrice ? (<ul className="filter-options">
            <li key="300"><input type="checkbox" /> Below ₹300</li><hr/>
            <li key="500"><input type="checkbox" /> ₹300 - ₹500</li><hr/>
            <li key="1000"><input type="checkbox" /> ₹500 - ₹1000</li>
            </ul>) : ''}
        <hr/>
            <div className='heading'>
                <p className="category-title">Nursery</p>
                <button className='plus'>
                    +
                </button>
            </div>
        <hr/>
        <div className='heading'>
                <p className="category-title">Ideal Plants Location</p>
                <button className='plus'>
                    +
                </button>
            </div>
        <hr/>
            <div className='heading'>
                <p className="category-title">Indoor/ Outdoor</p>
                <button className='plus'>
                    +
                </button>
            </div>
        <hr/>
            <div className='heading'>
                <p className="category-title">Maintenance</p>
                <button className='plus'>
                    +
                </button>
            </div>
        <hr/>
        <div className='heading'>
                <p className="category-title">Plant Size</p>
                <button className='plus'>
                    +
                </button>
            </div>
        <hr/>
        <div className='heading'>
                <p className="category-title">Water Schedule</p>
                <button className='plus'>
                    +
                </button>
            </div>
        <hr/>
        <div className='heading'>
                <p className="category-title">Color</p>
                <button className='plus'>
                    +
                </button>
            </div>
        <hr/>
        <div className='heading'>
                <p className="category-title">Seasonal</p>
                <button className='plus'>
                    +
                </button>
            </div>
        <hr/>
        <div className='heading'>
                <p className="category-title">Light Effect</p>
                <button className='plus'>
                    +
                </button>
            </div>
        <hr/>
    </div>
  );
};

export default Filters;
