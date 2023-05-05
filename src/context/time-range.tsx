import React from "react";

export interface ITimeRangeContext {
  begin: string;
  end: string;
  setTime?: any;
  loading: boolean;
}

const initialState: ITimeRangeContext = {
  begin: "",
  end: "",
  loading: false,
  setTime: () => {},
};

const context = React.createContext(initialState);

const GlobalContext: React.FC<{ children: React.ReactNode }> = (props) => {
  const { Provider } = context;
  const [state, setTime] = React.useState(initialState);

  return <Provider value={{ ...state, setTime }}>{props.children}</Provider>;
};

export default GlobalContext;

export const useTimeRange = () => {
  const { begin, end, setTime, loading } = React.useContext(context);

  return [begin, end, loading, setTime];
};
