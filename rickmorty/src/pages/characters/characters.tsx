import { useEffect, useState } from "react";

import { CharacterCard } from "../../components";
import { getCharacters } from "../../services";

export const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await getCharacters();
                setCharacters(data.results);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <>
            <div className="d-flex pb-5">
                <div className="row">
                    {characters?.map((character, index) => (
                        <CharacterCard key={index} character={character} />
                    ))}
                </div>
            </div>
        </>
    );
};
