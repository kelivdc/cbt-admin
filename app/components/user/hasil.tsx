import { useApiUrl, useCustom, useMany, useOne } from "@refinedev/core";
import { useState } from "react";


export async function loader({ request }) {
  console.log('--- Load here ---')
  return 'Kosong'
}

export default function Hasil(props) {
  const apiUrl = useApiUrl();
  const { data, isLoading } = useCustom<PostUniqueCheckResponse>({
    url: `${apiUrl}/hasils/${props.id}`,
    method: "get",
  });
  const result = data?.data;
  if (isLoading) <div>Loading...</div>;
  return (
    <div>
      <table border="1" cellPadding="2" cellSpacing="2" width="50%">
        <thead>
          <tr>
            <th>Topik</th>
            <th>Poin</th>
          </tr>
        </thead>
        <tbody>
          {result ? (
            result.map((item) => {
              return (
                <tr>
                  <td>{item.title}</td>
                  <td align="center">{item.poin}</td>
              </tr>
              )
            })
          ) : ('Loading')
          }
       </tbody>
      </table>
    </div>
  )
}
