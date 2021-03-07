import React from 'react';
import s from './MainBlock.module.css';

let MainBlock = (props) => {
    return (
        <div className={s.wrapper}>
            {props.arrayRecievedData.map( item => ( 
                <div className={s.productBlock} key={item.asin}>
                <div className={s.imgBlock}>
                    <a href={item.link}>
                        <img className={s.imgProduct} alt="" src={item.img}/>
                        <p className={s.name}>{item.name}</p>
                    </a>
                </div>
                <div className={s.descriptionBlock}>
                    <p className={s.category}><b>Category</b>: {item.bsr_category}</p>
                    <p className={s.price}><b>Price</b>: {item.price}$</p>
                </div>
            </div>
            ))}
            
        </div>
    )
}

export default MainBlock;