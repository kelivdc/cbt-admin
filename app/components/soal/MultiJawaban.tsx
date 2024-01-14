import { MinusCircleOutlined, PlusCircleFilled, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Flex, Form, Input, Radio, Space } from 'antd'

export default function MultiJawaban() {
    return (
        <Form.Item style={{
            width: "50%"
        }}>
            <Space direction="vertical" size="small">
                <Space.Compact style={{width: "550px"}}>
                    <div style={{width: "250px"}}>Bahan</div>
                    <Form.Item name="multi_bahan_1" rules={[
                        { required: true }
                    ]}>
                        <Input maxLength={1} />
                    </Form.Item>
                    <Form.Item label="" name="multi_bahan_2" rules={[
                        { required: true }
                    ]}>
                        <Input maxLength={1} />
                    </Form.Item>
                    <Form.Item label="" name="multi_bahan_3" rules={[
                        { required: true }
                    ]}>
                        <Input maxLength={1} />
                    </Form.Item>
                    <Form.Item label="" name="multi_bahan_4" rules={[
                        { required: true }
                    ]}>
                        <Input maxLength={1} />
                    </Form.Item>
                    <Form.Item label="" name="multi_bahan_5" rules={[
                        { required: true }
                    ]}>
                        <Input maxLength={1} />
                    </Form.Item>
                </Space.Compact>
                <Space.Compact style={{width: "550px"}}>
                    <div style={{width: "250px"}}>Abjad</div>
                    <Form.Item name="multi_abjad_1" >
                        <Input maxLength={1} />
                    </Form.Item>
                    <Form.Item label="" name="multi_abjad_2" >
                        <Input maxLength={1}  />
                    </Form.Item>
                    <Form.Item label="" name="multi_abjad_3" >
                        <Input maxLength={1}  />
                    </Form.Item>
                    <Form.Item label="" name="multi_abjad_4" >
                        <Input maxLength={1}  />
                    </Form.Item>
                    <Form.Item label="" name="multi_abjad_5" >
                        <Input maxLength={1}  />
                    </Form.Item>
                </Space.Compact>
            </Space>           
            <Form.Item label="Perintah pengerjaan" name="multi_perintah">
                <Input />
            </Form.Item>
            <Flex gap="middle">
                <div style={{ width: "35%" }}>Soal</div>
                <div style={{ width: "65%" }}>Jawaban</div>
            </Flex>
            <Form.List label="Multi" name="multi_jawaban" labelCol={{ flex: '110px' }} wrapperCol={{ flex: 1 }} >
                {(fields, { add, remove }) => (
                    <>
                        <Space direction="vertical" size="small">
                            {fields.map((field, index) => {
                                return (
                                    <Flex gap="small" key={index} style={{ border: "solid 1px #ccc", padding: "5px" }}>
                                        <Flex gap="middle">
                                            <div style={{width: "80px"}}>{`${index + 1}. Soal`}</div>
                                            <Form.Item name={[field.name, 'hint']} rules={[{ required: true }]}>
                                                <Input style={{ width: '85px' }} maxLength={4} />
                                            </Form.Item>
                                        </Flex>
                                        <Form.Item name={[field.name, 'jawaban']} rules={[{ required: true }]}>
                                            <Radio.Group style={{
                                                width: "250px"
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
