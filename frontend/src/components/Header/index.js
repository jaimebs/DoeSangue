import React from 'react';

import { Container } from './style';

import Effect from '../../effect';

import Logo from './logo.png';

export default function Header(){
    return(
        <Container>
            <img className='logo' src={Logo} alt="DOE" />

            <h2>A sua doação importa</h2>
            
            <p>Até 3 vidas com 1 doação.</p>
            <p>Mais de 38.000 doações são necessárias todos os dias.</p>
            <p>Apenas 1,9% da população brasileira, doa sangue.</p>

            <button onClick={ Effect }>Quero ajudar</button>
        </Container>
    );
}