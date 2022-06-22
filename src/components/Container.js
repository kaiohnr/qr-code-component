import './Container.css';
import Card from './UI/Card';
import ContentText from './ContentText';
import qrCodeImage from '../images/image-qr-code.png';

const Content = () => {
  return (
    <Card className="container">
      <div className="container-content">
        <div>
          <img className="qr-image" src={qrCodeImage} alt="qr code"></img>
        </div>
        <ContentText />
      </div>
    </Card>
  );
};

export default Content;
