import { useShow } from "@refinedev/core";
import { Descriptions, Tag } from "antd";

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
      <Descriptions.Item label="Blocked">
        {record?.blocked ? (
          <Tag color="red">Yes</Tag>
        ) : (
          <Tag color="green">No</Tag>
        )}
      </Descriptions.Item>
    </Descriptions>
  )
}
