import { render, screen } from '@testing-library/react';
import userEvent  from '@testing-library/user-event'
import Counter from '.';

describe('Counter component', () => {
    test('título deve iniciar com valor 0', () => {
        render(<Counter />)

        const counterTitle = screen.getByText('0');
        expect(counterTitle).toBeInTheDocument();
    })

    test('título deve conter a classe counter_title', () => {
        render(<Counter />)

        const counterTitle = screen.getByText('0');
        expect(counterTitle).toHaveClass('counter__title');
    })

    test('título não deve iniciar com as classes counter__title--increment e counter__title--decrement', () => {
        render(<Counter />)

        const counterTitle = screen.getByText('0');
        expect(counterTitle).not.toHaveClass('counter__title--increment');
        expect(counterTitle).not.toHaveClass('counter__title--decrement');
    })

    test('deve conter um botão incrementar e ter a classe button--increment', () => {
        render(<Counter />)

        const buttonIncrement = screen.getByRole('button', {name: /incrementar/i});
        expect(buttonIncrement).toBeInTheDocument();
        expect(buttonIncrement).toHaveClass("button--increment");
    })

    test('deve conter um botão decrementar e ter a classe button--decrement', () => {
        render(<Counter />)

        const buttonIncrement = screen.getByRole('button', {name: /decrementar/i});
        expect(buttonIncrement).toBeInTheDocument();
        expect(buttonIncrement).toHaveClass("button--decrement");
    })

    test('deve adicionar 1 ao clicar no botão incrementar', () => {
        render(<Counter />)

        const buttonIncrement = screen.getByRole('button', {name: /incrementar/i});
        
        userEvent.click(buttonIncrement);
        expect(screen.getByText('1')).toBeInTheDocument();
    })

    test('deve subtrair +1 ao clicar no botão decrementar', () => {
        render(<Counter />)

        const buttonDecrement = screen.getByRole('button', {name: /decrementar/i});
        
        userEvent.click(buttonDecrement);
        expect(screen.getByText('-1')).toBeInTheDocument();
    })

    test('deve adicionar a classe counter__title--increment se counter>0', () => {
        render(<Counter />)

        const buttonIncrement = screen.getByRole('button', {name: /incrementar/i});
        
        expect(screen.queryByText('0')).toHaveClass('counter__title');
        userEvent.click(buttonIncrement);
        expect(screen.getByText('1')).toHaveClass('counter__title--increment')
    })

    test('deve adicionar a classe counter__title--decrement se counter<0', () => {
        render(<Counter />)

        const buttonDecrement = screen.getByRole('button', {name: /decrementar/i});
        
        expect(screen.queryByText('0')).toHaveClass('counter__title');
        userEvent.click(buttonDecrement);
        expect(screen.getByText('-1')).toHaveClass('counter__title--decrement')
    })
})