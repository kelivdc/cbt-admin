import { MinusCircleOutlined, PlusCircleFilled, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Flex, Form, Input, Radio, Space } from 'antd'

export default function MultiJawaban() {
    return (
        <Form.Item style={{
            width: "50%"
        }}>
            <Flex gap="middle">
                <div style={{ width: "60%" }}>Soal</div>
                <div style={{ width: "40%" }}>Jawaban</div>
            </Flex>
            <Form.List label="Multi" name="multi_jawaban" labelCol={{ flex: '110px' }} wrapperCol={{ flex: 1 }}>
                {(fields, { add, remove }) => (
                    <>
                        <Space direction="vertical" size="small">
                            {fields.map((field, index) => {
                                return (
                                    <Flex gap="middle" key={index}>
                                        <Flex gap="middle">
                                            <div>{`${index + 1}. Soal`}</div>
                                            <Form.Item name={[field.name, 'hint']} rules={[{ required: true }]}>
                                                <Input style={{ width: '85px' }} maxLength={4} />
                                            </Form.Item>

                                        </Flex>
                                        <Form.Item name={[field.name, 'jawaban']} rules={[{ required: true }]}>
                                            <Radio.Group style={{
                                                width: "300px"
                                            }}>
                                                <Radio value={1}>A</Radio>
                                                <Radio value={2}>B</Radio>
                                                <Radio value={3}>C</Radio>
                                                <Radio value={4}>D</Radio>
                                                <Radio value={5}>E</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                        {fields.length > 0 ? (
                                            <MinusCircleOutlined
                                                onClick={() => remove(field.name)}
                                                style={{ marginLeft: "10px", color: "red" }}
                                            />
                                        ) : null}
                                    </Flex>
                                )
                            })}
                        </Space>
                        <Form.Item style={{
                            marginTop: "15px"
                        }}>
                            <Button type='dashed' icon={<PlusOutlined />} onClick={() => add()}>
                                Tambah
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </Form.Item>
    )
}
