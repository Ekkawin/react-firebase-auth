import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { app } from './base';
import { useHistory } from 'react-router-dom';
import { SignUpModal } from './components/SignUpModal';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const Login = () => {
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState<boolean>(
    false
  );
  const history = useHistory();
  const [form] = Form.useForm();

  const db = app.database();
  console.log('db', db);

  const onFinish = async (value: any) => {
    const { email, password } = value;
    console.log('email', email);
    try {
      await app.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };
  app.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('user', user);
      // User is signed in.
      var user1 = app.auth().currentUser;
      console.log('user1', user1);
    } else {
      // No user is signed in.
    }
  });

  return (
    <div className="p-64">
      <Form form={form} onFinish={onFinish} labelCol={{ span: 6 }}>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input.Password />
        </Form.Item>
        <div className="flex justify-center">
          <div
            className="text-blue-500 underline cursor-pointer"
            onClick={() => {
              setIsSignUpModalVisible(true);
            }}
          >
            Sign Up
          </div>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
      {isSignUpModalVisible && (
        <SignUpModal
          isVisible={isSignUpModalVisible}
          setIsVisible={setIsSignUpModalVisible}
        />
      )}
    </div>
  );
};
