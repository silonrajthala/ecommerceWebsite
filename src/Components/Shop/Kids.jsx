import React from 'react'
import Item from '../Item';

 function Kids() {
  return (
    <div className='grid grid-cols-4 sm:grid-cols-1'>
         <Item
            tag="New"
            image="https://www.maayus.com/wp-content/uploads/2023/07/Black-Football-print-Sneaker.jpg"
            title="Kids Shoes"
            price="700"
          />
          
    </div>
  )
}
export default Kids;
