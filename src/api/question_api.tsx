import axios from 'axios';

import { Question } from '../models/Question'

const client = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        'content-type': 'application/json',
    },
});

export const getQuestions = async () => {
    try {
        const result = await client.get<Question>("main/question/1");

        return result;
    } catch (error) {
        console.log(error)
    }
};

