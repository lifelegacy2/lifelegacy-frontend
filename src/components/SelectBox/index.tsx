'use client';

import CameraIcon from '@/assets/Icons3DCamera.svg';
import MicIcon from '@/assets/Icons3DMic.svg';
import FolderIcon from '@/assets/Icons3DFolder.svg';
import * as styles from './SelectBox.css';

interface SelectBoxProps {
  show: boolean;
}

const SelectBox: React.FC<SelectBoxProps> = ({ show }) => {
  console.log('SelectBox props:', { show });

  return (
    <div className={`${styles.container} ${show ? styles.visible : ''}`}>
      <div className={styles.option}>
        <CameraIcon width={36} height={36} marginRight={10} />
        <span>사진 첨부</span>
      </div>
      <hr className={styles.separator} />
      <div className={styles.option}>
        <MicIcon width={36} height={36} marginRight={10} />
        <span>음성 입력</span>
      </div>
      <hr className={styles.separator} />
      <div className={styles.option}>
        <FolderIcon width={36} height={36} marginRight={10} />
        <span>텍스트 입력</span>
      </div>
    </div>
  );
};

export default SelectBox;
