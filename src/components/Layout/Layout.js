import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import StickyHeader from '../StickyHeader/StickyHeader';

const Layout = ({children}) =>
(   <>
        <Header/>
        <StickyHeader/>
            {children}
        <Footer/>
    </>
);

export default Layout;