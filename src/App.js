import "./App.scss";
import { Grid, Column } from "@carbon/react";

import { useState, useEffect } from "react";

import PersonDataTable from "./Components/PeresonDataTable";
import AddModal from "./Components/AddModal";
import DeleteModal from "./Components/DeleteModal";
import SearchButton from "./Components/SearchButton";
import ViewModal from "./Components/ViewModal";
import Header from "./Components/Header";

import { useQuery } from "react-query";

function App() {
  const { isLoading, error, data } = useQuery("rowsData", () =>
    fetch("http://localhost:3001/rows").then((res) => res.json())
  );

  const [newData, setNewData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  useEffect(() => {
    if (data) {
      setNewData(data);
      setFilteredData(data);
    }
  }, [data]);
  useEffect(() => {
    setFilteredData(newData);
  }, [newData]);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <AddModal
        setNewData={setNewData}
        data={newData}
        open={openAdd}
        setOpen={setOpenAdd}
        newData={newData}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />

      <ViewModal
        open={openView}
        setOpen={setOpenView}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        data={newData}
      />

      <DeleteModal
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        newData={newData}
        setNewData={setNewData}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />

      <Grid>
        <Header />
        <SearchButton
          setOpen={setOpenAdd}
          newData={newData}
          data={data}
          setFilteredData={setFilteredData}
        />

        <Column lg={{ span: 8, offset: 4 }}>
          <PersonDataTable
            isLoading={isLoading}
            error={error}
            data={filteredData}
            setOpenView={setOpenView}
            setOpenDelete={setOpenDelete}
            setOpenAdd={setOpenAdd}
            setActiveItem={setActiveItem}
          />
        </Column>
      </Grid>
    </div>
  );
}

export default App;
