import React from 'react';
import { Divider } from '@material-ui/core';
import RecordsHistory from './RecordsHistory';
import AddRecordView from './AddRecordView';

export const Dashboard = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col mb-5">
            <h2>Welcome</h2>
          </div>
        </div>
      </div>
      <div>
        <Divider />
      </div>
      <AddRecordView />
      <RecordsHistory />
    </>
  );
};

export default Dashboard;