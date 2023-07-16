import React from 'react'
import { Link } from 'react-router-dom'

const OrderSuccess = () => {
  return (
    <section className="page_404" style={{textAlign: 'center'}}>
        <div className="container">
            <div className="row">	
                <div className="col-sm-12 ">
                    <div className="col-sm-10 col-sm-offset-1  text-center">
                        <div className="four_zero_four_bg_success"></div>
                        <div className="contant_box_404" style={{marginTop: '20px', color: 'blue'}}>
                            <h3>We will contact you!!</h3>
                            <Link  to="/" className="link_404">Go to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OrderSuccess
