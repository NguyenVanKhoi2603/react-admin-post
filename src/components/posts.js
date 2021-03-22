import * as React from "react";
import { List, Datagrid, TextField, EditButton, ReferenceField, Edit, SimpleForm, TextInput, SelectInput, ReferenceInput, Create, Filter } from 'react-admin';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="user_id" reference="users" allowEmpty>
            <SelectInput optionText="username" />
        </ReferenceInput>
    </Filter>
);

export const PostList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="content" />
            <TextField source="timestamp" />
            <ReferenceField source="user_id" reference="users">
                <TextField source="username" />
            </ReferenceField>

            <TextField source="image_id" />
            <EditButton></EditButton>
        </Datagrid>
    </List>
);
const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};
export const PostEdit = props => (
    <Edit title={PostTitle} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="user_id" reference="users">
                <SelectInput optionText="username" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput source="content" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="user_id" reference="users">
                <SelectInput optionText="username" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="content" />
            <ReferenceInput source="image" reference="images">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="timestamp" />
        </SimpleForm>
    </Create>
);