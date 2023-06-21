import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabBar, setupIonicReact, IonTabButton, IonIcon, IonLabel, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { personCircleOutline, barbellOutline, restaurantOutline, homeOutline, statsChartOutline } from 'ionicons/icons';
import Account from './pages/Account/Account';
import Goals from './pages/Goals/Goals';
import Home from './pages/Home/Home';
import Meals from './pages/Meals/Meals';
import Workouts from './pages/Workouts/Workouts';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const pages = [
  {
    tab: 'goals',
    path: '/goals',
    component: <Goals />,
    icon: statsChartOutline,
    display: 'Goals',
  },
  {
    tab: 'meals',
    path: '/meals',
    component: <Meals />,
    icon: restaurantOutline,
    display: 'Meals',
  },
  {
    tab: 'home',
    path: '/home',
    component: <Home />,
    icon: homeOutline,
    display: 'Home',
  },
  {
    tab: 'workouts',
    path: '/workouts',
    component: <Workouts />,
    icon: barbellOutline,
    display: 'Workouts',
  },
  {
    tab: 'account',
    path: '/account',
    component: <Account />,
    icon: personCircleOutline,
    display: 'Account',
  },
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>        
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          {
            pages.map((p: any, i) => {
              return <Route exact path={p.path} render={() => p.component} key={i} />
            })
          }
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          {
            pages.map((p: any, i) => {

              return (
                <IonTabButton tab={p.tab} href={p.path} key={i}>
                  <IonIcon icon={p.icon} />
                  <IonLabel>{p.display}</IonLabel>
                </IonTabButton>
              )
            })
          }
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
