import React from 'react'

const Footer = () => {
  return (
    <div className="row text-center mt-5 buttons-group" id="footer">
      <div className="col-md-3 mt-1">
        <a  href="http://www.instagram.com/yanochka_chernova" target="_blank" role="button" className="btn btn-danger">Instagram</a>
      </div>
      <div className="col-md-3 mt-1">
        <a href="https://www.facebook.com/profile.php?id=100006683559264" target="_blank" role="button" className="btn btn-primary">Facebook</a>
      </div>
      <div className="col-md-3 mt-1">
        <a href="mailto:fineukraine94@gmail.com" target="_blank" role="button" className="btn btn-success">Email</a>
      </div>
      <div className="col-md-3 mt-1">
        <a href="https://api.whatsapp.com/send?phone=380961016190" target="_blank" role="button" className="btn btn-warning">WhatsApp</a>
      </div>
    </div>
  )
}

export default Footer
