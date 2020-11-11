import React,{Component} from 'react';
class ColorPicker extends Component
{
    //tạo màu cho color picker =state trong contructor
    constructor(props)
    {
        super(props);
        this.state={
            colors:["red","green","blue","#ccc"]
        };
    }
    showColor(color)
    {
     
        return{
            backgroundColor:color
        }
    }
    setActiveColor(color)
    {
        // console.log(color);
        //tra ra prop cha
        this.props.onReceiveColor(color);
        //color trả ra biên param trong hàm onsetColor ngoài app.js
    }
    render()
    {
        var elmColor=this.state.colors.map((color,index)=>
        {
            return <span 
                      key={index} style={this.showColor(color)}
                     className={this.props.color===color ? "active":""}
                     onClick={()=>this.setActiveColor(color)}
                     >
             
                    </span>
        })
        return(
            <div className="col-md-6 col-xs-6" >
            <div className="card-header text-light bg-primary">
              Color Picker
            </div>
            <div className="card-body">
            {elmColor}
            </div>
        </div>
        )
    }
}
export default ColorPicker;