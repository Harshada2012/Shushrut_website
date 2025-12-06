import CommonSection from "./CommonSection";

export default function BillingManagement() {
  return (
    <CommonSection
      title="Billing Management"
      list={[
        "Advance Collection",
        "Bill Generation (Patient, Insurance, Corporate)",
        "Bill Settlement",
        "Bill Adjustments / Reconciliation",
        "Concessions / Discounts",
        "Refunds",
        "Tariff Designer",
        "Package Deal Designer"
      ]}
      image="/Products/billing.jpeg"
    />
  );
}