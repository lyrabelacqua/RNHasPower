import React, { Component } from 'react';
import ImageForm from './containers/ImageForm';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: false,
      type: ''
    };
  }

  fetchPhotos = (amount, type) => {
    this.setState({loading: true, type});
    fetch(`http://shibe.online/api/${type}?count=${amount}`)
      .then(res => res.json())
      .then(res => this.setState({images: res, loading: false}))
      .catch(err => {console.log(err);});
    
    
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="title">Search Engine for animal photos</h1>
        <h2 className="subtitle">created for STX Next workshop</h2>
        <ImageForm 
          fetchPhotos={this.fetchPhotos}
          loading={this.state.loading}
        />
        <div className="images-wrapper">
          {this.state.images.map((el, index) => (<img 
                                                  key={index} 
                                                  className="images-single" 
                                                  src={el}
                                                  alt={`A random animal from ${this.state.type} collection`}
                                                  />)
          )}
        </div>
      </div>
    );
  }
}

export default App;
