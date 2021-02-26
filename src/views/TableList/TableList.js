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

import avatar from "assets/img/faces/marc.jpg";
import { func } from "prop-types";

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

export default function UserProfile() {
  const classes = useStyles();

  const [searchID, setSearchID] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [gender, setGender] = useState("")
  const [phone1, setPhone1] = useState("")
  const [phone2, setPhone2] = useState("")
  const [address, setAddress] = useState("")
  const [hmo, setHmo] = useState("")
  const [vaccineStatus, setVaccineStatus] = useState("")
  const [medicationSensitivity, setMedicationSensitivity] = useState("")
  const [notes, setNotes] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [patient, setPatient] = useState({})


  function getPatientById() {
    console.log(patient)
    console.log("input", searchID)

    var userId = "123456789"

    //23498721
    fetch(`http://localhost:8081/patient/${userId}/byPatientId/${searchID}`)
      .then(res => res.json())
      .then(patient => {
        setPatient(patient)
        setSearchID(patient.patientId)
        setFirstName(patient.fisrtName)
        setLastName(patient.lastName)
        setMiddleName(patient.middleName)
        setBirthdate(patient.birthdate.days + "/" + patient.birthdate.months + "/" + patient.birthdate.years)
        setGender(patient.gender.toLowerCase())
        setPhone1(patient.phone1)
        setPhone2(patient.phone2)
        setAddress(patient.address.streetAddress + " " + patient.address.houseNumber + " " + patient.address.city)
        setHmo(patient.hmo)
        setVaccineStatus(patient.vaccineStatus)
        setMedicationSensitivity(patient.medicationSensitivity.answer + " - " + patient.medicationSensitivity.notes)
        setNotes(patient.notes)

        console.log(patient)
      })
  }


  function savePatient() {

    let updatedpatient = {};


    updatedpatient.patientId = searchID;
    updatedpatient.fisrtName = firstName;
    updatedpatient.lastName = lastName;
    updatedpatient.middleName = middleName;
    updatedpatient.birthdate = patient.birthdate;
    updatedpatient.gender = gender.toUpperCase();
    updatedpatient.phone1 = phone1;
    updatedpatient.phone2 = phone2;
    updatedpatient.hmo = hmo;
    updatedpatient.notes = notes;

    console.log("updatedpatient")
    console.log(updatedpatient)

    var userId = "123456789"

    fetch(`http://localhost:8081/patient/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
      },
      body: JSON.stringify({ updatedpatient }),
    })
      .then((r) => r.json())
      .then((data) => {

      });



    setEditMode(false)
  }

  function checkEmptyPatient() {
    console.log("checkEmptyPatient")

    console.log(Object.keys(patient).length === 0 && patient.constructor === Object)
    return !(Object.keys(patient).length === 0 && patient.constructor === Object)

  }

  function NewSessionForPatient() {
    console.log("ShirA")//I have no idia what have I done... can't see without DB....!

    fetch('C:\Users\Shir Ams\Desktop\פרויקט גמר רפואית\Ame\src\views\Icons\Icons.js')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(Icon => {
        Icon.src = URL.createObjectURL(Icon);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

  return (
    <div>
      <GridContainer>

        <GridItem xs={21} sm={21} md={17}>
          <Card>
            <CardHeader color={editMode ? "danger" : "success"}>
              <h4 className={classes.cardTitleWhite}>Patient</h4>
              <p className={classes.cardCategoryWhite}>{editMode ? "Edit Mode" : "Search Patient By ID"}</p>
            </CardHeader>

            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                  <CustomInput
                    value={{ value: searchID, setValue: setSearchID }}
                    labelText="Enter Patient ID"
                    id="patient-id"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: editMode,
                      style: editMode ? { color: '#0967FC' } : { color: '#000000' }
                    }}
                  />
                </GridItem>
                {editMode === false ? (
                  <GridItem>
                    <Button id="search" type="button" color="info" size="sm" onClick={getPatientById}>search</Button>
                  </GridItem>
                ) : null
                }

                {!(Object.keys(patient).length === 0 && patient.constructor === Object) ? (
                  editMode === false ? (
                    <GridItem>
                      <Button id="button-id" type="button" color="info" size="sm" onClick={() => setEditMode(true)}>Edit</Button>
                    </GridItem>
                  ) :
                    (
                      <GridItem>
                        <Button id="button-id" type="button" color="danger" size="sm" onClick={savePatient}>Save</Button>
                      </GridItem>
                    )

                )
                  : (null)
                }

              </GridContainer>



              {!(Object.keys(patient).length === 0 && patient.constructor === Object) ? (
                <div>
                  < GridContainer >
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        value={{ value: firstName, setValue: setFirstName }}
                        labelText="First Name"
                        id="first-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: !editMode,
                          style: editMode ? { color: '#0967FC' } : { color: '#000000' }
                        }}
                      />
                    </GridItem>


                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        value={{ value: middleName, setValue: setMiddleName }}
                        labelText="Middle Name"
                        id="middle-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: !editMode,
                          style: editMode ? { color: '#0967FC' } : { color: '#000000' }
                        }}
                      />
                    </GridItem>



                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        value={{ value: lastName, setValue: setLastName }}
                        labelText="Last Name"
                        id="last-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: !editMode,
                          style: editMode ? { color: '#0967FC' } : { color: '#000000' }
                        }}
                      />
                    </GridItem>




                    <GridItem xs={12} sm={12} md={2}>
                      <CustomInput
                        value={{ value: gender, setValue: setGender }}
                        labelText="Gender"
                        id="Gender"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: !editMode,
                          style: editMode ? { color: '#0967FC' } : { color: '#000000' }
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        value={{ value: birthdate, setValue: setBirthdate }}
                        labelText="Birth date"
                        id="Birthdate"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: !editMode,
                          style: editMode ? { color: '#0967FC' } : { color: '#000000' }
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        value={{ value: hmo, setValue: setHmo }}
                        labelText="Health maintenance organization"
                        id="hmo"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: !editMode,
                          style: editMode ? { color: '#0967FC' } : { color: '#000000' }
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        value={{ value: address, setValue: setAddress }}
                        labelText="Address"
                        id="address"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: !editMode,
                          style: editMode ? { color: '#0967FC' } : { color: '#000000' }
                        }}
                      />
                    </GridItem>



                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        value={{ value: phone1, setValue: setPhone1 }}
                        labelText="Phone number"
                        id="phone1"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: !editMode,
                          style: editMode ? { color: '#0967FC' } : { color: '#000000' }
                        }}
                      />
                    </GridItem>

                    <GridItem xs={21} sm={21} md={3}>
                      <CustomInput
                        value={{ value: phone2, setValue: setPhone2 }}

                        labelText="Tel"
                        id="tel"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: !editMode,
                          style: editMode ? { color: '#0967FC' } : { color: '#000000' }
                        }}
                      />
                    </GridItem>


                  </GridContainer>
                  <br></br>

                  {/* vaccine */}
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        value={{ value: vaccineStatus, setValue: setVaccineStatus }}
                        labelText="vaccine Status"
                        id="vaccineStatus"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: !editMode,
                          style: editMode ? { color: '#0967FC' } : { color: '#000000' }
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        value={{ value: medicationSensitivity, setValue: setMedicationSensitivity }}
                        labelText="medication Sensitivity"
                        id="medicationSensitivity"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: !editMode,
                          style: editMode ? { color: '#0967FC' } : { color: '#000000' }
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <br></br>



                  <GridContainer>
                    <GridItem xs={21} sm={21} md={12}>
                      <InputLabel style={{ color: "#AAAAAA" }}>Notes:</InputLabel>
                      <CustomInput
                        value={{ value: notes, setValue: setNotes }}
                        id="notes"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5,
                          disabled: !editMode,
                          style: editMode ? { color: '#0967FC' } : { color: '#000000' }
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem>
                      <Button id="button-StertSession" type="button" color="danger" size="sm" onClick={NewSessionForPatient}>Continue to session</Button>
                    </GridItem>
                  </GridContainer>

                </div>

              ) : (null)
              }





            </CardBody>
            <CardFooter>
              {!(Object.keys(patient).length === 0 && patient.constructor === Object) ? (

                editMode === false ? (
                  <Button color="primary">Continue</Button>
                ) : null

              ) : null
              }
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div >
  );
}




/*
import React from "react";
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

import avatar from "assets/img/faces/marc.jpg";

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

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={21} sm={21} md={17}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Welcome!</h4>
              <p className={classes.cardCategoryWhite}>Add new patient to clinic</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Identification number"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
                <Button color="primary" size="sm">Serch</Button>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Middle Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Father's Name"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Phone number"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={21} sm={21} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={21} sm={21} md={4}>
                  <CustomInput
                    labelText="Street"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={21} sm={21} md={2.4}>
                  <CustomInput
                    labelText="Street Number"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer><br></br>
              <GridContainer>
                <GridItem xs={21} sm={21} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Notes:</InputLabel>
                  <CustomInput
                    labelText="Vital additional information."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Continue</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}





*/