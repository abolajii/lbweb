import { Container, Input, ModalContainer } from "../../components";

import AddPhotos from "./add.photos";
import DatePicker from "react-datepicker";
import Gender from "./gender";
import GenderToMeet from "./gender.to.meet";
import Interests from "./interests";
import React from "react";
import { signUp } from "../../api/noauth";
import styled from "styled-components";
import { useAuth } from "../../context/user.context";
import { useNavigate } from "react-router-dom";

const StyledDatePicker = styled(DatePicker)`
  height: 50px;
  border-radius: 9px;
  color: #cb2021;
  border: 1px solid #ffeaea;
  background: rgba(255, 255, 255, 0.5);
  font-size: 15px;
`;

const RegisterDetails = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [name, setName] = React.useState("");
  const [active, setActive] = React.useState(0);
  const [activeGender, setActiveGender] = React.useState(0);
  const [activeDetails, setActiveDetails] = React.useState(0);
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const { userInformation, handleUserInformation, setUser } = useAuth();

  const allowedUsers = new Date().getFullYear() - 29;
  const formattedDate = startDate.toLocaleDateString().split("/").join("-");

  const makeRequest = async () => {
    try {
      const res = await signUp(userInformation);
      setLoading(false);
      setUser(res.data.user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const navigate = useNavigate();

  switch (activeDetails) {
    case 1:
      return (
        <Container
          progress
          fill={active}
          title="I am a"
          onClick={() => setActiveDetails(0)}
          onPressOne={() => {
            if (!active) return;
            setActiveDetails(2);
            active === 1
              ? handleUserInformation("gender", "Woman")
              : handleUserInformation("gender", "Man");
          }}
        >
          <p className="small-text text-center center my-2">
            Tell us about your gender.
          </p>
          <div className="mb-3">
            <Gender active={active} setActive={setActive} />
          </div>
        </Container>
      );
    case 2:
      return (
        <Container
          progress
          fill={startDate.getFullYear() < allowedUsers}
          title="My birthday"
          onClick={() => setActiveDetails(1)}
          onPressOne={() => {
            if (startDate.getFullYear() < allowedUsers) {
              setActiveDetails(3);
              handleUserInformation("dob", formattedDate);
            }
          }}
        >
          <p className="small-text center">
            Your age will be seen by everyone.
          </p>

          <StyledDatePicker
            className="w-100 py px-1 mt-2"
            selected={startDate}
            placeholderText="Choose"
            onChange={(date) => setStartDate(date)}
            dateFormat="dd - MM - yyyy"
          />
        </Container>
      );
    case 3:
      return (
        <Container
          progress
          title="Who do you want to meet?"
          onClick={() => setActiveDetails(2)}
          onPressOne={() => {
            if (!activeGender) return;
            setActiveDetails(4);
            activeGender === 1 &&
              handleUserInformation("interested_in", "Women");
            activeGender === 2 && handleUserInformation("interested_in", "Men");
            activeGender === 3 &&
              handleUserInformation("interested_in", "Both");
          }}
          fill={activeGender}
        >
          <p className="small-text center mb-2">
            Let us know what gender(s) you are interested in.
          </p>
          {/* <Gender /> */}
          <div className="center">
            <GenderToMeet setActive={setActiveGender} active={activeGender} />
          </div>
        </Container>
      );
    case 4:
      return (
        <Container
          progress
          title="My Interests"
          onClick={() => setActiveDetails(3)}
          fill={selectedItems.length >= 5 && selectedItems.length <= 8}
          onPressOne={() => {
            if (selectedItems.length < 5 || selectedItems.length > 8) return;
            setActiveDetails(5);
            handleUserInformation("my_interests", selectedItems);
          }}
        >
          <>
            <p className="small-text center">
              Select your interests and let everyone know what you’re passionate
              about.
            </p>
            <p className="bold sm mt">Select a minimum of 5.</p>
            <Interests
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          </>
        </Container>
      );
    case 5:
      return (
        <ModalContainer loading={loading}>
          <Container
            progress
            title="Add Photos"
            onClick={() => setActiveDetails(4)}
            onPressOne={() => {
              makeRequest();
              setLoading(true);
            }}
          >
            <>
              <p className="small-text center">
                Show people how you look, first photo will be used as your
                display photo.
              </p>
              <p className="bold sm mt">Add a minimum of 2 photos.</p>
            </>
            <div className="center">
              <AddPhotos />
            </div>
          </Container>
        </ModalContainer>
      );

    default:
      return (
        <Container
          progress
          noBtn
          fill={name}
          title="Tell us your name"
          onPressOne={() => {
            if (!name) return;
            setActiveDetails(1);
            handleUserInformation("name", name);
          }}
        >
          <p className="small-text text-center center mb-1">
            This name will be seen by all and you will not be able to change it.
          </p>
          <Input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Container>
      );
  }
};

export default RegisterDetails;
