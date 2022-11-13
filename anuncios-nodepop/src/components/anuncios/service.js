import client from "../../api/client";

const advertsUrl = "/api/v1/adverts";

export const getLatestAdverts = () => {
  const url = advertsUrl;
  return client.get(url);
};

export const getAdvertDetail = (advertsId) => {
  const url = `${advertsUrl}/${advertsId}`;
  return client.get(url);
};

export const createAdvert = (advert) => {
  const url = advertsUrl;
  return client.post(url, advert);
};

export const deleteAdvertDetail = (advertsId) => {
  const url = `${advertsUrl}/${advertsId}`;
  return client.delete(url);
};
