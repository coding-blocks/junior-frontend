import { BaseRepository } from "@/repositories/base";

export interface Instructor {
  id: number;
  name: string;
  email: string;
  image: string;
  description:string;
}

class InstructorRepository extends BaseRepository<Instructor> {}

export default new InstructorRepository();
