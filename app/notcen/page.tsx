"use client";

import "./styles.css";

import {
  Novu,PushProviderIdEnum
} from '@novu/node';

import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from "@novu/notification-center";

const SUBSCRIBER_ID = "663a207d36e24b70eed715de";
const APPLICATION_IDENTIFIER = "Pmj0RzJk1NYs";


const Header = () => {
  const preferenceFilter = (userPreferences: { template: { tags: string | string[]; }; }) => {
    if (userPreferences.template.tags.includes("don-not-show-tag")) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <NovuProvider
      subscriberId={SUBSCRIBER_ID}
      applicationIdentifier={APPLICATION_IDENTIFIER}
    >
      <PopoverNotificationCenter
        showUserPreferences={true}
        colorScheme={"dark"}
        position="top-start"
        offset={10}
        preferenceFilter={preferenceFilter}
      >
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
};

export default function App() {

  async function triggerPush() {

    const novu = new Novu("58ba35183b3e0fec809a32678fc4fcce");

    await novu.subscribers.setCredentials('663a207d36e24b70eed715de', PushProviderIdEnum.EXPO, {
      deviceTokens: ['933fd9c0-1666-11e7-afca-d980795c5824'],
    });
  }
  return (
    <div className="App">
      Notification Center Demo
      <Header />
      <button onClick={triggerPush}>Trigger Push Notification</button>
    </div>
  );
}

