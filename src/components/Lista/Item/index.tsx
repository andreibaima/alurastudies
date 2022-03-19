import { ITarefa } from "../../../types/tarefa";
import style from "../Lista.module.scss";

export default function Item({ tarefa, tempo, selecionado, completado, id }: ITarefa) { // segundo parametro é a props
    // const { tarefa, tempo } = props;
    console.log('Item atual: ', { tarefa, tempo, selecionado, completado, id })
    return (
        <li className={style.item}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </li>
    )
}