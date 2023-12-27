import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Switch } from "antd";
import { IPeserta, IKelompok } from "~/interfaces";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Peserta",
    viewport: "width=device-width,initial-scale=1",
});
export default function PesertaEdit() {
    const { formProps, saveButtonProps, queryResult } = useForm<IPeserta>({
        metaData: { populate: ["kelompok"] },
        warnWhenUnsavedChanges: true,
    });

    const { selectProps: kelompokSelectProps } = useSelect<IKelompok>({
        resource: "kelompoks",
        defaultValue: queryResult?.data?.data.kelompok?.id
    })
    return (
        <>
            <Edit saveButtonProps={saveButtonProps}>
                <Form {...formProps} layout="vertical">
                    <Form.Item label="Username" name="username" rules={[
                        { required: true }
                    ]}>
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
                    >
                        <Select {...kelompokSelectProps} />
                    </Form.Item>
                    <Form.Item label="Status" name="status" valuePropName="checked">
                        <Switch> Active</Switch>
                    </Form.Item>
                </Form>
            </Edit>
        </>
    )
}