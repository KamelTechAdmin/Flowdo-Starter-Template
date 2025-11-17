import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { ChevronUp, Paperclip, Search, X } from "lucide-react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { PiFilePlus, PiTextAaBold } from "react-icons/pi";

const quickReplies = [
    "مرحبا بك، سيتم تحويل المشكلة للفريق المختص",
    "أهلا تم استلام طلبكم وجاري معالجته",
    "مرحبا بك، سيتم تحويل المشكلة للفريق المختص",
    "مرحبا بك، سيتم تحويل المشكلة للفريق المختص",
];

const ccEmails = [
    "ahmed@example.com",
    "ahmed@example.com",
    "ahmed@example.com",
];

export const MessageInputSection = () => {
    return (
        <section
            className="flex flex-col w-full gap-3 pt-4 pb-6 px-6 bg-white border-t border-slate-200 flex-shrink-0"
            dir="rtl"
        >
            {/* Quick Replies Section */}
            <div className="flex items-center gap-4 w-full">
                <div className="flex items-center gap-4 flex-1 justify-start">
                    <span className="text-sm text-[#7a8699] whitespace-nowrap">
                        ردود سريعة
                    </span>
                    <ScrollArea className="flex-1 max-w-3xl bg-[#F7F8FA] rounded-lg p-2 text-[#7A8699]">
                        <div className="flex items-center gap-2">
                            {quickReplies.map((reply, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="px-4 py-1.5 rounded-full border-slate-300 whitespace-nowrap cursor-pointer hover:bg-slate-50 text-xs"
                                >
                                    {reply}
                                </Badge>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>

                <Button
                    variant="outline"
                    className="flex items-center gap-1 px-3 py-2 rounded-lg border-[#7A8699] text-[#7A8699] "
                >
                    <PiFilePlus className="w-4 h-4" />
                    <span className="text-sm">استدعاء من قالب</span>
                </Button>
            </div>

            {/* Input Section */}
            <div className="flex flex-col w-full border border-slate-200 rounded-lg bg-white">
                {/* Reply To and CC Section */}
                <div className="flex items-start justify-between p-4 border-b border-slate-200">
                    <div className="flex flex-col gap-2 flex-1">
                        {/* Reply To */}
                        <div className="flex items-center gap-2 justify-start">
                            <span className="text-sm text-[#7a8699]">
                                رد الى :
                            </span>
                            <Badge
                                variant="outline"
                                className="px-3 py-1 rounded-full border-[#7a8699] border-[0.5px] text-[#7a8699] text-xs"
                            >
                                ahmed@example.com
                            </Badge>
                        </div>

                        {/* CC Section */}
                        <div className="flex items-center gap-2 justify-start">
                            <span className="text-sm text-[#7a8699]">CC :</span>

                            <div className="relative">
                                <Input
                                    placeholder="ادخل الاسم"
                                    className="w-48 h-8 text-xs border-[#E2E8F0] ps-6 bg-[#F7F8FA]"
                                />
                                <Search className="w-3 h-3 text-[#7a8699] absolute right-2 top-1/2 -translate-y-1/2" />
                            </div>
                            <div className="flex items-center gap-1">
                                {ccEmails.map((email, index) => (
                                    <Badge
                                        key={index}
                                        variant="outline"
                                        className="px-3 py-1 rounded-full border-[0.5px] border-[#7a8699] text-[#7a8699] flex items-center gap-1 text-xs"
                                    >
                                        <X className="w-3 h-3 cursor-pointer" />
                                        <span>{email}</span>
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-[#00c97b] flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                                CC
                            </span>
                        </div>

                        <Button
                            variant="outline"
                            className="flex items-center gap-2 border-[#7a8699] text-[#7a8699] p-2"
                        >
                            <BsArrowsFullscreen className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Text Input Area */}
                <div className="flex flex-col p-4 gap-3">
                    <Textarea
                        placeholder="إضافة رد ..."
                        className="border-0 resize-none focus-visible:ring-0 text-sm"
                        rows={2}
                    />

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <PiTextAaBold className="w-5 h-5 text-[#7a8699] cursor-pointer" />
                            <img
                                src="/figmaAssets/icon-sparkle.svg"
                                alt="AI sparkle"
                                className="cursor-pointer"
                            />
                            <Paperclip className="w-5 h-5 text-[#7a8699] cursor-pointer" />
                        </div>

                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                className="px-3 py-2 rounded-lg text-[#7a8699] border-[0.5px] border-[#7a8699] text-sm flex items-center gap-1"
                            >
                                <X className="w-4 h-4" />
                                <span>إلغاء</span>
                            </Button>

                            <Button className="px-5 py-2 rounded-lg bg-[#00c97b] hover:bg-[#00c97b]/90 text-white text-sm flex items-center gap-2">
                                <span>إضافة رد</span>
                                <div className="w-px h-5 bg-white/30" />
                                <ChevronUp className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
