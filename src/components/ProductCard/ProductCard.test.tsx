import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductCard } from './ProductCard'
import { mockProduct, mockOutOfStockProduct } from '../../data/products'

/**
 * Exercício 1 — ProductCard
 *
 * Nível de dificuldade: Intermediário (scaffolding parcial)
 * O render() já está feito em alguns casos. Você escreve as queries e assertions.
 *
 * Conceitos praticados:
 *  - screen.getByRole / screen.getByText
 *  - toBeInTheDocument()
 *  - Assertions negativas (.not.)
 *  - userEvent.click()
 *  - toHaveBeenCalledWith()
 *  - toBeDisabled()
 */

describe('ProductCard', () => {
  it('renderiza o nome do produto', () => {
    render(<ProductCard product={mockProduct} onAddToCart={jest.fn()} />)

    // TODO: escreva a query para encontrar o nome do produto
    // e verifique que ele está na tela
  })

  it('renderiza o preço formatado em reais (R$)', () => {
    render(<ProductCard product={mockProduct} onAddToCart={jest.fn()} />)

    // TODO: verifique que o preço aparece no formato "R$\xa049,90"
    // Dica: o produto mockProduct custa R$ 49,90
  })

  it('exibe o badge "Esgotado" quando o produto está fora de estoque', () => {
    render(<ProductCard product={mockOutOfStockProduct} onAddToCart={jest.fn()} />)

    // TODO: escreva a query para o badge "Esgotado" e verifique que está na tela
  })

  it('não exibe o badge "Esgotado" quando o produto está em estoque', () => {
    render(<ProductCard product={mockProduct} onAddToCart={jest.fn()} />)

    // TODO: escreva a assertion *negativa* verificando que "Esgotado" não aparece
    // Dica: use .not. junto com o matcher adequado
  })

  it('chama onAddToCart com o id correto ao clicar no botão', async () => {
    const onAddToCart = jest.fn()
    render(<ProductCard product={mockProduct} onAddToCart={onAddToCart} />)

    // TODO: use userEvent.click() para clicar no botão "Adicionar ao Carrinho"
    // e verifique que onAddToCart foi chamado com o id correto (mockProduct.id)
  })

  it('o botão fica desabilitado quando o produto está fora de estoque', () => {
    render(<ProductCard product={mockOutOfStockProduct} onAddToCart={jest.fn()} />)

    // TODO: encontre o botão "Adicionar ao Carrinho" e verifique que está desabilitado
    // Dica: use getByRole('button', { name: ... }) e o matcher toBeDisabled()
  })
})
