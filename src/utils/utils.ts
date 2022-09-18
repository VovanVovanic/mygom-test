import { ArrayObjectType, FlatArrayType } from "./types"

export const dataHandler = (
  rowData: ArrayObjectType,
  flatData: FlatArrayType,
  dataReduced: ArrayObjectType,
  keys: FlatArrayType,
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

export const getClearLabel = (str) => {
  let label = str.toLowerCase().split("_").join(" ")
  label = label.split("")

  label[0] = label[0].toUpperCase()

  label.map((char, i) => {
    if (char === " ") {
      label[i + 1] = label[i + 1].toUpperCase()
    }
    return char
  })
  let res = label.join("")

  if (res.includes("Tpms")) {
    res = res.replace("Tpms", "TPMS")
  }
  return res
}