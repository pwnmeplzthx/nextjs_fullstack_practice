import { Resource } from "@prisma/client"
import { axiosInstance } from "./axiosInstance"
import { ApiRoutes } from "./conts";

export const search = async (query: string): Promise<Resource[]> => {
    const {data} = await axiosInstance.get<Resource[]> (
        ApiRoutes.SEARCH_RESOURCES, 
        {
            params: {query}
        }
    );

    return data
}