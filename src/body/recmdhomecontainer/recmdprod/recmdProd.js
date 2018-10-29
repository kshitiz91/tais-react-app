import React from "react";
import ReactDom from "react-dom";
import { HomeRecmdProdList } from './recmdprodlist/recmdProdList'

import './recmdProd.scss';
// Custom Recommended Heading for homepage (funtional Component),  you need to pass all attributes values in props
// Added the common properties needed for a hyperlink

class HomeRecmdProd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://demo0704402.mockable.io/test1",{
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
          'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (<div>Error: {error.message}</div>)
    } else if (!isLoaded) {
      return (
        <div>Loading</div>
      )
    } else {
      return (
        <div className="row homeRecmdList">
          <HomeRecmdProdList prods={items}></HomeRecmdProdList>
        </div>
      );
    }
  }
}

export default HomeRecmdProd;
