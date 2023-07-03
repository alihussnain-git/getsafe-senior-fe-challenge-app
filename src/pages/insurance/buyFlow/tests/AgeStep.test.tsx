import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AgeStep from '../components/AgeStep';

describe('AgeStep', () => {
    test('renders AgeStep correctly', () => {
        const onNext = jest.fn();
        const onPre = jest.fn();
        const value = 25;

        render(
            <AgeStep
                onNext={onNext}
                onPre={onPre}
                value={value}
                min={18}
                max={100}
            />
        );

        const ageInput = screen.getByLabelText('Age');
        expect(ageInput).toBeInTheDocument();
        expect(ageInput).toHaveValue(25);
    });

    test('calls onNext with the entered age when clicking Next', () => {
        const onNext = jest.fn();
        const onPre = jest.fn();
        const value = 25;

        render(
            <AgeStep
                onNext={onNext}
                onPre={onPre}
                value={value}
                min={18}
                max={100}
            />
        );

        const ageInput = screen.getByLabelText('Age');
        fireEvent.change(ageInput, { target: { value: '30' } });

        const nextButton = screen.getByText('Next');
        fireEvent.click(nextButton);

        expect(onNext).toHaveBeenCalledWith({ age: 30 });
    });

    test('calls onPre when clicking Previous', () => {
        const onNext = jest.fn();
        const onPre = jest.fn();
        const value = 25;

        render(
            <AgeStep
                onNext={onNext}
                onPre={onPre}
                value={value}
                min={18}
                max={100}
            />
        );

        const previousButton = screen.getByText('Previous');
        fireEvent.click(previousButton);

        expect(onPre).toHaveBeenCalled();
    });
});
