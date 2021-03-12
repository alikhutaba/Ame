import React, { useState } from "react";

import PatientForm from "./PatientForm";
import Diagnosis from "./Diagnosis"

export default function AddPatient() {

    const [savedPatient, setSavedPatient] = useState(false);

    function finish() {
        console.log("AddPatient :: finish")
        // need to clear the redux from the new patient
        setSavedPatient(false)
        window.location.reload(false);


    }

    return (

        <div>

            <PatientForm savedState={{ savedPatient, setSavedPatient }}></PatientForm>

            {savedPatient ?
                <Diagnosis finish={finish}></Diagnosis>
                : null}
        </div>
    );
}
