import { number } from "prop-types";
import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    SimpleForm,
    Create,
    TextInput,
    PasswordInput,
    Edit,
    EditButton,
    Filter,
    TabbedForm,
    FormTab,
    Pagination,
    ReferenceField,
    FunctionField,
    DateField,
    ReferenceManyField,
} from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput multiline label="Search" source="q" alwaysOn />
    </Filter>
);

const UserPagination = props => <Pagination rowsPerPageOptions={[2, 5, 7, 10]} {...props} />;

export const UserList = props => {
    let Number = 0;
    console.log(props);
    return (
        <List filters={<UserFilter />} pagination={<UserPagination />} {...props}>
            <Datagrid rowClick="edit">
                <FunctionField label="STT" render={props => `${Number += 0.5}`} />
                <TextField source="id" />
                <TextField source="username" />
                <TextField source="password" />
                <EditButton></EditButton>
            </Datagrid>
        </List>
    )
};

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
const PostPagination = props => <Pagination rowsPerPageOptions={[2, 5, 10, 25]} {...props} />;
export const UserEdit = props => (
    <Edit title={<UserTitle />} {...props}>
        <TabbedForm>
            <FormTab label="Edit">
                <TextInput disabled source="id" />
                <TextInput source="username" />
                <TextInput source="password" />
            </FormTab>
            <FormTab label="Posts">
                <ReferenceManyField reference="posts" target="user_id" addLabel={false} pagination={<PostPagination />}>
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="title" />
                        <TextField source="content" />
                        <DateField showTime source="timestamp" />
                        <TextField source="image_id" />
                        <EditButton></EditButton>
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="Comment">
                <ReferenceManyField reference="comments" target="user_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="post_id" />
                        <TextField source="content" />
                        <DateField source="timestamp" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Edit>
);