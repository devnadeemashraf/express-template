import { Router } from '@/app';

import healthController from './controller';

const healthRouter: Router = Router({
  strict: true,
});

healthRouter.get('/', healthController.getHealth);

export default healthRouter;
