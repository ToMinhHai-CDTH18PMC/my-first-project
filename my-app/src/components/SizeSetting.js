import React,{Component} from "react"
class SizeSetting extends Component{
    onChangeSize(value)
    {
        this.props.onReceiveFontSize(value);
        
    }
    render()
    {
        return(
            <div className="card">
                <div className="card-header">Size {this.props.fontSize}px</div>
                <div className="card-body">
                <button  className="btn btn-primary" onClick={()=>this.onChangeSize(-2)}>
                    Giảm 
                </button>
                <button  className="btn btn-primary" onClick={()=>this.onChangeSize(2)}>
                    Tăng
                </button>
                </div>
          </div>
        )
    }
}
export default SizeSetting;