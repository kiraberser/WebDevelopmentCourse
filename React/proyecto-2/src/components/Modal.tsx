import styles from "../styles/Modal.module.css"
import { RiCloseLine } from "react-icons/ri";

interface Props {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onConfirm: () => void;
}

export const Modal = ({setIsOpen, onConfirm}: Props) => {
    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)}>
                <div className={styles.centered}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <h5 className={styles.heading}>Dialog</h5>
                        </div>
                        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                            <RiCloseLine style={{marginBottom: "-3px"}}/>
                        </button>
                        <div className={styles.modalContent}>
                            ¿Estás seguro de eliminar este todo?
                        </div>
                        <div className={styles.modalActions}>
                            <div className={styles.actionsContainer}>
                                <button 
                                    className={styles.deleteBtn} 
                                    onClick={() => {
                                        onConfirm();
                                    }}
                                >
                                    Eliminar
                                </button>
                                <button 
                                    className={styles.cancelBtn} 
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}