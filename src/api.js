import axios from "axios"

let api = axios.create()

api.interceptors.request.use((config) => {
    // before request config
    return config
}, (error) => {
    // before request error
});

api.interceptors.response.use((config) => {
    // before response config (any response == 2xx code)
    return config
}, (error) => {
    // before response error (any response != 2xx codes)
    this.$router.push({ name: "Error" })
});

export default api