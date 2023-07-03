import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/routes'
import { ProductIds } from '../utils/productIds'
import { PRODUCT_IDS_TO_NAMES } from '../utils/productNames'

const HomePage: React.FC = () => {
    return (
        <>
            <h1>Welcome to Getsafe's Insurance Services</h1>
            <p>INSURANCE MADE EASY</p>
            <div>
                <Link to={ROUTES.INSURANCE.DEVELOPER_INSURANCE}>
                    {PRODUCT_IDS_TO_NAMES[ProductIds.DeveloperInsurance]}
                </Link>
            </div>
            <br />
            <div>
                <Link to={ROUTES.INSURANCE.DESIGNER_INSURANCE}>
                    {PRODUCT_IDS_TO_NAMES[ProductIds.DesignerInsurance]}
                </Link>
            </div>
        </>
    )
}

export default HomePage
