import { DateField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Descriptions } from "antd";

export default function Detail(props) {
    const { queryResult } = useShow<ITopik>({
        metaData: {
            populate: "*"
        },
    });
    const { data, isLoading } = queryResult;
    const record = data?.data;
    return (
        <Descriptions title="Detail">
            <Descriptions.Item label="Nama">{record?.title}</Descriptions.Item>
            <Descriptions.Item label="Tipe Soal">{record?.tipe_soal}</Descriptions.Item>
            <Descriptions.Item label="Show result">
                {record?.show_result ? 'Ya' : 'Tidak'}
            </Descriptions.Item>
            <Descriptions.Item label="Mulai">                
                <DateField format="LLL" value={record?.mulai} />
            </Descriptions.Item>
            <Descriptions.Item label="Selesai">
                <DateField format="LLL" value={record?.akhir} />
            </Descriptions.Item>
        </Descriptions>
    )
}
