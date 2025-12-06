import CommonSection from "./CommonSection";

export default function PathologyManagement() {
  return (
    <CommonSection
      title="Pathology Management (Laboratory)"
      list={[
        "Doctor Request View",
        "Sample Collection (Blood, Urine, etc.)",
        "Work Order Generation",
        "Work Order Tracking",
        "Investigation Result Entry",
        "Result Authorization",
        "Report Delivery",
        "Reagent Inventory & Auto Stock Consumption",
        "Category Configuration",
        "Test Configuration",
        "Investigation Parameter Setup",
        "Investigation Analysis"
      ]}
      image="/Products/pathology.jpeg"
    />
  );
}