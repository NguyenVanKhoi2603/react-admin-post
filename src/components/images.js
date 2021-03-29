import * as React from "react";
import { List, ImageField, useListContext } from 'react-admin';

import { Card, CardMedia } from '@material-ui/core';
const cardStyle = {
    width: 350,
    minHeight: 250,
    margin: '0.3em',
    display: 'inline-block',
    verticalAlign: 'top'
};

const ImageGrid = () => {
    const { ids, data } = useListContext();
    return (
        <div style={{ margin: '0.3em' }}>
            {ids.map(id =>
                <Card key={id} style={cardStyle}>
                    <CardMedia>
                        <ImageField basePath="/image" record={data[id]} source="image"></ImageField>
                    </CardMedia>
                    {/* <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                <TextField record={data[id]} source="id"></TextField>
                            </Typography>
                        </CardContent>
                    </CardActionArea> */}
                </Card>
            )}
        </div>
    )
}

export const ImageList = props => (
    <List {...props}>
        {/* <Datagrid rowClick="edit">
            <TextField source="id" />
            <UrlField source="image" />
            <ImageField source="image" />
        </Datagrid> */}
        <ImageGrid></ImageGrid>
    </List>
);