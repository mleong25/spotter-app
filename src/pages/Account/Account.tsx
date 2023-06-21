import { IonContent, IonPage } from '@ionic/react';
import './Account.css';

const Account: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          Account Content
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Account;
