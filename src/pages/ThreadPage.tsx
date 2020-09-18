import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonFooter
} from "@ionic/react";
import { sendOutline } from "ionicons/icons";
import { data } from "../../resources/mockchats";

const ThreadPage: React.FC = () => {
  const [messages, setMessages] = useState(data);
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    setMessages((prev) => [
      ...prev,
      {
        name: "Tony Stark",
        src:
          "https://www.cheatsheet.com/wp-content/uploads/2019/06/RDJ-Tony-Stark.jpg",
        message: [message]
      }
    ]);
    setMessage("");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {messages.map((user, index) => (
            <IonItem key={index}>
              <IonAvatar slot="start">
                <img src={user.src} alt="" />
              </IonAvatar>
              <IonLabel>
                <h2>{user.name}</h2>
                {user.message.map((msg, index2) => (
                  <p key={index2}>{msg}</p>
                ))}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonItem>
            <IonInput
              placeholder="Message"
              value={message}
              onIonChange={(e) => setMessage(e.detail.value!)}
            ></IonInput>
            <IonButton fill="clear" size="default" onClick={sendMessage}>
              <IonIcon icon={sendOutline} />
            </IonButton>
          </IonItem>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ThreadPage;
