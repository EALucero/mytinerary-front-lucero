import { useRef, useEffect } from "react";
import apiUrl from "../apiUrl";
import axios from "axios";

export default function () {
    let googleButton = useRef();
    const handleCredentialResponse = async (response) => {
        const data = { token_google: response.credential };
        const userResponse = await axios.post(apiUrl + "auth/google", data);
        console.log(userResponse);
    };
    useEffect(() => {
        if (window.google) {
            /* global google */
            google.accounts.id.initialize({
                client_id: import.meta.env.VITE_GOOGLE_ID,
                callback: handleCredentialResponse,
            });
            window.google.accounts.id.renderButton(googleButton.current, {
                theme: "filled_black",
                size: "medium",
                type: "standard",
                text: "signin_with",    //suele pasarce como argumento para sign in/up
                shape: "rectangular"
            });
        };
    }, []);
    return <div ref={googleButton}></div>;
}