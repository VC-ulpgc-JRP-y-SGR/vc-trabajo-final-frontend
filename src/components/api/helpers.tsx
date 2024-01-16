import instance from "./instance";

export function fetchValue<T>(url : string){
    return async () : Promise<T> => {
        const response = await instance.get<T>(url);
        return response.data;
    }
};
