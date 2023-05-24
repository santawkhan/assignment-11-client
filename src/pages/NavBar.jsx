import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import './Css/Banner.css'


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <> <li > <Link to="/"><span className='text-xl text-blue-800'>Home</span></Link></li>
        <li><Link to="/allToys"><span className='text-xl text-blue-800'>All Toys</span></Link></li>


        <li><Link to="/blogs"><span className='text-xl text-blue-800'>Blogs</span></Link></li>
        {
            user?.email ? <> <li><Link to="/addToys"><span className='text-xl text-blue-800'>Add A Toy</span></Link></li> <li><Link to="/myToys"><span className='text-xl text-blue-800'>My Toys</span></Link></li>  <img src={user?.photoURL} className='rounded-full w-12' alt="" /> <li><button onClick={handleLogout}><span className='text-xl text-blue-800' >LogOut</span></button></li> </> : <li><Link to="/login"><span className='text-xl text-blue-800'></span></Link></li>
        }



    </>
    return (
        <div>
            <div className="navbar bg-neutral-400 mt-2 rounded">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Heavenly Toys</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div >
    );
};

export default NavBar;