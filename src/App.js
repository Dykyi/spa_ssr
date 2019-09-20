import React from 'react'
import './App.scss'
import {renderRoutes} from "react-router-config";

const App = ({route}) => {
    return renderRoutes(route.routes)
};

App.defaultProps = {
   route:null
};

export default App;