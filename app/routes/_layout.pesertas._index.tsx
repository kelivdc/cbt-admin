import { SearchOutlined } from "@ant-design/icons";
import { BooleanField, DateField, DeleteButton, EditButton, List, SaveButton, ShowButton, getDefaultSortOrder, useTable } from "@refinedev/antd";
import { Form, Input, Space, Table } from "antd";

interface IPeserta {
  id: number;
  title: string;
  kelompok: string;
  status: boolean;
  username: string;
}

interface ISearch {
  title: string;
  username: string;
}

export default function PesertaList() {
  const { tableProps, searchFormProps, sorter } = useTable<IPeserta>({
    meta: {
      populate: "*",
    },
    onSearch: (values) => {
      return [
        {
          field: "title",
          operator: "contains",
          value: values.title,
        },
        {
          field: "username",
          operator: "contains",
          value: values.username,
        }
      ]
    }
  })

  const TrueIcon = () => <span>✅</span>;
  const FalseIcon = () => <span>❌</span>;

  return (
    <List title="Peserta" canCreate>
       <div style={{paddingBottom: "15px"}}>
      <Form {...searchFormProps} layout="inline">
        <Space >
          <Form.Item name="title">
            <Input placeholder="Search by nama" />
          </Form.Item>
          <SaveButton icon={<SearchOutlined />} onClick={searchFormProps.form?.submit}>Find</SaveButton>
        </Space>
      </Form>
      </div>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" width={20} sorter defaultSortOrder={getDefaultSortOrder("id", sorter)} />
        <Table.Column dataIndex={["kelompok", "title"]} title="Kelompok" sorter defaultSortOrder={getDefaultSortOrder("kelompok", sorter)} />
        <Table.Column dataIndex="title" title="Nama" sorter defaultSortOrder={getDefaultSortOrder("title", sorter)} />
        <Table.Column dataIndex="username" title="Username" sorter defaultSortOrder={getDefaultSortOrder("username", sorter)} />
        <Table.Column
          dataIndex="status"
          title="Active"
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
        <Table.Column dataIndex="createdAt" title="Created" sorter defaultSortOrder={getDefaultSortOrder("createdAt", sorter)} 
        render={(value) => (
          <DateField format="LLL" value={value} />
      )}
         />
        <Table.Column<IPeserta>
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