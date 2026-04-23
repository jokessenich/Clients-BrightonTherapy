'use client';

import { openAppointmentSidebar } from '@/lib/sidebar';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function RequestButton({
  className = 'btn btn-fill',
  children = 'Request Appointment',
}: Props) {
  return (
    <button className={className} onClick={openAppointmentSidebar} type="button">
      {children}
    </button>
  );
}
