import React from "react";
import ReactDom from "react-dom";
import { InputBox } from '../../common/inputBox';
import './subscriptionArea.scss';


// Custom subscription area (funtional Component),  you need to pass all attributes values in props
export function SubscriptionBannerHome (props){

    return(
      <div className="subscriptionBanner">
        <p>News, events, sale reminders and more - sign up for T-GIANT emails today!</p>
        <InputBox type="text" autoComplete="off" placeholder="Enter email address" name="subscriptionBox" className="subscriptionBoxArea"/><button>Submit</button>
      </div>
    )
}
