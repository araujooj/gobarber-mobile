import React from 'react';
import { Container } from './styles';
import { Image } from 'react-native';
import Logo from '../../assets/logo.png'

const SignIn: React.FC = () => {
    return (
        <Container>
            <Image source={Logo} />
        </Container>

    )
}

export default SignIn;