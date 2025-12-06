import CommonSection from "./CommonSection";

export default function NursingStation() {
  return (
    <CommonSection
      title="Nursing Station Management"
      list={[
        "Patient Vitals",
        "EMR (IPD)",
        "TPR Recording",
        "Doctor Round",
        "Intake & Output Details",
        "CPOE (Order Entry)",
        "Material Consumption",
        "Inpatient Issue & Return"
      ]}
      image="/Products/nursing.jpeg"
    />
  );
}