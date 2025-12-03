import * as XLSX from "xlsx";

export async function readExcelColumn(columnName) {
  const res = await fetch("/excel_solutions.xlsx");
  const buf = await res.arrayBuffer();
  const wb = XLSX.read(buf, { type: "array" });

  const sheet = wb.Sheets[wb.SheetNames[0]];
  const json = XLSX.utils.sheet_to_json(sheet);

  // Extract only that column
  const column = json
    .map((row) => row[columnName])
    .filter((v) => v && v.trim().length > 0);

  return column;
}