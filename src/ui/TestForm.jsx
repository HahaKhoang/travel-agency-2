import { useForm } from "react-hook-form";
import TestField from "./TestField";
import TestFieldset from "./TestFieldset";

function TestForm() {
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <TestFieldset>
          <TestField label="Name">
            <input type="text" name="name" id="name" {...register} />
          </TestField>
          <TestField label="Comments">
            <textarea name="comments" id="comments" rows="10" />
          </TestField>
        </TestFieldset>
        <TestField>
          <button>submit</button>
        </TestField>
      </form>
    </div>
  );
}

export default TestForm;
