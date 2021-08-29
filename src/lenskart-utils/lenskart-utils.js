export const getUserdatFromToken = (token = "") => {
  try {
    let tokens = token.split(".")
    let body = atob(tokens[1])
    body = JSON.parse(body)
    let payload = {
      ...JSON.parse(body.user),
      permission: JSON.parse(body.permissions)?.permissionsMap
    }
    return payload;
  } catch {
    return {};
  }
};
