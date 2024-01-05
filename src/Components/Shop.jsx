import React, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import All from './Shop/All';
import Men from './Shop/Men';
import Women from './Shop/Women';
import Kids from './Shop/Kids';
import Shoes from './Shop/Shoes';
import Sunglass from './Shop/Sunglass';
import Footer from './Footer';


class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: 'All' };
  }

  handleItemClick = (itemName) => {
    this.setState({ selectedItem: itemName });
  };

  render() {
    return (
      <div className='pt-32'>
        <div className='flex font-bold text-3xl py-10 justify-center'>{this.state.selectedItem}</div>
        <div className='flex sm:flex-col gap-10 px-20 justify-center '>
          <Link to="/shop/" className={`hover:cursor-pointer border-2 border-black px-2 ${this.state.selectedItem === 'All' ? 'bg-gray-300' : ''}`} onClick={() => this.handleItemClick('All')}>All</Link>
          <Link to="men" className={`hover:cursor-pointer border-2 border-black px-2 ${this.state.selectedItem === 'Men' ? 'bg-gray-300' : ''}`} onClick={() => this.handleItemClick('Men')}>Men</Link>
          <Link to="women" className={`hover:cursor-pointer border-2 border-black px-2 ${this.state.selectedItem === 'Women' ? 'bg-gray-300' : ''}`} onClick={() => this.handleItemClick('Women')}>Women</Link>
          <Link to="kids" className={`hover:cursor-pointer border-2 border-black px-2 ${this.state.selectedItem === 'Kids' ? 'bg-gray-300' : ''}`} onClick={() => this.handleItemClick('Kids')}>Kids</Link>
          <Link to="shoes" className={`hover:cursor-pointer border-2 border-black px-2 ${this.state.selectedItem === 'Shoes' ? 'bg-gray-300' : ''}`} onClick={() => this.handleItemClick('Shoes')}>Shoes</Link>
          <Link to="sunglass" className={`hover:cursor-pointer border-2 border-black px-2 ${this.state.selectedItem === 'Sunglass' ? 'bg-gray-300' : ''}`} onClick={() => this.handleItemClick('Sunglass')}>Sunglass</Link>
        </div>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
          <Route path="shoes" element={<Shoes />} />
          <Route path="sunglass" element={<Sunglass />} />





          {/* Add other Route components for Men, Women, Kids, Shoes, and Bags */}
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Shop;
