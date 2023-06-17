import React from 'react';
import {Box, Heading, Button, List, ListItem} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

const HomePage: React.FC = () => {
    // ここでは、プロジェクトのリストはハードコードされたデータを使用します。
    // 本番環境では、このデータはAPIから取得するか、Reduxや他の状態管理ライブラリを通じて提供されるべきです。
    const projects = [
        {id: 1, name: 'Project 1', progress: 'In progress'},
        // ...
    ];

    return (
        <Box p={5}>
            <Heading mb={5}>あなたのハウツー本をAIと一緒に作成しましょう</Heading>
            <Button as={Link} to="/new-project" colorScheme="blue" mb={5}>新しいプロジェクトを始める</Button>
            <Heading size="md" mb={3}>既存のプロジェクト:</Heading>
            <List spacing={3}>
                {projects.map((project) => (
                    <ListItem key={project.id}>
                        <Link to={`/project/${project.id}`}>{project.name} ({project.progress})</Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default HomePage;
