import { combaineComponents } from "../combainProvider/combainProvider"
import { LabTestGroupContextProvider } from "../labTesGroupContext/LabTestGroupContext"
import { LabTestContextProvider } from "../labTestContext/LabTestContext"
import { LoginContextProvider } from "../loginContext/LoginContext"
import { PatientContextProvider } from "../patientContext/PatientContext"
import { QuickPatientContextProvider } from "../quickPatient/QuickPatientContext"
import { DepartmentContextProvider } from "../departmentContext/departmentContext"
import {  DoctorContextProvider } from "../doctorContext/DoctorContext"
import { OrderContextProvider } from "../orderContext/OrderContext"
import { TestresultContextProvider } from "../testresultContext.js/testresultContext"
import { AddtestresultContextProvider } from "../addtestresultContext/AddtestresultContext"
import { OrderBillingContextProvider } from "../orderBillingContext/orderBillingContext"



const Providers  =[
    LoginContextProvider,
    PatientContextProvider,
    QuickPatientContextProvider,
    LabTestContextProvider,
    LabTestGroupContextProvider,
    DepartmentContextProvider,
    DoctorContextProvider,
    OrderContextProvider,
    TestresultContextProvider,
    AddtestresultContextProvider,
    OrderBillingContextProvider,
   
]

export const AppContextProvider = combaineComponents(...Providers)