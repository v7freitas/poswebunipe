import api from "../api";

export const getEpisodes = async () => {
    const { data } = await api.get(`episode`);
    return data;
};

export const getEpisode = async (id: string) => {
    const { data } = await api.get(`episode/${id}`);
    return data;
};

export const getEpisodePath = async (pathURL: string) => {
    const { data } = await api.get(`${pathURL}`);
    return data;
};
