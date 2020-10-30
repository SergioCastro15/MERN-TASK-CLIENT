import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NuevaCuenta } from './components/auth/NuevaCuenta';
import { Login } from './components/auth/Login';
import { Proyectos } from './components/proyectos/Proyectos';
import { ProyectoState } from './context/proyectos/ProyectoState';
import { TareasState } from './context/tareas/TareasState';

function App() {
  return (
    <ProyectoState>
      <TareasState>
        <Router>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/nueva-cuenta' component={NuevaCuenta}/>
            <Route exact path='/proyectos' component={Proyectos}/>
          </Switch>
        </Router>
      </TareasState>
    </ProyectoState>
  );
}

export default App;
