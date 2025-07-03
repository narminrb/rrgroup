import clsx from 'clsx'
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from './style.module.scss'
import Logo from '../../../assets/Logo1.svg'
import Profile from '../../../assets/profile.svg'
import Exit from '../../../assets/dashboardcont.svg'
import { logout } from '@/http/auth'
import { jwtDecode } from 'jwt-decode'

const AdminSidebar = () => {
    const [loading, setLoading] = React.useState(false);

    const navigate = useNavigate();
    const handleLogout = async () => {
      
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");
      
        let email = null;
        if (accessToken) {
          try {
            const decoded = jwtDecode(accessToken);
            email = decoded?.email || decoded?.sub || decoded?.username;
          } catch (err) {
            console.error("Token decode failed:", err);
          }
        }
      
        if (!email || !refreshToken) {
          alert("Çıxış etmək mümkün olmadı. Məlumatlar tapılmadı.");
          return;
        }
      
        try {
          await logout({ email, refreshToken });
      
          // Clear all tokens
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("email");
      
          // Redirect to login page
          navigate("/login");
        } catch (err) {
          console.error("Logout failed:", err);
          alert("Çıxış zamanı xəta baş verdi.");
        }
      };
    
  return (
    <div className="admin-panel flex">
        <div className={clsx(styles.sidebar)}>
        <div className={clsx(styles.side)}>
        </div>
               <div className={clsx(styles.smth)}>
               <nav className={clsx(styles.nav)}>
                                {/* <NavLink
                    to="/admin/"
                    className={({ isActive }) =>
                        clsx(styles.items, isActive && styles.active)
                    }
                    >
                    Ana səhifə
                    </NavLink> */}
                    <NavLink
                    to="/admin/"
                    end
                    className={({ isActive }) =>
                        clsx(styles.items, isActive && styles.active)
                    }
                    >
                    Ana səhifə
                    </NavLink>

                <NavLink className={({ isActive }) => clsx(styles.items, isActive && styles.active)} to="/admin/about">Haqqımızda</NavLink>
                <NavLink className={({ isActive }) => clsx(styles.items, isActive && styles.active)} to="/admin/projects">Layihələrimiz</NavLink>
                <NavLink className={({ isActive }) => clsx(styles.items, isActive && styles.active)} to="/admin/services">Xidmətlərimiz</NavLink>
                <NavLink className={({ isActive }) => clsx(styles.items, isActive && styles.active)} to="/admin/career">Karyera</NavLink>
                <NavLink className={({ isActive }) => clsx(styles.items, isActive && styles.active)} to="/admin/ksm">KSM</NavLink>
                <NavLink className={({ isActive }) => clsx(styles.items, isActive && styles.active)} to="/admin/contact">Əlaqə</NavLink>
                <NavLink className={({ isActive }) => clsx(styles.items, isActive && styles.active)} to="/admin/news">Xəbərlər</NavLink>

                </nav>
                <div className={clsx(styles.logoedit)}>
                    <div className={clsx(styles.logo)}>
                        <Logo />
                    </div>
                    {/* <div className={clsx(styles.edit)}>
                        <div className={clsx(styles.editt)}>
                        <Edit/>
                        </div>
                    </div> */}
                </div>
                <div className={clsx(styles.exit)}>
                    <Link to="/admin/profile">
                    <div className='py-3 flex justify-center text-center items-center gap-2'>
                    <Profile/>
                    <h1>Profile</h1>
                    </div>
                    </Link>
                </div>
               <div 
            className={clsx(styles.exit)}
            onClick={handleLogout}
            role="button"
            tabIndex={0}
            aria-disabled={loading}
            style={{ cursor: loading ? "not-allowed" : "pointer" }}
            >
            <Exit />
            </div>
               </div>
              </div>
    </div>
  )
}

export default AdminSidebar