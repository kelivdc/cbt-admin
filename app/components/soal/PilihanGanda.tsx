import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Col, Form, Input, Row, Space, Switch } from "antd"

export default function PilihanGanda() {
    return (
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
    )
}
