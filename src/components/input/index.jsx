import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import React from "react";
import { mobileViewMax } from "../../responsive/mobile";
import styled from "styled-components";

const Container = styled.div`
  .input-container {
    background: #ffffff;
    border: 1px solid #e8e6ea;
    border-radius: 15px;
    height: 55px;
    width: 340px;
    overflow: hidden;
    margin-top: 10px;
    padding: 0 15px;

    ${mobileViewMax({
      width: "100%",
    })}
  }

  input {
    height: 100%;
    width: 100%;
  }

  .error {
    border: 1px solid #b50d0d;
  }

  .error-text {
    font-size: 12px;
    margin: 3px 0px;
    color: #b50d0d;
  }

  .icon {
    height: 20px;
    width: 20px;
    cursor: pointer;
  }

  .mr-10 {
    margin-right: 10px;
  }
`;

const Input = ({ icon, right, error, placeholder, value, onChange }) => {
  const [clicked, setClicked] = React.useState(false);
  if (icon) {
    if (right) {
      return (
        <Container>
          <div
            className={
              error
                ? "input-container error"
                : "input-container flex ai-center jc-center"
            }
          >
            <div className="flex-1">
              <input
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                type={clicked ? "text" : "password"}
              />
            </div>
            <div className="flex ai-center jc-center icon">
              {clicked ? (
                <IoIosEye
                  size={22}
                  color="#3B3A3C"
                  onClick={() => setClicked(false)}
                />
              ) : (
                <IoIosEyeOff
                  size={22}
                  color="#3B3A3C"
                  onClick={() => setClicked(true)}
                />
              )}
            </div>
          </div>
          {error && <p className="error-text">{error}</p>}
        </Container>
      );
    }
    return (
      <Container>
        <div
          className={
            error
              ? "input-container error"
              : "input-container flex ai-center jc-center"
          }
        >
          <div className="icon mr-10"></div>
          <div className="flex-1">
            <input
              onChange={onChange}
              placeholder={placeholder}
              value={value}
            />
          </div>
        </div>
        {error && <p className="error-text">{error}</p>}
      </Container>
    );
  }
  return (
    <Container>
      <div className={error ? "input-container error" : "input-container"}>
        <input onChange={onChange} placeholder={placeholder} value={value} />
      </div>
      {error && <p className="error-text">{error}</p>}
    </Container>
  );
};

export default Input;
