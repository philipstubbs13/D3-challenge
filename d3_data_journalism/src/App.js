import React, { useEffect } from 'react';
import './css/d3Style.css';
import './css/style.css';
import { drawScatterPlot } from './js/app.js';
import csvData from './data/data.csv';

function App() {

  useEffect(() => {
    drawScatterPlot(csvData);
  }, [])
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-12 d-flex justify-content-center mt-5">
          <h1>D3 Data Journalism</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12  col-md-9 mt-5">
          <div id="scatter">
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-xs-12  col-md-9 mt-4">
          <div className="article">
            <h2 className="mb-3">Correlations Discovered Between Health Risks and Age, Income</h2>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
              quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
              ultricies mi vitae est. Mauris placerat eleifend leo.</p>

            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
              quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
              ultricies mi vitae est. Mauris placerat eleifend leo.</p>

            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
              quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
              ultricies mi vitae est. Mauris placerat eleifend leo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
