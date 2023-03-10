import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { useAuth } from "../../context/user.context";
const Progress = () => {
  const { progress } = useAuth();
  return (
    <div className="mt-2">
      <ProgressBar
        isLabelVisible={false}
        completed={progress}
        height={6}
        bgColor="#B50D0D"
      />
    </div>
  );
};

export default Progress;
