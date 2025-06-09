import clsx from 'clsx'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './style.module.scss'
import Logo from '../../../assets/Logo1.svg'
import Edit from '../../../assets/edit.svg'
import Exit from '../../../assets/dashboardcont.svg'

const AdminSidebar = () => {
  return (
    <div className="admin-panel flex">
        <div className={clsx(styles.sidebar)}>
        <div className={clsx(styles.side)}>
        </div>
               <div className={clsx(styles.smth)}>
               <nav className={clsx(styles.nav)}>
                                <NavLink
                    to="/rrgroup/admin/"
                    className={({ isActive }) =>
                        clsx(styles.items, isActive && styles.active)
                    }
                    >
                    Ana səhifə
                    </NavLink>

                <NavLink className={({ isActive }) => clsx(styles.items, isActive && styles.active)} to="/rrgroup/admin/about">Haqqımızda</NavLink>
                <NavLink className={({ isActive }) => clsx(styles.items, isActive && styles.active)} to="/rrgroup/admin/projects">Layihələrimiz</NavLink>
                <NavLink className={({ isActive }) => clsx(styles.items, isActive && styles.active)} to="/rrgroup/admin/services">Xidmətlərimiz</NavLink>
                <NavLink className={({ isActive }) => clsx(styles.items, isActive && styles.active)} to="/rrgroup/admin/career">Karyera</NavLink>
                <NavLink className={({ isActive }) => clsx(styles.items, isActive && styles.active)} to="/rrgroup/admin/ksm">KSM</NavLink>
                <NavLink className={({ isActive }) => clsx(styles.items, isActive && styles.active)} to="/rrgroup/admin/contact">Əlaqə</NavLink>
                <NavLink className={({ isActive }) => clsx(styles.items, isActive && styles.active)} to="/rrgroup/admin/news">Xəbərlər</NavLink>

                </nav>
                <div className={clsx(styles.logoedit)}>
                    <div className={clsx(styles.logo)}>
                        <Logo />
                    </div>
                    <div className={clsx(styles.edit)}>
                        <div className={clsx(styles.editt)}>
                        <Edit/>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.exit)}>
                        <Exit />
                </div>
               </div>
              </div>
    </div>
  )
}

export default AdminSidebar