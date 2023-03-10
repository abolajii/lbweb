import { Container, Time } from "./styles";

import LoadingModal from "../modals/loading.modal";
import React from "react";

const input = Array(4).fill("");

const OtpContainer = ({ otp, setOtp }) => {
  const [active, setActive] = React.useState(0);

  return (
    <div className="flex gap-3 mb-1">
      {Object.keys(otp).map((key, index) => {
        return (
          <div
            className={
              active >= index + 1
                ? "center input-container active"
                : "center input-container"
            }
          >
            <input
              maxLength="1"
              onKeyDown={({ nativeEvent }) => {
                console.log(nativeEvent);
                if (nativeEvent.key === "Backspace") {
                  if (index === 0) {
                    return;
                  }

                  if (otp[key] === "") {
                    setOtp({ ...otp, [index - 1]: "" });
                    input[index - 1]?.focus();
                  }
                  setActive(active - 1);
                }
              }}
              onChange={(e) => {
                setOtp({ ...otp, [key]: e.target.value });
                if (e.target.value !== "") {
                  if (index + 1 !== input.length) {
                    input[index + 1]?.focus();
                  }
                  setActive(index + 1);
                }
              }}
              ref={(ref) => (input[key] = ref)}
            />
          </div>
        );
      })}
    </div>
  );
};

const ResendOtp = ({ number, setLoading }) => {
  let timer = 180;
  const [displayTimer, setDisplayTimer] = React.useState("03:00");
  const [resendOtp, setResendOtp] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      var m = Math.floor(timer / 60);
      var s = timer % 60;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
      setDisplayTimer(m + ":" + s);
      if (timer === 0) {
        clearInterval(interval);
      } else {
        timer--;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  React.useEffect(() => {
    if (resendOtp) {
      setDisplayTimer("03:00");
      const interval = setInterval(() => {
        var m = Math.floor(timer / 60);
        var s = timer % 60;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        setDisplayTimer(m + ":" + s);
        if (timer === 0) {
          clearInterval(interval);
          setResendOtp(false);
        } else {
          timer--;
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [setDisplayTimer, resendOtp, timer]);
  return (
    <div className="resendOtpContainer center">
      {displayTimer === "00:00" ? (
        <button
          onClick={() => {
            setResendOtp(true);
            // makeOtpRequest();
            setLoading(true);
          }}
        >
          <Time displayTimer={displayTimer} className="resendOtpTime">
            Resend code
          </Time>
        </button>
      ) : (
        <>
          <Time className="resendOtpText mr">Resend code:</Time>
          <p className="resendOtpTime"> {displayTimer}</p>
        </>
      )}
    </div>
  );
};

const Otp = ({ number, otp, setOtp }) => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {});
  return (
    <>
      {loading && <LoadingModal />}
      <Container>
        <OtpContainer otp={otp} setOtp={setOtp} />
        <ResendOtp number={number} setLoading={setLoading} />
      </Container>
    </>
  );
};

export default Otp;
