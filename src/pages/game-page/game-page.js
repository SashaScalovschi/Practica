import React from "react";
import { useSelector} from 'react-redux';
import { GameBuy } from "../../components/game-buy";
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
<<<<<<< HEAD
            src={game.game}
=======
            src={game.video}
>>>>>>> ca6a4ba8c5e3610731b9f647aa58600a403c29fd
            title="player"
                      frameBorder="0"
                      width="560"
                      height="384"
                      
          ></iframe>
        </div>
        <div className="game-page__right">
          <GameCover image={game.image} />
          <p>{game.description}</p>
<<<<<<< HEAD
          <p className="secondary-text">Популярні мітки:</p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
         
=======
          <p className="secondary-text">Популярные метки для этого продукта:</p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className="game-page__buy-game">
            <GameBuy game={game} />
          </div>
>>>>>>> ca6a4ba8c5e3610731b9f647aa58600a403c29fd
        </div>
      </div>
    </div>
  );
};
