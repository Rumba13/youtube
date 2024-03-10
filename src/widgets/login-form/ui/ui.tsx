import './styles.scss';
import { Field, Form, Formik } from 'formik';
import { FC } from 'react';
import { userState } from '../../../entities/user';
import { observer } from 'mobx-react';

export type LoginFormSlotType = FC;

type LoginFormValues = {
  login: string;
  password: string;
};
export const LoginForm = observer(() => {
  const initialFormValues: LoginFormValues = {
    login: '',
    password: '',
  };

  async function onSubmit(values: LoginFormValues) {
    await userState.signIn(values.login, values.password);
  }

  return (
    <Formik initialValues={initialFormValues} onSubmit={onSubmit}>
      {() => (
        <Form className="login-form">
          <h2 className="login-form__title">login</h2>
          <Field className="login-form__field" name="login" />
          <Field className="login-form__field" name="password" type="password" />

          <button className="login-form__submit-button" type="submit">
            Войти
          </button>
        </Form>
      )}
    </Formik>
  );
});
