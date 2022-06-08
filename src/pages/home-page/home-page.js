import React from 'react';
import { GameItem } from '../../components/game-item';
import './home-page.css';

const GAMES = [
    {
        image: '/game-covers/doom2.jpg',
        title: 'Doom 2',
        genres: ['Экшен', 'Шутер'],
        game1:'https://archive.org/embed/Doom-2',
        id: 1,
        description: "опис",
        
    },
    {
        image: '/game-covers/-pac-man.avif',
        title: 'Pac man',
        genres: ['Экшен'],
        game1:'https://archive.org/embed/msdos_Ms._Pac-Man_1983',
        id: 2,
        description: "опис",
    },
    {
        image: '/game-covers/donkey_kong.png',
        title: 'Donkey Kong',
        genres: ['da'],
        game1:'https://archive.org/embed/donkey-kong-dos',
        id: 3,
        description: "опис",
    },
    {
        image: '/game-covers/Super_Mario_World_DX.png',
        title: 'Super Mario World DX',
        genres: [ 'Экшен'],
        game1:'https://archive.org/embed/msdos_Super_Mario_World_DX_2002',
        id: 4,
        description: "опис",
    },
 
]

export const HomePage = () => {
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}
