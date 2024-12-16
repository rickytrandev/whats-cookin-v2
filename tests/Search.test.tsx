import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { it, expect, describe, vi, test } from 'vitest'
import Search from '@/components/Search';
import '@testing-library/jest-dom/vitest'


describe('Search', () => {
  it('should have an input field', () => {
    render(<Search />)

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it('should have a search button', () => {
    const { container } = render(<Search />);

    // Log the HTML of the rendered component
    console.log(container.innerHTML);

    const button = screen.getByLabelText('search button')
    expect(button).toBeInTheDocument()
  })

  it.skip('fetches and displays results on screen', () => {
    render(<Search />)

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

})

// describe('Search Component', () => {
//   it('fetches and displays search results', async () => {
//     render(<Search />);

//     // Simulate user typing in the search input
//     userEvent.type(screen.getByRole('textbox'), 'apple');

//     // Wait for the fetch to be called and the results to be displayed
//     await waitFor(() => {
//       expect(screen.getByText('Apple')).toBeInTheDocument();
//       expect(screen.getByText('Banana')).toBeInTheDocument();
//     });
//   });
// });