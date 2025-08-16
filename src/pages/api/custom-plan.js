// src/pages/api/custom-plan.js
import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, title, contact, email, days, pickup, locations } = req.body;

  try {
    // ✅ Debug logs to confirm env variables (safe to log lengths, not values)
    console.log("✅ GOOGLE_SHEET_ID:", process.env.GOOGLE_SHEET_ID);
    console.log("✅ GOOGLE_PROJECT_ID:", process.env.GOOGLE_PROJECT_ID);
    console.log("✅ GOOGLE_CLIENT_EMAIL:", process.env.GOOGLE_CLIENT_EMAIL);
    console.log(
      "✅ PRIVATE_KEY length:",
      process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.length : "undefined"
    );

    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: "service_account",
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // ✅ Combine multiple locations into a single string
    const locationsStr = locations && locations.length > 0 ? locations.join(", ") : "";

    // ✅ Append to Google Sheets (7 columns: A–G)
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID, // must exist in .env.local
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, title, contact, email, days, pickup, locationsStr]],
      },
    });

    return res.status(200).json({ message: "✅ Plan submitted successfully!" });
  } catch (error) {
    console.error("❌ Google Sheets API Error:", error.message);
    console.error("📌 Error details:", error);

    return res.status(500).json({
      message: "❌ Failed to submit plan",
      error: error.message,
    });
  }
}
