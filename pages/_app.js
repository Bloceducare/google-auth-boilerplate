import "../styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

function MyApp({ Component, pageProps }) {
    return (
        <GoogleOAuthProvider clientId="585509326929-74q3skkccqkmbtr5i64hubivlgsnq1su.apps.googleusercontent.com">
            <Component {...pageProps} />
        </GoogleOAuthProvider>
    );
}

export default MyApp;
