import axios from "axios";
import { constants } from "../utils";

export const getParcels = () => {
  const config = {};

  return axios.get(`${constants.API_URI}/parcels`, config);
};

export const createParcels = () => {
  const config = {};

  return axios.post(`${constants.API_URI}/parcels`, config);
};

export const deleteParcels = () => {
  const config = {};

  return axios.post(`${constants.API_URI}/parcels`, config);
};

export const getDeliveryFees = () => {
  const config = {};

  return axios.get(`${constants.API_URI}/deliveryfees`, config);
};
