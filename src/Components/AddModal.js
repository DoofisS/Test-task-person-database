import {
  TextInput,
  DatePicker,
  DatePickerInput,
  Select,
  SelectItem,
  ComposedModal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@carbon/react";

import { useState, useEffect } from "react";

const AddModal = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    birth: "",
    department: "A1",
  });
  useEffect(() => {
    if (props.activeItem) {
      setUser(props.data.find((item) => item.id === props.activeItem));
      return;
    }
    setUser({ name: "", email: "", birth: "", department: "A1" });
  }, [props.activeItem]);

  const createUser = () => {
    fetch("http://localhost:3001/rows", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        props.setNewData([{ ...user, id: data.id }, ...props.data]);
      });
  };
  const editUser = () => {
    const updatedData = props.data.map((item) => {
      if (item.id === props.activeItem) {
        return { ...item, ...user };
      }
      return item;
    });
    fetch(`http://localhost:3001/rows/${props.activeItem}`, {
      method: "PATCH",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    props.setNewData(updatedData);
  };

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
        <TextInput
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
          labelText="Name"
          placeholder="Name"
          id="#1"
          value={user.name}
        />
        <TextInput
          id="#"
          labelText="Email"
          placeholder="Email"
          value={user.email}
          onChange={(text) => setUser({ ...user, email: text.target.value })}
        />
        <DatePicker datePickerType="single" size="md">
          <DatePickerInput
            id="date-picker-single"
            labelText="Date label"
            placeholder="mm/dd/yyyy"
            size="md"
            value={user.birth}
            onSelect={(text) => setUser({ ...user, birth: text.target.value })}
          />
        </DatePicker>
        <Select
          id="select-1"
          defaultValue={user.department}
          value={user.department}
          labelText="Department"
          onChange={(text) =>
            setUser({ ...user, department: text.target.value })
          }
        >
          <SelectItem value="A1" text="A1" />
          <SelectItem value="B2" text="B2" />
          <SelectItem value="C3" text="C3" />
        </Select>
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
            if (props.activeItem) {
              editUser();
            } else {
              createUser();
            }
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

export default AddModal;
