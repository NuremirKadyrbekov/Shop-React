import Bpp from '../counter';
import Css from '../styles/Card.module.css'

export const Card = ({date}) =>{
    return(
        <div className={Css.Main}><div className={Css.Card}>
         <h1>{date.NameProduct}</h1>
         <div className={Css.spanDiv}> <span className={Css.span}>{date.description}</span></div>
         <p>{date.prise}</p>
         <img src={date.img} alt="" />
         <div className={Css.counter}>
              <Bpp/>
         </div>
       </div>
       </div>
       
    );
}