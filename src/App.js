import React, { Component } from "react";
import "./App.css";
import { ResizableBox } from "react-resizable";
import { Resizable } from 'react-resizable';

class App extends React.Component {
  state = {
    width: 200,
    height: 200,
  };

  // On top layout
  onResize = (event, {element, size, handle}) => {
    this.setState({width: size.width, height: size.height});
  };

  render() {
    return (
      <Resizable className="resize" height={this.state.height} width={this.state.width} onResize={this.onResize}>
        <div style={{width: this.state.width + 'px', height: this.state.height + 'px'}}>
          <span>Contents</span>
        </div>
      </Resizable>
    );
  }
}
export default App;
