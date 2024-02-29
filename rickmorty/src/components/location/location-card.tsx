import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IPropsLocationCard } from "..";

export const LocationCard = ({ location }: IPropsLocationCard) => {
    return (
        <div>
            <Link className="text-decoration-none" to={`/location/${location.id}`}>
                <Card className="bg-dark text-white">
                    <Card.Body>
                        <Card.Title>{location.name}</Card.Title>
                        <Card.Text>Type: {location.type}</Card.Text>
                        <Card.Text>Dimension: {location.dimension}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};
