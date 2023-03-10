import { LoveBirdz } from ".";

const updateCoords = (id, coords) => {
  const data = { id, coords: { latitude: coords[0], longitude: coords[1] } };
  return LoveBirdz.put("/add/coords", data);
};

const getAllUsers = (id, coords) => {
  const data = { id, coords: { latitude: coords[0], longitude: coords[1] } };
  return LoveBirdz.post("/all/users", data);
};

const filterUsers = (data) => {
  return LoveBirdz.post("/filter/users", data);
};

export { updateCoords, getAllUsers, filterUsers };
