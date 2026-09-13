export default function TechSkeleton() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm animate-pulse flex flex-col justify-between h-60">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-xl"></div>
            <div className="w-24 h-5 bg-gray-200 rounded"></div>
          </div>
          <div className="w-16 h-5 bg-gray-200 rounded-full"></div>
        </div>
        <div className="space-y-2 mb-6">
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="w-16 h-6 bg-gray-200 rounded"></div>
        <div className="w-20 h-10 bg-gray-200 rounded-xl"></div>
      </div>
    </div>
  );
}