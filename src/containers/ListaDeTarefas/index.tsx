import Tarefa from '../../components/Tarefa'

import * as S from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    prioridade: 'Ver a aula 3 da EBAC',
    status: 'importante',
    descricao: 'pendente'
  },
  {
    titulo: 'Pagar Conta',
    prioridade: 'Baixar Fatura',
    status: 'urgente  ',
    descricao: 'concluida'
  },
  {
    titulo: 'Ir para a academia',
    prioridade: 'Fazer treino B',
    status: 'importante',
    descricao: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <S.Container>
    <p>2 Tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
            titulo={t.titulo}
          />
        </li>
      ))}
    </ul>
  </S.Container>
)

export default ListaDeTarefas
