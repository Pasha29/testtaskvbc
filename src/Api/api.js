import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Pasha29/testtaskvbc'
})

export const getData = {
    getProducts() {
        return instance.get('/products').then( response => {
            return response.data;
        })
    }
}