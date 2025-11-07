import { google } from "googleapis";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const calendarRouter = createTRPCRouter({
//   listEvents: protectedProcedure.query(async ({ ctx }) => {
//     const accessToken = ctx.session.accessToken as string;

//     const auth = new google.auth.OAuth2();
//     auth.setCredentials({ access_token: accessToken });

//     const calendar = google.calendar({ version: "v3", auth });

//     const res = await calendar.events.list({
//       calendarId: "primary",
//       maxResults: 10,
//       singleEvents: true,
//       orderBy: "startTime",
//     });

//     return res.data.items ?? [];
//   }),
});
