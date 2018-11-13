import React from 'react';
import LoaderImage from '../../images/loader.gif';
import '../loader/loader.scss';

export function Loader (){    
      return (
        <div className="loader-container" >
            <img src={LoaderImage}/>
        </div>
        )
  }