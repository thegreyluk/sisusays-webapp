import { Container, Card, CardContent } from "@mui/material";
import { useState } from "react";
import { CommentSection } from "@/components/CommentSection.tsx";

export interface Topic {
  id: number;
  title: string;
  description: string;
}

export const TopicList = () => {
  const [comments, setComments] = useState<string[]>([]);

  const addComment = (comment: string) => {
    if (comment.trim()) {
      setComments([...comments, comment]);
    }
  };

  return (
    <Container sx={{ height: "100%", paddingBottom: 4 }}>
      {/* Topic title and description */}
      {/* <Typography variant="h4" sx={{ marginBottom: 6 }}>
        {topic.title}
      </Typography>
      <Typography sx={{ marginBottom: 6 }}>
        {topic.description}
      </Typography> */}

      <Card
        sx={{
          height: "auto",
          flexDirection: "column",
          border: "2px solid #ccc",
        }}
      >
        <CardContent
          sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 1 }}
        >
          {/* Comment Section */}
          <CommentSection comments={comments} addComment={addComment} />
        </CardContent>
      </Card>
    </Container>
  );
};
