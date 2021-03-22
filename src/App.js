
import './App.css';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { UserList } from './components/users';
import { PostList, PostEdit, PostCreate } from './components/posts';
import { CommentList } from './components/comments';
import { ImageList } from './components/images';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import ImageIcon from '@material-ui/icons/Image';
import CommentIcon from '@material-ui/icons/Comment';

const App = () => (
  <Admin catchAll={NotFound} dashboard={Dashboard} dataProvider={simpleRestProvider('http://localhost:3001')}>
    <Resource name="users" list={UserList} icon={UserIcon}></Resource>
    <Resource name="posts" list={PostList} icon={PostIcon} edit={PostEdit} create={PostCreate}></Resource>
    <Resource name="comments" list={CommentList} icon={CommentIcon}></Resource>
    <Resource name="images" list={ImageList} icon={ImageIcon}></Resource>
  </Admin>
);

export default App;
