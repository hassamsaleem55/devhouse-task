import { CloudUpload, PlusIcon, Trash2 } from "lucide-react";
import { FormButton, FormInput } from "../components/Form";
import PageLayout from "../layouts/PageLayout";

function NewContest() {
  return (
    <PageLayout pageTitle="Create New Contest">
      <div className="border-b border-gray-300">
        <div className="mt-8 w-full max-w-3xl flex flex-col pb-6 md:flex-row gap-8">
          {/* Upload Box */}
          <label className="w-36 h-36 flex flex-col items-center justify-center gap-2 text-gray-500 bg-gray-200 rounded-md cursor-pointer transition text-center">
            <input type="file" className="hidden" />
            <CloudUpload size={32} />
            <span className="font-semibold">
              <u className="text-xxs">Upload Image</u>
            </span>
          </label>

          {/* Contest Details */}
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
              <FormInput
                item={{
                  label: "Duration",
                  type: "text",
                  value: "",
                  placeholder: "00h:00m:00s",
                }}
                changeEvent={() => {}}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl mt-4 overflow-y-auto px-6 py-6 rounded-lg bg-gray-200">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <label className="text-primary text-sm">
              <b>Question 1</b>
            </label>
          </div>
          <div className="col-span-6 text-right">
            <Trash2
              size={16}
              className="float-right mr-2 text-red-800 hover:text-red-600 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex-1 max-w-2xl space-y-4 py-4">
          <div className="flex flex-col relative">
            <label className="mb-1 text-sm font-medium text-gray-500">
              Type the question:
            </label>
            <input
              type="textarea"
              className="w-full border border-gray-300 rounded-xl py-8 px-4 pr-10 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            />
          </div>

          <div className="p-4 border border-gray-300 rounded-xl space-y-1">
            <div className="flex flex-col relative">
              <input
                type="textarea"
                placeholder="Option 1"
                className="w-full border-b border-gray-400 text-sm py-1 px-4 pr-10 focus:outline-none"
              />
            </div>
             <div className="flex flex-col relative">
              <input
                type="textarea"
                placeholder="Option 2"
                className="w-full border-b border-gray-400 text-sm py-1 px-4 pr-10 focus:outline-none"
              />
            </div>
             <div className="flex flex-col relative">
              <input
                type="textarea"
                placeholder="Option 3"
                className="w-full border-b border-gray-400 text-sm py-1 px-4 pr-10 focus:outline-none"
              />
            </div>
             <div className="flex flex-col relative">
              <input
                type="textarea"
                placeholder="Option 4"
                className="w-full border-b border-gray-400 text-sm py-1 px-4 pr-10 focus:outline-none"
              />
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
