import CommonSection from "./CommonSection";

export default function HousekeepingManagement() {
  return (
    <CommonSection
      title="Housekeeping Management"
      list={[
        "Room Cleaning Schedules",
        "Task Allocation to Staff",
        "Housekeeping Checklist Tracking",
        "Ward/Room Cleanliness Monitoring",
        "Complaint Logging & Resolution",
        "Consumable Stock Management",
        "Deep Cleaning Planning"
      ]}
      image="/Products/housekeeping.jpeg"
    />
  );
}