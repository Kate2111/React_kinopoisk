import '../shared/App.scss'
import {Routes, Route} from 'react-router-dom';
import { routes } from './appRouter';
import Header from '@/widgets/LayoutHeader/Header';


function App() {
    return (
        <>
            <Header/>
            <Routes>
                {
                    routes.map(route => 
                        <Route 
                            path={route.path} 
                            element={<route.element/>} 
                            key={route.path}
                        />
                    )
                }
            </Routes> 
        </>
    )
}

export default App
