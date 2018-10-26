import React, { Component } from 'react';
import { PrimaryHeading } from '../../body/primaryheading/primaryHeading';
import { TopBanner } from '../../body/categorybanners/topbanner/topBanner';
import { HomeCategoryHead } from '../../body/categorylist/categoryheading/categoryHeading';
import { HomeCategoryListing } from '../../body/categorylist/categorylisting/categoryListing';
import { HomeRecmdHead } from '../../body/recmdhomecontainer/recmdheading/recmdHeading';
import { HomeRecmdProd } from '../../body/recmdhomecontainer/recmdprod/recmdProd';

import { format } from 'util';

export default class Home extends Component{
    render() {
    return (
        <div className="container">        
        <PrimaryHeading></PrimaryHeading>        
        <TopBanner></TopBanner>
        <HomeCategoryHead></HomeCategoryHead>
        <HomeCategoryListing></HomeCategoryListing>
        <HomeRecmdHead></HomeRecmdHead>
        <HomeRecmdProd></HomeRecmdProd>
        </div>
    );
    }
  }