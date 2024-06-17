import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SortButton from '../components/SortButton';

describe('SortButton', () => {
    test('renders SortButton component', () => {
        const { getByText } = render(<SortButton />);
        const buttonElement = getByText(/sort/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('calls onSort prop with "asc" when ascending button is clicked', () => {
        const handleSort = jest.fn();
        const { getByText } = render(<SortButton onSort={handleSort} />);
        const ascendingButton = getByText(/a-z/i); // Check for A-Z button
        fireEvent.click(ascendingButton);
        expect(handleSort).toHaveBeenCalledWith('asc');
    });

    test('calls onSort prop with "desc" when descending button is clicked', () => {
        const handleSort = jest.fn();
        const { getByText } = render(<SortButton onSort={handleSort} />);
        const descendingButton = getByText(/z-a/i); // Check for Z-A button
        fireEvent.click(descendingButton);
        expect(handleSort).toHaveBeenCalledWith('desc');
    });
});
