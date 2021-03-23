import * as React from "react";
import {
    List, Datagrid,
    TextField,
    EditButton,
    ReferenceField,
    Edit, SimpleForm,
    TextInput, SelectInput,
    ReferenceInput,
    Create,
    Filter,
    DateField,
    ChipField,
} from 'react-admin';


const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput multiline label="Search" source="content" alwaysOn />
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
            <DateField showTime source="timestamp" />
            <ReferenceField source="user_id" reference="users">
                <ChipField source="username" />
            </ReferenceField>

            <TextField source="image_id" />
            <EditButton></EditButton>
        </Datagrid>
    </List>
);
const PostTitle = ({ record }) => {
    return <span>Title: {record ? `"${record.title}"` : ''}</span>;
};
export const PostEdit = props => (
    <Edit title={<PostTitle />}  {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="user_id" reference="users">
                <SelectInput optionText="username" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput source="content" />
            <ReferenceInput source="image_id" reference="images">
                <SelectInput optionText="image" />
            </ReferenceInput>
            <TextInput disabled source="timestamp" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="user_id" reference="users">
                <SelectInput optionText="username" />
            </ReferenceInput>
            <TextInput id="outlined-basic" multiline source="title" />
            <TextInput initialValue="Lorem Ipsum" source="content" />
            <ReferenceInput source="image" reference="images">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="timestamp" />
        </SimpleForm>
    </Create>
);