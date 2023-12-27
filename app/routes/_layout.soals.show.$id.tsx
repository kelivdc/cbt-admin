import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Show, Title } from '@refinedev/antd'
import { useShow } from '@refinedev/core';
import { Card, Col, Row, Typography } from 'antd';
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
  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID: {record?.id}</Title>
      <Row>
        <Col span={6}>Judul</Col>
        <Col span={18}>{record?.title}</Col>
      </Row>
      <Row>
        <Col span={6}>Topik</Col>
        <Col span={18}>{record?.Topik?.title}</Col>
      </Row>
      <Row>
        <Col span={6}>Bobot</Col>
        <Col span={18}>{record?.bobot}</Col>
      </Row>
      <Row>
        <Col span={6}>Tipe</Col>
        <Col span={18}>{record?.tipe}</Col>
      </Row>
      <Row>
        <Col span={6}>Gambar</Col>
        <Col span={18}>{record?.gambar}</Col>
      </Row>
      <Card title="Soal" size="small" style={{marginTop: "15px"}}>
        {record?.keterangan}
      </Card>
      <Card title="Pilihan" size="small" style={{marginTop: "15px"}}>
        {record?.pilihan_ganda.map((pilihan, idx) => (
          <div key={idx}>{pilihan.jawaban_benar ? <CheckOutlined style={{color: "#00ff00"}} /> : <CloseOutlined style={{color: "#ff0000"}} />} {pilihan.title} 
          </div>
        ))}
      </Card>
    </Show>
  )
}
