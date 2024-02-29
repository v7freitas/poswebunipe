import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
    CharacterDetail,
    ITypeCharacterDetail,
    ITypeEpisode,
} from "../../components";
import { getCharacter, getEpisodePath } from "../../services";

export const CharacterDetails = () => {
    const [character, setCharacter] = useState<ITypeCharacterDetail>();
    const [episodes, setEpisodes] = useState<ITypeEpisode[]>([]);

    const { id } = useParams();

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const data = await getCharacter(id as string);
                setCharacter(data);
                const pathUrl = data.episode.map((url: string) =>
                    url.slice(32),
                );
                const fetchEpisode = pathUrl.map(async (url: string) => {
                    const dataEpisode = await getEpisodePath(url);
                    return dataEpisode;
                });
                const allEpisodes: ITypeEpisode[] =
                    await Promise.all(fetchEpisode);
                setEpisodes(allEpisodes);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };
        fetchCharacter();
    }, []);

    return (
        <>
            <div className="container p-5">
                {character && (
                    <CharacterDetail character={character} episodes={episodes} />
                )}
            </div>
        </>
    );
};
