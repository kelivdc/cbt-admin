import { Edit, useForm } from "@refinedev/antd";
import { Col, DatePicker, Form, Input, Row, Select, Switch } from "antd";
import dayjs from "dayjs";
import { ITopik } from "~/interfaces";

export default function TopikEdit() {
  const { formProps, saveButtonProps } = useForm<ITopik>();
  const dateFormat = "YYYY-MM-DD HH:mm:ss";
  return (
    <>
      <Edit saveButtonProps={saveButtonProps} wrapperProps={{
        style: {
          width: "500px",
        },
      }}  >
        <Form {...formProps} layout="vertical"
        >
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
              <Form.Item label="Mulai" name="mulai" rules={[
                { required: true }
              ]}
                getValueProps={(value) => ({
                  value: value ? dayjs(value) : "",
                })}
              >
                <DatePicker showTime format={dateFormat} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Selesai" name="akhir" rules={[
                { required: true }
              ]}
                getValueProps={(value) => ({
                  value: value ? dayjs(value) : "",
                })}
              >
                <DatePicker showTime format={dateFormat} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Show Result" name="show_result" valuePropName="checked">
            <Switch value="1" />
          </Form.Item>
        </Form>
      </Edit>
    </>
  )
}