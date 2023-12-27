import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

interface ITopik {
  id: number;
  title: string;
}

export default function TopikCreate() {
  const { formProps, saveButtonProps } = useForm<ITopik>();

  return (
    <>
      <Create saveButtonProps={saveButtonProps} wrapperProps={{
        style: {
          width: "300px",
        },
      }}>
        <Form {...formProps} layout="vertical">
          <Form.Item label="Nama" name="title" rules={[
            { required: true }
          ]}>
            <Input />
          </Form.Item>
        </Form>
      </Create>
    </>
  );
}