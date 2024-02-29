import { CharacterCard, IPropsLocationDetail } from "..";

export const LocationDetail = ({
    location,
    residents,
}: IPropsLocationDetail) => {
    return (
        <section className="p-5">
            <div>
                <div className="text-white">
                    <h4>Localização: </h4>
                    <div>{location?.name}</div>
                    <p>
                        <span>Type:</span> {location?.type}
                    </p>
                    <p>
                        <span>Dimension:</span> {location?.dimension}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="text-white">
                <p>Residentes:</p>
            </div>
            <div className="d-flex flex-wrap">
                {Object.values(residents)?.map((resident, index) => {
                    return <CharacterCard key={index} character={resident} />;
                })}
            </div>
        </section>
    );
};
