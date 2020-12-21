import React, { useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { app } from '../base';

interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}
const onFinish = async (value: { email: string; password: string }) => {
  const { email, password } = value;

  try {
    await app.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
};

export const SignUpModal = (props: Props) => {
  const { isVisible, setIsVisible } = props;
  const [form] = Form.useForm();
  return (
    <Form form={form} onFinish={onFinish} labelCol={{ span: 6 }}>
      <Modal
        onCancel={() => {
          setIsVisible(false);
        }}
        visible={isVisible}
        onOk={() => form.submit()}
      >
        <Form.Item name="email" label="E-Mail:">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input.Password />
        </Form.Item>
      </Modal>
    </Form>
  );
};
