import ROUTE_NAMES from "../../../../navigation/config/route-names.json";

function handleLoginSubmit(navigation, accountContext) {
  accountContext.setAccount({ username: "johndoe", token: null });
  navigation.replace(ROUTE_NAMES.MAIN_TAB);
}

export { handleLoginSubmit };
