import './ContatosCard.css';

import { IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import AddContact from './AddContact';
import { Redirect, Route } from 'react-router-dom';
import { add, key } from 'ionicons/icons';
import { Storage } from '@capacitor/storage';
import { useState, useEffect } from 'react';

//   primeiro nome, sobrenome, número de telefone e um campo para anotações
// Uma lista de contatos deve aparecer na página inicial do aplicativo, mostrando somente as informações primeiro nome e sobrenome.
// Os detalhes adicionais de um contato devem ser apresentados em uma segunda tela ou através de um modal, quando um contato é selecionado.
// O usuário do aplicativo deve ser capaz de adicionar um novo contato.
// O usuário do aplicativo deve ser capaz de remover um contato específico.
// ** storage

const salvaContatos = (chave: string, valor: string)=> {
    localStorage.setItem(chave,valor)
}

const consultar=(chave: string)=>{
    alert (localStorage.getItem(chave))
}

const apagar = (chave: string)=> {
    localStorage.removeItem(chave)
}

const teste = async () => {
    const { value }: any = await Storage.get({key:'contato'});
    console.log(JSON.parse(value))



    // const { contatosData } = await Storage.get({key:'contato'}).then((result: any) => {       
    //     console.log
    //     return result;
    // });
}

const Contatos: React.FC = () => {

    let contatosData = JSON.parse(localStorage.getItem('Contatos')!);

    const LoadDataStorage = async (): Promise<any> => {
        const { value }: any = await Storage.get({key:'contato'});
        console.log(JSON.parse(value))

            // value.map((string: any, i: any) => {
            //     return(
            //         <IonCardContent class="col">{string.nome} {string.sobrenome}</IonCardContent>
            //     )
            // })

        return JSON.parse(value);
        
    }
    useEffect(() => {
        LoadDataStorage()
        },
    [])
    
    return(
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
                                    <IonCardContent class="col">{string.nome} {string.sobrenome}</IonCardContent>   
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

    );
}

export default Contatos;

