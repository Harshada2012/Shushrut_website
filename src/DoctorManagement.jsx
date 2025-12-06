import CommonSection from "./CommonSection";

export default function DoctorManagement() {
  return (
    <CommonSection
      title="Doctor Management"
      list={[
        "Schedule",
        "Share Definition",
        "Doctor Share Review/Edit",
        "Bill Addition/Deduction",
        "Bill Generation",
        "Bill Settlement"
      ]}
      image="/Products/doctor_management.jpeg"
    />
  );
}