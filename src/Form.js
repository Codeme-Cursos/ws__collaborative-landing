import React from 'react'
import Image from './images/Banner1.png'

const Form = () => {
  return (
    <div className="row mt-5 align-items-center" id="form">
      <div className="col-md-6">
        <img src={Image} width="100%" alt="Form image"></img>
      </div>
      <div className="col-md-6 order-first order-md-last">
    <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" />
    </div>
  </form>
  </div>
  </div>
  )
}

export default Form
