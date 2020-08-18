import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import { Card, CardHeader } from 'reactstrap';

import './App.css';

function Home() {

  return (
    <>
    <Card style={{ width: '40%', textAlign: 'center', margin: '5%', marginLeft: '32%', fontSize: '35px', fontWeight: 'bolder', color: '#471204', background: 'transparent', border: 'none' }} >
        <CardHeader style={{ background: 'transparent', border: 'none' }} >
          Welcome to my Family Recipe Website
        </CardHeader>
    </Card>

    
    </>
  );
}

export default Home;
