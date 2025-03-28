import { Create, useForm, useSelect } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import { Checkbox, Form, Input, Select } from 'antd';
import { useState } from 'react';
import { ITopik, IUser } from '~/interfaces';

export default function UserCreate() {
  const { formProps, saveButtonProps } = useForm<IUser>();  
  
  return (
    <Create saveButtonProps={saveButtonProps} >
      <Form {...formProps} layout="vertical" >
        <Form.Item
          name="role"
          noStyle
          initialValue="1"
        >
          <Input type="hidden" />
        </Form.Item>
        <Form.Item
          name="confirmed"
          noStyle
          initialValue="1"
        >
          <Input type="hidden" />
        </Form.Item>
        <Form.Item label="Nama lengkap" name="username" rules={[
          { required: true }
        ]} wrapperCol={{
          style: {
            width: "300px"
          }
        }}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[
          { required: true }
        ]} wrapperCol={{
          style: {
            width: "300px"
          }
        }}>
          <Input type="email" />
        </Form.Item>       
        <Form.Item label="Password" name="password" rules={[
          { required: true }
        ]} wrapperCol={{
          style: {
            width: "300px"
          }
        }}>
          <Input type="password" />
        </Form.Item>                         
      </Form>
    </Create>
  )
}
