import CommonSection from "./CommonSection";

export default function NABH() {
  return (
    <CommonSection
      title="NABH"
      list={[
        "Incident Reporting",
        "OP/IP/Path/Radio TAT Reporting",
        "Registers Management",
        "Quality Indicators",
        "NABH Consent",
        "Complaint Management",
        "Biomedical Waste Management"
      ]}
      image="/Products/nabh.jpeg"
    />
  );
}