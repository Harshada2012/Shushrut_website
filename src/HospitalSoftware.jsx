import BillingManagement from "./BillingManagement";
import ElectronicRecord from "./ElectronicRecord";
import HosPatientManagement from "./HosPatientManagement";
import MedicalRecord from "./MedicalRecord";
import NABH from "./NABH";
import NursingStation from "./NursingStation";
import PathologyManagement from "./PathologyManagement";
import StoresManagement from './StoresManagement';
import RadiologyManagement from './RadiologyManagement';
import DoctorManagement from './DoctorManagement';
import OperationTheatre from './OperationTheatre';
import PharmacyManagement from './PharmacyManagement';
import Administration from './Administration';
import HealthPackageManagement from "./HealthPackageManagement";
import EquipmentManagement from "./EquipmentManagement";
import AssetManagement from "./AssetManagement";
import KitchenManagement from "./KitchenManagement";
import CSSDManagement from "./CSSDManagement";
import HousekeepingManagement from "./HousekeepingManagement";

export default function HospitalSoftware() {
    return (
        <>
            <HosPatientManagement />
            <BillingManagement/>
            <ElectronicRecord/>
            <PathologyManagement/>
            <NursingStation/>
            <MedicalRecord/>
            <NABH/>
            <StoresManagement/>
            <RadiologyManagement/>
            <DoctorManagement/>
            <OperationTheatre/>
            <PharmacyManagement/>
            <Administration/>
            <HealthPackageManagement/>
            <EquipmentManagement/>
            <AssetManagement/>
            <KitchenManagement/>
            <CSSDManagement/>
            <HousekeepingManagement/>
        </>
    );
}