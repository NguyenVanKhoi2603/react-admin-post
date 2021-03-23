import * as React from "react";
import { List, Datagrid, TextField, SimpleForm, Create, TextInput, ReferenceInput, PasswordInput, Edit, EditButton } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="password" />
            <EditButton></EditButton>
        </Datagrid>
    </List>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput type={PasswordInput} source="password" />
        </SimpleForm>
    </Create>
);

const UserTitle = ({ record }) => {
    return <span>UserId: {record ? `"${record.id} - username: ${record.username}"` : ''}</span>;
};

export const UserEdit = props => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="username" />
            <TextInput source="password" />
        </SimpleForm>
    </Edit>
);