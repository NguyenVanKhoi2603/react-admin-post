import * as React from "react";
import { List, Datagrid, TextField, } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="password" />

        </Datagrid>
    </List>
);