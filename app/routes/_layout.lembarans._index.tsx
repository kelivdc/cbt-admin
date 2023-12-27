import { DateField, getDefaultSortOrder, useTable } from '@refinedev/antd'
import { List, Table } from 'antd'
import React from 'react'
import { IUserJawaban } from '~/interfaces'

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
    return (
        <List title="Lembar Jawaban" canCreate>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="ID" width={25} sorter defaultSortOrder={getDefaultSortOrder("id", sorter)} />
                <Table.Column dataIndex={["User", "username"]} title="Peserta" />
                <Table.Column dataIndex="Skor" title="Poin" sorter />
                <Table.Column dataIndex="Soal" title="Topik soal"
                    render={(value) => value.Topik.title
                    }
                />
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
