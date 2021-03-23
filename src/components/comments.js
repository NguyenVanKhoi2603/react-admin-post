import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    ReferenceField
} from 'react-admin';

export const CommentList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users">
                <TextField source="username" />
            </ReferenceField>
            <TextField source="post_id" />
            <TextField source="content" />
            <TextField source="timestamp" />

            <EditButton></EditButton>
        </Datagrid>
    </List>
);
