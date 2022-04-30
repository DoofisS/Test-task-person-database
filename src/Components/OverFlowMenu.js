import { OverflowMenuItem, OverflowMenu } from "@carbon/react";

const OverFlowMenu = (props) => {
  return (
    <OverflowMenu ariaLabel="options">
      <OverflowMenuItem
        itemText="View"
        onClick={() => {
          props.setOpenView(true);
          props.setActiveItem(props.id);
        }}
      />
      <OverflowMenuItem
        itemText="Edit"
        onClick={() => {
          props.setOpenAdd(true);
          props.setActiveItem(props.id);
        }}
      />
      <OverflowMenuItem
        hasDivider
        itemText="Delete"
        onClick={() => {
          props.setOpenDelete(true);
          props.setActiveItem(props.id);
        }}
      />
    </OverflowMenu>
  );
};

export default OverFlowMenu;
