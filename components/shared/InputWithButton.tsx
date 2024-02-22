import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputWithButton() {
  return (
    <div className="flex  w-full max-w-lg space-x-3">
      <Input type="text" placeholder="Add task" />
      <Button type="submit">Add</Button>
    </div>
  );
}
