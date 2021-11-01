import React from 'react'
import { NavLink } from 'react-router-dom'

const PricingActionBtn = () => {
    return (
      <div className="p-col-12 p-lg-9 p-pl-lg-5">
        <div className="p-text-right p-mb-4">
          <NavLink
            to="/pricing"
            className="btn btn-primary btn-md btn-rounded-full btn-inline-block"
          >
            Pricing Actions
          </NavLink>
        </div>
      </div>
    )
}

export default PricingActionBtn
