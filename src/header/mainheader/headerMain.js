import React from "react";
import ReactDom from "react-dom";
import { HyperLink } from '../../common/hyperLink';
import { ImageArea } from '../../common/imageArea';
import { InputBox } from '../../common/inputBox';
import './headerMain.scss';

export function HeaderMain(props){
  return (
    <div className="headerMain row">
      <div className="col-sm-3 text-center">
        <HyperLink url="/" title="Website Name" className="logoLink">
          <ImageArea alt="logo" height="auto" src="https://66.media.tumblr.com/2028d8087066b1e19ab5e3c35ae550b2/tumblr_p7wo3aQqjb1s2oauno1_1280.png" width="200" className="webLogo"/>
        </HyperLink>
      </div>
      <div className="col-sm-1 text-center">
        <div>Menu</div>
      </div>
      <div className="col-sm-6 text-center">
        <InputBox type="text" placeholder="Enter keyword" name="searchBox" className="searchArea"/>
      </div>
      <div className="col-sm-2 text-center">
        <span className="float-left">Store<ImageArea alt="store" height="auto" src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker.png" width="50" className="storeIcon"/></span>
        <span className="float-right">Cart<ImageArea alt="cart" height="auto" src="https://mbtskoudsalg.com/images/shop-button-png-4.png" width="50" className="cartIcon"/></span>
      </div>
    </div>
  )
}
{/* <InputBox type="text" placeholder="Enter keyword" name="searchBox" className="searchArea"/> */}
