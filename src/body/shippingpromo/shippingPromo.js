import React from "react";
import ReactDom from "react-dom";
import './shippingPromo.scss';
// Custom Shipping Promo (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink
export function ShippingPromo (props){

    return (
        <div className="shipPromo">
          <p>
            Free Shipping on order above $100
          </p>
        </div>
    )

}
