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
// primeiro nome, sobrenome, número de telefone e um campo para anotações
// Uma lista de contatos deve aparecer na página inicial do aplicativo, mostrando somente as informações primeiro nome e sobrenome.
// Os detalhes adicionais de um contato devem ser apresentados em uma segunda tela ou através de um modal, quando um contato é selecionado.
// O usuário do aplicativo deve ser capaz de adicionar um novo contato.
// O usuário do aplicativo deve ser capaz de remover um contato específico.
// storage

let dadosContato: any = JSON.parse(localStorage.getItem('Contatos')!);

let dadosContatoStorage: any;

const deleteItemLocalStorage = async (key: any) =>{        

        let novoArray =  dadosContato;
        const myArray: any = novoArray;
        myArray.splice(key,1)
            
        localStorage.setItem('Contatos', JSON.stringify(myArray));

        await Storage.remove({key:'contato'})
            
        // this.forceUpdate()

}
let a = Storage.get({key:'contato' })

const deleteItemStorage = async (key: any): Promise<any> =>{        

    return Storage.get({key:'contato'}).then((contato) =>{
        // for (let i of contatos){
        //     console.log(i)
        // }
    })

}

const alterItem = (key: any) =>{     
    window.location.href = "/AlterContact#" + key;
}

const carregarDados = async () => {
    let teste = await Storage.get({key: 'contato'})
    console.log(JSON.parse(teste.value!))

}
const carregarStorage = async (): Promise<any> =>{
    Storage.get({key:'contato' })
}

const carregar = (): any => {
    let a = Storage.get({key:'contato' })
    a.then((e) =>{
        console.log(JSON.parse(e.value!))
    })

}


const Contatos = (): JSX.Element => {

    var [ dados, setDados ] = useState([]);

    useEffect(() => {
        Storage.get({key:'contato' }).then((e) =>{
            dados = JSON.parse(e.value!)
        })
        
    }, [])
    


    const renderData = (dados: any[]) => {
        return dados.map((item, idx) => {
          return (
            <div key={idx}>
              <p>{item.nome}</p>
              <hr />
            </div>
          );
        });
      };



    console.log(Storage.get({key: 'contato'}).then((e) =>{ return JSON.parse(e.value!)}))
    return ( 
        <IonContent >
          <IonCard class='cardCss'> 
            <IonRouterOutlet>
                 <Route exact path="/AddContact">
                     <AddContact/>
                 </Route>
            </IonRouterOutlet>
                        <IonList>
                        
                        {dadosContato.map((string: any, i: any) => {   
                            return (
                                    <IonItem class="row" key={i} >
                                        
                                        <img className="img" src="https://3.bp.blogspot.com/-XG5bGlqGnJw/T9lIcssnybI/AAAAAAAADTA/B23ezXOkx8Y/s1600/Aang.jpg"/>
                                        
                                        {/* onClick={() => this.alterItem(i)}  */}
                                        
                                        <IonCardContent onClick={() => alterItem(i)} class="col-6 dadosUsuario">{string.nome} {string.sobrenome} </IonCardContent>
                                        
                                        <IonIcon class="col-4" icon={closeOutline} onClick={ () =>  deleteItemLocalStorage(i) }/>
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
    
export default Contatos;