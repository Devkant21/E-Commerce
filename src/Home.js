import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61dY-46XyYL._SX3000_.jpg"
            alt=""
            />

            <div className="home__row">
                <Product title="Computer" price={19.99} image="https://m.media-amazon.com/images/I/41Z5NEsKo9L._AC_SY400_.jpg" rating={2} />
                <Product title="Keyboard" price={9.99} image="https://m.media-amazon.com/images/I/81JhnHvxYRL._AC_SY400_.jpg" rating={2} />
                <Product title="Keyboard" price={9.99} image="https://m.media-amazon.com/images/I/51kdFjyPRAL._AC_SY400_.jpg" rating={2} />
            </div>

            <div className="home__row">

                <Product title="Computer" price={19.99} image="https://m.media-amazon.com/images/I/61ZkPY2TlLL._AC_SY400_.jpg" rating={2} />
                <Product title="Keyboard" price={9.99} image="https://m.media-amazon.com/images/I/61Cv-Ma+X1L._AC_SY340_.jpg" rating={2} />
                <Product title="Computer" price={19.99} image="https://m.media-amazon.com/images/I/41dlE8ZX0lL._AC_SY400_.jpg" rating={2} />
                <Product title="Keyboard" price={9.99} image="https://m.media-amazon.com/images/I/51r+vRKz-LL._AC_SY400_.jpg" rating={2} /> 

            </div>

            <div className="home__row">

                <Product title="Computer" price={19.99} image="https://images-eu.ssl-images-amazon.com/images/I/61p1tcPeU4L._AC_UL320_SR320,320_.jpg" rating={2} />
                <Product title="Keyboard" price={9.99} image="https://m.media-amazon.com/images/I/816OCO6QfkL._AC_SY400_.jpg" rating={2} />
                
                
                
            </div>

        </div>




    </div>
  )
}

export default Home