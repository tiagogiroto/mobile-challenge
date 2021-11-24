import './AddContact.css';
import { IonButton, IonContent, IonInput, IonItem, IonList} from '@ionic/react';
import React, { useEffect, useState } from 'react';


const AddContact: React.FC = () => {

    const getLocalData = () =>{
        let lista = localStorage.getItem('Contatos');

        if(lista){
            return JSON.parse(localStorage.getItem('Contatos')!)
        } else {
            return []
        }
    }

    const [ nome, setNome ] = useState('');
    const [ sobrenome, setSobrenome] = useState('');
    const [ telefone, setTelefone] = useState('');
    const [ anotacao, setAnotacao ] = useState('');
    const [ itens, setItens] = useState(getLocalData());


    const salvarContato = () => {
        setItens([...itens, {nome, sobrenome, telefone, anotacao}])
        
        
        alert('Contato Salvo')
    }

    useEffect(() => {
        localStorage.setItem('Contatos', JSON.stringify(itens))
    }, [itens])


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
            <IonButton color="secondary" onClick={ () => salvarContato() } class='botaoSalvar'> Salvar Contato</IonButton>
    </IonList>

    )
}

export default AddContact; 
