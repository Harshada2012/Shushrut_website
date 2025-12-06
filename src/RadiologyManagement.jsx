import CommonSection from "./CommonSection";

export default function RadiologyManagement() {
  return (
    <CommonSection
      title="Radiology Management"
      list={[
        "Doctor Request View",
        "Work Order Generation",
        "Work Order Tracking",
        "Result Entry & Authorization",
        "Report Delivery",
        "Film Inventory & Consumption",
        "Test Configuration & Templates"
      ]}
      image="/Products/radiology.jpeg"
    />
  );
}