import axios from 'axios';

const API_URL = "http://localhost:5294/birthday";

export const createBirthday = async (name: string, birthdate: Date) => {
    return axios.post(API_URL, {
        name: name,
        birthdate: birthdate,
    });
};