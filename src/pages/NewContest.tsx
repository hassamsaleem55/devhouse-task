import { CloudUpload, MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { FormButton, FormInput } from "../components/Form";
import PageLayout from "../layouts/PageLayout";

import { useState } from "react";

function NewContest() {
  const [options, setOptions] = useState<
    {
      id: number;
      value: string;
    }[]
  >([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
  ]);

  const addOption = () => {
    const nextId = options.length ? options[options.length - 1].id + 1 : 1;
    setOptions([...options, { id: nextId, value: "" }]);
  };

  const removeOption = (id: number) => {
    if (options.length > 1) {
      setOptions(options.filter((opt) => opt.id !== id));
    }
  };

  const handleChange = (id: number, newValue: string) => {
    setOptions((prev) =>
      prev.map((opt) => (opt.id === id ? { ...opt, value: newValue } : opt))
    );
  };

  return (
    <PageLayout pageTitle="Create New Contest">
      <div className="border-b border-gray-300">
        <div className="mt-8 w-full max-w-3xl flex flex-col pb-6 md:flex-row gap-8">
          <label className="w-36 h-36 flex flex-col items-center justify-center gap-2 text-gray-500 bg-gray-200 rounded-md cursor-pointer transition text-center">
            <input type="file" className="hidden" />
            <CloudUpload size={32} />
            <span className="font-semibold">
              <u className="text-xxs">{`Upload Image`}</u>
            </span>
          </label>

          <div className="flex-1 space-y-8">
            <FormInput
              item={{
                label: "Contest Name",
                type: "text",
                value: "",
                placeholder: "Enter the contest name",
              }}
              changeEvent={() => {}}
            />

            {/* Two Column Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                item={{
                  label: "Contest Active Till",
                  type: "date",
                  value: "",
                }}
                changeEvent={() => {}}
              />
              <div className="mt-4">
                <FormInput
                  item={{
                    type: "time",
                    value: "00:00:00",
                    placeholder: "00h:00m:00s",
                  }}
                  changeEvent={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl mt-4 overflow-y-auto px-6 py-6 rounded-lg bg-gray-200">
        {/* Header */}
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-6">
            <label className="text-primary text-sm font-semibold">
              Question 1
            </label>
          </div>
          <div className="col-span-6 text-right">
            <Trash2
              size={16}
              className="inline-block text-red-800 hover:text-red-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Question input */}
        <div className="max-w-2xl py-4 space-y-4">
          <div className="flex flex-col relative">
            <label className="mb-1 text-sm font-medium text-gray-500">
              Type the question:
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-xl py-3 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent resize-none"
              rows={3}
            />
          </div>

          {/* Options */}
          <div className="p-4 border border-gray-300 rounded-xl space-y-2">
            {options.map((option, index) => (
              <div key={option.id} className="flex gap-3 items-center">
                <input
                  type="text"
                  value={option.value}
                  placeholder={`Option ${index + 1}`}
                  onChange={(e) => handleChange(option.id, e.target.value)}
                  className="w-full border-b border-gray-400 text-sm py-1 px-3 focus:outline-none"
                />
                <MinusIcon
                  size={14}
                  className={`cursor-pointer ${
                    options.length > 1
                      ? "text-gray-500 hover:text-red-500"
                      : "text-gray-300 cursor-not-allowed"
                  }`}
                  onClick={() => options.length > 1 && removeOption(option.id)}
                />
              </div>
            ))}

            {/* Plus icon aligned to the right */}
            <div className="flex justify-end">
              <PlusIcon
                size={18}
                className="cursor-pointer text-gray-500 hover:text-primary"
                onClick={addOption}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="w-full flex items-center gap-4">
              <label className="font-medium text-sm whitespace-nowrap">
                Question Active till
              </label>
              <div className="flex-1">
                <FormInput
                  item={{ type: "date", value: "" }}
                  changeEvent={() => {}}
                />
              </div>
              <div className="flex-1">
                <FormInput
                  item={{ type: "time", value: "00:00:00" }}
                  changeEvent={() => {}}
                />
              </div>
            </div>

            <div className="w-full flex items-center text-sm gap-25">
              <label className="font-medium whitespace-nowrap">Source</label>
              <div className="flex-1">
                <a href="">
                  <u>Placeholder for the link of the source of answer</u>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 pt-4 w-full max-w-3xl">
        {/* Left side */}
        <div className="col-span-6">
          <a
            href="#"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <span>
              <b>New Question</b>
            </span>
            <PlusIcon size={16} />
          </a>
        </div>

        {/* Right side */}
        <div className="col-span-6 text-right">
          <FormButton text="Submit" width="w-full md:w-30" />
        </div>
      </div>
    </PageLayout>
  );
}

export default NewContest;
