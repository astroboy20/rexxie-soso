import type { AppProps } from 'next/app'
import { Archivo } from 'next/font/google'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle,theme } from '@chakra-ui/react'

const archivo = Archivo({
  weight:['100','200','300','400','500','600','700','800','900'],
  style:['normal','italic'],
  subsets:["latin"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>   
        <main className={archivo.className}>
          <Component {...pageProps} />
        </main>     
    </ThemeProvider>
  )
  
 
}
