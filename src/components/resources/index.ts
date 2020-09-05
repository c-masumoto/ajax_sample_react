import axios from 'axios';
import { AddressType } from './types';

const instance = axios.create({
    baseURL: 'https://f6e5ec69a7da43a1829ca5598ca971f9.vfs.cloud9.us-east-1.amazonaws.com:8081',
    timeout: 1000
});

export const getAddresses = async () => {
    const response =  await instance.get<AddressType>('/addresses.json');
    return response.data;
};

export const getAddress = async (id: number) => {
    const response = await instance.get<AddressType[]>(`/addresses/${id}.json`);
    return response.data;
};

export const createAddress = async (data: AddressType) => {
    const response = await instance.post<AddressType>('/addresses.json');
    return response.data;
}

export const updateAddress = async (id: number, data: AddressType ) => {
    const response = await instance.put<AddressType>(`/addresses/${id}.json`, data);
    return response.data;
}

export const deleteUser = async (id: number) => {
    const response = await instance.delete(`/addresses/${id}.json`);
    return response.data;
}