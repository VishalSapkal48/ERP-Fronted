import React from 'react';
import NavBar from '../Components/Account/AccountPage/NavBar';
import SideBar from '../Components/Account/AccountPage/SideBar';
import AccountRoutes from '../Routes/AccountRoutes';

function AccountLayout() {
  return ( <div className="flex flex-1 overflow-hidden">
        <SideBar />
     <div className="flex-1 flex flex-col ml-64">
      <NavBar />
     
        <main className="flex-1 overflow-y-auto p-6">
          <AccountRoutes />
        </main>
      </div>
    </div>
  );
}

export default AccountLayout;