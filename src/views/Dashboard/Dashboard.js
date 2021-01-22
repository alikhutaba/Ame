import React, { useRef } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
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

import {
  dailySalesChart,
  emailsSubscriptionChart,//the squers I see in the page.
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles(styles);


export default function Dashboard() {
  const classes = useStyles();

  function handleButtonClicked(){
    console.log(document.getElementById("ID_num").value);
    var Srch_ID=document.getElementById("ID_num").value;
    var TodayP=document.getElementById("Patients4show").value;

    for (var i=1;i<5;i++)
    {
      if ((TodayP[1][i].tableData).search(Srch_ID))
      {
        console.log(true);
        break;
      }
      if (i==5)
      {
        console.log(false);
      }
    }
  }

  

  return (
    <div>

      <GridContainer>
        <GridItem xs={21} sm={21} md={12}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Sessions:</h4>
              <p className={classes.cardCategoryWhite}>
                The patients who come to the clinic today.
              </p>
            </CardHeader>
            <CardBody>
              <Table
                id="Patients4show"
                tableHeaderColor="success"
                tableHead={["#","ID Number", "Full Name", "Phone Number", "Session Time"]}
                tableData={[
                  ["1", "313555555", "Ronna Banona", "050-7997799","09:00"],
                  ["2", "311111111", "Danny Shovevany", "052-7993339","09:10"],
                  ["3", "322222222", "Israel Israeli", "050-3333333","09:20"],
                  ["4", "444445555", "Alona Boolean", "050-7998811","09:30"]
                ]}
                               
              />   
      </CardBody>             
      <CardFooter>
      <GridContainer>
      <GridItem xs={12} sm={12} md={8}>
          <CustomInput
            labelText="Serch by ID number:"
            id="ID_num"
            formControlProps={{
            fullWidth: true
            }}
            inputProps={{
            multiline: true,
            }}
          />
        </GridItem>
        <GridItem>       
          <Button id="button-id" type="button" color="primary" size="sm" onClick= {handleButtonClicked}>serch</Button>
        </GridItem>
        <p id="demo"></p>
        
        </GridContainer>
        </CardFooter>
        </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

