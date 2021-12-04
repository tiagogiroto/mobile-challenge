import './ContatosCard.css';
import React, { useState, FormEvent, useEffect } from 'react';
import { useHistory  } from 'react-router'; 

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
import { render } from '@testing-library/react';
// primeiro nome, sobrenome, número de telefone e um campo para anotações
// Uma lista de contatos deve aparecer na página inicial do aplicativo, mostrando somente as informações primeiro nome e sobrenome.
// Os detalhes adicionais de um contato devem ser apresentados em uma segunda tela ou através de um modal, quando um contato é selecionado.
// O usuário do aplicativo deve ser capaz de adicionar um novo contato.
// O usuário


const Contato: React.FC = ()  => {
    
    const [dados, setDados]: any = useState([]);

    const history = useHistory();
    
        useEffect(() => {
            loadData()
        }, [dados])


        async function loadData() {
            const dadosStore = await Storage.get({key:'contato'})
            setDados(JSON.parse(dadosStore.value!))
            
        }

        const alterItem = (key: any) =>{     
            history.push("/AlterContact#" + key);
        }

        const deleteItemStorage = (key: any) =>{        

            const apps = dados;

            const removeIndex = apps.findIndex( (item: { id: number; }) => item.id === key );
            apps.splice(removeIndex, 1);

            
            // let arrayAlter = dados;
            
            // console.log(arrayAlter.delete(key))
            
            Storage.remove({key: 'contato'})

            Storage.set({key: 'contato', value: JSON.stringify(apps)})

        }

    return(
        <>
        <IonContent >
            <IonCard class='cardCss'> 
                <IonRouterOutlet>
                    <Route exact path="/AddContact">
                        <AddContact/>
                    </Route>
                </IonRouterOutlet>

                <IonList>
                    {dados.map((dado: any, i: any) =>{
                        return(
                            <IonItem class="row" key={i} >
                                        
                            <img className="img" src="https://3.bp.blogspot.com/-XG5bGlqGnJw/T9lIcssnybI/AAAAAAAADTA/B23ezXOkx8Y/s1600/Aang.jpg"/>
                            
                            <IonCardContent onClick={() => alterItem(i)} class="col-6 dadosUsuario">{dado.nome} {dado.sobrenome} </IonCardContent>

                            <IonIcon onClick={ () =>  deleteItemStorage(i) } class="col-4" icon={closeOutline} />
                        </IonItem>   
                            )
                        })
                    }
                </IonList>

            </IonCard>
        </IonContent>
        </>

    );
    
}

export default Contato;