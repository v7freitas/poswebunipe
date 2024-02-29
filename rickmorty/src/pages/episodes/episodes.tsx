import { useEffect, useState } from "react";

import { EpisodeCard } from "../../components";
import { getEpisodes } from "../../services";

export const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const data = await getEpisodes();
                setEpisodes(data.results);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };

        fetchEpisodes();
    }, []);

    return (
        <div className="d-flex flex-wrap gap-3 p-5">
            {episodes?.map((episode, index) => {
                return <EpisodeCard key={index} episode={episode} />;
            })}
        </div>
    );
};
