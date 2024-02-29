import { CharacterCard, IPropsEpisodeDetail } from "..";

export const EpisodeDetail = ({ episode, characters }: IPropsEpisodeDetail) => {
    return (
        <section className="p-5">
            <div>
                <div className="text-white">
                    <h4>Episódio: </h4>
                    <div>{episode?.name}</div>
                    <div>{episode?.episode}</div>
                    <span>Air date:</span> {episode?.air_date}
                </div>
            </div>
            <hr></hr>
            <div className="text-white">
                <p>Personagens do Épisodio: </p>
            </div>
            <div className="d-flex flex-wrap">
                {Object.values(characters)?.map((character, index) => {
                    return <CharacterCard key={index} character={character} />;
                })}
            </div>
        </section>
    );
};
