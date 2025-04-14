interface WinBadgeProps {
  className?: string;
}

export default function WinBadge({ className = "" }: WinBadgeProps) {
  return (
    <div className={`absolute right-2 top-2 ${className}`}>
      <div className="flex items-center justify-center rounded-md bg-red-600 px-3 py-1 text-lg font-black text-white shadow-lg">
        <span className="mr-1">WIN</span>
        <span className="text-yellow-300">THIS!</span>
      </div>
    </div>
  );
}
