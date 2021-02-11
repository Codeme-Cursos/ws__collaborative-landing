import React from 'react'
import Banner1 from './images/Banner1.png'
import Banner2 from './images/Banner2.png'
import Banner3 from './images/Banner3.png'
import Banner4 from './images/Banner4.png'

const Cards = () => {
  return (
    <div className="row mt-5 row-cols-1 row-cols-md-4 g-4 flex-column-reverse flex-md-row" id="cards">
    <div className="col">
      <div className="card h-100">
        <img src={Banner1} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">Card title 1</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src={Banner2} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">Card title 2</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src={Banner3} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">Card title 3</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src={Banner4} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title 4</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cards
