import { LayoutStyle } from "./layout.style"

interface LayoutProps{
    children:React.ReactNode
}

const Layout = ({children}:LayoutProps) => {
  return (
    <>
        <LayoutStyle>
            {children}
        </LayoutStyle>
    </>
  )
}

export default Layout