import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonInput,
  IonButton
} from "@ionic/react";

const CreateNewGroupPage: React.FC = ({ history }) => {
  const [name, setName] = useState("");

  const createRoom = () => {
    // alert(name);
    history.goBack();
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Group</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonInput
              value={name}
              placeholder="Room name"
              onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
          </IonItem>
        </IonList>
        <IonButton color="success" expand="block" onClick={createRoom}>
          Create
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CreateNewGroupPage;
