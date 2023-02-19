interface _appProps {}
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import 'styles/index.css';
const App: React.FC<_appProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
