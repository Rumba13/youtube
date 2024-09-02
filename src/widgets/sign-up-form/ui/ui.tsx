import './styles.scss';
import { Field, Form, Formik } from 'formik';
import { FC } from 'react';
import { userStore } from '../../../entities/user';

type FormValues = {
 username: string;
 password: string;
};

export type SignUpFormSlotType = FC;

export function SignUpForm() {
 const initialFormValues: FormValues = {
  username: '',
  password: '',
 };
 async function onSubmit(values: FormValues) {
  await userStore.signUp(values.username, values.password);
 }

 return (
  <Formik initialValues={initialFormValues} onSubmit={onSubmit}>
   {() => (
    <Form className="register-form">
     <h2 className="register-form__title">sign up, bitch</h2>
     <Field className="register-form__field" name="username" aria-label={'Логин'} />
     <Field className="register-form__field" name="password" type="password" aria-label={'Пароль'} />

     <button className="register-form__submit-button" type="submit">
      Зарегаться
     </button>
    </Form>
   )}
  </Formik>
 );
}
