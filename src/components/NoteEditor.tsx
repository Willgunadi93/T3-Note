import { useState } from "react";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import CodeMirror from "@uiw/react-codemirror";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/Card";
import { Button } from "./ui/Button";

import { Input } from "./ui/Input";

export const NoteEditor = ({
  onSave,
}: {
  onSave: (note: { title: string; content: string }) => void;
}) => {
  const [code, setCode] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Input Content</CardTitle>
          <Input
            type="text"
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </CardHeader>
        <CardContent>
          <CodeMirror
            value={code}
            width="500px"
            height="30vh"
            minWidth="100%"
            minHeight="30vh"
            extensions={[
              markdown({ base: markdownLanguage, codeLanguages: languages }),
            ]}
            onChange={(value) => setCode(value)}
            className="border border-gray-300"
          />
        </CardContent>
      </Card>
      <Button
        className="my-5"
        onClick={() => {
          onSave({ title, content: code });
          setCode("");
          setTitle("");
        }}
      >
        Save
      </Button>
    </>
  );
};
