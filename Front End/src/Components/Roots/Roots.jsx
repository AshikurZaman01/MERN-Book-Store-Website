import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='min-h-screen  max-w-screen-xl font-primary mx-auto px-4 py-2 '>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Roots;