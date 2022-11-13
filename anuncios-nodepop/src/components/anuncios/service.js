import client from "../../api/client";

const advertsUrl = "/api/v1/adverts";

export const getLatestAdverts = (selling, tags, nameObj, lowerPrice) => {
  const url = `${advertsUrl}`;
  return client.get(url, {
    params: {
      sale: selling,
      tags: tags,
      name: nameObj,

      price: lowerPrice,
    },
  });
};
export const getLatestAdverts1 = (
  selling,
  tags,
  nameObj,
  lowerPrice,
  higherPrice
) => {
  const url = `${advertsUrl}`;
  return client.get(url, {
    params: {
      sale: selling,
      tags: tags,
      name: nameObj,

      price: [lowerPrice, higherPrice],
    },
  });
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
