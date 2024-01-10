import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Tabs, TabsProps } from "antd";
import Detail from "~/components/topik/detail";
import Peserta from "~/components/topik/peserta";
import Soal from "~/components/topik/soal";
import { ITopik } from "~/interfaces";

export default function TopikShow() {
    const { queryResult } = useShow<ITopik>({
        metaData: {
            populate: "*"
        },
    });
    const { data, isLoading } = queryResult;
    const record = data?.data;
    const items: TabsProps['items'] = [
        {
          key: 'detail',
          label: 'Detail',
          children: <Detail id={record?.id} />
        },
        {
          key: 'soal',
          label: 'Soal',
          children: <Soal id={record?.id} />
        },
        {
          key: 'peserta',
          label: 'Daftar Peserta',
          children: <Peserta id={record?.id} />
        }
      ]
    return (
        <Show isLoading={isLoading}>
            <h1>{record?.title}</h1>
            <Tabs items={items} />
        </Show>
    )
}
