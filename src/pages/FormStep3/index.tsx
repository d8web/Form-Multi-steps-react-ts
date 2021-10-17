/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useHistory, Link } from 'react-router-dom'
import * as C from './styles'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'

export const FormStep3 = () => {

    const history = useHistory();
    const { state, dispatch } = useForm();

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== '') {
            console.log(state)
        } else {
            alert('Prencha todos os campos!')
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    useEffect(() => {
        if(state.name === '') {
            history.push('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    }, []);

    return (
        <Theme>        
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te encontramos?</h1>
                <p>Preencha seus dados para que possamos entrar em contato.</p>

                <hr />

                <label>
                    Qual o seu email?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual o seu Github?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <div className="buttons">
                    <Link to="/step2" className='backButton'>Voltar</Link>
                    <button onClick={handleNextStep}>Finalizar Cadastro</button>
                </div>

            </C.Container>
        </Theme>
    );
}