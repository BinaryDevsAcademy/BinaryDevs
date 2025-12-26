import React, { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../ui/input-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

function TableManagement({
  title = "",
  data = [],
  columns = [],
  searchKeys = [],
  statusKey = null,
  clickable = false
}) {
  const safeData = Array.isArray(data) ? data : [];

  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [filteredData, setFilteredData] = useState(safeData);
  const [selectedData, setSelectedData] = useState(null);

  /* ---------------- FILTER LOGIC ---------------- */
  useEffect(() => {
    const updated = safeData.filter((item) => {
      const matchesSearch =
        searchKeys.length === 0 ||
        searchKeys.some((key) =>
          String(item?.[key] ?? "")
            .toLowerCase()
            .includes(searchText)
        );

      const matchesStatus =
        !statusKey ||
        statusFilter === "all" ||
        item?.[statusKey] === statusFilter;

      return matchesSearch && matchesStatus;
    });

    setFilteredData(updated);
  }, [searchText, statusFilter, safeData]);

  /* ---------------- RENDER ---------------- */
  return (
    <>
      <section className="w-full flex flex-col gap-5 p-3">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{title}</h1>

          <div className="flex items-center gap-4">
            {/* SEARCH */}
            <InputGroup className="w-[360px] rounded-xl border">
              <InputGroupInput
                placeholder="Search..."
                onChange={(e) =>
                  setSearchText(e.target.value.toLowerCase())
                }
              />
              <InputGroupAddon>
                <Search size={18} />
              </InputGroupAddon>
              <InputGroupAddon className="text-xs">
                {filteredData.length} results
              </InputGroupAddon>
            </InputGroup>

            {/* STATUS FILTER (optional) */}
            {statusKey && (
              <Select onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[200px] h-11 rounded-xl">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All</SelectItem>
                    {[...new Set(safeData.map((d) => d[statusKey]))].map(
                      (status) => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      )
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          </div>
        </div>

        {/* TABLE */}
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead key={col.key}>{col.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredData.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center py-8 text-gray-500"
                >
                  No results found
                </TableCell>
              </TableRow>
            )}

            {filteredData.map((row, index) => (
              <TableRow
                key={index}
                className="cursor-pointer hover:bg-gray-50"
                onClick={clickable ? () => setSelectedData(row) : ""}
              >
                {columns.map((col) => (
                  <TableCell key={col.key}>
                    {col.render
                      ? col.render(row[col.key], row)
                      : row[col.key] ?? "—"}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      {/* DETAILS MODAL */}
      {selectedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-lg font-semibold">Details</h2>
              <X
                size={18}
                className="cursor-pointer"
                onClick={() => setSelectedData(null)}
              />
            </div>

            {/* BODY */}
            <div className="px-6 py-5 space-y-3 text-sm">
              {Object.entries(selectedData).map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4">
                  <span className="text-gray-500 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>
                  <span className="font-medium text-right">
                    {String(value)}
                  </span>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50">
              <button
                onClick={() => setSelectedData(null)}
                className="px-4 py-2 rounded-lg text-sm border hover:bg-gray-100"
              >
                Close
              </button>
              <button className="px-4 py-2 rounded-lg text-sm bg-indigo-600 text-white hover:bg-indigo-700">
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TableManagement;
