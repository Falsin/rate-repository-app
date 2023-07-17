import SignInFormLayout from "./SignInFormLayout";
import FormikForm from "./FormikForm";
import * as yup from 'yup';

const SignInForm = () => {
  const initialValues = {
    username: "",
    password: ""
  }

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required'),
  })

  const onSubmit = () => console.log("you are signed in")

  return (
    <FormikForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      layout={props => <SignInFormLayout {...props} />}
    />
  )
}

export default SignInForm;