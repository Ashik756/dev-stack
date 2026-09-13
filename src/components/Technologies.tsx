import { use, useState } from "react";
import TechnologieCard from "./TechnologieCard";
import { toast } from "react-toastify";

export interface TechItem {
    id: string | number;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge?: string;
}

interface TechnologiesProps {
    techPromise: Promise<TechItem[]>;
}

export default function Technologies({ techPromise }: TechnologiesProps) {
    const technologies = use(techPromise);
    const [selectedStack, setSelectedStack] = useState<TechItem[]>([]);

    const handleAddToStack = (tech: TechItem) => {
        if (!selectedStack.some((item) => item.id === tech.id)) {
            setSelectedStack([...selectedStack, tech]);
            toast.success(`${tech.name} added to your stack!`);
        }
    };

    const handleRemoveFromStack = (id: string | number, name: string) => {
        setSelectedStack(selectedStack.filter((item) => item.id !== id));
        toast.error(`${name} removed from your stack!`);
    };

    const handleRemoveAll = () => {
        setSelectedStack([]);
        toast.warn("All technologies removed from stack!");
    };

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    Explore the <span className="text-pink-600">Technologies</span>
                </h2>
                <p className="text-gray-500 text-base">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech) => {
                        const isInStack = selectedStack.some((item) => item.id === tech.id);
                        return (
                            <TechnologieCard
                                key={tech.id}
                                tech={tech}
                                onAdd={handleAddToStack}
                                isInStack={isInStack}
                            />
                        );
                    })}
                </div>

                <div className="lg:col-span-1 sticky top-6">
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="font-bold text-xl text-gray-900 mb-1">Your Stack</h3>
                        <p className="text-xs text-gray-400 mb-6">

                            {
                                
                                    selectedStack.length === 0
                                        ? "No technologies selected yet."
                                        : `${selectedStack.length} Technology Selected`
                                
                            }
                        </p>

                        {selectedStack.length === 0 ? (
                            <div className="border border-dashed border-gray-200 rounded-2xl p-8 text-center text-gray-400 text-sm mb-6 bg-gray-50/30">
                                Your stack is empty.
                            </div>
                        ) : (
                            <div className="space-y-3 mb-6 max-h-105 overflow-y-auto pr-1">
                                {selectedStack.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between border border-gray-100 rounded-xl p-3.5 bg-white shadow-xs"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                                            <div>
                                                <h4 className="font-bold text-sm text-gray-900">{item.name}</h4>
                                                <span className="text-[11px] text-gray-400">{item.category}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleRemoveFromStack(item.id, item.name)}
                                            className="text-gray-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {selectedStack.length > 0 && (
                            <button
                                onClick={handleRemoveAll}
                                className="w-full border border-red-100 text-red-500 hover:bg-red-50 text-sm font-semibold py-3 rounded-xl transition-colors cursor-pointer"
                            >
                                Remove All
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}