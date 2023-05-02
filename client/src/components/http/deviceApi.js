import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode';
export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fechTypes = async () => {
    const {data} = await $host.get('api/type')
    return data;

}
export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fechBrand = async () => {
    const {data} = await $host.get('api/brand')
    return data;

}
export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fechDevice = async () => {
    const {data} = await $host.get('api/device')
    return data;

}
export const fechOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data;

}
