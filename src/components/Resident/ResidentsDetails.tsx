import React from "react";
import ResidentDetail from "./ResidentDetail";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import InfoAlerts from "../compounds/infoAlerts";

type ResidentsDetailsProps = {
  residentsUrls: string[];
};

const ResidentsDetails = ({ residentsUrls }: ResidentsDetailsProps) => {
  if (!residentsUrls?.length) {
    return <InfoAlerts message="There is no information about residents!" />;
  }

  return (
    <>
      <Separator className="mt-2 mb-2" />
      <Label className="font-bold mb-3 mt-5">Residents:</Label>
      <div className="flex gap-3 flex-col">
        {residentsUrls.map((residentUrl) => (
          <ResidentDetail key={residentUrl} residentUrl={residentUrl} />
        ))}
      </div>
    </>
  );
};

export default React.memo(ResidentsDetails);
