import React from "react";
import { BuyingFlowData, BuyingFlowStep, StepIds } from "../types";
import AgeStep from "./AgeStep";
import EmailStep from "./EmailStep";
import SummaryStep from "./SummaryStep";

interface Props {
    step: BuyingFlowStep;
    data: BuyingFlowData;
    onNext(data: BuyingFlowData): void;
}

const BuyFlowStepRenderer: React.FC<Props> = ({
    step,
    onNext,
    data,
}) => {
    const renderStep = () => {
        switch (step.stepId) {
            case StepIds.Age:
                return (
                    <AgeStep
                        value={data.age}
                        onNext={onNext}
                    />
                );
            case StepIds.Email:
                return (
                    <EmailStep
                        value={data.email}
                        onNext={onNext}
                    />
                );
            case StepIds.Summary:
                return <SummaryStep data={data} />;
            default:
                return <div>Error: Buying step is not found</div>;
        }
    };

    return renderStep();
};

export default BuyFlowStepRenderer;
