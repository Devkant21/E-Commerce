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
                <Product title="Computer" price={19.99} image="https://m.media-amazon.com/images/I/41Z5NEsKo9L._AC_SY400_.jpg" rating={5} />
                <Product />
                
                
            </div>

            <div className="home__row">
                
               

            </div>

            <div className="home__row">
                
                
            </div>

        </div>




    </div>
  )
}

export default Home