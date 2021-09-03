import ROUTE_NAMES from "../../../../navigation/config/route-names.json";

const initialState = {
  initialized: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setInitialized":
      return { ...state, initialized: action.payload };
    default:
      return state;
  }
};

const handleLoginSubmit = async (navigation, accountContext) => {
  accountContext.setAccount({ username: "johndoe", token: null });
  navigation.replace(ROUTE_NAMES.MAIN_TAB);
};

export { initialState, reducer, handleLoginSubmit };
