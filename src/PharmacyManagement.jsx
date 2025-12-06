import CommonSection from "./CommonSection";

export default function PharmacyManagement() {
  return (
    <CommonSection
      title="Pharmacy Management"
      list={[
        "Issue and Sale of Drugs",
        "Bill/Receipt Printing",
        "Price List Update",
        "Controlled Drug Monitoring",
        "Manufacturer/Supplier Details",
        "Drug Database",
        "Drug Formulations",
        "Dosage & Contra-indications",
        "Supplier Payment"
      ]}
      image="/Products/pharmacy.jpeg"
    />
  );
}