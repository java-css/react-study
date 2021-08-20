import React, { Component } from "react";
import kFormCreate from "../components/kFormCreate";

const nameRules = { required: true, message: "please input ur name" };
const passwordRules = { required: true, message: "please input ur password" };

@kFormCreate
class MyFormPage extends Component {
  submit = () => {
    const { validateFields } = this.props
    validateFields((err, values) => {
      if (err) {

      } else {

      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props;
    return (
      <div>
        <h3>MyFormPage</h3>
        {
          getFieldDecorator('name', { rules: [nameRules] })(<input type="text" placeholder="please input ur name" />)
        }
        {
          getFieldDecorator('password', { rules: [passwordRules] })(<input type="password" placeholder="please input ur password" />)
        }


        <button onClick={this.submit}>提交</button>
      </div>
    );
  }
}

export default MyFormPage;
