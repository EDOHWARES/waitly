import React from 'react';
import Header from '../../components/Dashboard/Header/Header';
import SideBar from '../../components/Dashboard/SideBar/SideBar';

const Dashboard = () => {
  return (
    <div>
      <div className='h-full min-h-screen'>
        <div className="row1 h-fit">
          <Header />
        </div>
        <div className="row2 min-h-[80vh] mt-5 w-fit px-6">
          <SideBar />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
