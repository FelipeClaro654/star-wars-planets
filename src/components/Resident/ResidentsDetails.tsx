import React from "react";
import ResidentDetail from "./ResidentDetail";
import { Alert, AlertTitle } from "../ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";

type ResidentsDetailsProps = {
  residentsUrls: string[];
};

const ResidentsDetails = ({ residentsUrls }: ResidentsDetailsProps) => {
  if (!residentsUrls?.length) {
    return (
      <Alert>
        <AlertCircleIcon />
        <AlertTitle>There is no information about residents!</AlertTitle>
      </Alert>
    );
  }

  return (
    <>
      <Separator className="mt-2 mb-2" />
      <Label className="font-bold mb-1">Residents:</Label>
      {residentsUrls.map((residentUrl) => (
        <ResidentDetail key={residentUrl} residentUrl={residentUrl} />
      ))}
    </>
  );
};

export default React.memo(ResidentsDetails);
