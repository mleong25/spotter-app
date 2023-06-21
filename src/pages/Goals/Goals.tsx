import { IonContent, IonPage } from '@ionic/react';
import './Goals.css';

const Goals: React.FC = () => {
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
          Goals Content
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Goals;
