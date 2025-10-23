import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertTitle } from "../ui/alert";

type InfoAlertsProps = {
  message: string;
};

const InfoAlerts = (props: InfoAlertsProps) => {
  return (
    <Alert>
      <AlertCircleIcon />
      <AlertTitle>{props.message}</AlertTitle>
    </Alert>
  );
};

export default InfoAlerts;
