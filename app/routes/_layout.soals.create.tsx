import { Create, useForm } from '@refinedev/antd'
import { mediaUploadMapper } from '@refinedev/strapi-v4';
import { Form } from 'antd';
import SoalForm from '~/components/soal/SoalForm';
import { ISoal } from '~/interfaces';

export default function SoalCreate() {
    const { formProps, saveButtonProps, queryResult } = useForm<ISoal>({
        meta: {
            populate: "*",
        },
        redirect: "show"
    });

    const { data } = queryResult;

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical"
                onFinish={(values) => {
                    formProps.onFinish?.(mediaUploadMapper(values));
                }}
            >
                <SoalForm dataValues={data} />
            </Form>
        </Create>
    )
}
