import 'date-fns';

import React, { useRef, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import MuiPhoneNumber from 'material-ui-phone-number';

import { validatePatient } from "Validators/PatientValidator";
import { sendPatientToServer } from "Controllers/PatientController";

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



import Store from "@material-ui/icons/Store";

import DateRange from "@material-ui/icons/DateRange";

import CardIcon from "components/Card/CardIcon.js";


import avatar from "assets/img/faces/marc.jpg";

import { TextField, withStyles } from '@material-ui/core';

import { func } from "prop-types";

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';


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


const useStyles1 = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 320,
        paddingTop: 15,
    },
    phoneControl: {
        margin: theme.spacing(1),
        minWidth: 220,
        paddingTop: 22,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const useStyles = makeStyles(styles);

export default function DiagnosisCard(props) {

    const classes = useStyles();
    const classess = useStyles1();

    const [injectionNumber, setInjectionNumber] = useState(0)




    const handleInjectionNumber = (event) => {
        setInjectionNumber(event.target.value);
    };









    async function finish() {

    }





    return (
        <GridItem xs={12} sm={6} md={12}>

            <Card>
                <CardHeader color="primary" stats icon>
                    <CardIcon color="primary">
                        <Store />
                    </CardIcon>
                    {/* <p className={classes.cardCategory}>Revenue</p> */}
                    {/* <h3 className={classes.cardTitle}>$34,245</h3> */}
                    <Button size="lg" onClick={finish} color="primary">finish</Button>

                </CardHeader>
                {/* <CardBody>
                                                <Button size="lg" onClick={finish} color="primary">finish</Button>
                                            </CardBody> */}

                <CardFooter stats>
                    <div className={classes.stats}>Injection number {props.number}</div>
                </CardFooter>
            </Card>
        </GridItem>
    );
}


