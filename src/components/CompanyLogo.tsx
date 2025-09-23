function CompanyLogo() {
  return (
    <div className="flex flex-col w-fit">
      {/* Fantasy */}
      <span className="text-4xl font-bold inline-block transform -rotate-[5deg]">
        Fantasy
      </span>
      {/* Buzz directly below Fantasy, very close */}
      <span className="text-4xl font-extrabold inline-block transform rotate-[2deg] -mt-2 ml-16">
        Buzz
      </span>
      <p className="text-small ml-18 mt-1">The Tech Buzz</p>
    </div>
  );
}

export default CompanyLogo;
