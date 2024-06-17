import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test('renders SearchBar component', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText(/search by name or username/i);
    expect(inputElement).toBeInTheDocument();
});

test('calls onSearch prop with input value', () => {
    const handleSearch = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar onSearch={handleSearch} />);
    const inputElement = getByPlaceholderText(/search by name or username/i);
    fireEvent.change(inputElement, { target: { value: 'John' } });
    expect(handleSearch).toHaveBeenCalledWith('John');
});
