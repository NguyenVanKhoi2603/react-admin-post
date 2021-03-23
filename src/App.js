
import './App.css';
import { Admin, Resource, fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { UserList, UserCreate, UserEdit } from './components/users';
import { PostList, PostEdit, PostCreate } from './components/posts';
import { CommentList } from './components/comments';
import { ImageList } from './components/images';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import authProvider from './components/authProvider';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import ImageIcon from '@material-ui/icons/Image';
import CommentIcon from '@material-ui/icons/Comment';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const { token } = JSON.parse(localStorage.getItem('auth'));
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider('http://localhost:3001');
const App = () => (
  <Admin catchAll={NotFound} authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} icon={UserIcon} create={UserCreate} edit={UserEdit}></Resource>
    <Resource name="posts" list={PostList} icon={PostIcon} edit={PostEdit} create={PostCreate}></Resource>
    <Resource name="comments" list={CommentList} icon={CommentIcon}></Resource>
    <Resource name="images" list={ImageList} icon={ImageIcon}></Resource>
  </Admin>
);

export default App;
