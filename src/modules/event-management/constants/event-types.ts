import { EVENT_MANAGEMENT_ROUTES } from "@/constants/routes";

export const eventTypes = [
    {
        title: "Celebration Event",
        photo: "/images/celebration-event.svg",
        url: EVENT_MANAGEMENT_ROUTES.CREATE_CELEBRATION_EVENT_DETAILS,
    },

    {
        title: "Event Invitation",
        photo: "/images/event-invitation.svg",
        url: EVENT_MANAGEMENT_ROUTES.CREATE_EVENT_INVITATION_DETAILS,
    },

    {
        title: "Head Count Only",
        photo: "/images/head-count-only.svg",
        url: EVENT_MANAGEMENT_ROUTES.CREATE_HEAD_COUNT_EVENT,
    },

    {
        title: "High Profile Event Invitation",
        url: EVENT_MANAGEMENT_ROUTES.CREATE_HIGH_PROFILE_EVENT_DETAILS,
        photo: "/images/high-profile-event.svg",
    },
];
