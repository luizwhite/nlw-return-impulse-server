import { prisma } from '../../prisma';
import { FeedbackCreateDTO, FeedbacksRepository } from '../feedbacksRepository';

class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateDTO) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}

export { PrismaFeedbacksRepository };
