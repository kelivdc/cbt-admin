import { DeleteButton, EditButton, List, ShowButton, getDefaultSortOrder, useTable } from '@refinedev/antd'
import { Space, Table } from 'antd'
import { ISoal } from '~/interfaces'

export default function SoalList() {
    const { tableProps, searchFormProps, sorter } = useTable<ISoal>({
        meta: {
            populate: "*"
        }
    })
    return (
        <List title="Daftar Soal" canCreate>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="ID" width={25} sorter defaultSortOrder={getDefaultSortOrder("id", sorter)} />
                <Table.Column dataIndex={["Topik", "title"]} title="Topik" />
                <Table.Column dataIndex="title" title="Soal" />
                <Table.Column dataIndex="waktu" title="Waktu (detik)" />
                <Table.Column<ISoal>
                    title="Actions"
                    dataIndex="actions"
                    key="actions"
                    render={(_, record) => (
                        <Space>
                            <ShowButton size="small" recordItemId={record.id} hideText title="Show" />
                            <EditButton size="small" recordItemId={record.id} hideText title="Edit" />
                            <DeleteButton size="small" recordItemId={record.id} hideText title="Delete" />
                        </Space>
                    )}
                />
            </Table>
        </List>
    )
}
