import React from 'react';

import {} from './dashboard.styles';

import Categories from '../../components/categories/categories.component';
import Notes from '../../components/notes/notes.component';

import {categories, notes} from '../../dummy-data';

const DashboardPage = () => {
  
  
  return (
    <div className="dashboard-page">
      <Categories categories={categories} />
      <Notes notes={notes} />
    </div>
  )
};

export default DashboardPage;