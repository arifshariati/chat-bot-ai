import { APPOINTMENT_TABLE_HEADER } from "@/constants/menu";
import { getMonthName } from "@/lib/utils";
import { DataTable } from "../table";
import { TableCell, TableRow } from "../ui/table";
import { CardDescription } from "../ui/card";

type AllAppointmentsProps = {
  bookings:
    | {
        Customer: {
          Domain: {
            name: string;
          } | null;
        } | null;
        id: string;
        email: string;
        domainId: string | null;
        date: Date;
        slot: string;
        createdAt: Date;
      }[]
    | undefined;
};

const AllAppointments = ({ bookings }: AllAppointmentsProps) => {
  return (
    <DataTable headers={APPOINTMENT_TABLE_HEADER}>
      {bookings ? (
        bookings.map((booking) => (
          <TableRow key={booking.id}>
            <TableCell>{booking.email}</TableCell>
            <TableCell>
              <div>
                {getMonthName(booking.date.getMonth())} {booking.date.getDate()} {booking.date.getFullYear()}
              </div>
              <div className="uppercase">{booking.slot}</div>
            </TableCell>
            <TableCell>
              <div>
                {getMonthName(booking.createdAt.getMonth())} {booking.createdAt.getDate()} {booking.createdAt.getFullYear()}
              </div>
              <div>
                {booking.createdAt.getHours()} {booking.createdAt.getMinutes()} {booking.createdAt.getHours() > 12 ? "PM" : "AM"}
              </div>
            </TableCell>
            <TableCell className="text-right">{booking.Customer?.Domain?.name}</TableCell>
          </TableRow>
        ))
      ) : (
        <CardDescription>No Appointments</CardDescription>
      )}
    </DataTable>
  );
};

export default AllAppointments;
