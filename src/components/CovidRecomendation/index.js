import Popup from '../UI/Popup'
import classes from './covidRecomendation.module.css'

const CovidRecomendation = () => (
    <div className={classes.recomendation}>
        <h1 >Recomendaciones Covid 19</h1>
        <p className={classes.message}>Te dejamos algunas recomendaciones que creemos son necesarias para que puedas cuidarte y disfrutar de nuestra fiesta.</p>
        <Popup text="VER">
            <ul className={classes.list}>
                <li className={classes.item}>No olvides llevar y utilizar tu barbijo.</li>
                <li className={classes.item}>Mantener el distanciamiento social.</li>
                <li className={classes.item}>Recordar mantener tus manos limpias. Contarás con un kit de higiene disponible en todo momento ubicado en tu mesa y en diversos sectores del salón.</li>
                <li className={classes.item}>Evitar el amontonamiento de personas. Habrá tiempo de sobra para que saludes a todas aquellas personas que hace tiempo no ves y para que saludes a los novios.</li>
                <li className={classes.item}>En el ingreso se tomará la temperatura a todos los invitados; en caso de que alguien presente fiebre, no se le permitirá el acceso y se le indicará volver a su alojamiento y llamar al servicio de emergencias en caso de que presente síntomas respiratorios.</li>
            </ul>
        </Popup>
    </div>
)

export default CovidRecomendation