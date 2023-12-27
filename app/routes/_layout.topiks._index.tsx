import { DeleteButton, EditButton, List, ShowButton, getDefaultSortOrder, useTable } from "@refinedev/antd";
import { Space, Table } from "antd";
import { ITopik } from "~/interfaces";

export default function TopikList() {
  const { tableProps, searchFormProps, sorter } = useTable<ITopik>({
    meta: {
      populate: "*"
    }
  })
  return (
    <List title="Topik" canCreate>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" width={25} sorter defaultSortOrder={getDefaultSortOrder("id", sorter)} />
        <Table.Column dataIndex="title" title="Topik" />
        <Table.Column<ITopik>
          title="Actions"
          dataIndex="actions"
          key="actions"
          render={(_, record) => (
            <Space>
              <EditButton size="small" recordItemId={record.id} hideText title="Edit" />
              <DeleteButton size="small" recordItemId={record.id} hideText title="Delete" />
            </Space>
          )}
        />
      </Table>
    </List>    
  );
}
