import axios from 'axios'

export const register = newUser => {
    return axios
        .post('api/users/register', {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            balance: newUser.balance
        })
        .then(res => {
            console.log("Registered ")
        })
        .catch(err => {
            console.log(err)
        })
}

export const login = user => {
    return axios
        .post('api/users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}