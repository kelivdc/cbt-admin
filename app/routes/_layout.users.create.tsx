import { Create, useForm, useSelect } from '@refinedev/antd';
import { Form, Input, Select } from 'antd';
import { ITopik, IUser } from '~/interfaces';

export default function UserCreate() {
  const { formProps, saveButtonProps } = useForm<IUser>();
  const { selectProps: topikSelectProps } = useSelect<ITopik>({
    resource: "topiks"
  })
  return (
    <Create saveButtonProps={saveButtonProps} >
      <Form {...formProps} layout="vertical" >
        <Form.Item
          name="role"
          noStyle
          initialValue="3"
        >
          <Input type="hidden"></Input>
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
        <Form.Item label="Topik" name={["Topik", "id"]}
          rules={[
            { required: true }
          ]}
          wrapperCol={{
            style: {
              width: "300px"
            }
          }}
        >
          <Select {...topikSelectProps} />
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
