import { IonContent, IonPage } from '@ionic/react';
import './Meals.css';

const Meals: React.FC = () => {
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
          Meals Content
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Meals;
