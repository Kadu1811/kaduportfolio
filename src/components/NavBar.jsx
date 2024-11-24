import logo from '../assets/raviKumarLogo.webp'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className='mx-2' width={50} height={33} />
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href=" "></a>
      </div>
    </nav>
  )
}

export default NavBar