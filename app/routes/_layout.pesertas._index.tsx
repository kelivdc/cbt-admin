import { SearchOutlined } from '@ant-design/icons'
import { DeleteButton, EditButton, FilterDropdown, List, SaveButton, ShowButton, TagField, getDefaultSortOrder, useModalForm, useSelect, useTable } from '@refinedev/antd'
import { Button, Form, Input, Modal, Select, Space, Table } from 'antd'
import { ITopik, IUser } from '~/interfaces'

export default function Users() {
  const { tableProps, searchFormProps, sorter } = useTable<IUser>({
    meta: {
      populate: "*",
    },
    onSearch: (values) => {
      return [
        {
          field: "username",
          operator: "contains",
          value: values.username,
        }
      ]
    },
    filters: {
      permanent: [
        {
          field: "role.type",
          operator: "eq",
          value: "member"
        }
      ],     
    }
  })
  const { selectProps: topikSelectProps } = useSelect<ITopik>({
    resource: "topiks",
    optionLabel: "title",
    optionValue: "id",
  });

  return (
    <>
      <List title="Daftar Peserta" canCreate>
        <div style={{ paddingBottom: "15px" }}>
          <Form {...searchFormProps} layout="inline">
            <Form.Item name="username">
              <Input placeholder="Search by nama" />
            </Form.Item>
            <SaveButton icon={<SearchOutlined />} onClick={searchFormProps.form?.submit}>Find</SaveButton>
          </Form>
        </div>
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
          <Table.Column dataIndex="username" title="Nama" sorter />
          <Table.Column dataIndex="email" title="Email" />
          <Table.Column
            dataIndex="blocked"
            title="Status"
            render={(blocked: boolean) => (
              <TagField
                value={blocked ? "Blocked" : "Active"}
                color={blocked ? "error" : "success"}
              />
            )}
          />
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
          <Table.Column<IUser>
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
    </>
  )
}
