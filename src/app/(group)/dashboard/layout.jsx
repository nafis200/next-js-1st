import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <div className='bg-green-400 p-4'>
                Dashboard layout
            </div>
              {children}
            <footer>
                Dashboard footer
            </footer>
        </div>
    );
};

export default layout;