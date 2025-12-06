import CommonSection from "./CommonSection";

export default function HosPatientManagement() {
  return (
    <CommonSection
      title="Patient Management (OPD & IPD)"
      list={[
        "Appointments",
        "Registration and Visit Encounter",
        "Case Sheet Printing",
        "Service Request Printing",
        "Help Desk",
        "Patient Feedback Management",
        "Visit Encounter Analysis",
        "Unit/Cabin Utilization Analysis",
        "Admission, Discharge and Transfer"
      ]}
      image="/Products/doctor.jpeg"
    />
  );
}