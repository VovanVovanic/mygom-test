
export const dataHandler = (
  rowData: Array<Object>,
  flatData: Array<string> | Array<number>,
  dataReduced: Array<Object>,
  keys: Array<string> | Array<number>,
  theme: string,
  grouped: boolean,
  groupBy: string | number 
) => {
  const isThemeExist = keys.length && keys.some((key: string | number) => key === theme)
  
  if (!isThemeExist) {
    console.log(`The theme ${theme} is not exist in data`)
    return
  }

  if (grouped) {
    const groupeArray = dataReduced[groupBy]
    const groupedItems = groupeArray.reduce((acc:Object, el: string | number) => {
      acc[el] = rowData.filter((d: Object) => d[groupBy] === el)
                .map((e)=>e[theme])
      return acc
    }, {})
    return groupedItems
  }
  return dataReduced[theme]
  if (flatData.length) return flatData
}