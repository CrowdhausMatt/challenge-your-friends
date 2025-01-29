import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "right";
}

const ChatBubble = ({ children, className, align = "left" }: ChatBubbleProps) => {
  return (
    <div
      className={cn(
        "max-w-[80%] rounded-3xl p-4 text-white",
        align === "left" ? "ml-0 mr-auto bg-cleo-blue" : "ml-auto mr-0 bg-cleo-pink",
        "animate-fade-in",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ChatBubble;