import { ticketAtom, ticketDataAtom } from "@/atoms/TicketAtoms";
import Layout from "@/layouts/Layout";
import { Head } from "@inertiajs/react";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { UserProfileSection } from "./UserProfileSection";
import { MessageInputSection } from "./MessageInputSection";
import { ChatWindowSection } from "./ChatWindowSection";
import { SidebarSection } from "./SidebarSection";

export default function Ticket({ data }: { data: any }) {
    const [ticket, setTicket] = useAtom(ticketAtom);
    const [ticketData, setTicketData] = useAtom(ticketDataAtom);

    if (ticket == null) {
        setTicket(data.ticket);
    }
    if (ticketData == null) {
        setTicketData(data);
    }

    useEffect(() => {
        console.log(ticket);
        setTicket(data.ticket);
    }, [data]);

    const headerTabs = [
        {
            name: "نواجه مشكلة في عدم عمل واجهة ...",
            subtitle: "رقم الطلب: 4545",
        },

        {
            name: "نواجه مشكلة في عدم عمل واجهة ...",
            subtitle: "رقم الطلب: 4545",
        },
    ];

    return (
        <Layout title="الطلبات" tabs={false} className="bg-white">
            <Head title="الطلبات" />
            <div className="flex ps-4">
                <div className="flex items-center gap-2 pe-4 py-3 border-e border-b border-b-white border-[#E2E8F0] min-w-[250px]">
                    <div>
                        <h4 className="text-sm">
                            نواجه مشكلة في عدم عمل واجهة ...
                        </h4>
                        <span className="text-xs text-[#98A2B2]">
                            رقم الطلب: 4545
                        </span>
                    </div>
                    <button>
                        <IoMdClose size={16} color="#373E5D" />
                    </button>
                </div>
                <div className="border-b w-full flex">
                    {headerTabs.map((tab) => (
                        <div className="flex cursor-pointer items-center gap-2 px-4 border-e border-[#E2E8F0] text-[#98A2B2]">
                            <div>
                                <h4 className="text-sm">{tab.name}</h4>
                                <span className="text-xs">{tab.subtitle}</span>
                            </div>
                            <button>
                                <IoMdClose size={16} color="#373E5D" />
                            </button>
                        </div>
                    ))}
                    <button className="py-2 px-3 mt-5 rounded-lg border block my-auto ms-4">
                        <IoMdAdd size={20} color="#373E5D" />
                    </button>
                </div>
            </div>

            <section className="flex">
                <div className="flex flex-col h-[calc(100dvh-160px)] overflow-hidden pt-6 flex-1">
                    <UserProfileSection />
                    <MessageInputSection />
                </div>

                <div className="flex border-s relative">
                    <ChatWindowSection />
                    <SidebarSection />
                </div>
            </section>
        </Layout>
    );
}
