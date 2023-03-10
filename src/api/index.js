import axios from "axios";

const LoveBirdz = axios.create({
  baseURL: "http://localhost:8080/api",
});

const NoAuthLoveBirdz = axios.create({
  baseURL: "http://localhost:8080/api",
});

export { LoveBirdz, NoAuthLoveBirdz };
