import 'date-fns';

import React, { useRef, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import MyCustomInput from "components/CustomInput/MyCustomInput";

import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import MuiPhoneNumber from 'material-ui-phone-number';

import { validatePatient } from "Validators/Validator";
import { sendPatientToServer } from "Controllers/PatientController";

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";



import { addPatient, addDemo, removeDemo } from '../../Redux/actions';
import { useSelector, useDispatch } from "react-redux";

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

export default function NewPatient(props) {

  const classes = useStyles();
  const classess = useStyles1();
  const history = useHistory();
  const dispatch = useDispatch();

  const { savedPatient, setSavedPatient } = props.savedState;

  const demo = useSelector((state) => state.NewPatient.patientDemo);
  const [demoName, setDemoName] = useState("")


  const [patientId, setPatientId] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [birthdate, setBirthdate] = useState();
  const [gender, setGender] = useState("")
  const [phone, setPhone] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [streetAddress, setStreetAddress] = useState("")
  const [houseNumber, setHouseNumber] = useState()
  const [hmo, setHmo] = useState("")
  const [vaccineStatus, setVaccineStatus] = useState("")
  const [medicationSensitivityAnswer, setMedicationSensitivityAnswer] = useState('')
  const [medicationSensitivityNote, setMedicationSensitivityNote] = useState("")
  const [nursingHistory, setNursingHistory] = useState("")
  const [notes, setNotes] = useState("")

  // private UserBoundary added_by;
  // private UserBoundary validated_by;


  function handleDemo(e) {
    setDemoName(e.target.value)
  }

  const handleDateChange = (date) => {
    setBirthdate(date);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleHmo = (event) => {
    setHmo(event.target.value);
  }

  const handlePhone = (event) => {
    setPhone(event)
  }

  const handleVaccineStatus = (event) => {
    setVaccineStatus(event.target.value);
  }

  const handleMedicationSensitivityAnswer = (event) => {
    setMedicationSensitivityAnswer(event.target.value);
    if (event.target.value === false)
      setMedicationSensitivityNote("")
  }


  async function savePatient() {
    const newPatient = {};
    newPatient.patientId = patientId;
    newPatient.fisrtName = firstName;
    newPatient.lastName = lastName;
    newPatient.middleName = middleName;
    newPatient.birthdate = {};
    newPatient.birthdate.days = birthdate.getDate();
    newPatient.birthdate.months = birthdate.getMonth() + 1;
    newPatient.birthdate.years = birthdate.getFullYear();
    newPatient.gender = gender;
    newPatient.phone1 = phone;
    newPatient.address = {};
    newPatient.address.state = state;
    newPatient.address.city = city;
    newPatient.address.streetAddress = streetAddress;
    newPatient.address.houseNumber = houseNumber;
    newPatient.hmo = hmo;
    // private UserBoundary added_by;
    newPatient.vaccineStatus = vaccineStatus;
    newPatient.medicationSensitivity = {};
    newPatient.medicationSensitivity.answer = medicationSensitivityAnswer;
    newPatient.medicationSensitivity.notes = medicationSensitivityNote;

    newPatient.nursingHistory = nursingHistory;
    newPatient.notes = notes;

    var valid = await validatePatient(newPatient);
    console.log("savePatient");

    if (valid) {
      console.log("valid = ");
      console.log(valid);

      await sendPatientToServer(newPatient, "123456789")
        .then(data => {
          console.log(data);
          dispatch(addPatient(data));
          setSavedPatient(true)
          // history.replace('/admin/AddNewPatient/NewDiagnosis');
        }).catch(e => {
          console.log(e);
        });

      // var serverResponse = await sendPatientToServer(newPatient);
      // console.log(serverResponse);

      // if (serverResponse.success === true) {

      //   dispatch(addPatient(serverResponse.patient));
      //   // history.push('/admin/AddNewPatient/NewDiagnosis');
      //   history.replace('/admin/AddNewPatient/NewDiagnosis');

      // }

    }

  }





  return (
    <div>
      <GridContainer>

        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color={"primary"}>
              <h4 className={classes.cardTitleWhite}>New Patient</h4>
              <p className={classes.cardCategoryWhite}>{"Patient details"}</p>
            </CardHeader>

            <CardBody>


              < GridContainer >
                <GridItem xs={12} sm={12} md={6}>
                  <MyCustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{ value: demo.fisrtName, onChange: handleDemo }}
                  />
                </GridItem>
              </GridContainer>



              {/* ------------- ID -------------*/}
              < GridContainer >
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    value={{ value: patientId, setValue: setPatientId }}
                    labelText="Patient ID"
                    // id="patient-id"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>


              {/* ------------- NAME -------------*/}
              < GridContainer >
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    value={{ value: firstName, setValue: setFirstName }}
                    labelText="First Name"
                    // id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    value={{ value: middleName, setValue: setMiddleName }}
                    labelText="Middle Name"
                    // id="middle-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    value={{ value: lastName, setValue: setLastName }}
                    labelText="Last Name"
                    // id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

              </GridContainer>




              {/* ------------- Details -------------*/}
              < GridContainer >
                <GridItem xs={12} sm={12} md={3}>
                  <FormControl className={classess.formControl}>
                    <InputLabel id="gender">Gender</InputLabel>
                    <Select
                      labelId="gender"
                      // id="gender"
                      value={gender}
                      onChange={handleGender}
                    >
                      <MenuItem value={"MALE"}>Male</MenuItem>
                      <MenuItem value={"FEMALE"}>Female</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <FormControl className={classess.formControl}>
                    <InputLabel id="hmo">Hmo</InputLabel>
                    <Select
                      labelId="hmo"
                      // id="hmo"
                      value={hmo}
                      onChange={handleHmo}
                    >
                      <MenuItem value={"Clalit"}>Clalit</MenuItem>
                      <MenuItem value={"Meuhedet"}>Meuhedet</MenuItem>
                      <MenuItem value={"Macabi"}>Macabi</MenuItem>
                      <MenuItem value={"Leumit"}>Leumit</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="dd/MM/yyyy"
                      margin="normal"
                      // id="Birthdate"
                      label="Birth date"
                      value={birthdate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <MuiPhoneNumber
                    className={classess.phoneControl}
                    // id="phone1"
                    defaultCountry={'il'}
                    onChange={handlePhone}
                    // disableDropdown={false}
                    // disableCountryCode={true}
                    countryCodeEditable={false}
                  />
                </GridItem>
              </GridContainer>





              {/* ------------- ADDRESS -------------*/}
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    value={{ value: state, setValue: setState }}
                    labelText="State"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    value={{ value: city, setValue: setCity }}
                    labelText="City"
                    formControlProps={{
                      fullWidth: true
                    }}

                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    value={{ value: streetAddress, setValue: setStreetAddress }}
                    labelText="Street"
                    formControlProps={{
                      fullWidth: true
                    }}

                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    value={{ value: houseNumber, setValue: setHouseNumber }}
                    labelText="House Number"
                    formControlProps={{
                      fullWidth: true
                    }}

                  />
                </GridItem>
              </GridContainer>





              {/* ------------- VACCINE -------------*/}
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <FormControl className={classess.formControl}>
                    <InputLabel id="vaccineStatus">vaccine Status</InputLabel>
                    <Select
                      labelId="vaccineStatus"
                      // id="hmo"
                      value={vaccineStatus}
                      onChange={handleVaccineStatus}
                    >
                      <MenuItem value={"Increase"}>Increase</MenuItem>
                      <MenuItem value={"Spacing"}>Spacing</MenuItem>
                      <MenuItem value={"MaintenanceDose"}>Maintenance Dose</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>


                <GridItem xs={12} sm={12} md={3}>
                  <FormControl className={classess.formControl}>
                    <InputLabel id="medicationSensitivity">medication Sensitivity</InputLabel>
                    <Select
                      labelId="medicationSensitivity"
                      // id="hmo"
                      value={medicationSensitivityAnswer}
                      onChange={handleMedicationSensitivityAnswer}
                    >
                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>

                {medicationSensitivityAnswer === true ?
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      value={{ value: medicationSensitivityNote, setValue: setMedicationSensitivityNote }}
                      labelText="medication Sensitivity notes"
                      id="medicationSensitivity"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  : null}


              </GridContainer>
              <br></br>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>nursing History:</InputLabel>
                  <CustomInput
                    value={{ value: nursingHistory, setValue: setNursingHistory }}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Notes:</InputLabel>
                  <CustomInput
                    value={{ value: notes, setValue: setNotes }}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </GridItem>
              </GridContainer>


            </CardBody>


            <CardFooter>
              <Button onClick={savePatient} color="primary">Continue</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div >
  );
}


const PATIENT = {
  patientId: "",
  fisrtName: "",
  lastName: "",
  middleName: "",
  birthdate: {
    days: "",
    months: "",
    years: "",
  },
  gender: "",
  phone1: "",
  address: {
    state: "",
    city: "",
    streetAddress: "",
    houseNumber: "",
  },
  added_by: {},
  hmo: "",
  vaccineStatus: "",
  medicationSensitivity: {
    answer: "",
    notes: "",

  },
  nursingHistory: "",
  notes: "",
};