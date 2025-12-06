import CommonSection from "./CommonSection";

export default function EquipmentManagement() {
  return (
    <CommonSection
      title="Equipment Management"
      list={[
        "Equipment Registration",
        "Preventive Maintenance Scheduling",
        "Breakdown Maintenance Tracking",
        "Calibration Management",
        "Spare Parts Tracking",
        "Asset Warranty Management",
        "Service Contract (AMC/CMC) Tracking"
      ]}
      image="/Products/equipment.jpeg"
    />
  );
}