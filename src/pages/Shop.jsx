
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import React, { useState } from 'react'
import {  Container, Row, Col } from 'reactstrap'; 
import '../styles/shop.css'
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';

const Shop = () => {

  const [productsData, setProductsData] = useState(products)
  

  const handleFilter = e => {
    
    const filterValue = e.target.value 
    if(filterValue === 'teste'){
      const filteredProducts = products.filter((item) => 
        item.category === 'teste'
        );
        setProductsData(filteredProducts);   
    }

    if(filterValue === 'games'){
      const filteredProducts = products.filter((item) => 
        item.category === 'games'
        );
        setProductsData(filteredProducts);
    }

    if(filterValue === 'streaming'){
      const filteredProducts = products.filter((item) => 
        item.category === 'streaming'
        );
        setProductsData(filteredProducts);
    }

    if(filterValue === 'apps'){
      const filteredProducts = products.filter((item) => 
        item.category === 'apps'
        );
        setProductsData(filteredProducts); 
    }
  };

  const handleSearch = e => {
    const searchTerm = e.target.value 

    const searchedProducts = products.filter(item => 
      item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

      setProductsData(searchedProducts)
  }

  return (
    <Helmet title='Shop'>
      <CommonSection title={'Search for categories...'} />

      <section>
        <Container>
          <Row>
            <Col log='3' md='3' >
              <div className="filter_widget">
                <select onClick={handleFilter}>
                  <option>Filter By Category</option>
                  <option value='teste'>Test</option>
                  <option value='games'>Games</option>
                  <option value='streaming'>Streaming</option>
                  <option value='app'>Apps</option>
                </select>
              </div>
              </Col>
          
            <Col log='3' md='3'>
            <div className="filter_widget">
                <select>
                  <option>Sort By</option>
                  <option value='ascending'>Ascending</option>
                  <option value='descending'>Descending</option>
               
                </select>
              </div>
            </Col>
            <Col lg='6' md='15'>
              <div className="search_box">
                <input type = 'text' placeholder='Search...' 
                onChange = {handleSearch}/>
                <span><i class="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt = 0'>
      <Container>
          <Row>
            {
              productsData.length === 0? <h1 className='text-center'>No products are found!</h1>
              : (
              <ProductsList data = {productsData}/>
            )}
          </Row>
      </Container>
     </section>
    </Helmet>
  );
};

export default Shop