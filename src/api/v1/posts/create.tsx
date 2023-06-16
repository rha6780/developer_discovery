import { ApiClient } from '../../index';
import { PostCreatePayload } from '../../../models/Post';
import { getAuthHeaders } from '@/api/api_client';

export const postCreate = async (postpayload: PostCreatePayload) => {
    try {
        const { data } = await ApiClient.post(`api/v1/posts/create`, postpayload, getAuthHeaders);
        console.log(data);
        return data;
    } catch (error: any) {
        console.log(error.response.code);
    }
};
