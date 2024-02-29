import { useEffect, useState } from "react";

import { LocationCard } from "../../components/location";
import { getLocations } from "../../services/location";

export const Location = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const data = await getLocations();
                setLocations(data.results);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };

        fetchLocations();
    }, []);

    return (
        <>
            <div className="d-flex flex-wrap gap-3 p-5">
                {locations?.map((location, index) => {
                    return <LocationCard key={index} location={location} />;
                })}
            </div>
        </>
    );
};
