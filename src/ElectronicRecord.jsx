import CommonSection from "./CommonSection";

export default function ElectronicRecord() {
  return (
    <CommonSection
      title="Electronic Patient Record"
      list={[
        "Complete Case Sheet Information",
        "Prescription / Medication Advise with Template Facility",
        "Pharmacy Stock Interactions & Drug Interactions",
        "CPOE – Investigations & Services",
        "CPOE – Tracking & Result Viewing",
        "Scanned File Linking",
        "Image Management Toolkit",
        "Letters and Certificates Issue"
      ]}
      image="/Products/electronic.jpeg"
    />
  );
}