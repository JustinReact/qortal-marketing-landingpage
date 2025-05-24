"use client";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer, Zoom, Slide } from "react-toastify";
import { removeNotification } from "../../../state/features/notificationsSlice";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../../../state/store";
import { GlobalStyles } from "@mui/material";
import { oxygen } from "../../../app/fonts";

const Notification = () => {
  const dispatch = useDispatch();

  const { alertTypes } = useSelector((state: RootState) => state.notifications);

  const ToastStyles = () => (
    <GlobalStyles
      styles={{
        ".Toastify__toast": {
          fontFamily: `${oxygen.style.fontFamily} !important`,
          color: "#000000 !important",
          fontWeight: "500 !important",
          fontSize: "24px !important",
          lineHeight: "36px !important",
          borderRadius: "8px !important",
          padding: "12px 16px !important"
        }
      }}
    />
  );

  if (alertTypes.alertError) {
    toast.error(`❌ ${alertTypes?.alertError}`, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: false,
      theme: "light"
    });
    dispatch(removeNotification());
  }
  if (alertTypes.alertSuccess) {
    toast.success(`✔️ ${alertTypes?.alertSuccess}`, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: false,
      theme: "light"
    });
    dispatch(removeNotification());
  }
  if (alertTypes.alertInfo) {
    toast.info(`${alertTypes?.alertInfo}`, {
      position: "top-right",
      autoClose: 1300,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
    dispatch(removeNotification());
  }

  if (alertTypes.alertInfo) {
    return (
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{ fontSize: "16px" }}
        transition={Slide}
      />
    );
  }

  return (
    <>
      <ToastStyles />
      <ToastContainer
        transition={Zoom}
        position="bottom-right"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Notification;
