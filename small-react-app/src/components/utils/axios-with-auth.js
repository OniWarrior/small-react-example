import axios from 'axios'

const axiosWithAuth = () => {

    return axios.create({
        // TODO: wait for backend endpoint
        baseURL: '',
        headers: {
            authorization: localStorage.getItem('token')
        }
    })

}

export default axiosWithAuth