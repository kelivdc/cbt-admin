import { DeleteButton, EditButton, List, ShowButton, getDefaultSortOrder, useTable } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Space, Table } from "antd";
import { ISoal } from "~/interfaces";

export default function Soal(props) {
    const topik_id = props.id;
    const { tableProps, searchFormProps, sorter } = useTable({
        resource: "soals",
        errorNotification: (data, values, resource) => {
            return {
                message: `Something went wrong when getting Soal list`,
                description: "Error",
                type: "error",
            };
        },
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
        <List title="Soal" canCreate resource="soals">            
            <Table {...tableProps} rowKey="id" 
             pagination={{                    
                ...tableProps.pagination,                   
                showSizeChanger: true,
                showTotal: (total, range) => {
                    return `Total: ${total} records`
                  },
            }}>
                <Table.Column dataIndex="id" title="ID" width={25} sorter defaultSortOrder={getDefaultSortOrder("id", sorter)} />
                <Table.Column dataIndex="title" title="Soal" />
                <Table.Column dataIndex="waktu" title="Waktu (detik)" />
                <Table.Column dataIndex="bobot" title="Bobot" sorter />
                <Table.Column<ISoal>
                    title="Actions"
                    dataIndex="actions"
                    key="actions"
                    render={(_, record) => (
                        <Space>
                            <ShowButton size="small" resource="soals" recordItemId={record.id} hideText title="Show" />
                            <EditButton size="small" resource="soals" recordItemId={record.id} hideText title="Edit" />
                            <DeleteButton size="small" resource="soals" recordItemId={record.id} hideText title="Delete" />
                        </Space>
                    )}
                />
            </Table>
        </List>
    )
}
