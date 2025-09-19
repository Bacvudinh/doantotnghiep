import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
        <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-0 footer-copyright">
            <p className="mb-0">Copyright 2024 © Zono theme by pixelstrap.</p>
          </div>
          <div className="col-md-6 p-0">
            <p className="heart mb-0">Hand crafted &amp; made with
              <svg className="footer-icon">
                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#heart" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer