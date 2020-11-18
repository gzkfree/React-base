import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./index.less";
import { login } from "../../api/index";
let Base64 = require("js-base64").Base64;
import { connect } from "react-redux";

class Login extends Component {
  onFinish = (values) => {
    console.log("Success:", values);
    login({
      username: values.username,
      password: values.password,
    }).then((res) => {
      this.props.Authorization_update(res.result.access_token);
      this.props.history.push("/index");
      console.log(this.props.Authorization);
    });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    return (
      <div className="login-wrap">
        <div className="ms-login">
          <div className="ms-title">后台管理系统</div>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                addonBefore={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                addonBefore={<LockOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
import { Authorization_update } from "../../store/action/user";
const mapStateToProps = (state) => {
  return {
    Authorization: state.user.Authorization,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Authorization_update: (data) => dispatch(Authorization_update(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
