import { HandlerPage } from "../../components/pages/handler-page"
import { apiAxios } from "../../networks";

export const HandlerContainer = () =>
{
  const getFile = async () =>  
  {
    await apiAxios.get('name_js.xlsx', {
      responseType: "arraybuffer",
      headers:
            {
                'Content-Disposition': "attachment; filename=name_js.xlsx",
                'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            },
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'name_js.xlsx');
        document.body.appendChild(link);
        link.click();
    })
        .catch((error) => console.log(error));
  }

  return <HandlerPage getFile={getFile} /> 
}