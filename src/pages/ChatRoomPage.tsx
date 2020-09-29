import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton
} from "@ionic/react";
import { add, star } from "ionicons/icons";
import { RouteComponentProps } from "react-router";
import ThreadItem from "../components/ThreadItem";

interface ChatRoomPageProps
  extends RouteComponentProps<{
    name: string;
  }> {}

const ChatRoomPage: React.FC<ChatRoomPageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{match.params.name}</IonTitle>
          <IonButtons slot="secondary">
            <IonButton fill="clear">
              <IonIcon slot="start" icon={star} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ThreadItem />
        <ThreadItem />
        <ThreadItem />
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default ChatRoomPage;
