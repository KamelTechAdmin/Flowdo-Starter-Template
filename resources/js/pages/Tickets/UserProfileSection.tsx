import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    ChevronDown,
    ChevronUp,
    CirclePlayIcon,
    LucideSquareCheckBig,
} from "lucide-react";
import { HiOutlineMail, HiOutlineReply } from "react-icons/hi";
import { MdMoreVert } from "react-icons/md";
import { BsArrowsFullscreen } from "react-icons/bs";
import { RxDotsVertical } from "react-icons/rx";
import { Card, CardContent } from "./card";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
    id: number;
    userName: string;
    timestamp: string;
    timeLabel: string;
    recipient: string;
    emails: string;
    content: string;
    avatar: string;
    bgColor: string;
    borderColor: string;
    hasLongContent: boolean;
}

const messages: Message[] = [
    {
        id: 1,
        userName: "محمد صقر",
        timestamp: "02:32  22-09-2024",
        timeLabel: "م",
        recipient: "موجهة إلي راشد فهد",
        emails: "<ahmed@example.com> , <rashedf@example.com>",
        content:
            "وصف مطول للتذكرة مثل نحتاج عرض سعر لخدمات الصيانة اللازمة للمعدات. وصف  مطول للتذكرة مثل نحتاج عرض سعر لخدمات الصيانة اللازمة للمعدات. وصف مطول للتذكرة مثل نحتاج عرض سعر لخدمات الصيانة اللازمة للمعدات. وصف مطول للتذكرة مثل نحتاج عرض سعر لخدمات الصيانة اللازمة للمعدات. وصف مطول للتذكرة مثل نحتاج عرض سعر لخدمات الصيانة اللازمة للمعدات. وصف  مطول للتذكرة مثل نحتاج عرض سعر لخدمات الصيانة اللازمة للمعدات.",
        avatar: "/figmaAssets/avatar-1.png",
        bgColor: "bg-white",
        borderColor: "border-slate-200",
        hasLongContent: true,
    },
    {
        id: 2,
        userName: "محمد صقر",
        timestamp: "منذ 1 أسبوع",
        timeLabel: "",
        recipient: "موجهة إلي راشد فهد",
        emails: "<ahmed@example.com> , <rashedf@example.com>",
        content: "",
        avatar: "/figmaAssets/avatar-2.png",
        bgColor: "bg-[#00CA7C1A]",
        borderColor: "border-[#00c97b]",
        hasLongContent: false,
    },
    {
        id: 3,
        userName: "محمد صقر",
        timestamp: "منذ 3 أيام",
        timeLabel: "",
        recipient: "موجهة إلي راشد فهد",
        emails: "<ahmed@example.com> , <rashedf@example.com>",
        content: "السلام عليكم\nنحتاج عرض سعر لخدمات الصيانة اللازمة للمعدات.",
        avatar: "/figmaAssets/avatar-3.png",
        bgColor: "bg-white",
        borderColor: "border-slate-200",
        hasLongContent: false,
    },
    {
        id: 4,
        userName: "محمد صقر",
        timestamp: "منذ 5 دقائق",
        timeLabel: "",
        recipient: "موجهة إلي راشد فهد",
        emails: "<ahmed@example.com> , <rashedf@example.com>",
        content: "",
        avatar: "/figmaAssets/avatar-4.png",
        bgColor: "bg-[#00CA7C1A]",
        borderColor: "border-[#00c97b]",
        hasLongContent: false,
    },
    {
        id: 5,
        userName: "محمد صقر",
        timestamp: "منذ 3 دقائق",
        timeLabel: "",
        recipient: "موجهة إلي راشد فهد",
        emails: "<ahmed@example.com> , <rashedf@example.com>",
        content: "السلام عليكم\nنحتاج عرض سعر لخدمات الصيانة اللازمة للمعدات.",
        avatar: "/figmaAssets/avatar-5.png",
        bgColor: "bg-[#FFA43D1A]",
        borderColor: "border-[#ffa43cb2]",
        hasLongContent: false,
    },
    {
        id: 6,
        userName: "محمد صقر",
        timestamp: "منذ 3 أيام",
        timeLabel: "",
        recipient: "موجهة إلي راشد فهد",
        emails: "<ahmed@example.com> , <rashedf@example.com>",
        content: "السلام عليكم\nنحتاج عرض سعر لخدمات الصيانة اللازمة للمعدات.",
        avatar: "/figmaAssets/avatar-6.png",
        bgColor: "bg-white",
        borderColor: "border-slate-200",
        hasLongContent: false,
    },
];

