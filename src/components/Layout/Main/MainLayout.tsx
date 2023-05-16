import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Wrapper } from './MainLayout-styles'

export interface LayoutProps {
  setTheme: (val: string) => void
}

export const MainLayoutRoute: FC<LayoutProps> = ({ setTheme }) => {
  return (
    <Wrapper>
      <Header setTheme={(val: string) => setTheme(val)} />
      <Outlet />
    </Wrapper>
  )
}
