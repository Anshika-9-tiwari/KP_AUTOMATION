// app/corporatetraining/drives-motors/page.tsx (server component)
export const metadata = {
  title: "Drives and Motors Training | Practical Industrial Motor & Drive Courses | KP Automation",
  description: "Join our Drives and Motors Training program to master industrial motors, variable frequency drives, and automation skills.",
  keywords: ["Drives and Motors Training", "Industrial Automation", "VFD", "Motors"],
};

import DrivesClient from "./drivesclient";
export default function Page() {
  return <DrivesClient />;
}
