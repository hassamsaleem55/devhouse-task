import { useEffect, useState } from "react";
import PageLayout from "../layouts/PageLayout";
import ContestCard from "../components/ContestCard";
import QuestionCard from "../components/QuestionCard";
import { contestsData } from "../store/Contests.data";

function ContestDetails() {
  type Contest = {
    contestNumber?: string;
    date?: string;
    description?: string;
    imageSrc?: string;
    questions?: any;
  };

  const [category, setCategory] = useState<string>("");
  const [contest, setContest] = useState<Contest>({
    contestNumber: "",
    date: "",
    description: "",
    imageSrc: "",
    questions: [],
  });

  useEffect(() => {
    contestsData.map((item) => {
      if (item.category === window.location.pathname.split("/")[3]) {
        setCategory(item.label);
        item.data.map((contestItem) => {
          if (
            contestItem.contestNumber === window.location.pathname.split("/")[4]
          ) {
            setContest(contestItem);
          }
        });
      }
    });
  }, []);
  return (
    <PageLayout
      pageTitle="Contests Details"
      btn={{ text: "Create New Question", navigate: "" }}
    >
      <div className="mt-6">
        <ContestCard
          heading={`${category} | Contest ${contest.contestNumber}`}
          date={contest.date}
          description={contest.description}
          imageSrc={contest.imageSrc}
        />
      </div>
      <div className="mt-6">
        {contest.questions.map((question: any, index: number) => (
          <QuestionCard
            key={index}
            questionNumber={index + 1}
            totalQuestions={contest.questions.length}
            question={question}
          />
        ))}
      </div>
    </PageLayout>
  );
}

export default ContestDetails;
