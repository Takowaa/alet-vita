import styles from './ButtonGroup.module.css'
import classNames from "classnames";


const ButtonGroup = ({items,activeTab,setActiveTab}) => {



  return (
    <div>
      {items.map((item, idx) => {
        return <button key={idx} onClick={() => setActiveTab(item.value)}
                       className={classNames(styles.btn, {[styles.active]: activeTab === item.value})}>{item.name}</button>
      })}
      {/**/}
      {/*<button onClick={()=> setActiveIndex(1)} className={classNames(styles.btn, { [styles.active]: activeIndex === 1 })}>Page 2</button>*/}
      {/*<button onClick={()=> setActiveIndex(2)} className={classNames(styles.btn, { [styles.active]: activeIndex === 2 })}>Page 3</button>*/}
    </div>
  );
};

export default ButtonGroup;