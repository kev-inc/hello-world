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
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Private Chats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {["Avengers HQ", "SHIELD"].map((item, index) => (
            <ChatRoomItem key={index} name={item} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
