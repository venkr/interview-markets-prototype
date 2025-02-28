import { X } from "lucide-react";

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HowItWorksModal({ isOpen, onClose }: HowItWorksModalProps) {
  if (!isOpen) return null;

  const outcomes = [
    {
      result: "N/A",
      multiplier: "1x",
      color: "text-gray-500",
      bgColor: "bg-gray-100",
      description: "We do not interview the candidate within 3 months of their application"
    },
    {
      result: "NO",
      multiplier: "0x",
      color: "text-red-500",
      bgColor: "bg-red-50",
      description: "We interview the candidate and reject them."
    },
    {
      result: "N/A",
      multiplier: "1x",
      color: "text-gray-500",
      bgColor: "bg-gray-100",
      description: "We extend an offer to the candidate but they don't accept within 30 days."
    },
    {
      result: "N/A",
      multiplier: "1x",
      color: "text-gray-500",
      bgColor: "bg-gray-100",
      description: "We extend an offer to the candidate, and they accept but we part ways within 30 days."
    },
    {
      result: "YES",
      multiplier: "5x",
      color: "text-green-500",
      bgColor: "bg-green-50",
      description: "We extend an offer to the candidate, and they accept, and continue to work with us past 30 days."
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">How It Works</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <p className="text-base text-gray-700">
              Get a referral bonus for backing promising candidates - we pay you 5x your deposit if they join our team.
            </p>
          </div>

          <div className="mb-4">
            <div className="space-y-3">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex border rounded-md overflow-hidden">
                  <div className={`w-24 flex flex-col items-center justify-center py-3 ${outcome.bgColor}`}>
                    <span className={`font-medium ${outcome.color}`}>{outcome.result}</span>
                    <span className={`text-xs ${outcome.color}`}>{outcome.multiplier}</span>
                  </div>
                  <div className="flex-1 p-3 text-sm text-gray-700">
                    {outcome.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
