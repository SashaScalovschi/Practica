import React from 'react';
import { GameItem } from '../../components/game-item';
import './home-page.css';

const GAMES = [
    {

        image: '',
        title: '',
        genres: ['Гонки', 'Симулятор', 'Открытый мир'],
        data: 2020,
        game: '',

        image: '/game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Гонки', 'Симулятор', 'Открытый мир'],
        price: 2343,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',

        id: 1,
        description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
    },
    {

        image: '',
        title: '',
        genres: ['Экшен', 'Шутер', 'Война'],
        game: '',
        data: 2020,

        image: '/game-covers/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Экшен', 'Шутер', 'Война'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 2433,

        id: 2,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {

        image: '',
        title: '',
        genres: ['Глубокий сюжет', 'Протагонистка'],
        game: '',
        data: 2020,

        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Глубокий сюжет', 'Протагонистка'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 3021,

        id: 3,
        description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
    },
    {

        image: '',
        title: '',
        genres: ['Открытый мир', 'Экшен'],
        game: '',
        data: 2020,

        image: '',
        title: '',
        genres: ['Открытый мир', 'Экшен'],
         game: '',
         data: 2020,

        id: 4,
        description: ''
    },
    {

        image: '',
        title: '',
        game: '',
        genres: ['Тактика', 'Шутер'],
        data: 2020,

         image: '',
        title: '',
        game: '',
        genres: ['Тактика', 'Шутер'],
         data: 2020,

        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
    },
    {

        image: '',
        title: '',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        game: '',
        data: 2020,

         image: '',
        title: '',
        game: '',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        data: 2020,

        id: 6,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
]

export const HomePage = () => {
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}
