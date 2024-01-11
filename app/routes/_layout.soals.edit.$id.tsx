import { Edit, useForm, useSelect } from '@refinedev/antd'
import { Form,  } from 'antd';
import SoalForm from '~/components/soal/SoalForm';
import { ISoal } from '~/interfaces';

export default function SoalEdit() {
    const { formProps, saveButtonProps, queryResult } = useForm<ISoal>({
        meta: {
            populate: "*",
        },
        redirect: "show"
    });
    const { data } = queryResult;    

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <SoalForm dataValues={data} />
            </Form>
        </Edit>
    )
}
