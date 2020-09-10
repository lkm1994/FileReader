import React from 'react';
import { FilterInterface } from '../App';
interface Props {
    filterData: FilterInterface,
    fileData: any,
    [propsName: string]: any
}
const TableComponent = (props: Props) => {
    return (
        <>
            <div className="row filter-style">
                <div className='col-md-6'>
                    <input type='text' className="form-control" placeholder="Enter separator" value={props.filterData.separator} onChange={props.handleSeparatorFilter} maxLength={1} />
                </div>
                <div className='col-md-6'>
                    <input type='text' className="form-control" disabled value={props.filterData.numberofLines} />
                </div>
            </div>
            <div className="row">
                <table className="table table-bordered">
                    <tbody>
                        {
                            props.fileData ?
                                props.fileData.columnData.map((numList: any, i: number) => (
                                    <tr key={i}>
                                        {
                                            numList.map((num: any, j: number) =>
                                                <td key={j}>{num}</td>
                                            )
                                        }
                                    </tr>
                                )) : ''
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableComponent