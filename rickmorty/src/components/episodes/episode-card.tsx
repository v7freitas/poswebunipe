import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IPropsEpisodeCard } from "..";

export const EpisodeCard = ({ episode }: IPropsEpisodeCard) => {
    return (
        <div>
            <Link className="text-decoration-none" to={`/episode/${episode.id}`}>
                <Card className="bg-dark text-white">
                    <Card.Body>
                        <Card.Title>{episode.name}</Card.Title>
                        <Card.Text>Episode: {episode.episode}</Card.Text>
                        <Card.Text>Air date: {episode.air_date}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};
