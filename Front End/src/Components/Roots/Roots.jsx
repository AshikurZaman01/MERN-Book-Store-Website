import { Outlet } from 'react-router-dom';

const Roots = () => {
    return (
        <div>
            <main className='min-h-screen  max-w-screen-xl font-primary mx-auto px-4 py-6 '>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Roots;