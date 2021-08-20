import React, { Component } from "react";
import kFormCreate from "../components/kFormCreate";

const nameRules = { required: true, message: "please input ur name" };
const passwordRules = { required: true, message: "please input ur password" };

@kFormCreate
class MyFormPage extends Component {
  submit = () => {
    console.log();
  }
  render() {
    console.log("props", this.props); //sy-log
    const { getFieldDecorator } = this.props;
    return (
      <div>
        <h3>MyFormPage</h3>
        {
          getFieldDecorator('name', {})(<input type="text" placeholder="please input ur name" />)
        }
        {
          getFieldDecorator('password', {})(<input type="password" placeholder="please input ur password" />)
        }


        <button onClick={this.submit}>提交</button>
      </div>
    );
  }
}

export default MyFormPage;
