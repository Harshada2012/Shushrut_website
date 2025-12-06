import CommonSection from "./CommonSection";

export default function OperationTheatre() {
  return (
    <CommonSection
      title="Operation Theatre Management"
      list={[
        "Reservation (Scheduling)",
        "Un-Reservation",
        "Consents",
        "Pre/Intra/Post Operative Details",
        "Image/Video Capturing",
        "Post-Operative Instructions",
        "Operation Checklist"
      ]}
      image="/Products/operation.jpeg"
    />
  );
}