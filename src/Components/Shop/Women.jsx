import React from 'react'
import Item from '../Item';

 function Women() {
  return (
    <div className='grid grid-cols-4 sm:grid-cols-1'>
       <Item
              title="Thermal Wear"
              price="2000"
              image="https://i0.wp.com/pessosafety.eu/wp-content/uploads/2019/08/Thermo.undewear_001_MERINO80.png?fit=900%2C900&ssl=1"
              tag="New"
            />
             <Item
              title="---"
              price="1500"
              image="https://img.freepik.com/premium-vector/female-fashion-dress-isolated-icon-design_25030-13126.jpg"
              tag="New"
            />
            <Item title='Jordan 1'
            price='4000'
            image="https://classic.cdn.media.amplience.net/i/hibbett/F5080_1115_right?w=300&h=300&img404=404&v=1"
           />
            <Item
            tag="New"
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81yIVXQY2vL._AC_UY1100_.jpg"
            title="Scaff"
            price="400"
          />
          <Item
              title="Down Jacket"
              price="4500"
              image="https://makaluetraders.com/wp-content/uploads/2022/10/drak-gray-side-3-1024x1024.jpg"
              tag="New"
            />
    </div>
  )
}
export default Women;
