import CommonSection from "./CommonSection";

export default function CSSDManagement() {
  return (
    <CommonSection
      title="CSSD Management"
      list={[
        "Instrument Collection & Tracking",
        "Sterilization Process Workflow",
        "Batch & Cycle Tracking",
        "Instrument Issue to Departments",
        "Instrument Return & Reprocessing",
        "CSSD Inventory Management",
        "Sterilization Quality Indicators"
      ]}
      image="/Products/cssd.jpeg"
    />
  );
}