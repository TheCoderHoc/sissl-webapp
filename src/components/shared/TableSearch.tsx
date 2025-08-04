type TableHeaderWithSearchProps = {
    title: string;
    search: string;
    setSearch: (value: string) => void;
    onFilterClick?: () => void;
    searchPlaceholder?: string;
    filterText?: string;
};

export default function TableHeaderWithSearch({
    title,
    search,
    setSearch,
    onFilterClick,
    searchPlaceholder = "Search for staff",
    filterText = "Filter staff",
}: TableHeaderWithSearchProps) {
    return (
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            <div className="flex gap-3">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder={searchPlaceholder}
                    className="border bg-white/10 rounded-md px-3 py-2 text-sm w-48"
                />
                <button
                    onClick={onFilterClick}
                    className="border-[0.5px] rounded-md px-4 py-2 text-sm hover:bg-gray-100 w-40"
                >
                    {filterText}
                </button>
            </div>
        </div>
    );
}
