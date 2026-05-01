import { Bindings } from './../types';
import { Hono } from 'hono';

const courses = new Hono<{ Bindings: Bindings }>();

export default courses;
