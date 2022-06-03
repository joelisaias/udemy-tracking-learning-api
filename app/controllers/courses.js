const axios = require("axios");
const { encode} = require('js-base64');
const {UDEMY_API_URL:baseUrl,UDEMY_CLIENT_ID,UDEMY_CLIENT_SECRET} = process.env;
const token = encode(`${UDEMY_CLIENT_ID}:${UDEMY_CLIENT_SECRET}`);
const getCourses = (req, res) => {
  const {
    query: { page, size, filter },
  } = req;
  axios({
    method: "GET",
    url: `${baseUrl}?page=${page}&page_size=${size}&search=${filter}&language=es`,
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${token}`,
    },
  }).then((response) => {
    res.send(response.data);
  });
};

const getCourseById = (req, res) => {
  const {
    params: { id },
  } = req;
  axios({
    method: "GET",
    url: `${baseUrl}/${id}`,
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${token}`,
    },
  }).then((response) => {
    res.send(response.data);
  });
};

const getCurriculumByCourseId = (req, res) => {
  const {
    params: { id },
  } = req;
  axios({
    method: "GET",
    url: `${baseUrl}/${id}/public-curriculum-items`,
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${token}`,
    },
  }).then((response) => {
    res.send(response.data);
  });
};

module.exports = {
  getCourses,
  getCourseById,
  getCurriculumByCourseId,
};