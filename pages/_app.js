import App from 'next/app'
import { AuthProvider } from '../context'
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const MyApp = ({ Component, pageProps }) => (
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>
)

export default MyApp