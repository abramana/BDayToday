import axios from 'axios';
import {Birthday} from "../models/birthday";
import {CONFIG} from "../environment/environment";

const API_URL = `${CONFIG.BASE_API}/birthday`;

export const getAllBirthdays = async () => {
    return axios.get(API_URL)
        .then((response) =>
            response.data.map((el: any): Birthday =>
                ({
                    id: el.id,
                    name: el.name,
                    birthdate: new Date(el.birthdate)
                })))
};

export const getBirthdayById = async (id: number) => {
    return axios.get(`${API_URL}/${id}`)
        .then((response) => {
            const el = response.data;
            return {
                id: el.id,
                name: el.name,
                birthdate: new Date(el.birthdate)
            } as Birthday;
        });
};

export const createBirthday = async (name: string, birthdate: Date) => {
    return axios.post(API_URL, {
        name: name,
        birthdate: birthdate,
    });
};