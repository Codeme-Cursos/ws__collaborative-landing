import React from 'react'
import Banner1 from './images/Banner1.png'
import Banner2 from './images/Banner2.png'
import Banner3 from './images/Banner3.png'

const Banner = () => {
  return (
    <div id="banner">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Banner1} className="d-block w-100" alt="Banner image" />
            <div class="carousel-caption d-md-block">
              <h5>My text 1</h5>
              <p>My description 1.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner2} className="d-block w-100" alt="Banner image" />
            <div class="carousel-caption d-md-block">
              <h5>My text 2</h5>
              <p>My description 2.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner3} className="d-block w-100" alt="Banner image" />
            <div class="carousel-caption d-md-block">
              <h5>My text 3</h5>
              <p>My description 3.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Banner
