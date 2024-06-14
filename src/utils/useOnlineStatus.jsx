import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [ onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    const handleOnline = () => setOnlineStatus(true);
    const handleOffline = () => setOnlineStatus(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
  }, []);

  // console.log("onlineStatus hook:", onlineStatus)

  return onlineStatus;
};

export default useOnlineStatus;
