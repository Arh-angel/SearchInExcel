/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import * as XLSX from 'xlsx';

import style from './handler.page.module.scss';

type HandlerPagePropsType = { 
  getFile: () => void
}

export const HandlerPage = (props: HandlerPagePropsType) =>
{
  const [title, setTitle] = useState('Search data')
  const [search, setSearch] = useState('Search data')
  const [data, setData] = useState<string>('')
  const { getFile } = props;

  useEffect(() =>
  {
    if (search.length < 1 || search.length > 3)
    {
      setTitle('Поиск осуществляется по трем введенным значениям! Язык введенных значений должен совпадать с искомым значением в Excel!')
    } else if (search.length === 3)
    {
      data.includes(search.toUpperCase()) ? setTitle('номер найден') : setTitle('номер не найден')
    }
  }, [data, search])

  const fileRef = useRef<HTMLInputElement>(null) 

  const onButtonClick = () => {
    fileRef.current?.click();
  };

  const handlerChange = (event: any) => {
    event.preventDefault();

    const files = event.target.files,
          f = files[0];
    
    const reader = new FileReader();

    reader.onload = function (e) {
        const data = reader.result;
        const readedData = XLSX.read(data, {type: 'binary'});
        const wsname = readedData.SheetNames[0];
        const ws = readedData.Sheets[wsname];

      const dataParse: any[] = XLSX.utils.sheet_to_json(ws, { header: 1 });

      const dataArr = dataParse.join(' ').split(' ');
      dataArr.shift()
      
      setData(dataArr.join(' '));
    };
    reader.readAsBinaryString(f)
  }
  
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.subtext}>{ data }</p>
      </div>
      <div className={style.action}>
        <input className={style.input} type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
        <input type="file" ref={fileRef} onChange={(e) => handlerChange(e)} style={{display: "none"}} />
        <button className={style.button} onClick={onButtonClick}>Open downloaded file</button>
        <button className={style.button} onClick={getFile}>Get file</button>
      </div>
    </div>
    )
}