import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

type ErrorAlertsProps = {
  message: string;
};

const ErrorAlerts = (props: ErrorAlertsProps) => {
  return (
    <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>{props?.message}</AlertDescription>
    </Alert>
  );
};

export default ErrorAlerts;
