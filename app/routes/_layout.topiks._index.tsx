import { BooleanField, DateField, DeleteButton, EditButton, List, ShowButton, getDefaultSortOrder, useTable } from "@refinedev/antd";
import { Space, Table } from "antd";
import { ITopik } from "~/interfaces";

export default function TopikList() {
  const TrueIcon = () => <span>✅</span>;
  const FalseIcon = () => <span>❌</span>;
  const { tableProps, searchFormProps, sorter } = useTable<ITopik>({
    meta: {
      populate: "*"
    }
  })
  return (
    <List title="Topik" canCreate>
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
        <Table.Column dataIndex="title" title="Topik" />
        <Table.Column dataIndex="mulai" title="Mulai" render={(value) => (
          <DateField format="LLL" value={value} />
        )} />
        <Table.Column dataIndex="akhir" title="Selesai" render={(value) => (
          <DateField format="LLL" value={value} />
        )} />
        <Table.Column
          dataIndex="show_result"
          title="Show Result"
          render={(value) => (
            <BooleanField
              value={value === true}
              trueIcon={<TrueIcon />}
              falseIcon={<FalseIcon />}
              valueLabelTrue="active"
              valueLabelFalse="no active"
            />
          )}
        />
        <Table.Column<ITopik>
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
  );
}
