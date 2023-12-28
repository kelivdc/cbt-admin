import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Edit, getValueFromEvent, useForm, useSelect } from '@refinedev/antd'
import { useApiUrl } from '@refinedev/core';
import { Button, Col, Form, Input, Row, Select, Space, Switch, Table, Upload, UploadProps } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { ISoal, ITopik } from '~/interfaces';

export default function SoalEdit() {
    const { formProps, saveButtonProps, queryResult } = useForm<ISoal>({
        meta: {
            populate: "*",
        },
    });
    const soalData = queryResult?.data?.data;
    const { selectProps: topikSelectProps } = useSelect<ITopik>({
        resource: "topiks",
        defaultValue: soalData?.Topik?.id
    });

    const apiUrl = useApiUrl();
    const columns: ColumnsType<DataType> = [
        {
            title: 'Jawaban',
            dataIndex: 'jawaban',
            key: 'jawaban'
        },
        {
            title: 'Benar/Salah',
            dataIndex: 'benar',
            key: 'benar'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button onClick={() => handleDelete(record.key)} type="link">
                    Delete
                </Button>
            ),
        },
    ]
    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Topik" name={["Topik", "id"]} rules={[
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
                                    { value: 'Pilihan Ganda', label: 'Pilihan Ganda' }
                                ]}
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
                    <Input />
                </Form.Item>
                <Form.Item label="Pilihan Ganda">                    
                    <Form.List label="Pilihan" name="pilihan_ganda" labelCol={{ flex: '110px' }} wrapperCol={{ flex: 1 }}>                        
                        {(fields, { add, remove }) => (
                            <>
                                <Space direction="vertical" size="small" style={{ width: "700px" }}>
                                    {fields.map((field, index) => {
                                        return (
                                            <Row key={field.key}>
                                                <Col span={14}>
                                                    <Form.Item name={[field.name, 'title']} rules={[{ required: true }]}>                                                        
                                                        <Input placeholder={`Jawaban ${index + 1}`} />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={2}>                                                                                                        
                                                    <Form.Item name={[field.name, 'jawaban_benar']} valuePropName="checked">
                                                        <Switch checkedChildren="Benar" unCheckedChildren="Salah" value="1" />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={4}>
                                                    {fields.length > 0 ? (
                                                        <MinusCircleOutlined
                                                            onClick={() => remove(field.name)}
                                                            style={{ marginLeft: "10px" }}
                                                        />
                                                    ) : null}
                                                </Col>
                                            </Row>
                                        )
                                    })}
                                    <Form.Item>
                                        <Button type='dashed' icon={<PlusOutlined />} onClick={() => add()}>
                                            Add jawaban
                                        </Button>
                                    </Form.Item>
                                </Space>
                            </>
                        )}
                    </Form.List>
                </Form.Item>
            </Form>
        </Edit>
    )
}
