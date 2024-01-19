import { DateField, FilterDropdown, getDefaultSortOrder, useSelect, useTable } from '@refinedev/antd'
import { List, Select, Table } from 'antd'
import { ITopik, IUserJawaban } from '~/interfaces'

export default function Lembaran() {
    const { tableProps, searchFormProps, sorter } = useTable<IUserJawaban>({
        meta: {
            populate: {
                User: {
                    populate: "",
                },
                Soal: {
                    populate: ["Topik"],
                },
                Topik: {
                    populate: [""],
                },
            }
        }
    })
    const { selectProps: topikSelectProps } = useSelect<ITopik>({
        resource: "topiks",
        optionLabel: "title",
        optionValue: "id",
    });
    return (
        <List title="Lembar Jawaban" canCreate>
            <h1>Hasil Jawaban</h1>
            <Table {...tableProps} rowKey="id"
              pagination={{                    
                ...tableProps.pagination,                   
                showSizeChanger: true,
                showTotal: (total, range) => {
                    return `Total: ${total} records`
                  },
            }}
            >
                <Table.Column dataIndex="id" title="ID" width={25} sorter defaultSortOrder={getDefaultSortOrder("id", sorter)} />
                <Table.Column dataIndex={["User", "username"]} title="Peserta"
                    render={(value) => value
                    }
                />
                <Table.Column dataIndex="Skor" title="Poin" sorter />
                <Table.Column dataIndex={["Soal", "title"]} title="Soal" sorter />
                <Table.Column dataIndex="createdAt" title="Created" sorter defaultSortOrder={getDefaultSortOrder("createdAt", sorter)}
                    render={(value) => (
                        <DateField format="LLL" value={value} />
                    )}
                />
            </Table>
        </List>
    )
}
