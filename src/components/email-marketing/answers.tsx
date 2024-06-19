import { useAnswers } from "@/hooks/useEmailMarketing";
import Loader from "../loader";
import { CardDescription } from "../ui/card";

type AnswersProps = {
  id?: string;
};

const Answers = ({ id }: AnswersProps) => {
  const { answers, loading } = useAnswers(id!);
  return (
    <div className="flex flex-col gap-5 mt-10">
      <Loader loading={loading}>
        {answers.map((answer) =>
          answer.customer.map(
            (customer) =>
              customer.questions.length > 0 &&
              customer.questions.map((question, key) => (
                <div key={key}>
                  <p>{question.question}</p>
                  <CardDescription>{question.answered}</CardDescription>
                </div>
              ))
          )
        )}
      </Loader>
    </div>
  );
};

export default Answers;
