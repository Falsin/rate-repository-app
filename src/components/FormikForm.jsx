import { Formik } from "formik";

const FormikForm = ({ initialValues, onSubmit, layout }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => layout({onSubmit: handleSubmit})}
    </Formik>
  )
}

export default FormikForm;