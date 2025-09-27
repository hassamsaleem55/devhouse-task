function ContestCard({
  heading,
  date,
  description,
  imageSrc,
}: {
  heading: string;
  date?: string;
  description?: string;
  imageSrc?: string;
}) {
  return (
    <div className="bg-gray-100 rounded-xl mb-4 overflow-hidden transition">
      <div className="grid grid-cols-12">
        <div className="col-span-10 p-5 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="text-lg text-gray-700 flex items-center gap-2 mb-3">
              <h3 className="font-semibold">{heading}</h3>
              <span>| {date}</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* See Details Link */}
          <div className="mt-4 text-xxs text-primary">
            <a href="#">
              <u>See Details</u>
            </a>
          </div>
        </div>

        <div className="col-span-2">
          <img
            src={imageSrc}
            alt={heading}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ContestCard;
