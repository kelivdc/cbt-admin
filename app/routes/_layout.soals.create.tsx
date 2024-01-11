import { Create, useForm } from '@refinedev/antd'
import { Form  } from 'antd';
import SoalForm from '~/components/soal/SoalForm';
import { ISoal } from '~/interfaces';

export default function SoalCreate() {
    const { formProps, saveButtonProps } = useForm<ISoal>({
        meta: {
            populate: "*",
        },
        redirect: "show"
    });
   
    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <SoalForm />                           
            </Form> 
        </Create>
    )
}
