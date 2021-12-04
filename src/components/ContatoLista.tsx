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
import { render } from '@testing-library/react';
// primeiro nome, sobrenome, número de telefone e um campo para anotações
// Uma lista de contatos deve aparecer na página inicial do aplicativo, mostrando somente as informações primeiro nome e sobrenome.
// Os detalhes adicionais de um contato devem ser apresentados em uma segunda tela ou através de um modal, quando um contato é selecionado.
// O usuário do aplicativo deve ser capaz de adicionar um novo contato.
// O usuário

let dados: string[];

const Contato: React.FC = () => {
    let [dados, setDados] = useState('');
    
    const [data, setData] = useState('');
    


    useEffect(() => {
        // localStorage.setItem('Contatos', JSON.stringify(itens))
        Storage.get({key:'contato'}).then((e) => {
            console.log(JSON.parse(e.value!))
        })

    }, [])

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
                    
                </IonList>

            </IonCard>
        </IonContent>
        </>

    );
    
}
export default Contato;