import React from 'react'

const PrimerComponente = () => {
    let nombre = 'Manuel';
    let web = 'ManuelLlanoweb.es';

    let cursos = ['primero', 'segundo', 'tercero', 'cuarto'];
    return (
        <div>
            <h1>Primer componente</h1>
            <p>Este es un texto de mi primer componente</p>
            <p>Mi nombre es: {nombre}</p>
            <p>Mi web es: {web}</p>

            <h2>Cursos: </h2>
            <ul>
                {
                    cursos.map((curso, indice) => {
                        return (<li key={indice}>
                            {curso}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default PrimerComponente
