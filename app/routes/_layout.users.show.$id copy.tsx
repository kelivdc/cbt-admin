import { Edit, Show, useModalForm } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Button, Descriptions, Form, Input, Modal, Tabs, TabsProps, Typography } from "antd";
import { useState } from "react";
import ChangePassword from "~/components/user/change_password";
import Hasil from "~/components/user/hasil";
import Profile from "~/components/user/profile";
import { IUser } from "~/interfaces";
const { Title, Text } = Typography;

export default function UserShow() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { queryResult } = useShow<IUser>({
    metaData: {
      populate: "*"
    },
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;
  const items: TabsProps['items'] = [
    {
      key: 'profile',
      label: 'Profile',
      children: <Profile id={record?.id} />
    },
    {
      key: 'hasil',
      label: 'Hasil Test',
      children: <Hasil id={record?.id} />
    }
  ]
  return (
    <>
      <Show isLoading={isLoading} >
        <h1>{record?.username}</h1>
        <Tabs items={items} />
      </Show>     
    </>
  )
}
