import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Min length is 2')
    .required('This field is required'),
  number: Yup.number()
    .min(0, 'Must be a number')
    .required('This field is required'),
});

export const ContactForm = ({ onAdd, checkDuplicate }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          if (checkDuplicate(values.name.trim())) {
            Notiflix.Notify.failure(`${values.name} already in contacts`);
          } else {
            Notiflix.Notify.success(
              `${values.name} successfully added to the contacts!`
            );
            onAdd(values);
            actions.resetForm();
          }
        }}
      >
        <Form>
          <label>
            Name
            <Field name="name" />
            <ErrorMessage name="name" />
          </label>

          <label>
            Number
            <Field name="number" />
            <ErrorMessage name="number" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
