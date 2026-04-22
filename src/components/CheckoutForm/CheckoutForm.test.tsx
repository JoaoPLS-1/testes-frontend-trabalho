import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CheckoutForm } from './CheckoutForm'

/**
 * Exercício 3 — CheckoutForm
 *
 * Nível de dificuldade: Misto
 * Alguns casos têm o render() ou parte da interação prontos.
 * Outros estão completamente em branco.
 *
 * Conceitos praticados:
 *  - getByLabelText / getByRole
 *  - userEvent.type() para preencher campos
 *  - Validação de formulário (erros)
 *  - toHaveBeenCalledWith() com dados do formulário
 *  - not.toHaveBeenCalled()
 */

describe('CheckoutForm', () => {
  it('renderiza todos os campos do formulário', () => {
    render(<CheckoutForm onSubmit={jest.fn()} />)

    // TODO: verifique que os campos Nome, E-mail e CEP estão presentes
    // Dica: use getByLabelText() buscando pelo texto de cada <label>
  })

  it('exibe erro quando o nome está vazio ao tentar submeter', async () => {
    const onSubmit = jest.fn()
    render(<CheckoutForm onSubmit={onSubmit} />)

    await userEvent.click(screen.getByRole('button', { name: /finalizar/i }))

    // TODO: verifique que a mensagem "Nome é obrigatório" está na tela
  })

  it('exibe erro quando o e-mail é inválido', async () => {
    // TODO: renderize o CheckoutForm
    // preencha o campo e-mail com um valor inválido (ex: "nao-é-email")
    // clique em "Finalizar Compra"
    // e verifique que a mensagem "E-mail inválido" aparece na tela
  })

  it('exibe erro quando o CEP tem menos de 8 dígitos', async () => {
    // TODO: renderize o CheckoutForm
    // preencha o campo CEP com menos de 8 dígitos (ex: "1234")
    // clique em "Finalizar Compra"
    // e verifique que a mensagem "CEP deve ter 8 dígitos" aparece na tela
  })

  it('chama onSubmit com os dados corretos quando o formulário é válido', async () => {
    // TODO: renderize o CheckoutForm com um mock para onSubmit
    // preencha os três campos com dados válidos
    // clique em "Finalizar Compra"
    // e verifique que onSubmit foi chamado com o objeto { nome, email, cep }
  })

  it('não chama onSubmit quando há erros de validação', async () => {
    const onSubmit = jest.fn()
    render(<CheckoutForm onSubmit={onSubmit} />)

    await userEvent.click(screen.getByRole('button', { name: /finalizar/i }))

    // TODO: verifique que onSubmit *não* foi chamado
  })
})
