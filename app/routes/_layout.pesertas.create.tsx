import { Create, useForm, useSelect } from "@refinedev/antd";
import { Checkbox, Form, Input, Select, Switch } from "antd";

interface IPeserta {
  username: string;
  password: string;
  title: string;
  status: boolean;
  kelompok: { id: number };
}

interface IKelompok {
  id: number;
  title: string;
}
export default function PesertaCreate() {
  const { formProps, saveButtonProps } = useForm<IUser>();
  const { selectProps: topikSelectProps } = useSelect<ITopik>({
    resource: "topiks",
    sort: [
      {
        field: "title",
        order: "asc",
      }
    ],
    onSearch: (value) => [
      {
        field: "title",
        operator: "contains",
        value,
      }
    ]
  })
  const { selectProps: kelompokSelectProps } = useSelect<IKelompok>({
    resource: "kelompoks",
    sort: [
      {
        field: "title",
        order: "asc",
      }
    ],
    onSearch: (value) => [
      {
        field: "title",
        operator: "contains",
        value,
      }
    ]
  })
  return (
    <Create saveButtonProps={saveButtonProps} >
      <Form {...formProps} layout="vertical">
      <Form.Item
          name="role"
          noStyle
          initialValue="3"
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
        ]}>
          <Input />
        </Form.Item>        
        <Form.Item label="Email" name="email" rules={[
          { required: true }
        ]} wrapperCol={{
          style: {
            width: "300px"
          }
        }}>
          <Input />
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
        
        <Form.Item label="Blocked ?" name="blocked" valuePropName="checked">
          <Checkbox />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[
          { required: true }
        ]}  wrapperCol={{
          style: {
            width: "300px"
          }
        }}>
          <Input.Password type="password" />
        </Form.Item>
      </Form>
    </Create>
  )
}