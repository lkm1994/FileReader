import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import FileUploadComponent from './FileUpload/index';
import TableComponent from './TableComponent/index';
import { getTableData } from './helper';
export interface FilterInterface {
  separator: string;
  numberofLines: number;
}
function App() {
  const [fileRawData, setFileRawData] = useState<any>('');
  const [fileData, setFileData] = useState<any>(null);
  const [filter, setFilter] = useState<FilterInterface>({
    separator: ',',
    numberofLines: 0
  })
  const handleFileChange = (file: any) => {
    const formData = new FormData();
    formData.append('file', file[0])
    axios.post('http://localhost:3000/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((data: any) => {
      setFileRawData(data.data)
      setFileData(getTableData(filter.separator, data.data))
      setFilter({
        ...filter,
        numberofLines: getTableData(filter.separator, data.data).noOfRows
      })
    }).catch((error) => {
      alert('Error in uploading file')
    })
  }
  const sepratorTextChange = (event: any) => {
    setFileData(getTableData(event.target.value, fileRawData))
    setFilter({
      ...filter,
      separator: event.target.value,
      numberofLines: getTableData(event.target.value, fileRawData).noOfRows
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2 className='page-title'>File Reader</h2>
        <FileUploadComponent handleChange={handleFileChange} />
        <p></p>
        <TableComponent filterData={filter} fileData={fileData} handleSeparatorFilter={sepratorTextChange} />
        {/* <input type="file" onChange={handleFileChange} accept=".pdf, .txt"/> */}
      </header>
    </div>
  );
}

export default App;
