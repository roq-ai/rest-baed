import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { smtpServerValidationSchema } from 'validationSchema/smtp-servers';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.smtp_server
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getSmtpServerById();
    case 'PUT':
      return updateSmtpServerById();
    case 'DELETE':
      return deleteSmtpServerById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getSmtpServerById() {
    const data = await prisma.smtp_server.findFirst(convertQueryToPrismaUtil(req.query, 'smtp_server'));
    return res.status(200).json(data);
  }

  async function updateSmtpServerById() {
    await smtpServerValidationSchema.validate(req.body);
    const data = await prisma.smtp_server.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteSmtpServerById() {
    const data = await prisma.smtp_server.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
