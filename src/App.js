import { HashRouter, Route, Routes } from "react-router-dom";
import { registerLicense } from "@syncfusion/ej2-base";

import "./App.css";

// import HomeScreen from "./screens/HomeScreen";
// import OrganizerAttendeeScreen from "./screens/OrganizerAttendeeScreen";
// import OrganizerInScreen from "./screens/OrganizerInScreen";
// import OrganizerScreen from "./screens/OrganizerScreen";
// import OrganizerProfileScreen from "./screens/OrganizerProfileScreen";
// import UpcomingEvents from "./screens/UpcomingEvents";
import ManageEvents from "./screens/ManageEvents";
// import PastEvents from "./screens/OrganizerPastEvents";
// import AttendeeInScreen from "./screens/AttendeeInScreen";
import AttendeeScreen from "./screens/AttendeeScreen";
// import AttendeePastEventsScreen from "./screens/AttendeePastEventsScreen";
// import PresentEventsScreen from "./screens/PresentEventsScreen";
// import FutureEventsScreen from "./screens/FutureEventsScreen";
import AttendeeProfileScreen from "./screens/AttendeeProfileScreen";

registerLicense(
  "Mgo+DSMBaFt+QHFqVkNrWE5GfkBAXWFKblR8RmtTel9gFChNYlxTR3ZcQFRiQH1bc0RrWHhf;Mgo+DSMBPh8sVXJ1S0d+X1RPckBAVXxLflF1VWRTfFZ6cVRWACFaRnZdQV1gS3dSf0ZrXH5WdXBU;ORg4AjUWIQA/Gnt2VFhhQlJBfVtdX2tWfFN0RnNedV14flBHcDwsT3RfQF5jSnxad0xgUXpfeHJdRw==;MTU0MjUwNEAzMjMxMmUzMTJlMzMzNW5DRlBuRXloR2FmUTBmTUQ0NHBtYjc5ek12SnhTNVFESDRpSzViRE5LYlk9;MTU0MjUwNUAzMjMxMmUzMTJlMzMzNWlCajRnVENmdlNjQ1pWRUp5cHBPTVlac2E5ZFE1WnlwWlp4ZjFqQVNVVmM9;NRAiBiAaIQQuGjN/V0d+XU9Hc1RGQmFBYVF2R2BJeFRzfF9DYUwxOX1dQl9gSX1Rf0RqWndbcX1XRWE=;MTU0MjUwN0AzMjMxMmUzMTJlMzMzNWZxOXFiK1I1b0lXQ3ZRSHp5Vk5WOXcwNG5HTGFOVmllcDN6VWFkVFVzMkU9;MTU0MjUwOEAzMjMxMmUzMTJlMzMzNWZWNVV4T0ptWjJmYkxmSjh2R2JjNlhud29oSTB0aUxCSzl4QjljQmJXeUk9;Mgo+DSMBMAY9C3t2VFhhQlJBfVtdX2tWfFN0RnNedV14flBHcDwsT3RfQF5jSnxad0xgUXpfeXxURw==;MTU0MjUxMEAzMjMxMmUzMTJlMzMzNVhBTEcrcU1KYjVEQnAycVBSVWtrZTY5RkdwVmxRc2pKd051dGxaS0QyeGc9;MTU0MjUxMUAzMjMxMmUzMTJlMzMzNUFxTnNxQmhXSzNiY2dLSHJoc2lyZEtjczhBK2owdFNuYWx3SUxFUStsd3c9;MTU0MjUxMkAzMjMxMmUzMTJlMzMzNWZxOXFiK1I1b0lXQ3ZRSHp5Vk5WOXcwNG5HTGFOVmllcDN6VWFkVFVzMkU9"
);

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* <Route path="/" element={<HomeScreen />} /> */}
        {/* <Route
          path="/organizerattendee"
          element={<OrganizerAttendeeScreen />}
        /> */}
        {/* <Route path="/organizercredentials" element={<OrganizerInScreen />} />
        <Route path="/organizer" element={<OrganizerScreen />} />
        <Route path="/organizerprofile" element={<OrganizerProfileScreen />} /> */}
        {/* <Route path="/upcomingevents" element={<UpcomingEvents />} /> */}
        <Route path="/manageevents" element={<ManageEvents />} />
        {/* <Route path="/pastevents" element={<PastEvents />} /> */}
        <Route path="/" element={<AttendeeScreen />} />
        <Route path="/attendeeprofile" element={<AttendeeProfileScreen />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
