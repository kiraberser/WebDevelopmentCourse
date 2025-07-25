import { createPost } from "@/actions/createPost";
import { Form } from "@/components/form";

export default function NewPostPage() {
  return <Form action={createPost} />;
}
