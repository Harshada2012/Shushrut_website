import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "./ClinicPage.css";

export default function MedicalPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/excel_solutions.xlsx");
      const buf = await res.arrayBuffer();
      const workbook = XLSX.read(buf, { type: "array" });

      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet);

      const values = json
        .map((row) => row["__EMPTY_3"])
        .filter((v) => v && v.trim().length > 0);

      setList(values);
    }
    load();
  }, []);

  return (
    <div className="clinic-page">
      <h1 className="clinic-title">Medical College Software</h1>

      <div className="clinic-card">
        <ul className="clinic-list">
          {list.map((item, index) => (
            <li key={index}>
              <img src="/icon/check.png" className="feature-icon" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}