import React, { useState } from "react";
import { Row, Col, Card, Table } from 'react-bootstrap';
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function RequestHistory() {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");

  const columns = ["Name", "Title","Email", "Location","Status"];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight
  };

  const data = [
    ["Gabby George", "Business Analyst", "Minneapolis","Kigali","rejected"],
    [
      "Aiden Lloyd",
      "Business Consultant",
      "Dallas","Kigali","Cancelled"
    ],
    ["Jaden Collins", "Attorney", "Santa Ana" ,"Kigali","rejected"],
    ["Franky Rees", "Business Analyst", "St. Petersburg","Kigali","rejected"],
    ["Aaren Rose", null, "Toledo","Kigali","Pending"],
    ["Johnny Jones", "Business Analyst", "St. Petersburg","Kigali","rejected"],
    ["Jimmy Johns", "Business Analyst", "Baltimore"],
    ["Jack Jackson", "Business Analyst", "El Paso"],
    ["Joe Jones", "Computer Programmer", "El Paso"],
    ["Jacky Jackson", "Business Consultant", "Baltimore"],
    ["Jo Jo", "Software Developer", "Washington DC"],
    ["Donna Marie", "Business Manager", "Annapolis"]
    
  ];
  const statusBodyTemplate = (data) => {
     if(data.VisaRequestsDetails_status.toLowerCase() === "approved"){
      return (
          <>
              <span style={{background: "#B3E5FC",color: "redorange",borderRadius: "2px",
                  padding: "0.25em 0.5rem",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  fontSize: "12px",
                  letterSpacing: "0.3px"}}>{data.status}</span>
          </>
      );  
     }else if(data.Status.toLowerCase() === "pending"){
      return (
          <>
              <span style={{background: "#C8E6C9",
                  color: "#256029",borderRadius: "2px",
                  padding: "0.25em 0.5rem",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  fontSize: "12px",
                  letterSpacing: "0.3px"}}>{data.status}</span>
          </>
      ); 
     }else if(data.Status() === "rejected"){
      return (
          <>
              <span style={{  background: "#FFCDD2",
                  color: "#C63737",borderRadius: "2px",
                  padding: "0.25em 0.5rem",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  fontSize: "12px",
                  letterSpacing: "0.3px"}}>{data.status}</span>
          </>
      );
     }else{
      return (
          <>
              <span style={{  background: "#B9B9B9",
                  color: "#293241",borderRadius: "2px",
                  padding: "0.25em 0.5rem",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  fontSize: "12px",
                  letterSpacing: "0.3px"}}>{data.status}</span>
          </> 
      );
     }


      
  };
  

  return (
    <React.Fragment className="bg-white">
   
{/* 
        <FormControl>
        <InputLabel id="demo-simple-select-label">Responsive Option</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={responsive}
          style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
          onChange={(e) => setResponsive(e.target.value)}
        >
          <MenuItem value={"vertical"}>vertical</MenuItem>
          <MenuItem value={"standard"}>standard</MenuItem>
          <MenuItem value={"simple"}>simple</MenuItem>

          <MenuItem value={"scroll"}>scroll (deprecated)</MenuItem>
          <MenuItem value={"scrollMaxHeight"}>
            scrollMaxHeight (deprecated)
          </MenuItem>
          <MenuItem value={"stacked"}>stacked (deprecated)</MenuItem>
        </Select>
      </FormControl> */}
      {/* <FormControl>
        <InputLabel id="demo-simple-select-label">Table Body Height</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tableBodyHeight}
          style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
          onChange={(e) => setTableBodyHeight(e.target.value)}
        >
          <MenuItem value={""}>[blank]</MenuItem>
          <MenuItem value={"400px"}>400px</MenuItem>
          <MenuItem value={"800px"}>800px</MenuItem>
          <MenuItem value={"100%"}>100%</MenuItem>
        </Select>
      </FormControl> */}
      <MUIDataTable
        title={"DUBAI VISA request"}
        data={data}
        columns={columns}
        options={options}
      />

     
    </React.Fragment>
  );
}
export default RequestHistory;