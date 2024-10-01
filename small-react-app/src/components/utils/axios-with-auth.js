import axios from 'axios'

const axiosWithAuth = () => {

    return axios.create({

        baseURL: 'https://small-react-app-be-413a2d177a19.herokuapp.com/',
        headers: {
            authorization: localStorage.getItem('token')
        }
    })

}

export default axiosWithAuth