import '@/styles/globals.css'
import { Provider } from 'react-redux';
import { store } from "../app/store";
import { SessionProvider } from "next-auth/react";
// import { Provider as AuthProvider } from 'next-auth/client';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}




  // return (
  //   <AuthProvider session={session}>
  //     <Component {...pageProps} />
  //   </AuthProvider>
  // );