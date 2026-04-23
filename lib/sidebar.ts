// Simple event-based sidebar control (no context needed)
export const SIDEBAR_EVENT = 'open-appointment-sidebar';

export function openAppointmentSidebar() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(SIDEBAR_EVENT));
  }
}
