// type ContestCardProps = {
//   contestNumber?: number;
//   date?: string;
//   description?: string;
//   sideNote?: string;
// };

// function ContestCard({
//   contestNumber = 1,
//   date = "01.06.23",
//   description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
// //   sideNote = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// }: ContestCardProps) {
//   return (
//     <div className="bg-gray-100 rounded-xl p-5 mb-6">
//       {/* Header */}
//       <div className="flex items-center gap-3 mb-3">
//         <h3 className="text-2xl font-semibold text-gray-700">
//           Contest {contestNumber}
//         </h3>
//         <span className="text-gray-700 text-2xl">| {date}</span>
//       </div>

//       {/* Body */}
//       <div className="grid grid-cols-12 gap-4">
//         {/* Main Description */}
//         <div className="col-span-10">
//           <p className="text-base text-gray-600 leading-relaxed">
//             {description}
//           </p>
//         </div>

//         {/* Side Note */}
//         <div className="col-span-2">
//           {/* <p className="text-sm text-gray-500 italic">{sideNote}</p> */}
//           <img src="../../card-dummy.jpg" alt="" />
//         </div>
//         <div className="text-primary">
//           <a href="#">
//             <u>See Details</u>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContestCard;


type ContestCardProps = {
  contestNumber?: number;
  date?: string;
  description?: string;
  imageSrc?: string;
};

function ContestCard({
  contestNumber = 1,
  date = "01.06.23",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  imageSrc = "/card-dummy.jpg",
}: ContestCardProps) {
  return (
    <div className="bg-gray-100 rounded-xl mb-4 overflow-hidden transition">
      <div className="grid grid-cols-12">
      

        {/* Content on the right */}
        <div className="col-span-10 p-5 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-2xl font-semibold text-gray-700">
                Contest {contestNumber}
              </h3>
              <span className="text-gray-700 text-2xl">| {date}</span>
            </div>

            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* See Details Link */}
          <div className="mt-4 text-primary">
            <a href="#">
              <u>See Details</u>
            </a>
          </div>
        </div>


          {/* Image on the right */}
        <div className="col-span-2">
          <img
            src={imageSrc}
            alt={`Contest ${contestNumber}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ContestCard;
