import React from 'react'
import Header from '../common/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../common/Footer'


function UserLayouts() {
  const location = useLocation();
  const hideHeaderRoutes = ['/wallet', '/account', '/activity', '/lottery'];

  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {/* Header (conditionally hidden) */}
      {!shouldHideHeader && <Header />}

      {/* Main content */}
      <main>
        <Outlet />
      </main>

      {/* Footer (always visible) */}
    <Footer/>
    </>
  );
}

export default UserLayouts;
