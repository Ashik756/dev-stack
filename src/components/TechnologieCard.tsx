import type { TechItem } from "./Technologies";

interface TechnologieCardProps {
  tech: TechItem;
  onAdd: (tech: TechItem) => void;
  isInStack: boolean;
}

export default function TechnologieCard({ tech, onAdd, isInStack }: TechnologieCardProps) {
  const getBadgeStyle = (badge?: string) => {
    switch (badge?.toLowerCase()) {
      case "popular":
        return "bg-sky-50 text-sky-500";
      case "versatile":
        return "bg-emerald-50 text-emerald-600";
      case "fast":
        return "bg-amber-50 text-amber-600";
      case "ssr / edge":
        return "bg-purple-50 text-purple-600";
      case "standard":
        return "bg-emerald-50 text-emerald-600";
      case "top sql":
        return "bg-sky-50 text-sky-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center p-2 border border-gray-100">
              <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 tracking-tight">{tech.name}</h3>
          </div>
          {tech.badge && (
            <span className={`text-xs px-3 py-1 rounded-full font-medium ${getBadgeStyle(tech.badge)}`}>
              {tech.badge}
            </span>
          )}
        </div>

        <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-4 mb-5">
          <span className="bg-gray-50 px-3 py-1.5 rounded-lg font-medium text-gray-600 border border-gray-100/60">
            {tech.category}
          </span>
          <span className="font-medium text-gray-500">{tech.difficulty}</span>
          <span className="flex items-center gap-1 font-semibold text-gray-800">
            <span className="text-amber-400">★</span> {tech.rating}
          </span>
        </div>

        <button 
          onClick={() => onAdd(tech)}
          disabled={isInStack}
          className={`w-full text-sm font-medium py-3 rounded-xl transition-all cursor-pointer ${
            isInStack 
              ? "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none" 
              : "bg-[#0B0F19] hover:bg-black text-white shadow-sm"
          }`}
        >
          {isInStack ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}