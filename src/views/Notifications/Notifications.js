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
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Checkbox from "@material-ui/core/Checkbox";


import Check from "@material-ui/icons/Check";
import { TextField } from "@material-ui/core";
//import {OutTable, ExcelRenderer} from 'react-excel-renderer';//option1
// import * as XLSX from 'xlsx';//option2+3

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);
//option1
// var f="assets/jss/material-dashboard-react\src\views\Notifications\Protocols.xlsx";
// var name = f.name;
// const reader = new FileReader();
// reader.onload = (e) => { // evt = on_file_select event
//     /* Parse data */
//     var bstr = e.target.result;
//     let wb = XLSX.read(bstr, {type:'binary'});
//     /* Get first worksheet */
//     const wsname = wb.SheetNames[0];
//     const ws = wb.Sheets[wsname];
//     /* Convert array of arrays */
//     const data = XLSX.utils.sheet_to_json(ws, {header:1});
//     setFileUploaded(data);
//     /* Update state */
//     console.log("Data>>>"+data);
// };
// reader.readAsBinaryString(f);


//option2
// let fileHandler = (event) => {
//   let fileObj = event.target.files[0];
//   //just pass the fileObj as parameter
//   ExcelRenderer(fileObj, (err, resp) => {
//     if(err){
//       console.log(err);            
//     }
//     else{
//       this.setState({
//         cols: resp.cols,
//         rows: resp.rows
//       });
//     }
//   });               
//}

function SetCheckStatus(c){
  // if(c==0){
  //   var input = document.getElementById("yes")
  //   input.
  // }
  // else{
  //   if(c==1){

  //  }
  //}
}

export default function Notifications() {

  const [ID, setID] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [phone1, setPhone1] = useState("")
  const [vaccineStatus, setVaccineStatus] = useState("")
  const [medicationSensitivity, setMedicationSensitivity] = useState("")
  const [notes, setNotes] = useState("")
  const [concentration, setConcentration] = useState("")
  const [dosage, setDosage] = useState("")
  const [DoctorInstruction, setDoctorInstruction] = useState("")
  const [FullName, setFullName] = useState("")

  const [patient, setPatient] = useState({})

  function GetPatientFromNewSessionPage(){
    // TMP code!!!!!!!!!!!!!!!!!
    fetch(`http://localhost:8081/byPatientId/${ID}/patient/${ID}`)
    .then(res => res.json())
    .then(patient => {
      setPatient(patient)
      setID(patient.patientId)
      setFullName(patient.fisrtName + " " + patient.middleName + " " + patient.lastName)
      setPhone1(patient.phone1)
      setVaccineStatus(patient.vaccineStatus)
      setMedicationSensitivity(patient.medicationSensitivity.answer + " - " + patient.medicationSensitivity.notes)
      setNotes(patient.notes)
    })
    console.log(patient)
  }
  const classes = useStyles();
  return (
    <div>
      {/* <h1>session page 1</h1> */}
      <GridContainer>

<GridItem xs={12} sm={12} md={10}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Patient Details:</h4>
              <p className={classes.cardCategoryWhite}></p>
            </CardHeader>
            <CardBody>

      < GridContainer >

      <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        value={{ value: ID, setValue: setID }}
                        labelText="Patients ID"
                        id="PID"
                        formControlProps={{
                          fullWidth: true
                        }}
                        
                      />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        value={{ value: FullName, setValue: setFullName }}
                        labelText="Full Name"
                        id="full-name"
                        formControlProps={{
                          fullWidth: true
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

                      />
                    </GridItem>
                    </GridContainer>

                    < GridContainer >

                  {/* vaccine */}

                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        value={{ value: vaccineStatus, setValue: setVaccineStatus }}
                        labelText="vaccine Status"
                        id="vaccineStatus"
                        formControlProps={{
                          fullWidth: true
                        }}
                       
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        value={{ value: medicationSensitivity, setValue: setMedicationSensitivity }}
                        labelText="medication Sensitivity"
                        id="medicationSensitivity"
                        formControlProps={{
                          fullWidth: true
                        }}
                       
                      />
                    </GridItem>

                    <GridItem xs={21} sm={21} md={9}>
                      <InputLabel style={{ color: "#AAAAAA" }}>Notes:</InputLabel>
                      <CustomInput
                        value={{ value: notes, setValue: setNotes }}
                        id="notes"
                        formControlProps={{
                          fullWidth: true
                        }}

                      />
                      
                    </GridItem>

                  </GridContainer>
                  </CardBody>
                  <CardFooter>
              <p>Add last session and the vaccinations given and DeltaDates</p>
            </CardFooter>
          </Card>
          </GridItem>
                  </GridContainer>


                  <GridContainer>
                  <GridItem xs={12} sm={12} md={10}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Contraindications:</h4>
              <p className={classes.cardCategoryWhite}></p>
            </CardHeader>
            <CardBody>
            <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <lable>Last treatment had no abnormalities:</lable>
            <Checkbox
            id="yes1"
            onClick={SetCheckStatus(1)}
              />
              <label>Pass</label>
              <Checkbox
              id="no1"
              onClick={SetCheckStatus(0)}
              />
              <label>Fail</label>
            </GridItem>
            <GridItem xs={12} sm={12} md={5}>
              <label>Days since the last 1st vaccination: </label>
              <TextField
              labelText="Street"
              id="vaccinsLtreat1"
              formControlProps={{
                fullWidth: true}}
              /></GridItem> 
            </GridContainer>
            <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
            <label>Antihistamine before vaccination:</label>
            <Checkbox
            id="yes2"
            onClick={SetCheckStatus(1)}
              />
              <label>Pass</label>
              <Checkbox
              id="no2"
              onClick={SetCheckStatus(0)}
              />
              <label>Fail</label>
            </GridItem>
            <GridItem xs={12} sm={12} md={5}>
              <label>Days since the last 2nd vaccination: </label>
              <TextField
              labelText="Street"
              id="vaccinsLtreat2"
              formControlProps={{
                fullWidth: true}}
              /></GridItem> 
            </GridContainer>
            <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <label>Patient feels good today:</label> 
            {/* <input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk}/> */}
            <Checkbox
            id="yes3"
            onClick={SetCheckStatus(1)}
              />
              <label>Pass</label>
              <Checkbox
              id="no3"
              onClick={SetCheckStatus(0)}
              />
              <label>Fail</label>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={5}>
              <label>Days since the last 3rd vaccination: </label>
              <TextField
              labelText="Street"
              id="vaccinsLtreat3"
              formControlProps={{
                fullWidth: true}}
              /></GridItem> 
        </GridContainer>

            </CardBody>
                  <CardFooter>
                    <p style={{ color: 'red' }}>Check Antihistamine before vaccinations!!!</p>
                  <Button color="primary">continue</Button>
            </CardFooter>
          </Card>
          </GridItem>
                  </GridContainer>

    </div>
  );
}
