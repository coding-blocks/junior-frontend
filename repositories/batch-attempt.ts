import { Batch } from "./batches";
import { Course } from "./courses";
import { User } from "./users";

export interface BatchAttempt {
  id: number;
  end: string;
  course: Course;
  user: User;
  batch: Batch;
}
