import CommonSection from "./CommonSection";

export default function MedicalRecord() {
  return (
    <CommonSection
      title="Medical Record Department (MRD)"
      list={[
        "File Management",
        "Patient Analysis",
        "Patient Reports"
      ]}
      image="/Products/medical_record.jpeg"
    />
  );
}