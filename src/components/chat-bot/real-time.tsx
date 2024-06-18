import { useRealTime } from "@/hooks/useChatBot";
import { Card } from "../ui/card";

type RealTimeModeProps = {
  chatRoomId: string;
  setChats: React.Dispatch<
    React.SetStateAction<
      {
        role: "user" | "assistant";
        content: string;
        link?: string | undefined;
      }[]
    >
  >;
};

const RealTimeMode = ({ chatRoomId, setChats }: RealTimeModeProps) => {
  useRealTime(chatRoomId, setChats);

  return <Card className="px-3 rounded-full py-1 bg-orange font-bold text-white text-sm">Real Time</Card>;
};

export default RealTimeMode;
