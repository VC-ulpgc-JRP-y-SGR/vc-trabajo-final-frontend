import axios, { AxiosInstance } from 'axios';
import { Manager } from 'socket.io-client';

export const ip = '192.168.8.102:5000';

const instance: AxiosInstance = axios.create({
    baseURL: `http://${ip}/` , // Replace with your API base URL
    timeout: 5000, // Set the timeout value in milliseconds
    headers: {
        'Content-Type': 'application/json', // Set the desired content type
    },
});

export default instance;

export const manager = new Manager(`http://${ip}/`);