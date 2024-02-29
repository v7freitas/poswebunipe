import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IPropsCharacterCard } from "..";

export const CharacterCard = ({ character }: IPropsCharacterCard) => {
    return (
        <div className="pt-5 col-md-4 col-sm-6 d-flex">
            <Link className="text-decoration-none character-link" to={`/character/${character.id}`}>
                <Card className="card bg-dark">
                    <Card.Img className="card-img" variant="top" src={character.image} />
                    <div>
                        <Badge bg={character.status}>{character.status}</Badge>
                        <Card.Body>
                            <Card.Title className="mb-0 text-white card-text-title">
                                {character.name}
                            </Card.Title>
                            <Card.Text className="text-white">{character.species}</Card.Text>
                            <Card.Text className="text-white">
                                <span className="text-secondary">
                                    Last known location:
                                </span>
                                <br />
                                {character.location.name}
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>
            </Link>
        </div>
    );
};
