import { Create, Edit, useForm, useSelect } from '@refinedev/antd';
import { Form, Input, Select, Tabs, TabsProps } from 'antd';
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
        <Form.Item
          name="role"
          noStyle
          initialValue="3"
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

    // <Edit saveButtonProps={saveButtonProps}>
    //   <Form {...formProps} layout="vertical" >
    //     <Form.Item
    //       name="role"
    //       noStyle
    //       initialValue="3"
    //     >
    //       <Input type="hidden" />
    //     </Form.Item>
    //     <Form.Item label="Nama lengkap" name="username" rules={[
    //       { required: true }
    //     ]} wrapperCol={{
    //       style: {
    //         width: "300px"
    //       }
    //     }}>
    //       <Input />
    //     </Form.Item>
    //     <Form.Item label="Email" name="email" rules={[
    //       { required: true }
    //     ]} wrapperCol={{
    //       style: {
    //         width: "300px"
    //       }
    //     }}>
    //       <Input type="email" />
    //     </Form.Item>
    //     <Form.Item label="Topik" name={["Topik", "id"]}
    //       rules={[
    //         { required: true }
    //       ]}
    //       wrapperCol={{
    //         style: {
    //           width: "300px"
    //         }
    //       }}
    //     >
    //       <Select {...topikSelectProps} />
    //     </Form.Item>        
    //   </Form>
    // </Edit>
  )
}
