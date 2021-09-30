import React from 'react'
import {
    Container,
    SearchContainer,
    Input,
    SearchButton,
} from './styles'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'

export default function Home() {
    return (
        <Container>
            <Header title="React Prime" />
            <SearchContainer>

                <Input
                    placeholder="Ex: Avangers"
                    placeholderTextColor="#fff"
                />
                <SearchButton>
                    <Feather
                        name="search"
                        size={30}
                        color='#fff' />

                </SearchButton>
    

            </SearchContainer>
        </Container>
    )
}

