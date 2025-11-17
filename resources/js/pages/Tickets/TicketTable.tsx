import { Head } from "@inertiajs/react";

import { ticketDataAtom } from "@/atoms/TicketAtoms";
import LayoutFull from "@/layouts/LayoutFull";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ColDef, ColGroupDef, ModuleRegistry } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useAtom } from "jotai";
import { StrictMode, useEffect, useState } from "react";

export default function TicketTable({ data }) {
    const [ticketsData, setTicketsData] = useAtom(ticketDataAtom);

    if (ticketsData == null) {
        setTicketsData(data);
    }

    return (
        <LayoutFull title={"الطلبات"} tabs={false}>
            <Head title={"الطلبات"} />
            <div className="h-full">
                <div
                    className="bg-white rounded-sm shadow-sm h-full"
                    x-chunk="tasktable-chunk-1"
                >
                    <StrictMode>
                        <GridExample
                            rows={ticketsData && ticketsData.tickets}
                        />
                    </StrictMode>
                </div>
            </div>
        </LayoutFull>
    );
}

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const GridExample = ({ rows }) => {
    const [rowData, setRowData] = useState(rows);

    useEffect(() => {
        setRowData(rows);
    }, [rows]);

    interface RowData {
        subject: any;
    }

    const [columnDefs, setColumnDefs] = useState<
        (ColDef<RowData> | ColGroupDef<RowData>)[]
    >([
        {
            field: "subject",
            headerName: "الطلب",
            width: 350,
            editable: true,
        },
    ]);

    return (
        <div
            className={"ag-theme-quartz h-full"}
            // style={{ height: 100 }}
        >
            <AgGridReact
                rowData={rowData}
                // @ts-ignore
                columnDefs={columnDefs}
                suppressRowClickSelection={true}
                pagination={true}
                paginationPageSize={10}
                paginationPageSizeSelector={[10, 25, 50]}
            />
        </div>
    );
};
