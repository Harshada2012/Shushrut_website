import CommonSection from "./CommonSection";

export default function StoresManagement() {
  return (
    <CommonSection
      title="Stores Management (Inventory)"
      list={[
        "Vendor Rate Contract",
        "Indents (Store & Wards)",
        "Purchase Order",
        "Goods Receipt Note",
        "Goods Issue & Return",
        "Expired Items Return",
        "Stock Adjustments",
        "Item Merging / Factorization",
        "Stock Alerts (Min/Max/Reorder/Expiry)",
        "Consignment/Charity Stock",
        "Tax & Freight",
        "Inventory Analysis (ABC/XYZ/VED)",
        "Supplier Payment Settlement"
      ]}
      image="/Products/store.jpeg"
    />
  );
}