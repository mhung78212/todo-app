import { toast } from "react-toastify";

export const toastSuccess = (handle) => {
    toast.success(`${handle} todo success`, {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
};
export const HANDLENAME = Object.freeze({
    ADD: 'ADD',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',    
    COMPLETE: 'COMPLETE',    
});

