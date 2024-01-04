import { Create, useForm } from "@refinedev/antd";
import { Col, DatePicker, Form, Input, Row, Select, Switch } from "antd";
import { ITopik } from "~/interfaces";
const { RangePicker } = DatePicker;

export default function TopikCreate() {
  const { formProps, saveButtonProps } = useForm<ITopik>();

  return (
    <>
      <Create saveButtonProps={saveButtonProps} wrapperProps={{
        style: {
          width: "500px",
        },
      }}>
        <Form {...formProps} layout="vertical">
          <Form.Item label="Nama" name="title" rules={[
            { required: true }
          ]}>
            <Input showCount maxLength={30} />
          </Form.Item>
          <Form.Item label="Tipe Soal" name="tipe_soal" rules={[
            { required: true }
          ]}
            wrapperCol={{
              style: {
                width: "200px"
              }
            }}>
            <Select
              options={[
                {
                  label: "Pilihan Ganda",
                  value: "Ganda",
                },
                {
                  label: "Multi Soal",
                  value: "Multi",
                }
              ]}
            />
          </Form.Item>
          Jadwal                   
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label="Start" name="mulai" rules={[
                  { required: true }
                ]}>
                  <DatePicker showTime />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Selesai" name="akhir" rules={[
                  { required: true }
                ]}>
                  <DatePicker showTime />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="Show Result" name="show_result">
              <Switch value="1" />
            </Form.Item>
        </Form>
      </Create>
    </>
  );
}