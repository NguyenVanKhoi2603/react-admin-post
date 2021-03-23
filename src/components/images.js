import * as React from "react";
import { List, Datagrid, TextField, UrlField, ImageField } from 'react-admin';

export const ImageList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <UrlField source="image" />
            <ImageField source="image" />
        </Datagrid>
    </List>
);