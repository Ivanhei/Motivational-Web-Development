import { useUser } from '@/common/utils';

// https://www.netlify.com/blog/2020/12/01/using-react-context-for-state-management-in-next.js/
import { createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {
    user: useUser(),
  };

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
