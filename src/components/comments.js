import * as React from "react";
import {
    List,
    TextField,
    EditButton,
    DateField,
    ReferenceField,
    useListContext
} from 'react-admin';
import { Card, CardActions, CardContent, CardHeader, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};
const CommentGrid = () => {
    const { ids, data, basePath } = useListContext();
    let i = 0;
    return (
        <div style={{ margin: '1em' }}>
            {ids.map(id =>
                <Card key={id} style={cardStyle}>
                    <p style={{ paddingLeft: '1em' }}>{i = i + 1}</p>
                    <CardHeader
                        title={
                            <ReferenceField basePath="/users" record={data[id]} source="user_id" reference="users">
                                <TextField source="username" />
                            </ReferenceField>
                        }
                        subheader={<DateField record={data[id]} source="timestamp" />}
                        avatar={<Avatar icon={<PersonIcon />} />}
                    />
                    <CardContent>
                        <TextField record={data[id]} source="content" />
                    </CardContent>
                    <CardActions style={{ textAlign: 'right' }}>
                        <EditButton resource="posts" basePath={basePath} record={data[id]} />
                    </CardActions>
                </Card>
            )}
        </div>
    );
};

export const CommentList = props => (
    <List title="All comment..." {...props}>
        {/* <Datagrid>
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users">
                <ChipField source="username" />
            </ReferenceField>
            <TextField source="post_id" />
            <TextField source="content" />
            <DateField source="timestamp" />

            <EditButton></EditButton>
        </Datagrid> */}
        <CommentGrid />
    </List>
);
