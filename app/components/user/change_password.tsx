import { Edit, useForm } from '@refinedev/antd';
import { useUpdate } from '@refinedev/core'
import { Form, Input } from 'antd';
import { IUser } from '~/interfaces';

export default function ChangePassword() {
  const { formProps, saveButtonProps, queryResult } = useForm<IUser>()
  return (
    <Edit saveButtonProps={saveButtonProps} headerButtons={false}>
      <Form {...formProps} layout="vertical" >
        <Form.Item
          name="password"
          noStyle
        >
          <Input type="password" />
        </Form.Item>
      </Form>
    </Edit>
  )
}
