import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@carbon/react";

import OverFlowMenu from "./OverFlowMenu";

const PersonDataTable = (props) => {
  const DataWithMenu = props.data.map((currentValue) => {
    return {
      ...currentValue,
      OverflowMenu: (
        <OverFlowMenu
          id={currentValue.id}
          setOpenView={props.setOpenView}
          setOpenAdd={props.setOpenAdd}
          setOpenDelete={props.setOpenDelete}
          setActiveItem={props.setActiveItem}
        />
      ),
    };
  });

  if (props.isLoading) return "Loading...";

  if (props.error) return "An error has occurred: " + props.error.message;

  const headers = [
    {
      key: "name",
      header: "Name",
    },
    {
      key: "email",
      header: "Email",
    },
    {
      key: "birth",
      header: "Birth",
    },
    {
      key: "department",
      header: "Department",
    },
    {
      key: "OverflowMenu",
      header: "",
    },
  ];

  return (
    <DataTable
      rows={DataWithMenu}
      headers={headers}
      useZebraStyles={true}
      size={"sm"}
    >
      {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow {...getRowProps({ row })}>
                {row.cells.map((cell) => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </DataTable>
  );
};

export default PersonDataTable;
