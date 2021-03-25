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
    TabbedForm,
    FormTab,
    ReferenceManyField,
    ImageField,
    useListContext
} from 'react-admin';
import { Card, CardMedia } from '@material-ui/core';
const cardStyle = {
    width: 500,
    minHeight: 400,
    margin: '0.3em',
    display: 'inline-block',
    verticalAlign: 'top'
};
const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput multiline label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="user_id" reference="users" allowEmpty>
            <SelectInput optionText="username" />
        </ReferenceInput>
    </Filter>
);

export const PostList = props => (
    <List filters={<PostFilter />}  {...props}>
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

const ImageGrid = () => {
    const { ids, data } = useListContext();
    return (
        <div style={{ margin: '0.3em' }}>
            {ids.map(id =>

                <Card key={id} style={cardStyle}>
                    <CardMedia>
                        <ImageField style={{ width: 400, height: 300 }} basePath="/image" record={data[id]} source="image"></ImageField>
                    </CardMedia>
                </Card>
            )}
        </div>
    )
}

export const PostEdit = props => (
    <Edit title={<PostTitle />}  {...props}>
        <TabbedForm>
            <FormTab label="Edit">
                <ReferenceField label="User" source="user_id" reference="users">
                    <TextField source="username" />
                </ReferenceField>
                <TextInput source="title" />
                <TextInput source="content" />
                <TextInput disabled source="timestamp" />
            </FormTab>
            <FormTab label="Comment">
                <ReferenceManyField reference="comments" target="post_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="id" />
                        <ReferenceField source="user_id" reference="users">
                            <ChipField source="username" />
                        </ReferenceField>
                        <TextField source="post_id" />
                        <TextField source="content" />
                        <DateField source="timestamp" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="Image">
                <ReferenceManyField reference="images" target="image_id" addLabel={false}>
                    <ImageGrid />
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
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