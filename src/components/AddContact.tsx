import './AddContact.css';
import { IonButton, IonContent, IonInput, IonItem, IonList} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Storage } from '@capacitor/storage';
import { useHistory } from 'react-router';

const AddContact: React.FC = () => {
    const history = useHistory();
    const [dados, setDados]: any = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getLocalData = () =>{
        let lista = localStorage.getItem('Contatos');

        if(lista){
            return JSON.parse(localStorage.getItem('Contatos')!)
        } else {
            return []
        }
    }


    async function getData(){
        let lista = await Storage.get({key:'contato'});
        setDados(JSON.parse(lista.value!))
        
    }

    const [ nome, setNome ] = useState('');
    const [ sobrenome, setSobrenome] = useState('');
    const [ telefone, setTelefone] = useState('');
    const [ anotacao, setAnotacao ] = useState('');
    const [ itens, setItens] = useState(getLocalData());


    const salvarContato = async () => {
        let teste = ({nome, sobrenome, telefone, anotacao})
        let Dds = dados.concat(teste)
        await Storage.set({key: 'contato', value: JSON.stringify(Dds) })
        
        alert('Contato Salvo')
        history.push("/Contact");
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
                <IonInput id='telefone' value={telefone} onIonChange={(e: any) => setTelefone(e.target.value)} type='text' placeholder="Número de Telefone"></IonInput>
            </IonItem>
            <IonItem> 
                <IonInput id='anotacao' value={anotacao} onIonChange={(e: any) => setAnotacao(e.target.value)} type='text' placeholder="Anotações"></IonInput>
            </IonItem>
            <IonButton color="secondary" onClick={ () => salvarContato() } class='botaoSalvar'> Salvar Contato</IonButton>
    </IonList>

    )
}

export default AddContact; 
