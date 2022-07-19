import { AppContext } from "../contexts/Context";
import { useContext } from "react";

export const useAppContext = () => {
  return useContext(AppContext);
};
