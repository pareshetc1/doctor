import TableAction from "../../utils/action";

const Cloumns = [
  {
    headerName: "Id",
    headerTooltip: "Id",
    field: "id",
    // width: 50,
    filter: true,
  },

  {
    headerName: "Discription",
    headerTooltip: "Discription",
    field: "discription",
    width: 250,
  },
  {
    headerName: "Old Disease",
    headerTooltip: "Old Disease",
    field: "old_disease",
  },
  {
    headerName: "Physical Trauma",
    headerTooltip: "Physical Trauma",
    field: "after_physical_trauma",
  },
  {
    headerName: "Mental Trauma",
    headerTooltip: "Mental Trauma",
    field: "after_mental_trauma",
  },
  {
    headerName: "Problem freq",
    headerTooltip: "Problem frequency",
    field: "frequency_of_problem",
  },
  {
    headerName: "When Problem Occurs",
    headerTooltip: "When Problem Occurs",
    field: "when_problem_occurs",
    valueGetter: ({ data = {} }) => data?.when_problem_occurs?.join(", "),
  },
  {
    headerName: "Problem Intensity",
    headerTooltip: "Problem Intensity",
    field: "intensity_of_problem",
  },

  {
    filter: false,
    width: 90,
    minWidth: 90,
    pinned: "right",
    headerName: "Actions",
    field: "action",
    resizable: false,
    unSortIcon: false,
    lockVisible: true,
    editPath: (id) => `/disease-form/${id}`,
    cellRendererFramework: TableAction,
    cellClass: "table-action-cell",
    headerClass: "table-action-header-cell",
    toolPanelClass: "table-action-header-cell",
  },
];

export default Cloumns;
