import * as React from "react";
import { List, Datagrid, TextField, UrlField } from 'react-admin';

export const ImageList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <UrlField source="image" />
        </Datagrid>
    </List>
);