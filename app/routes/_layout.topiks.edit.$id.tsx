import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

interface ITopik {
  id: number;
  title: string;
}

export default function TopikEdit() {
  const { formProps, saveButtonProps } = useForm<ITopik>();
  return (
    <>
      <Edit saveButtonProps={saveButtonProps}>
        <Form {...formProps} layout="vertical">
          <Form.Item label="Nama" name="title">
            <Input />
          </Form.Item>
        </Form>
      </Edit>
    </>
  )
}