import React, { Component } from "react";

export default function kFormCreate(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.options = {};
    }
    handleChange = e => {
      const { name, value } = e.target
      this.setState({
        [name]: value
      })
    };
    getFieldDecorator = (field, option) => {
      this.options[field] = option
      return InputCmp => {
        return React.cloneElement(InputCmp, {
          name: field,
          value: this.state[field] || '',
          onChange: this.handleChange
        })
      }
    }
    getFieldsValue = (field) => {
      return this.state[field]
    }

    getFieldValue = () => {
      return { ...this.state }
    }

    validateFields = (cb) => {
      const errors = {}
      const state = { ...this.state }
      for (let name in this.options) {
        if (state[name] === undefined) {
          errors[name] = 'error'
        }
      }

      if (JSON.stringify(errors) === "{}") {
        cb(undefined, state)
      } else {
        cb(errors, state)
      }
    }

    render() {
      return (
        <div className="border">
          <Cmp
            getFieldDecorator={this.getFieldDecorator}
            getFieldsValue={this.getFieldsValue}
            getFieldValue={this.getFieldValue}
            validateFields={this.validateFields}
          />
        </div>
      );
    }
  };
}
