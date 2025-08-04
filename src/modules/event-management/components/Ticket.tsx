import React from "react";

interface TicketProps {
  ticket: {
    ticket_name: string;
    ticket_price: number;
    sale_end_date?: string;
  };
  onClick?: () => void;
}

const Ticket: React.FC<TicketProps> = ({ ticket, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:bg-white/5 transition"
    >
      <div className="flex-1 p-4 space-y-1">
        <h4 className="font-semibold">{ticket.ticket_name}</h4>
        <p className="text-green-500 text-sm">● On sale</p>
        <p className="text-sm text-muted-foreground">Sales end on</p>
        <div className="inline-flex items-center gap-1 bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-md">
          <span>📅</span>
          <span>
            {ticket.sale_end_date || "Saturday, April 2025 at 7:30pm"}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-4 border-l border-dashed border-white/20">
        <p className="text-sm text-muted-foreground">Price</p>
        <p className="font-bold text-xl text-pink-500">
          ₦{Number(ticket.ticket_price).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Ticket;
