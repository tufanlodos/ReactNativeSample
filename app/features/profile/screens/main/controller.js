import ROUTE_NAMES from "../../../../navigation/config/route-names.json";

function handleLogoutSubmit(navigation, accountContext) {
  accountContext.clearAccount();
  navigation.replace(ROUTE_NAMES.AUTH_STACK);
}

export { handleLogoutSubmit };
