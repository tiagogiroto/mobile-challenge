import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { add, ellipse, square, triangle } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import AddContact from './components/AddContact';
import Contatos from './components/ContatosCard';
import { Storage } from '@capacitor/storage';
import React,{ useEffect, useState } from 'react';
import AlterContact from './components/AlterContact';
import Contato from './components/ContatoLista';

const contatos: any = [
  {
    nome: 'CONTATO TESTE',
    sobrenome: 'TESTE',
    telefone: '123456',
    anotacao: 'teste '
  }, 
  {
    nome: 'CONTATO 2',
    sobrenome: 'TESTdsadasE',
    telefone: '123456',
    anotacao: '5555555555 '
  }, 
]

localStorage.setItem('Contatos', JSON.stringify(contatos));

Storage.set({key: 'contato', value: JSON.stringify(contatos)})

const App: React.FC = () => {

  useEffect(() => {

}, [])

  return (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet class='container'>
          <Route exact path="/">
            <Contato />
          </Route>        
          <Route exact path="/AddContact">
            <AddContact/>
          </Route>
     </IonRouterOutlet>
      {/* */} 
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Contact">
            <Contato />
          </Route>        
          <Route exact path="/AddContact">
            <AddContact/>
          </Route>
          <Route exact path="/AlterContact">
            <AlterContact/>
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
           <IonTabButton tab="Contact" href="/Contact">
            <IonIcon icon={triangle} />
            <IonLabel>Contatos</IonLabel>
          </IonTabButton> 
          <IonTabButton tab="AddContact" href="/AddContact">
            <IonIcon icon={add} />
            <IonLabel>Adicionar Contato</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs> 
      {/* */}
    </IonReactRouter>
  </IonApp>
  )
};



export default App;
