import React, { Component } from 'react';

import './App.css';
import ColorPicker from "./components/ColorPicker";
import Reset from "./components/Reset";
import Result from "./components/Result";
import SizeSetting from "./components/SizeSetting";
class App extends Component{
  //tạo biến state để lưu trữ màu sắc và font size
  constructor(props)
  {
    super(props);
    this.state={
      color:"red",
      fontsize:12
    }
    // this.onSetColor=this.onSetColor.bind(this)
    this.onSetSize=this.onSetSize.bind(this);
  }
  onSetColor=(params)=>
  {
    console.log(params);
    this.setState({
      color:params
    })
  }
  onSetSize(params)
  {
    console.log(params)
    if(this.state.fontsize+params>=0 && this.state.fontsize+params<=36)
    this.setState({
      fontsize:(this.state.fontsize+params)
    })
    else
    {
      this.setState({
        fontsize:(this.state.fontsize)
      })
    }
  }
  render()
  {

     
    return(
      <>
      
      <div className="container">
        <div className="row">
          {/* Truyền màu từ app vao color picker */}
          {/* Truyền từ component con sang cha */}
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
        
       
          <div className="col-md-6 col-xs-6">
            <SizeSetting onReceiveFontSize={this.onSetSize} fontSize={this.state.fontsize}/>
            <Reset/>
          </div>
       
          <Result fontSize={this.state.fontsize} color={this.state.color}/>
        </div>
    
      </div>
      </>
    );
  }
}
export default App;
