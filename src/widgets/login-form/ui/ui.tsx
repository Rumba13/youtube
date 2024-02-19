import "./styles.scss";
import {Field, Form, Formik} from "formik";
import {FC} from "react";

export type LoginFormSlotType = FC<PropsType>

type PropsType = {

}

type LoginFormValues = {
    login: string,
    password: string
}
export function LoginForm() {
    const initialFormValues:LoginFormValues = {
        login:"",
        password:""
    }
    function onSubmit(values: any) {
        console.log(values)
    }

    return <Formik initialValues={initialFormValues} onSubmit={onSubmit}>
        {({values}) =>
            <Form className="login-form">
                <h2 className="login-form__title">login</h2>
                <Field className="login-form__field" name="login"/>
                <Field className="login-form__field" name="password" type="password"/>

                <button className="login-form__submit-button" type="submit">Войти</button>
            </Form>
        }
    </Formik>
}