import App from 'next/app'
import { AuthProvider } from '../context'

const MyApp = ({ Component, pageProps }) => (
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>
)

export default MyApp