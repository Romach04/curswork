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
// export const deleteDevice = async (name) => {
//     const {data} = await $authHost.post('api/device', name)
//     return data
// }

export const fechDevice = async (typeId, brandId, page, limit = 5) => {
    const {data} = await $host.get('api/device', {params: {
        typeId, brandId, page, limit
     }})
     return data;

}
export const fechOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data;

}


export const fechDeviceBasket = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data;

}






export const addToBasket = async (deviceId) => {
    const {response} = await $authHost.post('api/basket', deviceId)
    return response
}

export const deleteItemBasket = async (id) => {
    const {data} = await $authHost.delete('api/basket', id);
    return data
}

export const getBasket = async () => {
    const {data} = await $authHost.get('api/basket')
    return data
}   