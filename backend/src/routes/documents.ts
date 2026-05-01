import { Bindings } from './../types';
import { Hono } from 'hono';

const documents = new Hono<{ Bindings: Bindings }>();

export default documents;
