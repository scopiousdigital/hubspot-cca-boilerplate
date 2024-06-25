export type HubSpotEvent = {
  inputFields: Record<string, unknown>;
  origin: {
    portalId: number;
    actionDefinitionId: number;
    actionDefinitionVersion: number;
    extensionDefinitionId: number;
    extensionDefinitionVersionId: number;
  };
  object: {
    objectType: string;
    objectId: number;
  };
  callbackId: string;
};

export type Callback = (params: {
  outputFields: {
    [key: string]: unknown;
  };
}) => void;
