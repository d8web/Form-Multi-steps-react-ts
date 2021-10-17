/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useHistory, Link } from 'react-router-dom'
import * as C from './styles'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { SelectOption } from '../../components/SelectOption'
import { ChangeEvent, useEffect } from 'react'

export const FormStep2 = () => {

    const history = useHistory();
    const { state, dispatch } = useForm()

    const handleNextStep = () => {
        if(state.name !== '') {
            history.push('/step3')
        } else {
            alert('Preencha os dados!')
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    useEffect(() => {
        if(state.name === '') {
            history.push('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    }, [])

    return (
        <Theme>        
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar a menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Sou programador"
                    description="Já programo a 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <div className="buttons">
                    <Link className='backButton' to="/">Voltar</Link>
                    <button onClick={handleNextStep}>PRÓXIMO</button>
                </div>
            </C.Container>
        </Theme>
    )
}