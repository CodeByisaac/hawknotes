import { Hono } from 'hono';
import { Bindings } from './types';

import users from './routes/users';
import courses from './routes/courses';
import documents from './routes/documents';

const app = new Hono<{ Bindings: Bindings }>();

app.route('/api/users', users);
app.route('/api/courses', courses);
app.route('/api/documents', documents);

export default app;
