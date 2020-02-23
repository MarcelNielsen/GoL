import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  height: '60px',
  lineHeight: '60px'
}

const headerWrapper = {
  height: '60px',
  position: 'relative'
}

const headerInner = {
  margin: '0 auto',
  padding: '0 15px',
  height: '100%',
  backgroundColor: '#c3b0ac'
}

const logo = {
  margin: 0,
  lineHeight: '1.5',
  display: 'inline-block',
  marginRight: 15,
  verticalAlign: 'middle'
}

export default function Header() {
  return (
    <header style={headerWrapper}>
      <div style={headerInner}>
        <h1 style={logo}>GoL</h1>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
      </div>
    </header>
  )
}
