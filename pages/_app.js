import App from 'next/app'
import { AuthProvider } from '../context'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const MyApp = ({ Component, pageProps }) => (
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>
)

export default MyApp