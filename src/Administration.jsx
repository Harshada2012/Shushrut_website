import CommonSection from "./CommonSection";

export default function Administration() {
  return (
    <CommonSection
      title="Administration"
      list={[
        "Masters Management",
        "Template Designing",
        "User Management (Role-Based Security)",
        "Application Policies & Configuration",
        "Management Meetings",
        "Expenses Module",
        "Cancellations",
        "User Configuration"
      ]}
      image="/Products/admini.jpeg"
    />
  );
}