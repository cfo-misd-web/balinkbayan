
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchRatings = async (postId: string) => {
    const response = await axios.get(`/posts/${postId}/ratings`); 
    return response.data;
};

export const useGetRatings = ({ postId }: { postId: string}) => {
    return useQuery({
        queryKey: ['ratings', postId],
        queryFn:()=> fetchRatings(postId),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
};