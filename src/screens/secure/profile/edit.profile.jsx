import { Button, GoBack, Input } from "../../../components";
import { mobileViewMax, mobileViewMin } from "../../../responsive/mobile";

import React from "react";
import { dateOfBirth } from "../../../helpers/user.helpers";
import styled from "styled-components";
import { useAuth } from "../../../context/user.context";

export const Container = styled.div`
  .edit-info p {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #000;
    margin: 20px 0;
  }

  .label {
    font-weight: 500;
    font-size: 15px;
    line-height: 150%;
    color: #3b3a3c;
  }

  .my-3 {
    margin: 30px 0;
  }

  .interest-item {
    height: 45px;
    width: 140px;
    border-radius: 15px;
    background: #fff;
    padding: 9px;
    cursor: pointer;
    border: 1px solid #e8e6ea;
  }

  .interest-icon {
    height: 19px;
    width: 19px;
    margin-right: 9px;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .interest-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #3b3a3c;
  }

  .image {
    height: 270px;
    width: 500px;
    border-radius: 15px;
    background: white;
    cursor: pointer;
  }
`;

const TextArea = styled.textarea`
  height: 115px;
  border-radius: 15px;
  background: #ffffff;
  width: 800px;
  outline: none;
  border: none;
  padding: 15px;
  font-family: inherit;
`;

const MobileView = styled.div`
  .profile-title {
    font-weight: 500;
    font-size: 19px;
    color: #000000;
    margin-left: 50px;
  }
  .title {
    font-weight: 500;
    font-size: 15px;
    line-height: 150%;
    color: #3b3a3c;
  }

  .name {
    color: rgba(0, 0, 0, 0.1);
  }
  ${mobileViewMin({
    display: "none",
  })}
`;

const DesktopView = styled.div`
  background: #f3f3f3;

  ${mobileViewMax({
    display: "none",
  })}
`;

const OverflowContainer = styled.div`
  height: 455px;
  width: 100%;
`;

const Details = styled.div`
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    margin-block: 20px;
  }
  &::-webkit-scrollbar-track {
    background: #ffe7e7;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background: #b50d0d;
    opacity: 0.5;
    border-radius: 20px;
  }
`;

const EditProfile = ({ setActiveProfile, setHide }) => {
  const { user } = useAuth();
  return (
    <>
      <DesktopView>
        <Container className="px-2 py-2">
          <div className="flex ai-center">
            <GoBack onClick={() => setActiveProfile(0)} />
            <p className="mx-1">Back to Profile</p>
          </div>
          <div className="edit-info">
            <p>Edit Info</p>
          </div>
          <form>
            <div className="flex jc-space-btw my-3">
              <div>
                <p className="label">Name</p>
                <div>
                  <Input placeholder={user.name} />
                </div>
              </div>
              <div>
                <p className="label">Phone Number</p>
                <div>
                  <Input placeholder={user.phone} />
                </div>
              </div>
            </div>
            <div className="flex jc-space-btw my-3">
              <div>
                <p className="label">Email Address</p>
                <div>
                  <Input placeholder={user.email} />
                </div>
              </div>
              <div>
                <p className="label">Date of Birth</p>
                <div>
                  <Input placeholder={dateOfBirth(user.dob)} />
                </div>
              </div>
            </div>
            <div className="flex jc-space-btw my-3">
              <div>
                <p className="label">Gender</p>
                <div>
                  <Input
                    placeholder={user.gender === "Man" ? "Male" : "Female"}
                  />
                </div>
              </div>
              <div>
                <p className="label">Location</p>
                <div>
                  <Input placeholder={user.location} />
                </div>
              </div>
            </div>
            <div className="flex flex-1">
              <div>
                <p className="label">About</p>
                <div>
                  <TextArea
                    className="flex flex-1"
                    value={`My name is ${user.name} and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading..`}
                  />
                </div>
              </div>
            </div>
            <div className="my-3">
              <Button fill title="Save Changes" />
            </div>
          </form>
        </Container>
      </DesktopView>
      <MobileView className="px-2">
        <div className="flex ai-center mb-2">
          <GoBack
            size={50}
            onClick={() => {
              setActiveProfile(0);
              setHide(false);
            }}
          />
          <div>
            <p className="profile-title">Edit Info</p>
          </div>
        </div>
        <OverflowContainer>
          <Details>
            <div className="mb-1">
              <p className="title">Name</p>
              <div className="name">
                <Input value="Abolaji" />
              </div>
            </div>
            <div className="mb-1">
              <p className="title">Phone Number</p>
              <div className="number">
                <Input value="+1 383 37737" />
              </div>
            </div>
            <div className="mb-1">
              <p className="title">Email</p>
              <div className="">
                <Input value="abolajiadejayi@gmail.com" />
              </div>
            </div>
            <div className="mb-1">
              <p className="title">Date of Birth</p>
              <div className="number">
                <Input value="Aug 26 1995" />
              </div>
            </div>
            <div className="mb-1">
              <p className="title">Gender</p>
              <div className="number">
                <Input value="Male" />
              </div>
            </div>
            <div className="mt-2">
              <Button width="100%" fill title="Save Changes" />
            </div>
          </Details>
        </OverflowContainer>
      </MobileView>
    </>
  );
};

export default EditProfile;
