import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Create, getValueFromEvent, useForm, useSelect } from '@refinedev/antd'
import { useApiUrl } from '@refinedev/core';
import { Button, Col, Form, Input, Row, Select, Space, Switch, Table, Upload, UploadProps } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import MultiJawaban from '~/components/soal/MultiJawaban';
import PilihanGanda from '~/components/soal/PilihanGanda';
import SoalForm from '~/components/soal/SoalForm';
import { ISoal, ITopik } from '~/interfaces';

export default function SoalCreate() {
    const { formProps, saveButtonProps } = useForm<ISoal>();
    // const [tipeSoal, setTipeSoal] = useState(null);
    // const { selectProps: topikSelectProps } = useSelect<ITopik>({
    //     resource: "topiks",
    //     sort: [
    //         {
    //             field: "title",
    //             order: "asc",
    //         }
    //     ]
    // })

    // const apiUrl = useApiUrl();
    // const columns: ColumnsType<DataType> = [
    //     {
    //         title: 'Jawaban',
    //         dataIndex: 'jawaban',
    //         key: 'jawaban'
    //     },
    //     {
    //         title: 'Benar/Salah',
    //         dataIndex: 'benar',
    //         key: 'benar'
    //     },
    //     {
    //         title: 'Action',
    //         key: 'action',
    //         render: (text, record) => (
    //             <Button onClick={() => handleDelete(record.key)} type="link">
    //                 Delete
    //             </Button>
    //         ),
    //     },
    // ]
    // const handleTipe = (value) => {
    //     setTipeSoal(value);
    // }
    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <SoalForm />                           
            </Form> 
        </Create>
    )
}
