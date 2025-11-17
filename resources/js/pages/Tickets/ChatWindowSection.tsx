import { Badge } from "@/components/ui/badge";
import {
    ChevronLeft,
    ChevronRight,
    LucideCircleUser,
    LucideNotepadText,
} from "lucide-react";
import { useState } from "react";
import { BsCash } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
import { MdOutlineNewReleases } from "react-icons/md";
import { PiArrowBendDoubleUpLeft } from "react-icons/pi";

interface TimelineItem {
    id: number;
    title: string;
    date: string;
    time: string;
    period: string;
    description: string;
    icon: React.ReactNode;
    iconBgColor: string;
}

const timelineData: TimelineItem[] = [
    {
        id: 1,
        title: "أحدث الطلبات",
        date: "22-09-2024",
        time: "02:32",
        period: "م",
        description:
            "قام @محمد صقر بإنشاء تذكره باسم نواجه مشكله في عدم عمل واجة المستخدم الحاليه ارجو الرد",
        icon: <BsCash className="w-5 h-5 text-blue-600" />,
        iconBgColor: "bg-blue-100",
    },
    {
        id: 2,
        title: "أحدث الطلبات",
        date: "22-09-2024",
        time: "02:32",
        period: "م",
        description:
            "قام @راشد فهد بالرد علي التذكره ب جاري العمل علي اصلاح المشكله",
        icon: <PiArrowBendDoubleUpLeft className="w-5 h-5 text-gray-600" />,
        iconBgColor: "bg-gray-100",
    },
    {
        id: 3,
        title: "أحدث الطلبات",
        date: "22-09-2024",
        time: "02:32",
        period: "م",
        description:
            "قام @العميل بالرد علي التذكره شاكرين لمجهوداتكم والرد السريع",
        icon: <LucideCircleUser className="w-5 h-5 text-green-600" />,
        iconBgColor: "bg-green-100",
    },
    {
        id: 4,
        title: "أحدث الطلبات",
        date: "22-09-2024",
        time: "02:32",
        period: "م",
        description:
            "قام @راشد فهد باضافة ملاحظه ب ارجو العمل علي حل المشكله باسرع ما يمكن",
        icon: <LucideNotepadText className="w-5 h-5 text-orange-600" />,
        iconBgColor: "bg-orange-100",
    },
    {
        id: 5,
        title: "أحدث الطلبات",
        date: "22-09-2024",
        time: "02:32",
        period: "م",
        description: "قام @محمد صقر بتغيير حاله التذكره من مفتوح الي مغلق",
        icon: <CiGrid2H className="w-5 h-5 text-purple-600" />,
        iconBgColor: "bg-purple-100",
    },
];

export const ChatWindowSection = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <section
            className={`flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out ${
                isCollapsed ? "w-0 min-w-0" : "min-w-[300px] w-32"
            }`}
        >
            {/* Toggle Button */}
            <button
                onClick={toggleCollapse}
                className={`absolute top-12 w-8 h-8 flex items-center justify-center bg-white rounded-full border border-slate-200 hover:bg-slate-50 hover:shadow-md transition-all duration-200 z-20 ${
                    isCollapsed ? "-right-4" : "-right-4"
                }`}
            >
                {isCollapsed ? (
                    <ChevronRight className="w-5 h-5 text-slate-600" />
                ) : (
                    <ChevronLeft className="w-5 h-5 text-slate-600" />
                )}
            </button>

            {/* Content wrapper */}
            <div
                className={`flex flex-col h-full transition-opacity duration-200 ${
                    isCollapsed ? "opacity-0 invisible" : "opacity-100 visible"
                } px-4 pt-6 overflow-y-auto`}
            >
                {/* Header */}
                <header className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                        <h2 className="text-lg font-semibold text-[#1a1d1f] whitespace-nowrap">
                            السجلات الزمنية
                        </h2>
                        <Badge
                            variant="outline"
                            className="w-8 h-8 flex items-center justify-center p-0 rounded-xl border-slate-200 bg-white"
                        >
                            <span className="text-sm font-medium text-[#1a1d1f]">
                                {timelineData.length}
                            </span>
                        </Badge>
                    </div>
                </header>

                {/* Timeline */}
                <div className="flex gap-6 relative">
                    {/* Timeline Items with integrated rail */}
                    <div className="flex flex-col gap-4 flex-1">
                        {timelineData.map((item, index) => (
                            <article
                                key={item.id}
                                className="relative flex gap-3 items-start"
                            >
                                {/* Timeline Rail segment */}
                                <div className="relative flex-shrink-0">
                                    {/* Icon Badge */}
                                    <div
                                        className={`w-11 h-11 rounded-2xl ${item.iconBgColor} flex items-center justify-center z-10 relative`}
                                    >
                                        {item.icon}
                                    </div>

                                    {/* Vertical line connecting to next item - full height */}
                                    {index < timelineData.length - 1 && (
                                        <div className="absolute right-[21px] top-11 w-[2px] h-[calc(100%+4.5rem)] bg-slate-200" />
                                    )}
                                </div>

                                {/* Content Card */}
                                <div className="flex flex-col bg-white flex-1">
                                    <h3 className="text-sm font-semibold text-[#1a1d1f] mb-1.5">
                                        {item.title}
                                    </h3>
                                    <time
                                        className="text-xs text-[#6f7787] mb-3"
                                        dir="rtl"
                                    >
                                        {item.date} {item.time} {item.period}
                                    </time>
                                    <p className="text-sm text-[#1a1d1f] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
