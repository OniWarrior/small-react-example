import * as yup from 'yup'

const LoginSchema = yup.object().shape({
    email: yup.string()
        .trim()
        .required()
        .required("Email/Password is required. Please fill out field")
        .email(),
    password: yup.string()
        .trim()
        .required("Email/Password is required. Please fill out field")


})

export default LoginSchema