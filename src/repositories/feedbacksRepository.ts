interface FeedbackCreateDTO {
  type: string;
  comment: string;
  screenshot?: string;
}

interface FeedbacksRepository {
  create: (data: FeedbackCreateDTO) => Promise<void>;
}

export { FeedbacksRepository, FeedbackCreateDTO };
