import React from 'react'
import { ProductIds } from '../../utils/productIds'
import { PRODUCT_IDS_TO_NAMES } from '../../utils/productNames'

import BuyFlow from './buyFlow/BuyFlow'

interface Props {
    productId: ProductIds
}

const InsurancePage: React.FC<Props> = ({ productId }) => {

    return (
        <>
            <h2>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h2>
            <BuyFlow productId={productId} />
        </>
    )
}

export default InsurancePage
