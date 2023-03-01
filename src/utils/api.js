import fetch from './fetch'


// 登录
// { email,tel }
export function fetchLogin(data) {
    return fetch({
        url: 'user/role',
        method: 'POST',
        data
    })
}


export default {
    fetchSignup,
}