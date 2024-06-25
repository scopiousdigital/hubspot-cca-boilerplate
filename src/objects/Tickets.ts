import { type AssociationSpecAssociationCategoryEnum as AssociationEnum } from "@hubspot/api-client/lib/codegen/crm/companies";

export const Tickets = {
  objectTypeId: "4",
  associations: {
    ticketToContact: {
      DEFAULT: { associationCategory: "HUBSPOT_DEFINED" as AssociationEnum, associationTypeId: 16 },
    },
    ticketToTask: {
      DEFAULT: {
        associationCategory: "HUBSPOT_DEFINED" as AssociationEnum,
        associationTypeId: 229,
      },
    },
    ticketToCompany: {
      DEFAULT: { associationCategory: "HUBSPOT_DEFINED" as AssociationEnum, associationTypeId: 339 },
      Primary: { associationCategory: "HUBSPOT_DEFINED" as AssociationEnum, associationTypeId: 26 },
    },
  },
} as const;
