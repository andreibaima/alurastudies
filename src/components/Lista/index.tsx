import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss'

function Lista({ tarefas }: {tarefas: ITarefa[]}) { // prop tem um array de tarefa

    return (
        <aside className={style.listaTerefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    // <Item tarefa={item.tarefa} tempo={item.tempo} />
                    <Item key={index}
                        {...item} // os key são passados como props
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;