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
  <GridItem xs={10} sm={12} md={3}>
    <Card>
      <CardHeader color="success">
      <h4 className={classes.cardTitleWhite}>Information Summery:</h4>
      </CardHeader>
      <CardBody>
      <Table
                id="P_details"
                tableHeaderColor="warning"
                tableHead={["ID Number", "Full Name", "Phone Number","Notes"]}
                tableData={[
                  ["313555555", "Ronna Banona", "050-7997799", "Last treatment the patient had reaction. Protocol changed."]
                ]}

              />
      </CardBody>
    </Card>
    <Card>
              <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Insert New Injection:</h4>
              <p className={classes.cardCategoryWhite}>
                Choose injection number, and insert new line to history table.
              </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem>
                    <Button type="button" color="primary" size="sm">injection 1</Button>

                    <Button type="button" color="primary" size="sm">injection 2</Button>

                    <Button type="button" color="primary" size="sm">injection 3</Button>
                  </GridItem>
                  <GridItem xs={21} sm={21} md={6}>
                  <CustomInput
                    labelText="Alergen Type"
                    id="Alrg_type"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  </GridItem>
                  <GridItem xs={21} sm={21} md={5}>
                  <CustomInput
                    labelText="Today's Date"
                    id="Date_field"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  </GridItem>
                  <GridItem xs={21} sm={21} md={6}>
                  <CustomInput
                    labelText="Concentration"
                    id="Concentration_field"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  </GridItem>
                  <GridItem xs={21} sm={21} md={5}>
                  <CustomInput
                    labelText="Dosage"
                    id="Dosage_field"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  </GridItem>
                  </GridContainer>
                  <GridContainer>
                  <GridItem xs={21} sm={21} md={11}>
                  <CustomInput
                    labelText="Notes"
                    id="Notes_field"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  </GridItem>
              </GridContainer>
              </CardBody>
              <CardFooter>
                <GridItem>
                  <CustomInput xs={21} sm={21} md={3}
                     labelText="Reaction?"
                      id="reaction_field"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                </GridItem>
                <GridItem>
                  <Button type="button" color="primary" size="sm">+</Button>
                </GridItem>
              </CardFooter>
        </Card>
  </GridItem>
  <GridItem xs={10} sm={12} md={3}>
        <Card>
              <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Injection 1 History:</h4>
              <p className={classes.cardCategoryWhite}>
                Patient's injection history.
              </p>
              </CardHeader>
              <CardBody>
              <Table
                id="New_inj"
                tableHeaderColor="primary"
                tableHead={["Alergen Type", "Dosage","Concentration","Date Givven"]}
                tableData={[
                  ["Mix Mite", "0.03", "500", "21/01/2021"]]}//paint in rad - if reaction
                  tableData={[
                  ["Mix Mite", "0.4", "50", "14/01/2021"],
                  ["Mix Mite", "0.3", "50", "07/01/2021"],
                  ["Mix Mite", "0.2", "50", "01/01/2021"],
                  ["Mix Mite", "0.1", "50", "25/12/2020"],
                  ["Mix Mite", "0.05", "50", "18/12/2020"],
                  ["Mix Mite", "0.4", "5", "11/12/2020"],
                  ["Mix Mite", "0.2", "5", "04/12/2020"],
                  ["Mix Mite", "0.1", "5", "29/11/2020"],
                  ["Mix Mite", "0.05", "5", "22/11/2020"],
                ]}
              />              
              </CardBody>
        </Card>
  </GridItem>
  <GridItem xs={10} sm={12} md={3}>
        <Card>
              <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Injection 2 History:</h4>
              <p className={classes.cardCategoryWhite}>
                Patient's injection history.
              </p>
              </CardHeader>
              <CardBody>
              <Table
                id="New_inj"
                tableHeaderColor="primary"
                tableHead={["Alergen Type", "Dosage","Concentration","Date Givven"]}
                tableData={[
                  ["Cat", "0.4", "10", "21/01/2021"],
                  ["Dog", "0.4", "10", "21/01/2021"],
                  ["Olive", "0.4", "10", "21/01/2021"],
                  ["Oak", "0.4", "10", "21/01/2021"],
                  ["Pine", "0.4", "10", "21/01/2021"],
// different color or superation line - supareate by date!
                  ["Cat", "0.2", "10", "14/01/2021"],
                  ["Dog", "0.2", "10", "14/01/2021"],
                  ["Olive", "0.2", "10", "14/01/2021"],
                  ["Oak", "0.2", "10", "14/01/2021"],
                  ["Pine", "0.2", "10", "14/01/2021"],
// different color or superation line - supareate by date!
                  ["Cat", "0.1", "10", "07/01/2021"],
                  ["Dog", "0.1", "10", "07/01/2021"],
                  ["Olive", "0.1", "10", "07/01/2021"],
                  ["Oak", "0.1", "10", "07/01/2021"],
                  ["Pine", "0.1", "10", "07/01/2021"],
// different color or superation line - supareate by date!
                  ["Cat", "0.05", "10", "01/01/2021"],
                  ["Dog", "0.05", "10", "01/01/2021"],
                  ["Olive", "0.05", "10", "01/01/2021"],
                  ["Oak", "0.05", "10", "01/01/2021"],
                  ["Pine", "0.05", "10", "01/01/2021"],
                ]}
              />              
              </CardBody>
        </Card>
  </GridItem>
  <GridItem xs={10} sm={12} md={3}>
        <Card>
              <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Injection 3 History:</h4>
              <p className={classes.cardCategoryWhite}>
                Patient's injection history.
              </p>
              </CardHeader>
              <CardBody>
              <Table
                id="New_inj"
                tableHeaderColor="primary"
                tableHead={["Alergen Type", "Dosage","Concentration","Date Givven"]}
                tableData={[
                  ["Bees", "0.2", "100", "21/1/2021"],
                  ["Bees", "0.1", "100", "14/1/2021"],
                  ["Bees", "0.07", "100", "07/1/2021"],
                  ["Bees", "0.05", "100", "01/1/2021"],
                  ["Bees", "0.02", "100", "25/12/2020"],
                  ["Bees", "0.4", "10", "18/12/2020"],
                  ["Bees", "0.2", "10", "11/12/2020"],
                  ["Bees", "0.1", "10", "04/12/2020"],
                  ["Bees", "0.05", "10", "29/11/2020"],
                  ["Bees", "0.4", "1", "22/11/2020"],
                  ["Bees", "0.2", "1", "15/11/2020"],
                  ["Bees", "0.1", "1", "09/11/2020"],
                  ["Bees", "0.05", "1", "02/11/2020"]
                ]}
              />              
              </CardBody>
        </Card>
  </GridItem>
</GridContainer>

    </div>
  );
}







  