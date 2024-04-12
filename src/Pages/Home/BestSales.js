import React from 'react'
import { PlusCircle } from 'react-feather';
import { Products } from '../../Assets/products';
import "./BestSales.css"
import { LiaStarSolid } from 'react-icons/lia';
const BestSales = () => {
  const specificIds = ['01', '02', '03', '26', '04', '05', '06', '27',];
  return (
    <>
      <div>
        <h2>Best Sales</h2>
      </div>
      <div className='container'>
        <div className='row '>
          {Products.map((product) => (
            specificIds.includes(product.id) && ( // Only render if the product ID is in specificIds
              <div className='col-md-4 my-3' key={product.id}>
                <div className='card'>
                  <img src={product.imgUrl} alt={product.productName} />
                  <p>{product.productName}</p>
                  <section>
                    <LiaStarSolid style={{ color: 'rgb(241 194 74)' }} />
                    <LiaStarSolid style={{ color: 'rgb(241 194 74)' }} />
                    <LiaStarSolid style={{ color: 'rgb(241 194 74)' }} />
                    <LiaStarSolid style={{ color: 'rgb(241 194 74)' }} />
                    <LiaStarSolid style={{ color: 'rgb(241 194 74)' }} />
                  </section>
                  <h2>${product.price}</h2>
                  <button className="position-absolute bottom-0 end-0 className='btn'">
                    <PlusCircle />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </>
  )
}

export default BestSales
