import { useForm } from "react-hook-form";
import * as yup from "yup";

function App() {
  const schema = yup.object().shape({
    firstName: yup.string().required("hissu"),
    lastName: yup.string().required("aaaa"),
    age: yup.string().required("XXXXXXX"),
    abc: yup.array().of(
      yup.object().shape({
        foo: yup.string().required("hoahohoehgoehoghe"),
      })
    ),
  });

  type Form = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    defaultValues: {
      firstName: "aaaa",
      lastName: "xxxxxxx",
      age: "xxxx",
      abc: [
        {
          foo: "xxx",
        },
      ],
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("firstName")} />
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register("age", { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  );
}

export default App;
