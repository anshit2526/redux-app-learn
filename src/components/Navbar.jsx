import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Bank of Anshit</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/about'>About</a>
                        </li>
                    </ul>
                    <button className="btn btn-primary btn-sm">Your balance: 100000</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar