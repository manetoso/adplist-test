import { createContext, useState } from 'react';

export const OnMeetContext = createContext({
  isOnMeet: false,
  setIsOnMeet: () => {},
});

export const OnMeetContextProvider = ({ children }) => {
  const [isOnMeet, setIsOnMeet] = useState(false);
  return (
    <OnMeetContext.Provider
      value={{ isOnMeet: isOnMeet, setIsOnMeet: setIsOnMeet }}
    >
      {children}
    </OnMeetContext.Provider>
  );
};
