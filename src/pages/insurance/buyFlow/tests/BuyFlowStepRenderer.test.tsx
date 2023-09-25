import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BuyingFlowAgeStep, StepIds } from '../types';
import BuyFlowStepRenderer from '../components/BuyFlowStepRenderer';

describe('BuyFlowStepRenderer', () => {

    test('renders NameStep correctly', () => {
        const onNext = jest.fn();
        const onPre = jest.fn();
        const data = {
            firstName: 'TestFirstName',
            lastName: 'TestLastName',
        };

        render(
            <BuyFlowStepRenderer
                step={{ stepId: StepIds.Name }}
                onNext={onNext}
                onPre={onPre}
                data={data}
                onPressBuy={jest.fn()}
            />
        );

        expect(screen.getByLabelText('First Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    });

    test('renders EmailStep correctly', () => {
        const onNext = jest.fn();
        const onPre = jest.fn();
        const data = {
            email: 'test@test.com',
        };

        render(
            <BuyFlowStepRenderer
                step={{ stepId: StepIds.Email }}
                onNext={onNext}
                onPre={onPre}
                data={data}
                onPressBuy={jest.fn()}
            />
        );
        expect(screen.getByLabelText('Email')).toBeInTheDocument();

    });

    test('renders AgeStep correctly', () => {
        const onNext = jest.fn();
        const onPre = jest.fn();
        const data = {
            age: 25,
        };

        render(
          <BuyFlowStepRenderer
            step={
              { stepId: StepIds.Age, max: 100, min: 18 } as BuyingFlowAgeStep
            }
            onNext={onNext}
            onPre={onPre}
            data={data}
            onPressBuy={jest.fn()}
          />
        )

        expect(screen.getByLabelText('Age')).toBeInTheDocument();
    });


    test('renders SummaryStep correctly', () => {
        const onNext = jest.fn();
        const onPre = jest.fn();
        const data = {
            age: 25,
            email: 'test@test.com',
            firstName: 'TestFirstName',
            lastName: 'TestLastName',
        };

        render(
            <BuyFlowStepRenderer
                step={{ stepId: StepIds.Summary }}
                onNext={onNext}
                onPre={onPre}
                data={data}
                onPressBuy={jest.fn()}
            />
        );

        expect(screen.getByText('Buy')).toBeInTheDocument();
    });

    test('calls onPressBuy when pressing Buy Now', () => {
        const onNext = jest.fn();
        const onPre = jest.fn();
        const onPressBuy = jest.fn();
        const data = {
            age: 25,
            email: 'test@test.com',
            firstName: 'TestFirstName',
            lastName: 'TestLastName',
        };

        render(
            <BuyFlowStepRenderer
                step={{ stepId: StepIds.Summary }}
                onNext={onNext}
                onPre={onPre}
                data={data}
                onPressBuy={onPressBuy}
            />
        );

        const buyNowButton = screen.getByText('Buy');
        fireEvent.click(buyNowButton);

        expect(onPressBuy).toHaveBeenCalledWith(data);
    });
});
