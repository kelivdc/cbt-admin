import { Create, Edit, useForm, useSelect } from '@refinedev/antd';
import { Checkbox, Form, Input, Select, Tabs, TabsProps } from 'antd';
import { Switch } from 'antd/lib';
import { ITopik, IUser } from '~/interfaces';

export default function UserEdit() {
  const { formProps, saveButtonProps, queryResult } = useForm<IUser>({
    meta: {
      populate: "Topik",
    },
    redirect: "show"
  });
  const userData = queryResult?.data?.data;
  const { selectProps: topikSelectProps } = useSelect<ITopik>({
    resource: "topiks",
    defaultValue: userData?.Topik?.id
  });

  const EditProfile = () => {
    return (
      <Form {...formProps} layout="vertical" >

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
        <Form.Item label="Blocked ?" name="blocked"          
          wrapperCol={{
            style: {
              width: "300px"
            }
          }}
          valuePropName="checked"
        >
          <Checkbox />
        </Form.Item>       
      </Form>
    )
  }

  const EditPassword = () => {
    return (
      <Form {...formProps} layout="vertical" >
        <Form.Item
          name="password"
          label="New Password"
          wrapperCol={{
            style: {
              width: "300px"
            }
          }}
          rules={[
            { required: true }
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    )
  }
  const items: TabsProps['items'] = [
    {
      key: 'profile',
      label: 'Profile',
      children: <EditProfile />
    },
    {
      key: 'password',
      label: 'Password',
      children: <EditPassword />
    }
  ]
  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Tabs items={items} />
    </Edit>    
  )
}