const MessageCard = ({ message }: { message: Message }) => {
    const [isExpanded, setIsExpanded] = useState(
        message.bgColor === "bg-white"
    );

    return (
        <Card
            className={`flex w-full items-start gap-4 my-4 first-of-type:mt-0 p-4 ${message.bgColor} rounded-lg border ${message.borderColor}`}
            dir="rtl"
        >
            <CardContent className="flex flex-col gap-2 p-0 flex-1">
                <div className="flex items-center gap-2 w-full">
                    <Avatar className="w-10 h-10">
                        <AvatarImage
                            src={message.avatar}
                            alt={message.userName}
                        />
                        <AvatarFallback>
                            {message.userName.charAt(0)}
                        </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col flex-1">
                        <div className="flex items-center gap-4">
                            <span className="font-semibold text-darkblack-03 text-sm">
                                {message.userName}
                            </span>
                            <span className="text-[#7a8699] text-xs">
                                {message.timestamp} {message.timeLabel}
                            </span>
                        </div>

                        {isExpanded && (
                            <div className="flex items-center gap-4 text-xs text-[#7a8699]">
                                <span className="flex items-center gap-1">
                                    <HiOutlineReply className="w-3 h-3" />
                                    {message.recipient}
                                </span>
                                <span className="flex items-center gap-1">
                                    <HiOutlineMail className="w-3 h-3" />
                                    {message.emails}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {isExpanded && message.content && (
                    <p className="text-darkblack-03 whitespace-pre-line text-sm">
                        {message.content}
                    </p>
                )}
            </CardContent>

            <div className="flex items-center gap-2">
                {isExpanded ? (
                    <ChevronUp
                        className="w-5 h-5 text-[#7a8699] cursor-pointer"
                        onClick={() => setIsExpanded(false)}
                    />
                ) : (
                    <ChevronDown
                        className="w-5 h-5 text-[#7a8699] cursor-pointer"
                        onClick={() => setIsExpanded(true)}
                    />
                )}
                <MdMoreVert className="w-5 h-5 text-[#7a8699] cursor-pointer" />
            </div>
        </Card>
    );
};

export const UserProfileSection = () => {
    return (
        <section
            className="flex flex-col w-full h-full overflow-hidden"
            dir="rtl"
        >
            <header className="flex items-center justify-between w-full px-6 pb-4 bg-white flex-shrink-0">
                <h1 className="text-darkblack-02 text-2xl font-bold">
                    نواجه مشكلة في عدم عمل واجهة المستخدم
                </h1>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-[#7a8699] text-sm">
                        <span>00:00:00</span>
                        <CirclePlayIcon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2 text-[#7a8699]">
                        <Button
                            variant="outline"
                            className="flex items-center gap-2 border-[#7a8699]"
                        >
                            <LucideSquareCheckBig className="w-4 h-4" />
                            تحويل لمهمة
                        </Button>

                        <Button
                            variant="outline"
                            className="flex items-center gap-2 border-[#7a8699] p-2"
                        >
                            <BsArrowsFullscreen className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="outline"
                            className="flex items-center gap-2 border-[#7a8699] p-1"
                        >
                            <RxDotsVertical className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </header>

            <div className="flex flex-col w-full p-4 overflow-y-auto flex-1">
                <ScrollArea>
                    {messages.map((message) => (
                        <MessageCard key={message.id} message={message} />
                    ))}
                </ScrollArea>
            </div>
        </section>
    );
};
