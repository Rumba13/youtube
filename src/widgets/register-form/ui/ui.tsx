import './styles.scss';
import { Field, Form, Formik } from 'formik';
import { FC } from 'react';

type FormValues = {
  login: string;
  password: string;
};

export type RegisterFormSlotType = FC;

export function RegisterForm() {
  const initialFormValues: FormValues = {
    login: '',
    password: '',
  };
  function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <Formik initialValues={initialFormValues} onSubmit={onSubmit}>
      {() => (
        <Form className="register-form">
          <h2 className="register-form__title">login</h2>
          <Field className="register-form__field" name="login" />
          <Field className="register-form__field" name="password" type="password" />

          <button className="register-form__submit-button" type="submit">
            Войти
          </button>
        </Form>
      )}
    </Formik>
  );
}
