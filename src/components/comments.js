import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    ReferenceField,
    ChipField,
    DateField

} from 'react-admin';
//import { Card, CardActions, CardContent, CardHeader, Avatar } from '@material-ui/core';
//import PersonIcon from '@material-ui/icons/Person';
// const cardStyle = {
//     width: 300,
//     minHeight: 300,
//     margin: '0.5em',
//     display: 'inline-block',
//     verticalAlign: 'top'
// };
// const CommentGrid = () => {
//     const { ids, data, basePath } = useListContext();
//     return (
//         <div style={{ margin: '1em' }}>
//             {ids.map(id =>
//                 <Card key={id} style={cardStyle}>
//                     <CardHeader
//                         title={
//                             <TextField record={data[id]} source="user_id" />
//                             // <ReferenceField record={data[id]} source="user_id" reference="users">
//                             //     <TextField source="username" />
//                             // </ReferenceField>

//                         }
//                         subheader={<DateField record={data[id]} source="timestamp" />}
//                         avatar={<Avatar icon={<PersonIcon />} />}
//                     />
//                     <CardContent>
//                         <TextField record={data[id]} source="content" />
//                     </CardContent>
//                     {/* <CardContent>
//                         about&nbsp;
//                     <ReferenceField label="Post" resource="comments" record={data[id]} source="post_id" reference="post" basePath={basePath}>
//                             <TextField source="content" />
//                         </ReferenceField>
//                     </CardContent> */}
//                     <CardActions style={{ textAlign: 'right' }}>
//                         <EditButton resource="id" basePath={basePath} record={data[id]} />
//                     </CardActions>
//                 </Card>
//             )}
//         </div>
//     );
// };


export const CommentList = props => (
    <List title="All comment..." {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users">
                <ChipField source="username" />
            </ReferenceField>
            <TextField source="post_id" />
            <TextField source="content" />
            <DateField source="timestamp" />

            <EditButton></EditButton>
        </Datagrid>

    </List>
);
