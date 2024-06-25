import { type AssociationSpecAssociationCategoryEnum as AssociationEnum } from "@hubspot/api-client/lib/codegen/crm/companies";

export const Companies = {
  objectTypeId: "0-2",
  associations: {
    companyToTask: {
      DEFAULT: {
        associationCategory: "HUBSPOT_DEFINED" as AssociationEnum,
        associationTypeId: 191,
      },
    },
    companyToTicket: {
      DEFAULT: { associationCategory: "HUBSPOT_DEFINED" as AssociationEnum, associationTypeId: 24 },
      Primary: { associationCategory: "HUBSPOT_DEFINED" as AssociationEnum, associationTypeId: 25 },
      Customer: {
        associationCategory: "USER_DEFINED" as AssociationEnum,
        associationTypeId: 42,
      },
    },
  },
} as const;
