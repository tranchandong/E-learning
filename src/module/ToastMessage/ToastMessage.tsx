import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastMessage = () => {
   const toastClone = {
      error: (message: string) => toast(message, { type: "error" }),
      success: (message: string) => toast(message, { type: "success" }),
      infor: (message: string) => toast(message, { type: "info" }),
   };
   Object.assign(message, toastClone);
   return (
      <div>
         <ToastContainer position="top-right" />
      </div>
   );
};

export const message = {};