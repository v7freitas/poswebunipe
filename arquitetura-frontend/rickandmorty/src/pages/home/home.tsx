import { useEffect, useState } from "react"
import { getCharacters } from "../../service";
import { CharacterCard } from "../../components/characters/characterCard";

export const Home = () => {
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
            <h1>Componente Home</h1>
            {
                characters?.map((item, index) => {
                    return(
                        <CharacterCard key={index} character={item} />
                    )
                })
            }
        </>

    )

}