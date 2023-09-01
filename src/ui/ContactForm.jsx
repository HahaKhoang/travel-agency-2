import Form from "./Form";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";
import FormRow from "./FormRow";

function ContactForm() {
  return (
    <Form bgColor="var(--color-blue-dark)" fontColor="white">
      <FormRow label="Name" htmlFor="name">
        <FormInput type="text" id="name" name="name" />
      </FormRow>
      <FormRow label="Email address" htmlFor="email">
        <FormInput type="text" id="email" name="email" />
      </FormRow>
      <FormRow label="What can we help you with?" htmlFor="selectQuestion">
        <FormSelect id="selectQuestion" name="selectQuestion">
          <option value="bookTour">I want to book a tour</option>
          <option value="question">I have a question about a tour</option>
          <option value="other">Other</option>
        </FormSelect>
      </FormRow>
      <FormRow label="Enter your question here:" htmlFor="question">
        <FormTextarea rows="10" id="question" name="question" />
      </FormRow>
    </Form>
  );
}

export default ContactForm;
