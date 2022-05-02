import axios from "axios";

export const normalizeUrl = (url) => {
  return /^(http(s?)):\/\//i.test(url) ? url : `https://${url}`;
};

export const checkLightStatus = () => {
  return axios({
    method: "get",
    url: `https://192.168.1.104/api/HPCviaOyvD7dNDq4KJysX5bFHzGBx3ST1kH8kOwy/lights/1`,
  })
};

export const turnLightOn = () => {
  return axios({
    method: "PUT",
    url: `https://192.168.1.104/api/HPCviaOyvD7dNDq4KJysX5bFHzGBx3ST1kH8kOwy/lights/1/state`,
    data: {"on":true}
  })
}

export const turnLightOff = () => {
  return axios({
    method: "PUT",
    url: `https://192.168.1.104/api/HPCviaOyvD7dNDq4KJysX5bFHzGBx3ST1kH8kOwy/lights/1/state`,
    data: {"on":false}
  })
}

export const changeColorRandom = () => {
  const randHue = Math.floor(Math.random() * (65535 + 1));
  return axios({
    method: "PUT",
    url: `https://192.168.1.104/api/HPCviaOyvD7dNDq4KJysX5bFHzGBx3ST1kH8kOwy/lights/1/state`,
    data: {"on":true, "sat":254, "bri":254,"hue":randHue}
  })
}

export const addPlebPayRefQueryParam = (redirectUrl, plebPayRef) => {
  const urlWithQueryParams = new URL(redirectUrl);

  urlWithQueryParams.searchParams.append("plebPayRef", plebPayRef);

  return urlWithQueryParams.href;
};

const normalizeCurrency = (currency) => {
  switch (currency) {
    case "USDT":
      return "USD";
    default:
      return currency;
  }
};

export const formatCurrency = ({ amount, currency, locales = "en" }) => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency: normalizeCurrency(currency),
  })
    .format(amount)
    .replace(/\.00$/, "");
};

export const makeProofOfPlebPayPath = (invoiceId, paidInvoiceId) =>
  `/${invoiceId}/paid-invoices/${paidInvoiceId}`;
