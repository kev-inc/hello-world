import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel
} from "@ionic/react";
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>People</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {[
            {
              name: "Steve Rogers",
              src:
                "https://qph.fs.quoracdn.net/main-qimg-ed6a2986e8560446cef20a5e0ce5e102"
            },
            {
              name: "Thor",
              src:
                "https://media3.s-nbcnews.com/i/newscms/2019_17/2835276/190425-thor-avengers-endgame-ew-339p_495f973dec4e771610b7097ec6ea3bb5.jpg"
            },
            {
              name: "Natasha Romanoff",
              src:
                "https://media1.popsugar-assets.com/files/thumbor/kdKiDta6E1ZSzLv11Y-w4QqBrtc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2015/05/03/931/n/1922283/c9c052bd_edit_img_image_845210_1430687624/i/Black-Widow-Romantic-Comedy-Trailer-SNL.png"
            }
          ].map((item, index) => (
            <IonItem key={index}>
              <IonAvatar slot="start">
                <img src={item.src} alt="" />
              </IonAvatar>
              <IonLabel>
                <h2>{item.name}</h2>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
