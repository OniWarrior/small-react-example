import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'


export const postLogin = (navigate, login) => (dispatch) => {
    dispatch({ LOGIN_START })

    axios.post('https://small-react-app-be-413a2d177a19.herokuapp.com/api/auth/login', login)
        .then(response => {
            dispatch({ LOGIN_SUCCESS, payload: response.data })
            localStorage.setItem('token', response.data.token)
            navigate('/user-dashboard')
        })
        .catch(err => {
            dispatch({ LOGIN_FAILURE, payload: err.message })
        })


}