import React from 'react'
import Item from '../Item';

function Men() {
  return (
    <div className='grid grid-cols-4 sm:grid-cols-1'>
      <Item
              title="Hoody"
              price="1200"
              image="https://m.media-amazon.com/images/I/B1FGy+bPeZS._AC_CLa%7C2140%2C2000%7C61p%2BfGuikuL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png"
              
            />
             <Item
              title="Sweatshirt"
              price="1000"
              image="https://kingteeshops.com/i-feel-sorry-for-people-with-no-personality-sweatshirt"
              tag="New"
            />
             <Item
              title="Jacket"
              price="2500"
              image="https://cafe24img.poxo.com/notahumanbeing/web/product/big/201810/4c3de1144a57969e2525159cec5010f9.jpg"
              
            />
             <Item
              title="Tracksuits"
              price="2200"
              image="https://static-01.daraz.com.np/p/0277bbc691fb529fe8d4978d608a89cb.jpg_300x0q75.webp"
              tag="New"
            />
            <Item title='Jordan'
            price='5000'
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvc9DM0mzlA21xloQ4Z6e7SNzwpUqUfYWcKW8liEJSr1Ma2fEBYaqiPfvZHwhNikdQpUk&usqp=CAU"
            tag='New'/>
             <Item
            tag="New"
            image="https://static-01.daraz.com.np/p/cd826b467f98bfafcf37f42e404d1938.jpg_750x750.jpg_.webp"
            title="Jeens"
            price="1400" />
            <Item
            tag="New"
            image="https://www.jiomart.com/images/product/original/rv0ev88hrd/urban-lens-latest-sunglasses-for-men-100-uv-protection-branded-sunglass-with-luxury-case-box-s_b80-390-product-images-rv0ev88hrd-0-202306151217.jpg"
            title="Urban lens"
            price="500"
          />
          <Item
            tag="New"
            image="https://images-cdn.ubuy.co.in/63400407ad052c2c656c7cd6-lelebear-stretch-anti-wrinkle-shirt-men.jpg"
            title="Shirt"
            price="900"
          />

    </div>
  )
}
export default  Men;
