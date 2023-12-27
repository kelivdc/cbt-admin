import { Show } from '@refinedev/antd'
import { useShow } from '@refinedev/core'
import { Button, Typography } from 'antd';
import React from 'react'

const { Title, Text } = Typography;
const TrueIcon = () => <span>✅</span>;
const FalseIcon = () => <span>❌</span>;

export default function PesertaShow() {
    const { queryResult } = useShow<IPeserta>({
        metaData: {
            populate: "*"
        }
    });
    const { data, isLoading } = queryResult;
    const record = data?.data;
    return (
        <Show isLoading={isLoading}
            headerButtons={({ defaultButtons }) => (
                <>
                    {defaultButtons}
                    <Button type="primary" >Change password</Button>
                </>
            )}
        >
            <Title level={5}>ID</Title>
            <Text>{record?.id}</Text>
            <Title level={5}>Kelompok</Title>
            <Text>{record?.kelompok?.title}</Text>
            <Title level={5}>Nama lengkap</Title>
            <Text>{record?.title}</Text>
            <Title level={5}>Alamat</Title>
            <Text>{record?.alamat}</Text>
            <Title level={5}>Username</Title>
            <Text>{record?.username}</Text>
            <Title level={5}>Status</Title>
            <Text>{record?.status ? <TrueIcon /> : <FalseIcon />}</Text>
        </Show>
    )
}
