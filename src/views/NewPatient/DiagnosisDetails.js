import 'date-fns';

import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles, useTheme } from '@material-ui/core/styles';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

import { validatePatient } from "Validators/PatientValidator";
import { sendPatientToServer } from "Controllers/PatientController";
import SelectReact from "react-select";

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { useHistory } from "react-router-dom";

import { addPatient } from '../../Redux/actions';
import { useSelector, useDispatch } from "react-redux";
import { createTrue } from 'typescript';


const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    },
    chip: {
        paddingTop: 20,
        paddingBottom: 10,
    },

};

const useStyles = makeStyles(styles);

export default function DaignosisDetails() {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const diagnosisNumber = useSelector((state) => state.patient.diagnosisNumber);
    const allAllergens = useSelector((state) => state.staticData.allergensDB);
    const allProtocols = useSelector((state) => state.staticData.protocolsDB);

    const [allergens, setAllergens] = useState([])
    const [protocol, setProtocol] = useState({})
    const [locations, setLocations] = useState([])



    const [personName, setPersonName] = useState([]);


    const handleAllergens = (data) => {
        setAllergens(data.map(allergen => (allergen.value)))
    };

    const handleProtocol = (data) => {
        setProtocol(data.value)
    };

    const handleLocation = (data) => {
        setLocations(data.map(location => (location.value)))
    };

    async function validateDiagnosis() {

        // if (Object.keys(protocol).length === 0 && protocol.constructor === Object) {
        //     toast.error("Choose an protocol ", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        //     return false;
        // }

        // if (allergens.length === 0) {
        //     toast.error("Choose an allergens ", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        //     return false;
        // }

        // if (locations.length === 0) {
        //     toast.error("Choose an location ", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        //     return false;
        // }

    }

    async function saveDiagnosis() {
        const newPatient = {};
        var validDiagnosis = await validateDiagnosis();

        // newPatient.patientId = patientId;
        // newPatient.fisrtName = firstName;
        // newPatient.lastName = lastName;


        var valid = await validatePatient(newPatient);
        console.log("savePatient");

        if (valid) {
            console.log("valid = ");
            console.log(valid);

            var serverResponse = await sendPatientToServer(newPatient);
            console.log(serverResponse);

            if (serverResponse.success === true) {

                dispatch(addPatient(serverResponse.patient));
                // history.push('/admin/AddNewPatient/NewDiagnosis');
                history.replace('/admin/AddNewPatient/NewDiagnosis');

            }

        }

    }


    return (
        <div>
            <GridContainer>

                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color={"primary"}>
                            <h3 className={classes.cardTitleWhite}>New Diagnosis</h3>
                            <h5 className={classes.cardCategoryWhite}>{"Diagnosis number "}{diagnosisNumber}</h5>
                        </CardHeader>

                        <CardBody>

                            {/* ------------- INJECTION NUMBER -------------*/}
                            {/* < GridContainer >
                                <GridItem xs={12} sm={12} md={6}>
                                    <SnackbarContent message={"Injection Number " + diagnosisNumber} />
                                </GridItem>
                            </GridContainer> */}


                            {/* ------------- ALLERGENS -------------*/}
                            < GridContainer >
                                <GridItem xs={12} sm={12} md={2}>
                                    <h3>Allergens</h3>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={8}>
                                    <div className={classes.chip}>
                                        <SelectReact
                                            closeMenuOnSelect={false}
                                            isMulti
                                            options={allAllergens.map(allergen => ({ value: allergen, label: allergen.name }))}
                                            onChange={handleAllergens}
                                        />
                                    </div>
                                </GridItem>
                            </GridContainer>

                            {/* ------------- PROTOCOL -------------*/}
                            < GridContainer >
                                <GridItem xs={12} sm={12} md={2}>
                                    <h3>Protocol</h3>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={8}>
                                    <div className={classes.chip}>
                                        <SelectReact
                                            // closeMenuOnSelect={false}
                                            // isMulti
                                            options={allProtocols.map(protocol => ({ value: protocol, label: protocol.name }))}
                                            onChange={handleProtocol}
                                        />
                                    </div>
                                </GridItem>
                            </GridContainer>


                            {/* ------------- LOCATION -------------*/}
                            < GridContainer >
                                <GridItem xs={12} sm={12} md={2}>
                                    <h3>Location</h3>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={8}>
                                    <div className={classes.chip}>
                                        <SelectReact
                                            closeMenuOnSelect={false}
                                            isMulti
                                            options={Locations}
                                            onChange={handleLocation}
                                        />
                                    </div>
                                </GridItem>
                            </GridContainer>
                        </CardBody>

                        <CardFooter>
                            <Button onClick={saveDiagnosis} color="primary">Save</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div >
    );
}


const Locations = [
    { value: "Left", label: "Left" },
    { value: "LefteUp", label: "Lefte Up" },
    { value: "LeftDown", label: "Left Down" },
    { value: "LeftMiddle", label: "LeftM iddle" },
    { value: "Right", label: "Right" },
    { value: "RightUp", label: "Right Up" },
    { value: "RightDown", label: "Right Down" },
    { value: "RightMiddle", label: "Right Middle" }
];