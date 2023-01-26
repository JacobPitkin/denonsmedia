import React from 'react';
import games from '../data/games';
import GameListItem from './GameListItem';

function GameList() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center m-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map(game => (
          <GameListItem 
            img={game.img}
            title={game.title}
            excitement={game.excitement}
          />
        ))}
      </div>
    </div>
  )
}

export default GameList;