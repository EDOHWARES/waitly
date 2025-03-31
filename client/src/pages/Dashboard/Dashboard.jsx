import React from 'react';
import Header from '../../components/Dashboard/Header/Header';
import SideBar from '../../components/Dashboard/SideBar/SideBar';
import {Routes, Route} from "react-router-dom";
import Waitlists from '../WaitLists/Waitlists';
import Dash from './Dash';
import Customers from '../Customers/Customers';
import BulkMessaging from '../BulkMessaging/BulkMessaging';
import ReportsAndInsights from '../Reports&Insigts/Reports&Insights';
import Settings from '../Settings/Settings';
const Dashboard = () => {
  return (
    <div>
      <div className='h-full min-h-screen'>
        <div className="row1 h-fit">
          <Header />
        </div>
        <div className="row2 mt-5 flex items-start gap-8 px-6">
          <SideBar />
          <Routes>
            <Route path='/' element={<Dash />} />
            <Route path='/waitlist' element={<Waitlists />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/bulk-messaging' element={<BulkMessaging />} />
            <Route path='/reports-and-insights' element={<ReportsAndInsights />}  />
            <Route path='/settings' element={<Settings />}   />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
