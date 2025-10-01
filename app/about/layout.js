import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About - JustChat 💬",
  description: "Learn more about JustChat's mission, vision, and the team behind the app. Connecting people globally through secure and fun communication.",
};

export default function AboutLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

