import React from "react";
import ReactDom from "react-dom";
import { Link } from 'react-router-dom';
import { ImageArea } from '../../common/imageArea';
import { InputBox } from '../../common/inputBox';
import './headerMain.scss';
import DropDownMenu from "../megaMenu/dropDownMenu";

export function HeaderMain(props){
  return (
    <div className="headerMain row">
      <div className="col-sm-3 text-center">
        <Link to="/">
            <ImageArea alt="logo" height="auto" src="https://66.media.tumblr.com/2028d8087066b1e19ab5e3c35ae550b2/tumblr_p7wo3aQqjb1s2oauno1_1280.png" width="200" className="webLogo"/>
        </Link>
      </div>
      <div className="col-sm-1 text-center">
        <div><DropDownMenu/></div>
      </div>
      <div className="col-sm-6 text-center">
        <InputBox type="text" placeholder="Enter keyword" name="searchBox" className="searchArea"/>
      </div>
      <div className="col-sm-2 text-center header-right">
        <span><ImageArea alt="store" height="auto" src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker.png" width="50" className="storeIcon"/>Store</span>
        <span><ImageArea alt="cart" height="auto" src="https://mbtskoudsalg.com/images/shop-button-png-4.png" width="50" className="cartIcon"/>Cart</span>
      </div>
    </div>
  )
}
{/* <InputBox type="text" placeholder="Enter keyword" name="searchBox" className="searchArea"/> */}
