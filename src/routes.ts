import express from 'express';

import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailerMailAdapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prismaFeedbacksRepository';

import { SubmitFeedbackUseCase } from './useCases/submitFeedbackUseCase';

const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  try {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepository,
      nodemailerMailAdapter
    );

    await submitFeedbackUseCase.execute({ type, comment, screenshot });

    return res.status(201).send();
  } catch (err) {
    console.log(err);

    return res.status((err as any).status || 400).json({ err });
  }
});

export { routes };
