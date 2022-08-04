import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg'

type Props = {
  text: string
}

const ButtonIcon = ({ text } : Props) => {
  return (
    <div className='btn-container'>
        <button className="btn btn-primary">
          <h6>{text}</h6>
        </button>
      <div className='btn-icon-container'>
        <ArrowIcon />
      </div>
    </div>
  );
};

export default ButtonIcon;
