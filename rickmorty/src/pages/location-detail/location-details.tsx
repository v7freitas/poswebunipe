import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
    ITypeCharacterCard,
    ITypeLocation,
    LocationDetail,
} from "../../components";
import { getLocation, getCharacterPath } from "../../services";

export const LocationDetails = () => {
    const [location, setLocation] = useState<ITypeLocation>();
    const [residents, setResidents] = useState<ITypeCharacterCard[]>([]);

    const { id } = useParams();

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const data = await getLocation(id as string);
                setLocation(data);

                const urlPath = data.residents.map((url: string) =>
                    url.slice(32),
                );
                const fetchCharacter = urlPath.map(async (url: string) => {
                    const dataCharacter = await getCharacterPath(url);
                    return dataCharacter;
                });
                const allCharacter = await Promise.all(fetchCharacter);
                setResidents(allCharacter);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };
        fetchLocation();
    }, []);

    return (
        <>
            {location && (
                <LocationDetail location={location} residents={residents} />
            )}
        </>
    );
};
