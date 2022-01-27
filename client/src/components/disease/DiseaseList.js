import { Button, Row, Space } from "antd";
import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import Cloumns from "./columns";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const DiseaseList = ({ diseaseList }) => {
  console.log("diseaseList", diseaseList);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handelback = () => {
    navigate("/");
  };

  const defaultColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
  };

  return (
    <React.Fragment>
      <div className="main-container">
        <div className="ag-theme-alpine" style={{ height: "75vh" }}>
          <AgGridReact
            rowData={diseaseList}
            defaultColDef={defaultColDef}
            columnDefs={Cloumns}
          ></AgGridReact>
          <div className="footer">
            <Row justify="center">
              <Space direction="horizontal" align="baseline">
                <Button size="large" type="primary" onClick={handelback}>
                  Back
                </Button>

                <Button size="large" type="primary" htmlType="submit">
                  Next
                </Button>
              </Space>
            </Row>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DiseaseList;
