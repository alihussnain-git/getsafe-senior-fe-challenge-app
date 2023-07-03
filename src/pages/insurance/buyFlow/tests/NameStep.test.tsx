import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NameStep from '../components/NameStep';

describe('NameStep', () => {
    test('renders NameStep correctly', () => {
        const onNext = jest.fn();
        const onPre = jest.fn();
        const data = {
            firstName: 'Test First Name',
            lastName: 'Test Last Name',
        };

        render(
            <NameStep
                value={data}
                onNext={onNext}
                onPre={onPre}
            />
        );

        expect(screen.getByLabelText('First Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Test First Name')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Test Last Name')).toBeInTheDocument();
    });

    test('calls onNext with name data when pressing Next', () => {
        const onNext = jest.fn();
        const onPre = jest.fn();
        const data = {
            firstName: '',
            lastName: '',
        };

        render(
            <NameStep
                value={data}
                onNext={onNext}
                onPre={onPre}
            />
        );

        const firstNameInput = screen.getByLabelText('First Name');
        const lastNameInput = screen.getByLabelText('Last Name');
        const nextButton = screen.getByText('Next');

        fireEvent.change(firstNameInput, { target: { value: 'Test First Name' } });
        fireEvent.change(lastNameInput, { target: { value: 'Test Last Name' } });
        fireEvent.click(nextButton);

        expect(onNext).toHaveBeenCalledWith({ firstName: 'Test First Name', lastName: 'Test Last Name' });
    });

    test('calls onPre when pressing Previous', () => {
        const onNext = jest.fn();
        const onPre = jest.fn();
        const data = {
            firstName: 'Test First Name',
            lastName: 'Test Last Name',
        };

        render(
            <NameStep
                value={data}
                onNext={onNext}
                onPre={onPre}
            />
        );

        const previousButton = screen.getByText('Previous');

        fireEvent.click(previousButton);

        expect(onPre).toHaveBeenCalled();
    });
});
