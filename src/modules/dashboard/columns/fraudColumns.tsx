'use client';

import { ColumnDef } from '@tanstack/react-table';
import { BadgeCheck, XCircle } from 'lucide-react';
import Link from 'next/link';

export interface IFraudUser {
  id: string;
  name: string;
  submitted: string;
  score: string;
  match: boolean;
  location: string;
  status: string;
}

export const fraudColumns = (): ColumnDef<IFraudUser>[] => [
  {
    header: 'Screening ID',
    accessorKey: 'id',
  },
  {
    header: 'User Info',
    accessorKey: 'name',
  },
  {
    header: 'Submitted',
    accessorKey: 'submitted',
  },
  {
    header: 'Risk score',
    accessorKey: 'score',
  },
  {
    header: 'Face Match',
    accessorKey: 'match',
    cell: ({ row }) => {
      const isMatch = row.getValue('match') as boolean;
      return (
        <div className="flex items-center gap-2">
          {isMatch ? (
            <>
              <BadgeCheck className="text-green-500 w-4 h-4" />
              <span className="text-green-400">Match</span>
            </>
          ) : (
            <>
              <XCircle className="text-red-500 w-4 h-4" />
              <span className="text-red-500">No Match</span>
            </>
          )}
        </div>
      );
    },
  },
  {
    header: 'Location risk',
    accessorKey: 'location',
  },
  {
    header: 'Status',
    accessorKey: 'status',
  },
  {
    header: 'Action',
    id: 'action',
    cell: ({ row }) => {
      const userId = row.original.id;
      // const encodedId = encodeURIComponent(userId)
      const cleanId = userId.replace(/^#/, "");
      return (
        <Link
          href={`/fraud-risk-intelligence/${cleanId}`}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-medium text-xs px-3 py-1 rounded-md"
        >
          View report
        </Link>
      );
    }
  },
];
