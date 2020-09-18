import React from "react";
import {
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonRippleEffect,
  IonBadge
} from "@ionic/react";
import { data } from "../mockchats";

const ThreadItem: React.FC = () => {
  return (
    <IonCard>
      <IonCardContent className="ion-no-padding">
        <IonList>
          {data.map((user, index) => (
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
          <IonItem
            className="ion-activatable ripple-parent"
            routerLink="/thread"
            routerDirection="forward"
          >
            <IonLabel>
              <p>Reply</p>
            </IonLabel>
            <IonRippleEffect></IonRippleEffect>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default ThreadItem;
