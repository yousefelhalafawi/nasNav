import React, { lazy, Suspense } from 'react';


const Products = lazy(() => import('../components/products/products'));

function Home() {
    return ( <>
<Suspense fallback={<div>Loading...............</div>}>
        <Products />
      </Suspense>    </> );
}

export default Home;