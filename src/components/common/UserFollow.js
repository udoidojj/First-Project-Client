import React from 'react';
import { NavLink } from 'react-router-dom';

const UserFollow = ({ data }) => {
  return (
    <div className="d-flex flex-row mb-3 pb-3 border-bottom justify-content-between align-items-center">
      <div className="pl-3 flex-fill">
        <NavLink to="#" location={{}}>
          <p className="font-weight-medium mb-0">{data.name}</p>
          <p className="text-muted mb-0 text-small">{data.status}</p>
        </NavLink>
      </div>
      <div>
        <NavLink
          className="btn btn-outline-primary btn-xs"
          to="#"
          location={{}}
        >
        </NavLink>
      </div>
    </div>
  );
};

export default UserFollow;
