import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

export default function Notifications() {

  return (
    <div>
      
      {/*option1 <input type="file" onChange={this.fileHandler.bind(this)} style={{"padding":"10px"}} />
      <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="Protocols" tableHeaderRowClass="heading" /> */}

      {/* <script lang="javascript" src="assets/jss/material-dashboard-react\src\views\Notifications\Protocols.xlsx"></script> */}

    </div>
  );
}
