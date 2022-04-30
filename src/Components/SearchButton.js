import { PrimaryButton, TableToolbarSearch, Column } from "@carbon/react";
import { Add } from "@carbon/react/icons";

const SearchButton = (props) => {
  return (
    <Column
      lg={{ span: 6, offset: 6 }}
      style={{
        display: "flex",
        justifyContent: "right",
      }}
    >
      <TableToolbarSearch
        onChange={(e) => {
          const inputText = e.target.value;

          const filteredData = props.newData.filter((item) =>
            item.name.toLowerCase().includes(inputText.toLowerCase())
          );
          if (inputText) {
            props.setFilteredData(filteredData);
          }
          if (!inputText) {
            props.setFilteredData(props.newData);
          }
        }}
      />
      <PrimaryButton
        iconDescription="Icon Description"
        renderIcon={Add}
        onClick={() => {
          props.setOpen(true);
        }}
      >
        Add Person
      </PrimaryButton>
    </Column>
  );
};

export default SearchButton;
