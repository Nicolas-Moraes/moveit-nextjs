import { createContext, useState, ReactNode } from "react";

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelup: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelup() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log("New Challenge");
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelup,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
