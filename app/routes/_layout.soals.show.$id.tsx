import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Show, Title } from '@refinedev/antd'
import { useShow } from '@refinedev/core';
import { Avatar, Card, Col, Flex, Row, Space, Typography } from 'antd';
import { ISoal } from '~/interfaces';

const { Title, Text } = Typography;

export default function SoalShow() {
  const { queryResult } = useShow<ISoal>({
    metaData: {
      populate: "*"
    },
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;
  const abjad = ["A", "B", "C", "D", "E"];
  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID: {record?.id}</Title>
      <Row>
        <Col span={6}>Judul:</Col>
        <Col span={18}>{record?.title}</Col>
      </Row>
      <Row>
        <Col span={6}>Topik:</Col>
        <Col span={18}>{record?.Topik?.title}</Col>
      </Row>
      <Row>
        <Col span={6}>Bobot:</Col>
        <Col span={18}>{record?.bobot}</Col>
      </Row>
      <Row>
        <Col span={6}>Tipe:</Col>
        <Col span={18}>{record?.tipe}</Col>
      </Row>
      <Row>
        <Col span={6}>Gambar:</Col>
        <Col span={18}>{record?.gambar}</Col>
      </Row>
      <Card title="Soal" size="small" style={{ marginTop: "15px" }}>
        {record?.keterangan}
      </Card>
      {record?.tipe == 'Multi jawaban' ?
        <Card title="Multi soal" size="small" style={{ marginTop: "15px" }}>
          
          <table style={{width: "500px", marginBottom: "20px"}} border="1" cellPadding={5}>
            <tr>
              <td>Bahan</td>
              <td>{record?.multi_bahan_1}</td>
              <td>{record?.multi_bahan_2}</td>
              <td>{record?.multi_bahan_3}</td>
              <td>{record?.multi_bahan_4}</td>
              <td>{record?.multi_bahan_5}</td>
            </tr>
            <tr>
              <td>Abjad</td>
              <td>{record?.multi_abjad_1}</td>
              <td>{record?.multi_abjad_2}</td>
              <td>{record?.multi_abjad_3}</td>
              <td>{record?.multi_abjad_4}</td>
              <td>{record?.multi_abjad_5}</td>              
            </tr>
          </table>
          <div style={{marginBottom: "15px"}}>{record?.multi_perintah}</div>
          {record?.multi_jawaban.map((multi, idx) => (
            <Flex key={idx + 1} style={{ marginBottom: "10px" }}>{idx + 1}. Soal {multi.hint} - {" "}
              <Flex gap="small" style={{ marginLeft: "10px" }}>
                {abjad.map((abc, ix) => (
                  <div key={ix}> {multi.jawaban == ix + 1 ? <Avatar size="small" style={{ backgroundColor: "#d84a1b" }}>{abc}</Avatar> : <Avatar size="small">{abc}</Avatar>}</div>
                ))}
              </Flex>
            </Flex>
          ))}
        </Card>
        :
        <Card title="Pilihan" size="small" style={{ marginTop: "15px" }}>
          {record?.pilihan_ganda.map((pilihan, idx) => (
            <div key={idx}>{pilihan.jawaban_benar ? <CheckOutlined style={{ color: "#00ff00" }} /> : <CloseOutlined style={{ color: "#ff0000" }} />} {pilihan.title}
            </div>
          ))}
        </Card>
      }
    </Show>
  )
}
