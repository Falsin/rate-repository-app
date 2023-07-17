import { Formik } from "formik";

const FormikForm = ({ layout, ...props }) => {
  return (
    <Formik {...props}>
      {({ handleSubmit }) => layout({onSubmit: handleSubmit})}
    </Formik>
  )
}

export default FormikForm;