import { University } from "../models/University";
import axios from 'axios';

export const get = (): University[] => {

    const result : any = axios.get('http://localhost:4471/University');

    let data = result.data;

    try {
        const result = JSON.parse(data) as University[];
        return result;
    } catch {
        return [];
    }
}


