import {
  ComposedModal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@carbon/react";

const DeleteModal = (props) => {
  return (
    <ComposedModal
      open={props.openDelete}
      size={"sm"}
      preventCloseOnClickOutside={true}
    >
      <ModalHeader
        buttonOnClick={() => {
          props.setOpenDelete(false);
          props.setActiveItem("");
        }}
      >
        DangerModalTitle
      </ModalHeader>
      <ModalBody>
        Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod
        tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin
        venian, quis nostrun exercitationen ullan corporis suscipit
      </ModalBody>
      <ModalFooter>
        <Button
          kind="secondary"
          onClick={() => {
            props.setOpenDelete(false);
            props.setActiveItem("");
          }}
        >
          Cancel
        </Button>
        <Button
          kind="danger"
          onClick={() => {
            props.setNewData(
              props.newData.filter((element) => element.id !== props.activeItem)
            );
            fetch(`http://localhost:3001/rows/${props.activeItem}`, {
              method: "DELETE",
            });
            props.setOpenDelete(false);
            props.setActiveItem("");
          }}
        >
          Danger
        </Button>
      </ModalFooter>
    </ComposedModal>
  );
};

export default DeleteModal;
