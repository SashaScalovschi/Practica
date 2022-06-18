import React from 'react';
import { GameItem } from '../../components/game-item';



const GAMES = [
    {
        image: '/game-covers/doom2.jpg',
        title: 'Doom 2',
        genres: ['Экшен', 'Шутер'],
        game1:'https://archive.org/embed/Doom-2',
        id: 1,
        description: "Doom II: Hell on Earth — відеогра, шутер від першої особи, розроблена компанією id Software, випущена для IBM PC 10 жовтня 1994 року. Є продовженням популярної і революційної гри Doom, яка вийшла в світ роком раніше. ",
        
    },
    {
        image: '/game-covers/-pac-man.avif',
        title: 'Pac man',
        genres: ['Экшен', 'Аркада'],
        game1:'https://archive.org/embed/msdos_Ms._Pac-Man_1983',
        id: 2,
        description: "Легендарна гра яку знеає кожена людина!!! Pac-Man — відеогра, яка вперше вийшла в 1980 році в Японії. Її випуск змінив всю індустрію відеоігор свого часу і вплинув на різні сфери культури.",
    },

 
]

export const Exclusive = () => {
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}
