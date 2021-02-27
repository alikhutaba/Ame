
import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {
    BrowserRouter as Router,
    useHistory
} from "react-router-dom";

import DiagnosisCard from "./DiagnosisCard";
import DaignosisDetails from "./DiagnosisDetails";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


import { getallAllergensFromServer } from "Controllers/AllergensController";
import { getallProtocolsFromServer } from "Controllers/ProtocolsController";

import { saveAllAllergens, saveAllProtocols } from '../../Redux/actions';
import { useSelector, useDispatch } from "react-redux";

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
    }

};

const useStyles = makeStyles(styles);

export default function NewDiagnosis() {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const diagnosis = useSelector((state) => state.patient.diagnosis);

    const [diagnosisNumber, setDiagnosisNumber] = useState(2)

    const [newDiagnosisOpen, setNewDiagnosisOpen] = React.useState(false);

    useEffect(() => {
        saveAllergense();
        saveProtocols();

    }, []);


    async function saveAllergense() {

        await getallAllergensFromServer("123456789")
            .then(data => {
                dispatch(saveAllAllergens(data));
            }).catch(e => {
            });


    }

    async function saveProtocols() {

        await getallProtocolsFromServer("123456789")
            .then(data => {
                dispatch(saveAllProtocols(data));
            }).catch(e => {
            });
    }


    function addDiagnosis() {
        // history.push('/admin/AddNewPatient/NewDiagnosis/DaignosisDetails');
        setNewDiagnosisOpen(true)
    }

    const handleClose = () => {
        setNewDiagnosisOpen(false);
    };


    function finish() {
        history.push('/admin/AddNewPatient/NewPatient');

    }

    return (
        <div>
            <GridContainer>

                <Dialog
                    fullWidth={true}
                    maxWidth="lg"
                    open={newDiagnosisOpen}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title">
                    <DialogContent>

                        <DaignosisDetails></DaignosisDetails>
                    </DialogContent>

                    {/* <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
          </Button>
                        <Button onClick={handleClose} color="primary">
                            Subscribe
          </Button>
                    </DialogActions> */}
                </Dialog>


                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color={"primary"}>
                            <h4 className={classes.cardTitleWhite}>Diagnosis</h4>
                            <p className={classes.cardCategoryWhite}>{"Patient details"}</p>
                        </CardHeader>

                        <CardBody>


                            {/* ------------- Add diagnosis button -------------*/}
                            < GridContainer >
                                <GridItem xs={12} sm={12} md={3}>
                                    <Button size="lg" onClick={addDiagnosis} color="primary">Add Diagnosis</Button>
                                </GridItem>
                            </GridContainer>


                            <GridContainer>
                                {demoDiagnosis.map((diangnos, i) =>
                                    <DiagnosisCard diangnos={diangnos}></DiagnosisCard>
                                )}
                            </GridContainer>


                        </CardBody>
                        <CardFooter>
                            <Button onClick={finish} color="primary">finish</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div >
    );
}







const demoDiagnosis =
    [
        {
            diagnosId: 51,
            diagnosisNumber: 1,
            injectionLocation: ['Left', 'Left', 'Left', 'Left', 'Left', 'Left', 'Left',],
            allergens: [
                {
                    id: 3,
                    name: 'Olive'
                },
                {
                    id: 2,
                    name: 'Cypress'
                },
                {
                    id: 1,
                    name: 'Acacia'
                }
            ],
            protocols: [
                {
                    protocolId: 12,
                    name: "Normal Dust"
                },
                {
                    protocolId: 13,
                    name: "Careful Bee"
                },
                {
                    protocolId: 14,
                    name: "Normal Cat"
                }
            ]
        },
        {
            diagnosId: 51,
            diagnosisNumber: 2,
            injectionLocation: ['Left', 'Left', 'Left', 'Left', 'Left', 'Left', 'Left',],
            allergens: [
                {
                    id: 3,
                    name: 'Olive'
                },
                {
                    id: 2,
                    name: 'Cypress'
                },
                {
                    id: 1,
                    name: 'Acacia'
                }
            ],
            protocols: [
                {
                    protocolId: 12,
                    name: "Normal Dust"
                },
                {
                    protocolId: 13,
                    name: "Careful Bee"
                },
                {
                    protocolId: 14,
                    name: "Normal Cat"
                },
                {
                    protocolId: 12,
                    name: "Normal Dust"
                },
                {
                    protocolId: 13,
                    name: "Careful Bee"
                },
                {
                    protocolId: 14,
                    name: "Normal Cat"
                },
                {
                    protocolId: 12,
                    name: "Normal Dust"
                },
                {
                    protocolId: 13,
                    name: "Careful Bee"
                },
                {
                    protocolId: 14,
                    name: "Normal Cat"
                }
            ]
        }
    ]