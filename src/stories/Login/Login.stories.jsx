import { MockLoginProvider } from './MockLoginProvider.jsx';
import { LoginProvider } from './LoginProvider.jsx';
import Login from './Login.jsx';

export default {
    title: 'Login/LoginComponent/Login',
    component: Login,
};

export const Default = () => (
    <MockLoginProvider>
        <Login />
    </MockLoginProvider>
);

export const WithRealProvider = () => (
    <LoginProvider>
        <Login />
    </LoginProvider>
);