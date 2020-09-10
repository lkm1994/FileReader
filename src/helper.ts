export const getTableData = (separator: string, uploadedData: string) => {
    let result: string[] = [''];
    if (separator === '') {
        result = uploadedData.length > 0 ? [uploadedData] : []
    } else {
        result = uploadedData.length > 0 ? uploadedData.split(separator) : [];
    }
    const deepCloneData = JSON.parse(JSON.stringify(result))
    result.forEach((data: any, index: number) => {
        if (!data) {
            deepCloneData.splice(index, 1)
        }
    })
    return {
        noOfRows: getNumberOfTableRows(deepCloneData),
        columnData: getColumnData(deepCloneData),
    }
}
export const getColumnData = (splitData: string[]) => {
    let multiDimensionalData: any = [];
    if (splitData.length > 0) {
        while (splitData.length) {
            multiDimensionalData.push(splitData.splice(0, 4))
        }
    }
    return multiDimensionalData;
}
export const getNumberOfTableRows = (splitData: string[]) => {
    return Math.ceil(splitData.length / 4)
}