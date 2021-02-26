import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import NewPatient from "./NewPatient";
import NewDiagnosis from "./NewDiagnosis";
import DaignosisDetails from "./DiagnosisDetails";


export default function AddPatient() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/admin/AddNewPatient/NewPatient">
                        <NewPatient />
                    </Route>
                    <Route path="/admin/AddNewPatient/NewDiagnosis/DaignosisDetails">
                        <DaignosisDetails />
                    </Route>
                    <Route path="/admin/AddNewPatient/NewDiagnosis">
                        <NewDiagnosis />
                    </Route>
                    <Redirect from="/admin/AddNewPatient/" to="/admin/AddNewPatient/NewPatient" />

                </Switch>
            </div>
        </Router>
    );
}
