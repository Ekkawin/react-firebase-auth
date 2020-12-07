import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { app } from './base';

export const Login = () => {
  const [form] = Form.useForm();
  const onFinish = async (value: any) => {
    const { email, password } = value;
    console.log('email', email);
    try {
      await app.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };
  return (
    <div>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
