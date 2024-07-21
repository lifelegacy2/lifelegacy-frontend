'use client';

import { FaPlus, FaArrowUp } from 'react-icons/fa6';
import SelectBox from '@/components/SelectBox';
import * as styles from './InputBox.css';

interface InputBoxProps extends React.ComponentProps<'input'> {
  placeholder: string;
  onToggleSelect: () => void;
  showSelect: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({
  placeholder,
  onToggleSelect,
  showSelect,
  ...props
}) => {
  console.log('InputBox props:', { placeholder, showSelect });
  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.buttonWrapper} ${styles.buttonLeft}`}
        onClick={() => {
          onToggleSelect();
          console.log('Toggle button clicked');
        }}
      >
        <FaPlus className={styles.iconLeft} />
      </button>
      <input className={styles.input} placeholder={placeholder} {...props} />
      <button className={`${styles.buttonWrapper} ${styles.buttonRight}`}>
        <FaArrowUp className={styles.iconRight} />
      </button>
      <SelectBox show={showSelect} />
    </div>
  );
};

export default InputBox;
