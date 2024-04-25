import axios from 'axios';
import {Birthday} from "../models/birthday";
import {CONFIG} from "../environment/environment";
import {BirthdayDetail} from "../models/birthday-detail";
import {removeOffset} from "../utils/date-utils";

const API_URL = `${CONFIG.BASE_API}/birthdays`;

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
            } as BirthdayDetail;
        });
};

export const createBirthday = async (birthdayDetail: BirthdayDetail) => {
    const birthdate = removeOffset(birthdayDetail.birthdate);
    return axios.post(API_URL, {...birthdayDetail, birthdate});
};

export const updateBirthday = async (birthdayDetail: BirthdayDetail) => {
    const birthdate = removeOffset(birthdayDetail.birthdate);
    return axios.put(API_URL + "/" + birthdayDetail.id, {...birthdayDetail, birthdate});
};