function TodoItem({ tache, changerEtat, supprimerTache }) {
    return (
        <li className={`todo-item ${tache.terminee ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={tache.terminee}
                onChange={() => changerEtat(tache.id)}
            />
            <span> {tache.texte} </span>
            <button className="btn-delete" onClick={() => supprimerTache(tache.id)}>
                X
            </button>
        </li>
    );
}

export default TodoItem;