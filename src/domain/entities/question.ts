import { Entity } from "../../core/entities/entity"
import { Slug } from "./value-objects/slug"

interface QuestionProps {
  authorId: string
  title: string
  slug: Slug
  content: string
}

export class Question extends Entity<QuestionProps> {}