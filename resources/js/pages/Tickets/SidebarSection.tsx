const sidebarItems = [
    { icon: "/figmaAssets/icon-actions.svg", label: "الإجراءات" },
    { icon: "/figmaAssets/icon-contact-info.svg", label: "بيانات الاتصال" },
    { icon: "/figmaAssets/icon-related-tickets.svg", label: "تذاكر مرتبطة" },
    { icon: "/figmaAssets/icon-details.svg", label: "التفاصيل" },
    { icon: "/figmaAssets/icon-timeline.svg", label: "السجلات الزمنية" },
];

export const SidebarSection = () => {
    return (
        <div
            className="flex flex-col flex-shrink-0 items-center gap-2 p-2 pt-6 border-s border-[#E2E8F0] h-full w-28"
            data-testid="sidebar-left"
        >
            {sidebarItems.map((item, index) => (
                <button
                    key={index}
                    className="flex flex-col items-center justify-center p-0 outline-none focus:outline-none"
                    data-testid={`button-sidebar-${index}`}
                    aria-label={item.label}
                >
                    <img
                        className="w-12 h-12 mb-1"
                        alt={item.label}
                        src={item.icon}
                    />
                    <span className="text-xs">{item.label}</span>
                </button>
            ))}
        </div>
    );
};
