import { Router } from 'express';
import { authenticateUser } from '../../../helpers/authentication.js';
import { authorizeUser } from '../../../helpers/authorization.js';
import getFlowsAction from '../../../controllers/api/v1/connections/get-flows.js';
import testConnectionAction from '../../../controllers/api/v1/connections/test-connection.js';
import verifyConnectionAction from '../../../controllers/api/v1/connections/verify-connection.js';
import deleteConnectionAction from '../../../controllers/api/v1/connections/delete-connection.js';
import generateAuthUrlAction from '../../../controllers/api/v1/connections/generate-auth-url.js';
import resetConnectionAction from '../../../controllers/api/v1/connections/reset-connection.js';

const router = Router();

router.delete(
  '/:connectionId',
  authenticateUser,
  authorizeUser,
  deleteConnectionAction
);

router.get(
  '/:connectionId/flows',
  authenticateUser,
  authorizeUser,
  getFlowsAction
);

router.post(
  '/:connectionId/test',
  authenticateUser,
  authorizeUser,
  testConnectionAction
);

router.post(
  '/:connectionId/reset',
  authenticateUser,
  authorizeUser,
  resetConnectionAction
);

router.post(
  '/:connectionId/auth-url',
  authenticateUser,
  authorizeUser,
  generateAuthUrlAction
);

router.post(
  '/:connectionId/verify',
  authenticateUser,
  authorizeUser,
  verifyConnectionAction
);

export default router;
