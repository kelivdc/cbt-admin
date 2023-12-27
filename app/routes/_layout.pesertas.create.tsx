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
  const { formProps, saveButtonProps } = useForm<IPeserta>();
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
        <Form.Item label="Username" name="username" rules={[
          { required: true }
        ]} wrapperCol={{
          style: {
            width: "300px"
          }
        }}>
          <Input />
        </Form.Item>
        <Form.Item label="Nama lengkap" name="title" rules={[
          { required: true }
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label="Alamat" name="alamat" rules={[
          { required: true }
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label="Kelompok" name={["kelompok", "id"]}
          rules={[
            { required: true }
          ]}
          wrapperCol={{
            style: {
              width: "300px"
            }
          }}
        >
          <Select {...kelompokSelectProps} />
        </Form.Item>
        <Form.Item label="Active" name="status">
          <Switch />
        </Form.Item>
      </Form>
    </Create>
  )
}