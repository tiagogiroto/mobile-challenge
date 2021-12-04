import './AlterContact.css';
import { IonButton, IonContent, IonInput, IonItem, IonList} from '@ionic/react';
import React, { useEffect, useState } from 'react';


const AlterContact: React.FC = () => {

    let dadosContato = JSON.parse(localStorage.getItem('Contatos')!);


    const [ nome, setNome ] = useState('');
    const [ sobrenome, setSobrenome] = useState('');
    const [ telefone, setTelefone] = useState('');
    const [ anotacao, setAnotacao ] = useState('');

    const alterarContato = () => {
        const key = window.location.href.split('#')[1];
        const novo: any = ([{nome, sobrenome, telefone, anotacao}]);


        // bloco errado, ao ativat o window.location.href a aplicaçao reinicia, gerando novamente os dados mockados
        const myArray: any = dadosContato.splice(key);
        let AttArray = myArray.concat(novo)
        localStorage.setItem('Contatos', JSON.stringify(AttArray));

        alert('Contato Alterado')

        window.location.href = "/Contact";
    }

    const loadData = () =>{
        const key = window.location.href.split('#')[1];

        const dataLoader = dadosContato.splice(key, 1)

        dataLoader.map((string: any) => { 
            setNome(string.nome)
            setSobrenome(string.sobrenome)
            setAnotacao(string.anotacao)
            setTelefone(string.telefone.toString())
        })

    }

    useEffect(() => {
        loadData()
    }, [])


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
