
import './App.css';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { UserList, UserCreate, UserEdit } from './components/users';
import { PostList, PostEdit, PostCreate, PostShow } from './components/posts';
import { CommentList, CommentEdit } from './components/comments';
import { ImageList } from './components/images';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import authProvider from './components/authProvider';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import ImageIcon from '@material-ui/icons/Image';
import CommentIcon from '@material-ui/icons/Comment';

const dataProvider = simpleRestProvider('http://localhost:3001');
const App = () => (
  <Admin catchAll={NotFound} authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} icon={UserIcon} create={UserCreate} edit={UserEdit}></Resource>
    <Resource name="posts" show={PostShow} list={PostList} icon={PostIcon} edit={PostEdit} create={PostCreate}></Resource>
    <Resource name="comments" list={CommentList} icon={CommentIcon} edit={CommentEdit}></Resource>
    <Resource name="images" list={ImageList} icon={ImageIcon}></Resource>
  </Admin>
);

export default App;
