import './ContatosCard.css';
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
    IonCardContent,
    IonVirtualScroll
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

export default class Contatos extends React.Component {

    dadosContato: any = JSON.parse(localStorage.getItem('Contatos')!);

    constructor(props: any) {
        super(props);
        this.state = { 
        } 
        
    }

    alterarItem(key: any, data: any){

        const novo = ([{nome:'tiago',sobrenome:'neves',telefone:'321312',anotacao:'a'}]) 

        let novoArray =  this.dadosContato;
        const myArray: any = novoArray;
        myArray.splice(key,1)
        let AttArray = myArray.concat(novo)
        console.log(AttArray)
        
        localStorage.setItem('Contatos', JSON.stringify(AttArray));

    }

    deleteItemLocalStorage(key: any){        

            let novoArray =  this.dadosContato;
            const myArray: any = novoArray;
            myArray.splice(key,1)
            
            localStorage.setItem('Contatos', JSON.stringify(myArray));
            
            this.forceUpdate()
    }

    render() {
    
    return (  
        <IonContent >
          <IonCard class='cardCss'>
             <IonRouterOutlet>
                 <Route exact path="/AddContact">
                     <AddContact/>
                 </Route>
            </IonRouterOutlet>
                    <IonList>
                        {this.dadosContato.map((string: any, i: any) => {   
                            return (
                                    <IonItem class="row" key={i} >
                                        <img onClick={ () => this.alterarItem(i, string)} className="img" src="https://3.bp.blogspot.com/-XG5bGlqGnJw/T9lIcssnybI/AAAAAAAADTA/B23ezXOkx8Y/s1600/Aang.jpg"/>
                                        <IonCardContent class="col-6 dadosUsuario">{string.nome} {string.sobrenome} </IonCardContent>
                                        <IonIcon class="col-4" icon={closeOutline} onClick={ () =>  this.deleteItemLocalStorage(i) }/>
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
        </IonContent>
        );
      }
    }
    
    

