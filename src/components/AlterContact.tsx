import './AlterContact.css';
import { IonButton, IonContent, IonInput, IonItem, IonList} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Storage } from '@capacitor/storage';

const AlterContact: React.FC = () => {

    // let dadosContato = JSON.parse(localStorage.getItem('Contatos')!);
    const [ item, setItem ]: any = useState([]);
    
    const history = useHistory();

    const [ nome, setNome ] = useState('');
    const [ sobrenome, setSobrenome] = useState('');
    const [ telefone, setTelefone] = useState('');
    const [ anotacao, setAnotacao ] = useState('');


    useEffect(() => {
        loadData()

    }, [])

    const alterarContato = async () => {
        const key = window.location.href.split('#')[1];
        const novo: any = ([{nome, sobrenome, telefone, anotacao}]);
        const dadosStore = await Storage.get({key:'contato'})
        const myArray = JSON.parse(dadosStore.value!)

        let t = myArray.splice(key, 1)

        let AttArray = myArray.concat(novo)

        Storage.remove({key: 'contato'})

        Storage.set({key: 'contato', value: JSON.stringify(AttArray)})
       
        // localStorage.setItem('Contatos', JSON.stringify(AttArray));

        // Storage.set({key: 'contato', value: JSON.stringify(AttArray)})

        alert('Contato Alterado')

        history.push('/Contact');
    }

    async function loadData(){
        const key = window.location.href.split('#')[1];
        const dadosStore = await Storage.get({key:'contato'})

        let dados = JSON.parse(dadosStore.value!)
        let dataLoader = dados.splice(key, 1)

        dataLoader.map((string: any) => { 
            setNome(string.nome)
            setSobrenome(string.sobrenome)
            setAnotacao(string.anotacao)
            setTelefone(string.telefone.toString())
        })


    }

    return( 
    <IonList class="pageContato">
         <IonItem class="colorItem"> 
                <IonInput id='nome' type='text' value={nome} onIonChange={(e: any) => setNome(e.target.value)} placeholder="Nome"></IonInput>
            </IonItem>
            <IonItem> 
                <IonInput id='sobrenome' value={sobrenome} onIonChange={(e: any) => setSobrenome(e.target.value)} type='text' placeholder="Sobrenome"></IonInput>
            </IonItem>
            <IonItem> 
                <IonInput id='telefone' value={telefone} onIonChange={(e: any) => setTelefone(e.target.value)} type='number' placeholder="Número de Telefone"></IonInput>
            </IonItem>
            <IonItem> 
                <IonInput id='anotacao' value={anotacao} onIonChange={(e: any) => setAnotacao(e.target.value)} type='text' placeholder="Anotações"></IonInput>
            </IonItem>
            <IonButton color="secondary" onClick={ () => alterarContato() } class='botaoSalvar'>Alterar Contato</IonButton>
    </IonList>

    )
}

export default AlterContact; 
