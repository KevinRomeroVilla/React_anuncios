import client from "../../api/client";

export const login = (credential) => {
  return client.post("/api/auth/login", credential);
};
