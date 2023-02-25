import { PUBLIC_API_ENDPOINT } from '$env/static/public'

const fetchApi = (path: string, method: string, body?: any) => {
    return fetch(PUBLIC_API_ENDPOINT + path, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
}

export default fetchApi