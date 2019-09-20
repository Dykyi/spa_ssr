import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Todo from './pages/Todo';

import App from './App';

export default [
    {
        component: App,
        routes: [
            {
                component:Home,
                path:'/',
                exact:true
            },
            {
                component:About,
                path:'/about',
            },
            {
                component:Todo,
                path:'/todo',
            },
            {
                component:NotFound,
            }
        ]
    }
]