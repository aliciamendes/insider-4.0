import React from 'react'
import { Container, MenuButton, Title } from './styles'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

export default function Header({ title }) {

    const navigation = useNavigation();

    return (
        <Container>

            <MenuButton
                onPress={() => navigation.openDrawer()}
            >
                <Feather
                    name="menu"
                    size={33}
                    color='#fff'
                />
            </MenuButton>

            <Title>
                React Prime
            </Title>


        </Container>
    )
}