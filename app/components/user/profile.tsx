import { useShow } from "@refinedev/core";
import { Descriptions } from "antd";

export default function Profile(props) {
  const { queryResult } = useShow<IUser>({
    metaData: {
      populate: "*"
    },
  });
  const { data, isLoading } = queryResult;

  const record = data?.data;
  return (
    <Descriptions title="Detail">
      <Descriptions.Item label="Nama Lengkap">{record?.username}</Descriptions.Item>
      <Descriptions.Item label="Email">{record?.email}</Descriptions.Item>
      <Descriptions.Item label="Topik">{record?.Topik.title}</Descriptions.Item>
    </Descriptions>
  )
}
