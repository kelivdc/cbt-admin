import { DeleteButton, EditButton, FilterDropdown, List, ShowButton, getDefaultSortOrder, useSelect, useTable } from '@refinedev/antd'
import { Select, Space, Table } from 'antd'
import { ISoal, ITopik } from '~/interfaces'

export default function SoalList() {
    const { tableProps, searchFormProps, sorter, filters } = useTable<ISoal>({
        meta: {
            populate: "*"
        },
    })
    const { selectProps: topikSelectProps } = useSelect<ITopik>({
        resource: "topiks",
        optionLabel: "title",
        optionValue: "id",
    });
    return (
        <List title="Daftar Soal" canCreate>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="ID" width={25} sorter defaultSortOrder={getDefaultSortOrder("id", sorter)} />
                <Table.Column dataIndex={["Topik", "title"]} sorter title="Topik soal"
                    key="Topik.id"
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Select
                                mode="single"
                                placeholder="Select Topik"
                                style={{
                                    width: "300px"
                                }}
                                {...topikSelectProps}
                            />
                        </FilterDropdown>
                    )}
                />
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
