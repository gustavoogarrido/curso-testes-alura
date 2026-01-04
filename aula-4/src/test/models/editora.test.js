import {
  describe, expect, it, jest,
} from '@jest/globals';
import Editora from '../../models/editora';

describe('Testando o modelo editora', () => {
  const objEditora = {
    nome: 'CDC',
    cidade: 'São Paulo',
    email: 'email@email.email',
  };

  it('Deve instanciar uma nova editora', () => {
    const editora = new Editora(objEditora);

    expect(editora).toEqual(
      expect.objectContaining(objEditora),
    );
  });

  it.skip('Deve salvar editora no banco de dados', () => {
    const editora = new Editora(objEditora);

    editora.salvar().then((dados) => {
      expect(dados.nome).toBe('CDC');
    });
  });

  it.skip('Deve salvar no banco de dados usando a sintaxe moderna', async () => {
    const editora = new Editora(objEditora);
    const dados = await editora.salvar();
    const retornado = await Editora.pegarPeloId(dados.id);

    expect(retornado).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });

  it('Deve fazer fazer uma chamada simulada ao banco de dados', () => {
    const editora = new Editora(objEditora);
    editora.salvar = jest.fn().mockReturnValue({
      id: 10,
      nome: 'CDC',
      cidade: 'São Paulo',
      email: 'email@email.email',
      created_at: '2026-01-04',
      updated_at: '2026-01-04',
    });

    const retornado = editora.salvar();

    expect(retornado).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });
});
