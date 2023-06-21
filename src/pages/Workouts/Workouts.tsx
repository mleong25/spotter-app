import { IonContent, IonPage } from '@ionic/react';
import './Workouts.css';

const Workouts: React.FC = () => {
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
          Workouts Content
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Workouts;
