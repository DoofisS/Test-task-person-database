import {
  ComposedModal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@carbon/react";

import { useState, useEffect } from "react";

const ViewModal = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    birth: "",
    department: "A1",
  });
  useEffect(() => {
    if (props.activeItem) {
      setUser(props.data.find((item) => item.id === props.activeItem));
    }
  }, [props.activeItem]);

  return (
    <ComposedModal
      open={props.open}
      size={"sm"}
      preventCloseOnClickOutside={true}
    >
      <ModalHeader
        buttonOnClick={() => {
          props.setOpen(false);
          props.setActiveItem("");
          setUser({ name: "", email: "", birth: "", department: "A1" });
        }}
      />
      <ModalBody>
        <p>Name</p>
        <h5 style={{ margin: "10px" }}>{user.name}</h5>
        <p>Email</p>
        <h5 style={{ margin: "10px" }}>{user.email}</h5>
        <p>Birth Date</p>
        <h5 style={{ margin: "10px" }}>{user.birth}</h5>
        <p>Department</p>
        <h5 style={{ margin: "10px" }}>{user.department}</h5>
      </ModalBody>
      <ModalFooter>
        <Button
          kind="secondary"
          onClick={() => {
            props.setOpen(false);
            props.setActiveItem("");
            setUser({ name: "", email: "", birth: "", department: "A1" });
          }}
        >
          Cancel
        </Button>
        <Button
          kind="primary"
          onClick={() => {
            props.setActiveItem("");
            setUser({ name: "", email: "", birth: "", department: "A1" });
            props.setOpen(false);
          }}
        >
          Save
        </Button>
      </ModalFooter>
    </ComposedModal>
  );
};

export default ViewModal;
