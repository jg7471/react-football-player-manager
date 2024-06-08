import React, { createContext } from 'react';

const PlayerContext = createContext();

export const PlayerContextProvider = (props) => {
  return <PlayerContext.Provider>{props.children}</PlayerContext.Provider>;
};

