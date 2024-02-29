import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
    EpisodeDetail,
    ITypeCharacterCard,
    ITypeEpisode,
} from "../../components";
import { getCharacterPath, getEpisode } from "../../services";

export const EpisodeDetails = () => {
    const [episode, setEpisode] = useState<ITypeEpisode>();
    const [characters, setCharacters] = useState<ITypeCharacterCard[]>([]);

    const { id } = useParams();

    useEffect(() => {
        const fecthEpisode = async () => {
            try {
                const data = await getEpisode(id as string);
                setEpisode(data);

                const urlPath = data.characters.map((url: string) =>
                    url.slice(32),
                );
                const fetchCharacter = urlPath.map(async (url: string) => {
                    const dataCharacter = await getCharacterPath(url);
                    return dataCharacter;
                });
                const allCharacter = await Promise.all(fetchCharacter);
                setCharacters(allCharacter);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };
        fecthEpisode();
    }, []);

    return (
        <>
            {episode && (
                <EpisodeDetail episode={episode} characters={characters} />
            )}
        </>
    );
};
