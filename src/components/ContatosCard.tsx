import './ContatosCard.css';

// import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
// import AddContact from './AddContact';
// import { add, key } from 'ionicons/icons';
// import { useState, useEffect, FormEvent } from 'react';
// import React from 'react';

import React, { useState, FormEvent, useEffect } from 'react';

import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonCard,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonCardContent
} from "@ionic/react";

import { Storage } from '@capacitor/storage';
import { Redirect, Route } from 'react-router-dom';
import AddContact from './AddContact';
import { add, closeOutline } from 'ionicons/icons';

//   primeiro nome, sobrenome, número de telefone e um campo para anotações
// Uma lista de contatos deve aparecer na página inicial do aplicativo, mostrando somente as informações primeiro nome e sobrenome.
// Os detalhes adicionais de um contato devem ser apresentados em uma segunda tela ou através de um modal, quando um contato é selecionado.
// O usuário do aplicativo deve ser capaz de adicionar um novo contato.
// O usuário do aplicativo deve ser capaz de remover um contato específico.
// ** storage

// let dataStore: any;

// const salvaContatos = (chave: string, valor: string)=> {
//     localStorage.setItem(chave,valor)
// }

// const consultar=(chave: string)=>{
//     alert (localStorage.getItem(chave))
// }

// const apagar = (chave: string)=> {
//     localStorage.removeItem(chave)
// }

// const teste = async () => {
//     const { value }: any = await Storage.get({key:'contato'});
//     console.log(JSON.parse(value))

//     // const { contatosData } = await Storage.get({key:'contato'}).then((result: any) => {       
//     //     console.log
//     //     return result;
//     // });
// }

// dataStore = async function get(key: string): Promise<any> {

//     const { value }: any = await Storage.get({key:'contato'});

//     // const item: any = await Storage.get({ key: 'contatos' });
//     console.log(JSON.parse(value))
//     // console.log(JSON.parse(item))

//     return JSON.parse(value);
// }

// const Contatos: React.FC = () => {

    

//     let contatosData = JSON.parse(localStorage.getItem('Contatos')!);
    
//     const LoadDataStorage = async (): Promise<any> => {
        
//         const { value }: any = await Storage.get({key:'contato'});
        
//         console.log(JSON.parse(value))
//         return JSON.parse(value);
        
//     }
//     useEffect(() => {
//         LoadDataStorage()
//         // dataStore()
//         // dataStore()
//         // console.log(localDataContatos)
//         // let dataStore: any= Storage.get({key:'contato'})
//         // const a = JSON.parse(dataStore)
//         // console.log(a)
//         },
//     [])

//     return(
//         <IonCard class="container">
//             <IonRouterOutlet>
//                 <Route exact path="/AddContact">
//                     <AddContact/>
//                 </Route>
//             </IonRouterOutlet>
//                 <IonList>   
//                     {contatosData.map((string: any, i: any) => {   
//                         return (
//                                 <IonItem class="row" key={i}>
//                                     <img className="img" src="https://3.bp.blogspot.com/-XG5bGlqGnJw/T9lIcssnybI/AAAAAAAADTA/B23ezXOkx8Y/s1600/Aang.jpg"/>
//                                     <IonCardContent class="col">{string.nome} {string.sobrenome}</IonCardContent>   
//                                 </IonItem> 
//                         );
//                     })}
//                     </IonList>

//                 <IonTabBar slot="bottom">
//                     <IonTabButton tab="AddContact" href="/AddContact">
//                         <IonIcon icon={add} />
//                         <IonLabel>Adicionar Contato</IonLabel>
//                     </IonTabButton>
//                 </IonTabBar>
//         </IonCard>  

//     );
// }



// const aerd = () =>{
//     const [ name, setName ] = useState('Max');

//   return (
//   <>
//     <h1>My name is {name}</h1>
//     <IonInput value={name} onIonChange={(e) => setName('e.target.value')} />
//   </>
//   )
// }



export default class Contatos extends React.Component { 
    
    constructor(props: any) {
        super(props);
        this.state = { } 
    }
 
    teste = () => {
        const { value }: any = Storage.get({key:'contato'});
        console.log(value)
        // const a = JSON.parse(value).map((a: any, i:any) =>{
        // const { value }: any = Storage.get({key:'contato'});
            return (
                <h1>teste</h1>
            ); 
        // })
    } 

    deleteItem(key: any){
        
        let contatosData = JSON.parse(localStorage.getItem('Contatos')!);

        let novoArray ;

        console.log(novoArray)
    }
    
    LoadDataStorage = async (): Promise<any> => {
        const { value }: any = await Storage.get({key:'contato'});
        return(
            <h1>teste</h1>
        );
    }
    
    render() {
    // this.LoadDataStorage()

    let contatosData = JSON.parse(localStorage.getItem('Contatos')!);
    // console.log(contatosData)
    this.teste()
        return (
    <React.Fragment>
        <>
          <IonCard class="container">
             <IonRouterOutlet>
                 <Route exact path="/AddContact">
                     <AddContact/>
                 </Route>
            </IonRouterOutlet>
                <IonList>
                     {contatosData.map((string: any, i: any) => {   
                         return (
                                 <IonItem class="row" key={i}>
                                     <img className="img" src="https://3.bp.blogspot.com/-XG5bGlqGnJw/T9lIcssnybI/AAAAAAAADTA/B23ezXOkx8Y/s1600/Aang.jpg"/>
                                     <IonCardContent class="col">{string.nome} {string.sobrenome} </IonCardContent>
                                     <IonIcon icon={closeOutline} onClick={ () =>  this.deleteItem(i) }/>
                                 </IonItem> 
                         );
                     })}
                </IonList>
                <IonTabBar slot="bottom">
                     <IonTabButton tab="AddContact" href="/AddContact">
                         <IonIcon icon={add} />
                         <IonLabel>Adicionar Contato</IonLabel>
                     </IonTabButton>
                 </IonTabBar>
         </IonCard>
        </> 
    </React.Fragment>
        );
      }
    }
    
    

