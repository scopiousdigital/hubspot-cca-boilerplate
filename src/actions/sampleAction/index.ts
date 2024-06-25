import { Client } from "@hubspot/api-client";
import { Callback, HubSpotEvent } from "../../exeuctionTypes";

export const main = async (event: HubSpotEvent, callback: Callback) => {
  const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_APP_API! });
};
