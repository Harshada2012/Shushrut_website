import CommonSection from "./CommonSection";

export default function KitchenManagement() {
  return (
    <CommonSection
      title="Kitchen Management"
      list={[
        "Diet Plan Creation for Patients",
        "Diet Order Management",
        "Meal Scheduling",
        "Ingredient Stock Tracking",
        "Kitchen Inventory Usage",
        "Special Diet Alerts",
        "Meal Distribution Tracking"
      ]}
      image="/Products/kitchen.jpeg"
    />
  );
}