import { Bindings } from './../types';
import { Hono } from 'hono';

const users = new Hono<{ Bindings: Bindings }>();

users.get('/me', async (c) => {
	return;
});

export default users;
