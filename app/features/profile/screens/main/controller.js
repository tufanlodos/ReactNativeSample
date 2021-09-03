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

const handleLogoutSubmit = async (navigation, accountContext) => {
  accountContext.clearAccount();
  navigation.replace(ROUTE_NAMES.AUTH_STACK);
};

export { initialState, reducer, handleLogoutSubmit };
