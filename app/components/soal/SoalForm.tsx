import { getValueFromEvent, useForm, useSelect } from "@refinedev/antd";
import { useApiUrl } from "@refinedev/core";
import { Button, Col, Form, Input, Row, Select, Upload } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { ISoal, ITopik } from "~/interfaces";
import PilihanGanda from "./PilihanGanda";
import MultiJawaban from "./MultiJawaban";

export default function SoalForm(props) {
    const { selectProps: topikSelectProps } = useSelect<ITopik>({
        resource: "topiks",
        sort: [
            {
                field: "title",
                order: "asc",
            }
        ]
    })
    const [tipeSoal, setTipeSoal] = useState();
    const apiUrl = useApiUrl();
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
    const handleTipe = (value) => {
        setTipeSoal(value);
    }    
    const tipe = props?.dataValues?.data.tipe    
    useEffect(() => {
        setTipeSoal(tipe)
    },[tipe])
    return (
        <>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item label="Topik" name={["Topik","id"]} rules={[
                        { required: true },
                    ]} wrapperCol={{
                        style: {
                            width: "300px"
                        }
                    }}>
                        <Select {...topikSelectProps} />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item label="Bobot" name="bobot" rules={[
                        { required: true },
                    ]}>
                        <Input type='number' min="0" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item label="Tipe Soal" name="tipe" rules={[
                        { required: true },
                    ]}>
                        <Select
                            style={{ width: 150 }}
                            options={[
                                { value: 'Pilihan Ganda', label: 'Pilihan Ganda' },
                                { value: 'Multi jawaban', label: 'Multi jawaban' }
                            ]}
                            onChange={handleTipe}                            
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Waktu (detik)" name="waktu" rules={[
                        { required: true },
                    ]}>
                        <Input type='number' min="1" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item label="Judul soal" name="title" rules={[
                        { required: true }
                    ]}>
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Image">
                        <Form.Item
                            name="image"
                            valuePropName="f"
                            getValueFromEvent={getValueFromEvent}
                            noStyle
                        >
                            <Upload.Dragger
                                name="files"
                                action={`${apiUrl}/upload`}
                                listType="picture"
                                maxCount={5}
                                multiple
                            >
                                <p className="ant-upload-text">
                                    Drag & drop a file in this area
                                </p>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item label="Pertanyaan" name="keterangan" rules={[
                { required: true }
            ]}>
                <Input.TextArea rows={5} />
            </Form.Item>
            {
                (() => {
                    if (tipeSoal == 'Pilihan Ganda') {
                        return (
                            <PilihanGanda />
                        )
                    } else if (tipeSoal == 'Multi jawaban') {
                        return (
                            <MultiJawaban />
                        )
                    }
                })()
            }
        </>
    )
}
