import React from "react";
import { Popconfirm, Tooltip } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const TableAction = (props) => {
  const { data = {}, colDef } = props;
  const history = useNavigate();

  let confirmDelete = (id) => {
    console.log("diapatch delete action");
  };

  return (
    <div className="table-action">
      <Tooltip title="Edit">
        <EditFilled
          style={{ marginLeft: "5px" }}
          onClick={() => history.push(colDef.editPath(data?.id))}
        />
      </Tooltip>

      <Popconfirm
        placement="topRight"
        title="Are you sure to delete this row ?"
        onConfirm={() => confirmDelete(data?._id)}
        okText="Confirm"
        overlayClassName="popup-confirm"
        cancelText="Cancel"
      >
        <Tooltip title="Delete">
          <DeleteFilled color="red" style={{ marginLeft: "15px" }} />
        </Tooltip>
      </Popconfirm>
    </div>
  );
};

export default TableAction;
