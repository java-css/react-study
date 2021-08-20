import React, {Component} from "react";

export default function kFormCreate(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.options = {};
    }
    getFieldDecorator=(filed,option)=>{
      return InputCmp=>{
        return React.cloneElement(InputCmp)
      }
    }
    render() {
      return (
        <div className="border">
          <Cmp getFieldDecorator={this.getFieldDecorator}/> 
        </div>
      );
    }
  };
}
