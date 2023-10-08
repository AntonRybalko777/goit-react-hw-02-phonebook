import { Formik, Field, Form } from 'formik';

export const ContactForm = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <Form>
          <label>
            Name
            <Field name="name" />
          </label>

          <label>
            Number
            <Field name="number" placeholder="111-22-33" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
