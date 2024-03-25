import axios from 'axios';

const API_URL = "http://localhost:5294/birthday";

export const getAllBirthdays = async () => {
    return axios.get(API_URL)
};