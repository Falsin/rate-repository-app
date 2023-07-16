import SignInFormLayout from "./SignInFormLayout";
import FormikForm from "./FormikForm";

const SignInForm = () => {
  const initialValues = {
    username: "",
    password: ""
  }

  const onSubmit = () => console.log("you are signed in")

  return (
    <FormikForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      layout={props => <SignInFormLayout {...props} />}
    />
  )
}

export default SignInForm;