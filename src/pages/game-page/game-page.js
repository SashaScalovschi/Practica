import React from "react";
import { useSelector} from 'react-redux';
import { GameCover } from "../../components/game-cover/game-cover";
import { GameGenre } from "../../components/game-genre";
import "./game-page.css";

export const GamePage = () => {
  const game = useSelector(state => state.games.currentGame);

  if(!game) return null

  return (
    <div className="game-page">
      <h1 className="game-page__title">{ game.title }</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width="90%"
            height="400px"
            src={game.game1}
            title="MC DOC game"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="game-page__right">
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className="secondary-text">Жанрк цієї гри:</p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
         
        </div>
        
      </div>
    </div>
  );
};
