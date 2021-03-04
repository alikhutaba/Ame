import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import ChartistGraph from "react-chartist";

import Table from "components/Table/Table.js";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import MuiTableCell from "@material-ui/core/TableCell";//sapereate line in table

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";


import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import { bugs, website, server } from "variables/general.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";





const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <GridContainer>
        <GridItem xs={10} sm={12} md={3}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Information Summery:</h4>
            </CardHeader>
            <CardBody>
              <Table
                id="P_details"
                tableHeaderColor="warning"
                tableHead={["ID Number", "Full Name", "Phone Number", "Last General Note"]}
                tableData={[
                  ["313555555", "Ronna Banona", "050-7997799", "Last treatment the patient had reaction. Protocol changed."]
                ]}

              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={21} sm={21} md={9}>
        <Card>
            <CardHeader color="warning">
              <GridContainer>
            <GridItem>
              <h4 className={classes.cardTitleWhite}>Insert New Injection:</h4>
              <p className={classes.cardCategoryWhite}>
                Choose injection number, and insert new line to history table.
              </p>
              </GridItem>
              <GridItem>
                  <Button type="button" color="primary" size="sm">injection 1</Button>
                  {/* Clicking on button open a drop down list for each field. EX: Alergen Type --> Mix Mite*/}
                  <Button type="button" color="primary" size="sm">injection 2</Button>

                  <Button type="button" color="primary" size="sm">injection 3</Button>
                </GridItem>
                </GridContainer>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={21} sm={21} md={3}>
                  <CustomInput
                    labelText="Alergen Type"
                    id="Alrg_type"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={21} sm={21} md={2}>
                  <CustomInput
                    labelText="Today's Date"
                    id="Date_field"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={21} sm={21} md={2}>
                  <CustomInput
                    labelText="Concentration"
                    id="Concentration_field"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={21} sm={21} md={1}>
                  <CustomInput
                    labelText="Dosage"
                    id="Dosage_field"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={21} sm={21} md={1}>
                <CustomInput
                  labelText="Reaction?"
                  id="reaction_field"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
                <GridItem xs={21} sm={21} md={3}>
                  
                  {/* Add new line to history table. */}
                  <CustomInput
                    labelText="Notes"
                    id="Notes_field"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                
              <GridItem>
              <Button type="button" color="primary" size="sm">+</Button>
              </GridItem>
              </GridContainer>
              


              </CardBody>
          </Card>
          </GridItem>
          </GridContainer>







        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
          
            title="Injections:"
            headerColor="info"
            tabs={[
              {
                tabName: "Injection 1",
                tabContent: (
                  <Card>
                    <CardHeader color="primary">
                      <h4 className={classes.cardTitleWhite}>History:</h4>
                      <p className={classes.cardCategoryWhite}>
                        Patient's injection history.
              </p>
                    </CardHeader>
                    <CardBody>
                      <Table
                        id="New_inj"
                        tableHeaderColor="primary"
                        tableHead={["Alergen Type", "Dosage", "Concentration", "Date Givven", "Reaction?", "Notes"]}
                        tableData={[
                          ["Mix Mite", "0.03", "500", "21/01/2021"]]}//paint in rad - if reaction
                        tableData={[
                          ["Mix Mite", "0.4", "50", "14/01/2021", "No", "No anomalies."],
                          ["Mix Mite", "0.3", "50", "07/01/2021", "No", "No anomalies."],
                          ["Mix Mite", "0.2", "50", "01/01/2021", "No", "No anomalies."],
                          ["Mix Mite", "0.1", "50", "25/12/2020", "No", "No anomalies."],
                          ["Mix Mite", "0.05", "50", "18/12/2020", "No", "No anomalies."],
                          ["Mix Mite", "0.4", "5", "11/12/2020", "No", "No anomalies."],
                          ["Mix Mite", "0.2", "5", "04/12/2020", "No", "No anomalies."],
                          ["Mix Mite", "0.1", "5", "29/11/2020", "No", "No anomalies."],
                          ["Mix Mite", "0.05", "5", "22/11/2020", "No", "No anomalies."],
                        ]}
                      />
                    </CardBody>
                  </Card>
                )
              },
              {
                tabName: "Injection 2",
                tabContent: (
                  <Card>
                    <CardHeader color="primary">
                      <h4 className={classes.cardTitleWhite}>History:</h4>
                      <p className={classes.cardCategoryWhite}>
                        Patient's injection history.
  </p>
                    </CardHeader>
                    <CardBody>
                      <Table
                        id="New_inj"
                        tableHeaderColor="primary"
                        tableHead={["Alergen Type", "Dosage", "Concentration", "Date Givven", "Reaction?", "Notes"]}
                        tableData={[
                          // those lines need to be rad!!!! and bolt!
                          ["Cat", "0.4", "10", "21/01/2021", "YES!", "Breathing difficulty; Oxygen: 10LPM,90% mask for 15 minutes; Solomedrol"],
                          ["Dog", "0.4", "10", "21/01/2021", "YES!", "Breathing difficulty; Oxygen: 10LPM,90% mask for 15 minutes; Solomedrol"],
                          ["Olive", "0.4", "10", "21/01/2021", "YES!", "Breathing difficulty; Oxygen: 10LPM,90% mask for 15 minutes; Solomedrol"],
                          ["Oak", "0.4", "10", "21/01/2021", "YES!", "Breathing difficulty; Oxygen: 10LPM,90% mask for 15 minutes; Solomedrol"],
                          ["Pine", "0.4", "10", "21/01/2021", "YES!", "Breathing difficulty; Oxygen: 10LPM,90% mask for 15 minutes; Solomedrol"],
                          // different color or superation line - supareate by date!
                          ["Cat", "0.2", "10", "14/01/2021", "No", "No anomalies."],
                          ["Dog", "0.2", "10", "14/01/2021", "No", "No anomalies."],
                          ["Olive", "0.2", "10", "14/01/2021", "No", "No anomalies."],
                          ["Oak", "0.2", "10", "14/01/2021", "No", "No anomalies."],
                          ["Pine", "0.2", "10", "14/01/2021", "No", "No anomalies."],
                          // different color or superation line - supareate by date!
                          ["Cat", "0.1", "10", "07/01/2021", "No", "No anomalies."],
                          ["Dog", "0.1", "10", "07/01/2021", "No", "No anomalies."],
                          ["Olive", "0.1", "10", "07/01/2021", "No", "No anomalies."],
                          ["Oak", "0.1", "10", "07/01/2021", "No", "No anomalies."],
                          ["Pine", "0.1", "10", "07/01/2021", "No", "No anomalies."],
                          // different color or superation line - supareate by date!
                          ["Cat", "0.05", "10", "01/01/2021", "No", "No anomalies."],
                          ["Dog", "0.05", "10", "01/01/2021", "No", "No anomalies."],
                          ["Olive", "0.05", "10", "01/01/2021", "No", "No anomalies."],
                          ["Oak", "0.05", "10", "01/01/2021", "No", "No anomalies."],
                          ["Pine", "0.05", "10", "01/01/2021", "No", "No anomalies."],
                        ]}
                      />
                    </CardBody>
                  </Card>
                )
              },
              {
                tabName: "Injection 3",
                tabContent: (
                  <Card>
                    <CardHeader color="primary">
                      <h4 className={classes.cardTitleWhite}>History:</h4>
                      <p className={classes.cardCategoryWhite}>
                        Patient's injection history.
              </p>
                    </CardHeader>
                    <CardBody>
                      <Table
                        id="New_inj"
                        tableHeaderColor="primary"
                        tableHead={["Alergen Type", "Dosage", "Concentration", "Date Givven", "Reaction?", "Notes"]}
                        tableData={[
                          ["Bees", "0.05", "100", "21/1/2021", "No", "No anomalies."],
                          ["Bees", "0.02", "100", "14/1/2021", "No", "No anomalies."],
                          ["Bees", "0.07", "100", "07/1/2021", "YES!", "Nausea and vomiting"],
                          ["Bees", "0.05", "100", "01/1/2021", "No", "No anomalies."],
                          ["Bees", "0.02", "100", "25/12/2020", "No", "No anomalies."],
                          ["Bees", "0.4", "10", "18/12/2020", "No", "No anomalies."],
                          ["Bees", "0.2", "10", "11/12/2020", "No", "No anomalies."],
                          ["Bees", "0.1", "10", "04/12/2020", "No", "No anomalies."],
                          ["Bees", "0.05", "10", "29/11/2020", "No", "No anomalies."],
                          ["Bees", "0.4", "1", "22/11/2020", "No", "No anomalies."],
                          ["Bees", "0.2", "1", "15/11/2020", "No", "No anomalies."],
                          ["Bees", "0.1", "1", "09/11/2020", "No", "No anomalies."],
                          ["Bees", "0.05", "1", "02/11/2020", "No", "No anomalies."]
                        ]}
                      />
                    </CardBody>
                  </Card>
                )
              }
            ]}
          />
        </GridItem>
      </GridContainer>

    </div>
  );
}







