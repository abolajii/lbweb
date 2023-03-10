import React from "react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [carouselId, setCarouselId] = React.useState(0);
  const [progress, setProgress] = React.useState(50);
  const [coords, setCoords] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  const [userInformation, setUserInformation] = React.useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    my_interests: [],
    interested_in: "",
    gender: "",
  });

  const [filter, setFilter] = React.useState({
    gender: "Women",
    age: [29, 55],
    distance: "",
  });

  const handleUserInformation = (key, value) => {
    setUserInformation({ ...userInformation, [key]: value });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        carouselId,
        setCarouselId,
        progress,
        setProgress,
        handleUserInformation,
        userInformation,
        coords,
        setCoords,
        filter,
        setFilter,
        cards,
        setCards,
        users,
        setUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(UserContext);
};

export default UserProvider;
