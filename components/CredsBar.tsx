const DEFAULT_CREDS = [
  'Serving Brighton Since 2012',
  'Licensed Therapists',
  'Certified Coaches',
  'HSA Qualified',
  '$82 Flat Fee',
  'Evening Appointments',
];

export default function CredsBar({ items = DEFAULT_CREDS }: { items?: string[] }) {
  return (
    <div className="creds">
      {items.map((item) => (
        <span key={item} className="cred">
          {item}
        </span>
      ))}
    </div>
  );
}
