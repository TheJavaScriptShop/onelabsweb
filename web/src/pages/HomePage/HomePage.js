import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import './index.css'
import '../../index.css'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="navbar flex justify-center items-center">
        <img src="/logo_inverted.png" alt="logo" className="logoImg" />
        <p className="text-3xl logoFont text-white px-5">One Labs</p>
      </div>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
