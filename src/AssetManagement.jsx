import CommonSection from "./CommonSection";

export default function AssetManagement() {
  return (
    <CommonSection
      title="Asset Management"
      list={[
        "Asset Registration with Unique Codes",
        "Asset Movement Tracking",
        "Depreciation Calculation",
        "Asset Location Mapping",
        "Asset Maintenance History",
        "Asset Disposal Tracking",
        "Procurement & Vendor Mapping"
      ]}
      image="/Products/asset.jpeg"
    />
  );
}