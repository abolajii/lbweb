import { Button } from "../../../components";
import Min from "../../../components/slider/min";
import MinMax from "../../../components/slider/minmax";
import React from "react";
import styled from "styled-components";
import { useAuth } from "../../../context/user.context";

const OverflowContainer = styled.div`
  height: 470px;
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

const Width = styled.div`
  background: none;
  width: 90%;
  margin: auto;
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  z-index: 1000;
`;

const LoadingOpacity = () => {
  return <LoaderContainer className="loading"></LoaderContainer>;
};

const SettingTemplate = ({
  title,
  data,
  value,
  minMax,
  min,
  _min,
  _max,
  inches,
}) => {
  const [active, setActive] = React.useState(value);
  const [loading, setLoading] = React.useState(false);

  const { setUser, user } = useAuth();

  if (minMax) {
    return (
      <div className="px-2">
        <div className="settings-title mb-3">Edit {title}</div>
        <div>
          <MinMax _max={_max} _min={_min} inches={inches} />
        </div>
      </div>
    );
  }
  if (min) {
    return (
      <div className="px-2">
        <div className="settings-title mb-3">Edit {title}</div>
        <div>
          <Min />
        </div>
      </div>
    );
  }

  const updateProfile = () => {
    setLoading(true);

    switch (title) {
      case "Gender":
        return setTimeout(() => {
          setLoading(false);
          setUser({
            ...user,
            preferences: { ...user.preferences, gender: active },
          });
        }, 1000);

      default:
        return null;
    }
  };

  return (
    <div>
      {loading && <LoadingOpacity />}

      <div className="settings-title mb-3 px-2">Edit {title}</div>
      {/* todo */}
      <OverflowContainer>
        <Details>
          <Width>
            {data?.map((each) => {
              return (
                <button
                  className="item flex ai-center jc-space-btw mb py"
                  onClick={() => setActive(each.name)}
                >
                  <div>
                    <p className="value">{each.name}</p>
                  </div>
                  {active === each.name && <div className="selected" />}
                </button>
              );
            })}
          </Width>
        </Details>
      </OverflowContainer>
      <div className="flex ai-center jc-center save-button">
        <Button fill title="Save" onPressOne={updateProfile} />
      </div>
    </div>
  );
};

export default SettingTemplate;
