import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex justify-center mt-6">
      <Card className="w-full max-w-2xl ">
        <CardHeader>
          <CardTitle>Create New Blog Post</CardTitle>
          <CardDescription>
            Fill out the form to publish a new post.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Post Title</Label>
            <Input id="title" placeholder="Enter post title" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="body">Post Body</Label>
            <Textarea
              id="body"
              placeholder="Enter post content"
              className="min-h-[200px]"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="tags">Tags</Label>
            <Input id="tags" placeholder="Comma-separated tags" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="likes">Likes</Label>
              <Input id="likes" type="number" placeholder="0" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dislikes">Dislikes</Label>
              <Input id="dislikes" type="number" placeholder="0" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="views">Views</Label>
              <Input id="views" type="number" placeholder="0" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="ml-auto">
            Publish Post
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
