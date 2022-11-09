import client, { setAutorizationHeader } from "../../api/client";
import storage from "../../utils/storage";

export const login = (credential) => {
  return client.post("/api/auth/login", credential).then(({ accessToken }) => {
    setAutorizationHeader(accessToken);
    storage.set("auth", accessToken);
  });
};
