import { Pencil, Trash2 } from "lucide-react";

function QuestionCard({
  questionNumber,
  totalQuestions,
  question,
}: {
  questionNumber: number;
  totalQuestions: number;
  question: string;
}) {
  const radioOptions = ["Yes", "No"];
  return (
    <div className="w-[70%] bg-gray-100 border-1 border-blue-800 rounded-xl mb-4 overflow-hidden transition">
      <div className="grid grid-cols-12 border-b border-gray-200 px-4 py-4">
        <div className="col-span-8 space-x-16">
          <span className="text-sm">{`QUESTION ${questionNumber}/${totalQuestions}`}</span>
          <span className="text-xxs px-3 py-1 border text-primary border-primary rounded-4xl">
            <b>
              Active <span className="text-indigo-800">until</span>
            </b>{" "}
            5d : 2h : 40m left
          </span>
        </div>
        <div className="col-span-4">
          <Trash2
            size={14}
            className="float-right mr-2 text-red-800 hover:text-red-600 cursor-pointer"
          />
          <Pencil
            size={14}
            className="float-right mr-2 text-gray-800 hover:text-gray-600 cursor-pointer"
          />
        </div>
      </div>
      <div className="p-5 space-y-4 text-gray-700 leading-relaxed">
        <div className="text-lg font-semibold">
          {question}
        </div>
        <div className="text-md ">
          <div className="mb-1">
            {radioOptions.map((option) => (
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name={`question-${questionNumber}`}
                  className="hidden peer"
                />
                <span className="w-3 h-3 rounded-full border border-primary peer-checked:bg-primary"></span>
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="text-xxs text-blue-500">
          <u>
            <b>Verified by</b> source name
          </u>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
