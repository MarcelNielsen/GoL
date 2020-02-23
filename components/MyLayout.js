import Header from './Header'

const mainStyles = {
  padding: '15px'
}
export default function Layout(props) {
  return (
    <div>
      <Header />
      <main style={mainStyles}>
      {props.children}
      </main>
    </div>
  )
}
