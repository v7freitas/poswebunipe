import { Badge, Card } from "react-bootstrap";

import { EpisodeCard, IPropsCharacterDetail } from "..";

export const CharacterDetail = ({
    character,
    episodes,
}: IPropsCharacterDetail) => {
    return (
        <section>
            <Card className="bg-dark text-white">
                <Card.Img src={character.image} />
                <div className="p-3">
                    <div>
                        <h4>Personagem: </h4>
                        {character.name}
                        <Badge bg={character.status}>{character.status}</Badge>
                    </div>
                    <p>
                        <span>Espécie:</span> {character.species}
                    </p>
                    <p>
                        <span>Origem:</span> {character.origin.name}
                    </p>
                    <div>
                        <span>Last known location:</span>
                        <br />
                        {character.location.name}
                    </div>
                </div>
            </Card>
            <hr></hr>
            <div>
                <p className="text-white">Episódio(s):</p>
            </div>
            <div className="d-flex flex-wrap gap-3">
                {Object.values(episodes)?.map((episode, index) => {
                    return <EpisodeCard key={index} episode={episode} />;
                })}
            </div>
        </section>
    );
};
