
export interface TypeCharacterCard {
    id: number;
    name: string;
    status: string;
    species: string;
    location: {name: string, url: string};
    image: string;
}

export interface ICharacterCard {
    character: TypeCharacterCard;
}

export const CharacterCard = ({character}:ICharacterCard) => {
    return(
            <>
                <p>Nome: {character.name}</p>
                <img src={character.image} />
            </>
    )
}