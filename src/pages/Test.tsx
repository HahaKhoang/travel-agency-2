import FormInput from "../components/FormInput";

function Test() {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "40rem",
      }}
    >
      <FormInput label="Name" id="name" as="input" />
      <FormInput label="Email" id="email" as="select">
        <option>$500</option>
        <option>$500</option>
        <option>$500</option>
        <option>$500</option>
      </FormInput>
      <FormInput label="Text" id="text" as="textarea" />
      <FormInput label="Text" id="text" as="input" type="checkbox" />
    </form>
  );
}

export default Test;
