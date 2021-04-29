import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CardDeck, Card } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCard = () => {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { loading, error, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return loading
        ? <Loader /> : error
            ? <Message variant='danger'>{error}</Message>
            : (
                <>
                <h1>Bestsellers</h1>
                <CardDeck>
                    {products.map(product => (
                        <Card key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <Card.Img
                                    src={product.image}
                                    alt={product.name}
                                    variant="top" />
                                <Card.Title>
                                    {product.name}
                                </Card.Title>
                                <Card.Text>
                                    ${product.price}
                                </Card.Text>
                            </Link>
                        </Card>
                    ))}
                </CardDeck>
                </>
            )
}

export default ProductCard
