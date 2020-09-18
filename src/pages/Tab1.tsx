import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList
} from "@ionic/react";
import ChatRoomItem from "../components/ChatRoomItem";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Public Chats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {["Global", "Avengers HQ"].map((item, index) => (
            <ChatRoomItem key={index} name={item} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
