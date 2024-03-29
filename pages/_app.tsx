import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle,theme } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  style:['normal','italic'],
  subsets:["latin"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer/>
        <GlobalStyle/>   
        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>     
    </ThemeProvider>
  )
  
 
}
