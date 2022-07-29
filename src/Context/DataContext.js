import { createContext, useCallback, useReducer } from "react";
import DATA from "../data";
export const DataContext = createContext();

let storage = DATA;

const initialState = {
  data: storage,
  searchstring: "",
};

export const dataActions = {
  SET_DATA: "SET_DATA",
  SET_SEARCH_STRING: "SEARCH_STRING",
};

const dataReducer = (state, { type, payload } = {}) => {
  switch (type) {
    case dataActions.SET_DATA:
      return { ...state, data: payload };
    case dataActions.SET_SEARCH_STRING:
      return { ...state, searchstring: payload };
    default:
      return state;
  }
};

const DataContextProvider = (props) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const { data, searchstring } = state;

  const search = useCallback(
    (searchstring) => {
      console.log("searchstring is here", searchstring);
      let temparr = data.filter((d) => {
        if (searchstring == "") {
          console.log("the d is hreaerae", d);
          return d;
        } else if (d.name.toLowerCase().includes(searchstring)) {
          console.log(d);
          return d;
        }
      });
      dispatch({
        type: dataActions.SET_DATA,
        payload: temparr,
      });
    },
    [data]
  );

  const setsearchstring = useCallback((searchstring) => {
    dispatch({
      type: dataActions.SET_SEARCH_STRING,
      payload: searchstring,
    });
  }, []);

  const cleardata = useCallback(() => {
    dispatch({
      type: dataActions.SET_DATA,
      payload: storage,
    });

    dispatch({
      type: dataActions.SET_SEARCH_STRING,
      payload: "",
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        searchstring,
        search,
        cleardata,
        setsearchstring,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
