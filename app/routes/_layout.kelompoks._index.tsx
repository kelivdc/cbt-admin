import { AntdListInferencer } from "@refinedev/inferencer/antd";

export default function KelompoktList() {
  return (
    <AntdListInferencer
      fieldTransformer={(field) => {
        if (["locale", "updatedAt", "publishedAt"].includes(field.key)) {
          return false;
        }
        return field;
      }}
    />
  );
}
