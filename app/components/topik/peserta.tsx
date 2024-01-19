import { DeleteButton, EditButton, List, ShowButton, getDefaultSortOrder, useTable } from "@refinedev/antd";
import { Space, Table } from "antd";
import { IUser } from "~/interfaces";

export default function Peserta(props) {
    const topik_id = props.id;
    const { tableProps, searchFormProps, sorter } = useTable<IUser>({
        resource: "users",
        meta: {
            populate: "*"
        },
        filters: {
            initial: [
                {
                    field: "Topik.id",
                    operator: "eq",
                    value: topik_id
                }
            ]
        }
    })
    return (
        <List title="Daftar peserta" canCreate resource="users">
            <Table {...tableProps} rowKey="id"  pagination={{                    
                    ...tableProps.pagination,                   
                    showSizeChanger: true,
                    showTotal: (total, range) => {
                        return `Total: ${total} records`
                      },
                }}>
                <Table.Column dataIndex="id" title="ID" width={25} sorter defaultSortOrder={getDefaultSortOrder("id", sorter)} />
                <Table.Column dataIndex="username" title="Nama" sorter />
                <Table.Column dataIndex="email" title="Email" />
                <Table.Column<IUser>
                    title="Actions"
                    dataIndex="actions"
                    key="actions"
                    render={(_, record) => (
                        <Space>
                            <ShowButton size="small" resource="users" recordItemId={record.id} hideText title="Show" />
                            <EditButton size="small" resource="users" recordItemId={record.id} hideText title="Edit" />
                            <DeleteButton size="small" resource="users" recordItemId={record.id} hideText title="Delete" />
                        </Space>
                    )}
                />
            </Table>
        </List>
    )
}

