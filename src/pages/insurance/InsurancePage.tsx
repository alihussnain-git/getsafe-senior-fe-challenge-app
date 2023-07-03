import React from 'react'

import BuyFlow from './buyFlow/BuyFlow'

interface Props {
    productId: ProductIds
}

export enum ProductIds {
    devIns = 'dev_ins',
}

export const PRODUCT_IDS_TO_NAMES = {
    [ProductIds.devIns]: 'Developer Insurance',
}

export const InsurancePage: React.FC<Props> = ({ productId }) => {

    return (
        <>
            <h2>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h2>
            <BuyFlow productId={productId} />
        </>
    )
}
