import Header from './Header'

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
type LayoutProps = {
    children: string | JSX.Element | JSX.Element[];
  }