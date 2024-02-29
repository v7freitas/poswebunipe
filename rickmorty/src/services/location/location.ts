import api from "../api";

export const getLocations = async () => {
    const { data } = await api.get(`location`);
    return data;
};

export const getLocation = async (id: string) => {
    const { data } = await api.get(`location/${id}`);
    return data;
};

export const getLocationPath = async (pathURL: string) => {
    const { data } = await api.get(`${pathURL}`);
    return data;
};
