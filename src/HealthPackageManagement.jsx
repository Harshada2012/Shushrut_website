import CommonSection from "./CommonSection";

export default function HealthPackageManagement() {
  return (
    <CommonSection
      title="Health Package Management"
      list={[
        "Creation of Health Packages",
        "Price Definition & Custom Discounts",
        "Package-wise Test / Service Mapping",
        "Package Purchase Tracking",
        "Package Utilization Summary",
        "Validity & Expiry Alerts",
        "Package Billing & Settlement"
      ]}
      image="/Products/health-package.jpeg"
    />
  );
}