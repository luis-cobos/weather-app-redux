import React, {Component } from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';

import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import Head from './components/Head';
import './App.css';

const cities = [
  'Aguascalientes',
  'Ciudad de México',
  'Jalisco',
  'Monterrey,mx',
  'Zacatecas,mx',
];

class App extends Component {

  render() {
    return (

        <Grid>
          <Row>
                <Head/>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer 
                cities={cities} >
              </LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className="details">
                  <ForecastExtendedContainer />

                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
    );
  }
}


export default App;

