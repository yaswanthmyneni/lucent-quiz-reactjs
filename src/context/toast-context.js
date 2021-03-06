import { createContext, useContext, useReducer } from "react";

const ToastContext = createContext();
const useToastContext = () => useContext(ToastContext);

const toastReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TOAST":
      return { ...state, toastList: [...state.toastList, payload] };
    case "REMOVE_TOAST":
      return { ...state, toastList: payload };
    default:
      return state;
  }
};

const ToastProvider = ({ children }) => {
  const [toastState, toastDispatch] = useReducer(toastReducer, {
    toastList: [],
  });

  const getUniqueNumber = () => {
    return Math.floor(Math.random() * 100001);
  };

  const value = { toastState, toastDispatch, getUniqueNumber };
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export { useToastContext, ToastProvider };
