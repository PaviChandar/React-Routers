import React from 'react';
import { Routes, Route} from 'react-router-dom'
import { HomePage } from './components/HomePage'
// import { AboutPage } from './components/AboutPage'
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products'
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { NoMatch } from './components/NoMatch';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
const LazyAbout = React.lazy(() => import ('./components/AboutPage'))

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      {/* <Route path='about' element={<AboutPage />}></Route> */}
      <Route path='about' element={
      <React.Suspense fallback='Loading..'>
        <LazyAbout />
      </React.Suspense>}></Route>
      <Route path='order-summary' element={<OrderSummary />}></Route>
      <Route path='products' element={<Products />}>
        {/* <Route index element={<FeaturedProducts />} />     index routing */}
        <Route path='featured' element={<FeaturedProducts />} />
        <Route path='new' element={<NewProducts />} />
      </Route>
      <Route path='users' element={<Users />} />
      <Route path='users/:userId' element={<UserDetails />} />     
      <Route path="*" element={<NoMatch />}></Route>
    </Routes>
    </>
  );
}

export default App;
