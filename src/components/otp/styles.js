import styled from "styled-components";

export const Container = styled.div`
.input-container {
  height: 60px;
  width: 60px;
  border-radius: 15px;
  text-align: center;
  background-color: white;
  opacity: 0.5;
}

.active {
  border: 0.1px solid red;
  border-radius: 10px;
  background-color: white;
  opacity: 1;
}

input {
  width: 100% !important;
  height: 100% !important;
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  font-family: sharp;
}

.resendOtpContainer {
  display: flex;
  font-family: sharp;
}

.resendOtpText {
  font-size: 15px;
  color: black;

  opacity: displayTimer === '00:00' ? 1 : 0.3,
}

.resendOtpTime {
  font-size: 15px;
  color: #b50d0d;
  font-family: sharp;
}
`;

export const Time = styled.p`
  opacity: ${({ displayTimer }) => (displayTimer === "00:00" ? 1 : 0.3)};
`;
