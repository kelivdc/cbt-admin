import { Create, useForm } from '@refinedev/antd'
import { Form, Input } from 'antd';
import React from 'react'
import { IKelompok } from "~/interfaces";


export default function KelompokCreate() {
    const { formProps, saveButtonProps } = useForm<IKelompok>();
    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Nama" name="title" rules={[
                    { required: true }
                ]}
                >
                    <Input />
                </Form.Item>
            </Form>

        </Create>
    )
}
