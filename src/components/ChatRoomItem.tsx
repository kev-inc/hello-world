import React from "react";
import {
  IonItemSliding,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonLabel,
  IonAvatar
} from "@ionic/react";

interface ContainerProps {
  name: string;
}

const ChatRoomItem: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonItemSliding>
      <IonItem routerLink={`/chatroom/${name}`} routerDirection="forward">
        <IonAvatar slot="start">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
            alt=""
          />
        </IonAvatar>
        <IonLabel>
          <h2>{name}</h2>
          <p>The quick brown fox</p>
        </IonLabel>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption onClick={() => {}}>Hide</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default ChatRoomItem;
