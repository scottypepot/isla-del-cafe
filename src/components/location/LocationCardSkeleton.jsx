// Placeholder tile shown while branches load from the API.
export default function LocationCardSkeleton() {
  return (
    <div className="flex flex-col" aria-hidden="true">
      <div className="aspect-square w-full animate-pulse rounded-lg bg-neutral-800/90" />
      <div className="mt-4 h-[46px] w-full animate-pulse border border-isla-black/10 bg-isla-black/5" />
    </div>
  );
}
