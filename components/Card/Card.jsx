import Image from 'next/image';
import styles from './Card.module.css';

const Card = (props) => {
  const { imgUrl, size } = props;

  //read up on this concept please
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };
  return (
    <div className={styles.container}>
      Card
      <div className={classMap[size]}>
        <Image
          src={imgUrl}
          alt='image'
          layout='fill'
          className={styles.cardImg}
        />
      </div>
    </div>
  );
};

export default Card;
