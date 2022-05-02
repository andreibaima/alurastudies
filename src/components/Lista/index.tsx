import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss'

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) { // prop tem um array de tarefa
    return (
        <aside className={style.listaTerefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    // <Item tarefa={item.tarefa} tempo={item.tempo} />
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item} // os key são passados como props
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;