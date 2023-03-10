import LoadingModal from "./loading.modal";
import React from "react";

const ModalContainer = ({ loading, children }) => {
  return (
    <div>
      {loading && <LoadingModal />}
      {children}
    </div>
  );
};

export default ModalContainer;
