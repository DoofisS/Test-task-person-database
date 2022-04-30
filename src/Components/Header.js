import { Column } from "@carbon/react";

const Header = () => {
  return (
    <>
      <Column
        lg={{ span: 2, offset: 4 }}
        style={{
          fontSize: "25px",
          fontweight: "400",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        Person database
      </Column>

      <Column
        lg={{ span: 2, offset: 4 }}
        style={{
          fontSize: "15px",
          fontweight: "300",
          display: "block",
        }}
      >
        List of person
      </Column>
    </>
  );
};
export default Header;
