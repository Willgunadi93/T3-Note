import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { type RouterOutputs } from "~/utils/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/components/ui/Card";
import { Button } from "./ui/Button";

type Note = RouterOutputs["note"]["getAll"][0];

export const NoteCard = ({
  note,
  onDelete,
}: {
  note: Note;
  onDelete: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <article className="prose lg:prose-xl">
          <ReactMarkdown>{note.content}</ReactMarkdown>
        </article>
      </CardContent>
      <CardFooter>
        <Button variant="destructive" onClick={onDelete} className="">
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};
