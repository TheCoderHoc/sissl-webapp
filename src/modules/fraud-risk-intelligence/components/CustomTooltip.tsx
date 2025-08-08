const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length > 0) {
        const { name, value, color } = payload[0].payload;

        return (
            <div className="bg-black/80 backdrop-blur-sm text-white  text-sm px-3 py-2 rounded shadow-md border border-white/10"

            >
                <div className="flex items-center gap-2 mb-1">
                    <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: color }}
                    />
                    <span className="font-medium">{name} Risk</span>
                </div>
                <div className="text-white/70">{value} Profiles</div>
            </div>
        );
    }

    return null;
};
export default CustomTooltip;