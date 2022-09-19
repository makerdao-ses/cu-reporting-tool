import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Flex, Heading, Button, Divider } from 'theme-ui';

export default function NavigationBar() {
    const navigate = useNavigate();
    return (
        <Container>
            <Heading as="h2">MakerDAO Core Unit Reporting Tool</Heading>
            <Divider></Divider>
            <Flex variant="flex.header">
                <Flex as="nav">
                    <Button onClick={() => navigate('/')} sx={{mx: 1}}>Budget Sheets</Button>
                    <Button onClick={() => navigate('/settings')}>Settings</Button>
                </Flex>
            </Flex>
        </Container>
    );
};