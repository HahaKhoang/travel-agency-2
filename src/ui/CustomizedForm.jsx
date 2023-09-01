import styles from "./CustomizedForm.module.scss";
import Checkbox from "./Checkbox";
import Form from "./Form";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";
import FormRow from "./FormRow";

function CustomizedForm() {
  const categories = [
    { label: "Everything", category: "everything" },
    { label: "Nature", category: "nature" },
    { label: "Culture", category: "culture" },
    { label: "Shopping", category: "shopping" },
    { label: "Food", category: "food" },
    { label: "Nightlife", category: "nightlife" },
    { label: "Undecided", category: "undecided" },
  ];

  const tourTypes = [
    { label: "International trip" },
    { label: "Domestic trip" },
    { label: "Road trip" },
    { label: "Weekend getaway" },
    { label: "Day trip" },
    { label: "Undecided" },
  ];

  const childFriendly = [{ label: "Yes" }, { label: "No" }];

  return (
    <Form bgColor="var(--color-blue-med)">
      <FormRow label="Name" htmlFor="name">
        <FormInput />
      </FormRow>
      <FormRow label="Email address" htmlFor="email">
        <FormInput />
      </FormRow>
    </Form>
  );
}

export default CustomizedForm;
