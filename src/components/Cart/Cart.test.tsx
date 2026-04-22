import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Cart } from './Cart'
import { mockCartItems } from '../../data/products'

/**
 * Exercício 2 — Cart
 *
 * Nível de dificuldade: Avançado (scaffolding mínimo)
 * Apenas as descrições estão prontas. Você escreve tudo: render, queries e assertions.
 *
 * Conceitos praticados:
 *  - render() com props complexas
 *  - Queries semânticas
 *  - Verificação de estado calculado (total)
 *  - Assertions negativas
 *  - Mock functions + toHaveBeenCalledWith()
 *
 * Dados úteis (mockCartItems):
 *  - Camiseta Básica  → R$ 49,90 × 2 = R$ 99,80
 *  - Tênis Esportivo  → R$ 199,90 × 1 = R$ 199,90
 *  - Total esperado   → R$ 299,70
 */

describe('Cart', () => {
  it('exibe a mensagem "Seu carrinho está vazio" quando não há itens', () => {
    

    // TODO: renderize o Cart com items={[]} e onRemove={jest.fn()}
    // e verifique que a mensagem de carrinho vazio está na tela
    render(<Cart items={[]} onRemove={jest.fn()} />)
    expect(screen.getByText('Seu carrinho está vazio')).toBeInTheDocument()
  })

  it('renderiza todos os itens do carrinho', () => {
    // TODO: renderize o Cart com mockCartItems
    // e verifique que os nomes dos dois produtos aparecem na tela
    render(<Cart items={[...mockCartItems]} onRemove={jest.fn()} />)
    expect(screen.getByText('Camiseta Básica')).toBeInTheDocument()
    expect(screen.getByText('Tênis Esportivo')).toBeInTheDocument()
  })

  it('exibe o total correto somando os itens', () => {
    // TODO: renderize o Cart com mockCartItems
    // e verifique que o total "R$\xa0299,70" aparece na tela
    render(<Cart items={[...mockCartItems]} onRemove={jest.fn()} />)
    expect(screen.getByText(/299,70/)).toBeInTheDocument()
  })

  it('chama onRemove com o id correto ao clicar em "Remover"', async () => {
    // TODO: crie um mock para onRemove
    // renderize o Cart com mockCartItems e o mock
    // clique no botão "Remover" do primeiro item (Camiseta Básica, id=1)
    // e verifique que onRemove foi chamado com o id correto
    const mockOnRemove = jest.fn()
    render(<Cart items={[...mockCartItems]} onRemove={mockOnRemove} />)
    await userEvent.click(screen.getAllByText('Remover')[0])
    expect(mockOnRemove).toHaveBeenCalledWith(mockCartItems[0].product.id)
  })

  it('não exibe o total quando o carrinho está vazio', () => {
    // TODO: renderize o Cart com items={[]}
    // e use uma assertion *negativa* para verificar que nenhum texto de "Total" aparece
    render(<Cart items={[]} onRemove={jest.fn()} />)
    expect(screen.queryByText('Total')).not.toBeInTheDocument()
  })
})
