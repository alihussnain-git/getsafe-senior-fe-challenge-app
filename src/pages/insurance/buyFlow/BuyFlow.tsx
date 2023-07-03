import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes/routes';
import { getBuyStepById } from '../../../utils/getBuyStepById';
import { ProductIds } from '../../../utils/productIds';
import BuyFlowStepRenderer from './components/BuyFlowStepRenderer';
import { BuyingFlowData } from './types';

interface Props {
  productId: ProductIds;
}

const BuyFlow: React.FC<Props> = ({ productId }) => {
  const steps = getBuyStepById(productId);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [collectedData, setCollectedData] = useState<BuyingFlowData>({});
  const navigate = useNavigate();


  const handleSuccessfulPurchase = useCallback(
    () => {
      navigate(ROUTES.INSURANCE.SUCCESSFULLY_BOUGHT);
    },
    [navigate]
  );

  const onPressNext = useCallback(
    (updatedData: BuyingFlowData) => {
      setCollectedData((prevData) => ({ ...prevData, ...updatedData }));
      setCurrentStepIndex((prevIndex) => prevIndex + 1);
    },
    []
  );

  const onPressPre = useCallback(() => {
    setCurrentStepIndex((prevStepIndex) => (prevStepIndex > 0 ? prevStepIndex - 1 : 0));
  }, [setCurrentStepIndex]);

  if (!steps) {
    return <div>Error: No steps found for this product ID</div>;
  }

  const currentStep = steps[currentStepIndex];

  return (
    <BuyFlowStepRenderer
      step={currentStep}
      data={collectedData}
      onNext={onPressNext}
      onPre={currentStepIndex ? onPressPre : undefined}
      onPressBuy={handleSuccessfulPurchase}
    />
  );
};

export default BuyFlow;
