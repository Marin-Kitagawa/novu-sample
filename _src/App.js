import "./styles.css";

import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from "@novu/notification-center";

const SUBSCRIBER_ID = "663a207d36e24b70eed715de";
const APPLICATION_IDENTIFIER = "Pmj0RzJk1NYs";


export default function App() {
  return (
    <NovuProvider
      subscriberId={SUBSCRIBER_ID}
      applicationIdentifier={APPLICATION_IDENTIFIER}
    >
      <PopoverNotificationCenter colorScheme="dark">
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
}
