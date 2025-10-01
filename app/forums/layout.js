import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Forums - JustChat 💬",
  description: "Join the conversation in the JustChat forums. Discuss various topics, share ideas, and connect with like-minded individuals. Engage in meaningful discussions and build a community.",
};

export default function ForumsLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
