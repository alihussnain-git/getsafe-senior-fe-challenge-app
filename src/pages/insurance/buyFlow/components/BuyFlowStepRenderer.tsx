import React from "react";
import { BuyingFlowData, BuyingFlowStep, PreviousStep, StepIds } from "../types";
import AgeStep from "./AgeStep";
import EmailStep from "./EmailStep";
import NameStep from "./NameStep";
import SummaryStep from "./SummaryStep";

interface Props extends PreviousStep {
    step: BuyingFlowStep;
    data: BuyingFlowData;
    onNext(data: BuyingFlowData): void;
}

const BuyFlowStepRenderer: React.FC<Props> = ({
    step,
    onNext,
    onPre,
    data,
}) => {
    const renderStep = () => {
        switch (step.stepId) {
            case StepIds.Age:
                return (
                    <AgeStep
                        value={data.age}
                        onNext={onNext}
                        max={step.max}
                        min={step.min}
                        onPre={onPre}
                    />
                );
            case StepIds.Email:
                return (
                    <EmailStep
                        value={data.email}
                        onNext={onNext}
                        onPre={onPre}
                    />
                );

            case StepIds.Name:
                return (
                    <NameStep
                        value={{ firstName: data.firstName, lastName: data.lastName }}
                        onNext={onNext}
                        onPre={onPre}
                    />
                );
            case StepIds.Summary:
                return <SummaryStep data={data} />;
            default:
                return <div>Error: Buying step not found</div>;
        }
    };

    return renderStep();
};

export default BuyFlowStepRenderer;
